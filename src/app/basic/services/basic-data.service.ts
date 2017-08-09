import { Injectable } from '@angular/core';
import { HttpService } from '../../platform/services/http.service';
import { HttpConfigService } from '../../platform/services/http-config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/finally';
import { ILoginForm } from '../../platform/interfaces/basic.interface';
import { IUserInfo } from '../../platform/interfaces/platform.interface';
import { IToken } from '../../platform/interfaces/platform.interface';
import { PlatformContextService } from '../../platform/services/platform-context.service';
import { LoadingService } from '../../platform/services/loading.service';
/*
  Generated class for the BasicDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BasicDataService {
	userInfo: IUserInfo;
	constructor(
		private http: HttpService, 
		private PlatformContextService: PlatformContextService,
		private LoadingService: LoadingService,
		private HttpConfigService: HttpConfigService) {}
	
	login(formData: ILoginForm) {
		this.LoadingService.show();
		return this.http.identity(formData, false)
		.concatMap((token: IToken) => {
			const _token = `${token.token_type} ${token.access_token}`; 
			this.HttpConfigService.setAuthHeader(_token);
			const expire = new Date().getTime() + (token.expires_in - 600) * 1000;
			this.PlatformContextService.setToken(_token, expire);
			return this.PlatformContextService.getUserInfo();
		})
		.map((userInfo: IUserInfo) => {
			this.userInfo = userInfo;
			return userInfo;
		})
		.finally(() => {
			this.LoadingService.hide();
		});
	}
}
