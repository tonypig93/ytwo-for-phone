import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ISysContext } from '../interfaces/platform.interface';
/*
  Generated class for the HttpConfigService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpConfigService {
	headers = new Headers({'Content-Type': 'application/json', 'Authorization': ''});
	baseUrl = 'https://www.easy-mock.com/mock/59914426a1d30433d860fd2d/mock/';
	identityServer = 'https://itwo40-int.rib-software.com/itwo40/identityserver/core/connect/token';
	appBaseUrl: string;
	_options = new RequestOptions({headers: this.headers});
	constructor(public http: Http) {
	  	this.appBaseUrl = `${window.location.host}${window.location.pathname.replace('index.html', '')}`;
	}
	setAuthHeader(token: string) {
		this._options.headers.set('Authorization', token);
	}
	setClientContext(context: ISysContext) {
		this._options.headers.set('Client-Context', JSON.stringify(context));
	}
}
// 'https://ytwo.rib-software.com:98/ytwo/daily/services/'