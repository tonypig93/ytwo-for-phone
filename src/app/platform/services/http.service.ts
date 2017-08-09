import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, XHRBackend, RequestOptionsArgs, Request, BaseRequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import $ from 'jquery';
import { HttpConfigService } from './http-config.service';
import { AlertService } from '../services/alert.service';
import { NetworkService } from '../services/network.service';

window['$'] = window['jQuery'] = $;

function mergeOptions(
	defaultOpts: BaseRequestOptions, providedOpts: RequestOptionsArgs | undefined,
	method: RequestMethod, url: string) {

	const newOptions = defaultOpts;
	if (providedOpts) {
		// Hack so Dart can used named parameters
		return newOptions.merge(new RequestOptions({
			method: providedOpts.method || method,
			url: providedOpts.url || url,
			search: providedOpts.search,
			params: providedOpts.params,
			headers: providedOpts.headers,
			body: providedOpts.body,
			withCredentials: providedOpts.withCredentials,
			responseType: providedOpts.responseType
		}));
	}
	return newOptions.merge(new RequestOptions({method, url}));
}
@Injectable()
export class HttpService extends Http {
	constructor(
		_backend: XHRBackend, 
		_defaultOptions: RequestOptions, 
		private HttpConfigService: HttpConfigService,
		private AlertService: AlertService,
		private NetworkService: NetworkService) {
		super(_backend, _defaultOptions);
	}
	// this method handles all http request, so we can do some validation like network check.
	$request(url: Request, showAlert) {
		let ret: Observable<any> = this.request(url)
			.map(this.successHandler())
			.catch(this.errorHandler(showAlert));
		let errorMsg: string;
		const _url = url.url;
		if (!/^http(s|s{0}):\/\//.test(_url)) {
			url.url = this.HttpConfigService.baseUrl + _url;
		}
		// {0} Test network connection
		if (!this.NetworkService.isOnline()) {
			errorMsg = 'No Network Connection';
			ret = Observable.throw(errorMsg);
			this.AlertService.showBasic(errorMsg, false);
		}

		return ret;
	}
	$get(url: string, showAlert = true) {
		// let request: Observable<any>;
		// return Observable.create(ob => {
		//     if ((this.Network && this.Network.type === 'none') || !this.Network) {
		//         ob.error('No Network Connection');
		//         ob.complete();
		//     } else {
		//         super.get(this.HttpConfigService.baseUrl + url, this.HttpConfigService._options)
		//         .subscribe(data => {
		//             ob.next(data);
		//             ob.complete();
		//         });
		//     }
		// })
		// .map(this.successHandler())
		// .catch(this.errorHandler(showAlert));
		// if (!this.NetworkService.isOnline()) {
		//     this.AlertService.showBasic('No Network Connection', false);
		//     return Observable.throw('No Network Connection');
		// }
		// return super.get(this.HttpConfigService.baseUrl + url, this.HttpConfigService._options)
		// .map(this.successHandler())
		// .catch(this.errorHandler(showAlert));
		return this.$request(
			new Request(mergeOptions(this._defaultOptions, this.HttpConfigService._options, RequestMethod.Get, url)), showAlert);
	}
	$post(url: string, body: any = {}, showAlert = true, options?: RequestOptionsArgs) {
		// if (!this.NetworkService.isOnline()) {
		//     this.AlertService.showBasic('No Network Connection', false);
		//     return Observable.throw('No Network Connection');
		// }
		// return super.post(this.HttpConfigService.baseUrl + url, body, this.HttpConfigService._options)
		// .map(this.successHandler())
		// .catch(this.errorHandler(showAlert));
		return this.$request(
			new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body: body})), this.HttpConfigService._options.merge(options), RequestMethod.Post, url)), showAlert);
	}
	successHandler() {
		return res => {
			let ret = res.json();
			return ret;
		}
	}
	errorHandler(showAlert) {
		return (error: Response) => {
			if (showAlert) {
				this.AlertService.showBasic(error.toLocaleString(), false);
			}
			return Observable.throw(error);
		}
	}
	identity(data: any, showAlert = true) {
		data = $.param(data);
		const url = this.HttpConfigService.identityServer;
		const option = {
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded', 
				'Client-Context': '{"signedInClientId":0,"clientId":0,"permissionClientId":0,"permissionRoleId":0,"dataLanguageId":0,"language":"en","culture":"en-gb"}'
			})
		};
		return this.$post(url, data, showAlert, option);
		
	}
	
}
