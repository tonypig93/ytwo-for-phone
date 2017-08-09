import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/concatMap';
import { ISysContext, IUserInfo } from '../interfaces/platform.interface';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Config } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { HttpService } from './http.service';
import { HttpConfigService } from './http-config.service';
import { LoadingService } from './loading.service';
/*
  Generated class for the PlatformContextService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
function UpdateContext(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
	let origin = descriptor.value;
	descriptor.value = function (...args: any[]) {
		let result = origin.apply(this, args);
		this.updateHttpHeaders();
		return result;
  	}
  	return descriptor;
}
function SaveToStorage(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
	let origin = descriptor.value;
	descriptor.value = function (...args: any[]) {
		let result = origin.apply(this, args);
		this.saveToStorage();
		return result;
  	}
  	return descriptor;
}

@Injectable()
export class PlatformContextService {
	sysContext: ISysContext;
	private defaultLanguage = 'en';
	private defaultCulture = 'en-gb';
	private contextStorageKey = 'default';
	userInfo: IUserInfo;
	isReady: Promise<any>;
	languageList = [{
		lang: 'en',
		culture: 'en-gb',
		name: 'English'
  	}, {
		lang: 'zh',
		culture: 'zh-hans',
		name: '中文'
	}, {
		lang: 'de',
		culture: 'de-de',
		name: 'Deutsch'
	}];
	constructor(
		private TranslateService: TranslateService,
		private Storage: Storage,
		private Config: Config,
		private HttpService: HttpService,
		private HttpConfigService: HttpConfigService,
		private LoadingService: LoadingService) {
		this.init();
	}
	init():Promise<any> {
		// this.Storage.clear();
		this.isReady = this.initialize(this.contextStorageKey);
		return this.isReady;
	}
	getSysContext():Observable<any> {
		return Observable.create(ob => {
			if (this.sysContext) {
			ob.next(this.sysContext);
			ob.complete();
	  	} else {
			this.Storage.get(this.contextStorageKey)
			.then(value => {
				if (value) {
					ob.next(value);
				} else {
					console.log('sysContext not found');
					ob.error('sysContext not found');
				}
				ob.complete();
				});
			}
		});
	}
	isSignedIn(): Observable<any> {
		this.LoadingService.show('platform.empty');
		return Observable.fromPromise(this.isReady)
		.concatMap(() => {
	  		return Observable.fromPromise(this.getToken());
		})
		.concatMap(token => {
			if (token) {
				this.HttpConfigService.setAuthHeader(token);
				return this.getUserInfo();
			} else {
				return Observable.throw(new Error('token not found or expired'));
			}
		})
		.concatMap((userInfo: IUserInfo) => {
		// console.log(userInfo, this.contextStorageKey);
			if (userInfo) {
				return Observable.fromPromise(this.Storage.get(this.contextStorageKey));
			} else {
				return Observable.throw(new Error('get user info failed'));
			}
		})
		.concatMap(context => {
			if (context) {
				this.sysContext = context;
				this.setLanguage(this.sysContext.language);
				return Observable.of(true);
			} else {
				return Observable.throw(new Error(`${this.contextStorageKey}: context not found`));
			}
		})
		.catch((err: Error) => {
			console.warn(err.message);
			return Observable.throw(err);
		})
		.finally(() => {
			this.LoadingService.hide();
		});
	}
	getUserInfo(): Observable<any> {
		return Observable.create(ob => {
			if (this.userInfo) {
				ob.next(this.userInfo);
				ob.complete();
			} else {
				this.HttpService.$get('services/login/getuserinfo')
				.catch(err => {
					ob.error(err);
					ob.complete();
					return Observable.of(false);
				})
				.subscribe((userInfo: IUserInfo) => {
					this.userInfo = userInfo;
					this.setContextKey();
					ob.next(userInfo);
					ob.complete();
				});
			}
		});
	}
	initialize(key: string) {
		this.sysContext = {
			signedInClientId: 0,
			clientId: 0,
			permissionClientId: 0,
			permissionRoleId: 0,
			dataLanguageId: 0,
			language: this.defaultLanguage,
			culture: this.defaultCulture
		};
		this.updateHttpHeaders();
		return this.Storage.get(key).then(value => {
			if (value) {
				this.sysContext = value;
				this.setLanguage(this.sysContext.language);
				this.updateHttpHeaders();
			}
		});
	}
	setCompanyInfo(company, rolelookup) {
		this.Storage.set('selectedCompany', {company, rolelookup});
	}
  	getCompanyInfo() {
		return this.Storage.get('selectedCompany');
  	}
  	setToken(token: string, expireDate: number):Promise<string> {
		return this.Storage.set('token', {token, expireDate});
  	}

  	async getToken():Promise<string> {
		let data = await this.Storage.get('token');
		if (!data.expireDate || (data.expireDate && (new Date).getTime() > data.expireDate)) {
			return undefined;
		} else {
			return data.token;
		}
  	}
  	@UpdateContext
  	@SaveToStorage
  	setLanguage(lang: string) {
		let _value;
		if(this.languageList.some(value => {
			_value = value;
			return value.lang === lang;
		})) {
			this.sysContext.language = lang;
			this.TranslateService.use(lang);
			this.setCulture(_value.culture);
			this.TranslateService.get('platform.backButtonText')
			.subscribe(value => {
				this.Config.set('backButtonText', value);
			});
			// this.saveLangToStorage();
		}
  	}
	private setCulture(culture: string) {
		this.sysContext.culture = culture;
	}
	// private saveLangToStorage() {
	// 	this.Storage.set('defaultLanguage', this.sysContext.language);
	// }
	@UpdateContext
	@SaveToStorage
	setDataLanguageId(id: number) {
		this.sysContext.dataLanguageId = id;
	}
	@UpdateContext
	@SaveToStorage
	setCompanyContext(signedInClientId: number, companyId: number, permissionCompanyId: number, permissionRoleId: number) {
		this.sysContext.signedInClientId = signedInClientId;
		this.sysContext.clientId = companyId;
		this.sysContext.permissionClientId = permissionCompanyId;
		this.sysContext.permissionRoleId = permissionRoleId;
	}
	async saveToStorage(key: string):Promise<any> {
		await this.Storage.set(this.contextStorageKey, this.sysContext);
		return await this.Storage.get(this.contextStorageKey);
		// } else {
		//   throw new Error('context storage key is empty, check if user is logged in.');
		// }
	}
	readContextFromStorage() {
		return this.Storage.get(this.contextStorageKey)
		.then(data => {
			data = JSON.parse(data);
			this.sysContext = data;
		});
	}
	setContextKey() {
		if (this.userInfo) {
			this.contextStorageKey = this.HttpConfigService.appBaseUrl + ':' + this.userInfo.UserId;
		}
	}
	updateHttpHeaders() {
		this.HttpConfigService.setClientContext(this.sysContext);
	}
	clear(): Promise<any> {
		return Promise.all([
			this.Storage.remove(this.contextStorageKey),
			this.Storage.remove('token'),
			this.Storage.remove('selectedCompany')
		]);
	}
	async isFirstTimeRun() {
		const touched = await this.Storage.get('appTouched');
		if (!touched) {
			this.Storage.set('appTouched', true);
		}
		return touched;
	}
}
