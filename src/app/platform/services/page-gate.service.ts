import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';
import { PlatformContextService } from '../services/platform-context.service';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { SecureSubscribe } from '../services/secure-subscribe';
export abstract class Guard {

	abstract run(): Promise<any>;
}

export class PageGate extends SecureSubscribe {
	constructor(
		public Guards: Guard []
	) {
		super();
	}
	ionViewCanEnter(): Promise<any> {
		console.log(this['constructor'].name);
		return Promise.all(this.Guards.concat().map(item => item.run()));
	}
}

@Injectable()
export class LoginGuard extends Guard {
	constructor(
		private PlatformContextService: PlatformContextService,
		private ToastController: ToastController
	) {
		super();
	}
	run(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.PlatformContextService.isSignedIn()
			.catch(err => {
				reject(false);
				this.ToastController.create({
				message: `Not Logged In: ${err.message}`,
					position: 'top',
					duration: 5000
				}).present();
				return Observable.throw(err);
			})
			.subscribe(valid => {
				if (valid) {
					console.log('Pass LoginGuard check!');
					resolve(true);
				} else {
					console.log('Fail LoginGuard check!');
					reject(false);
				}
			});
		});
	}
}
@Injectable()
export class TokenGuard extends Guard {
	constructor(
		private PlatformContextService: PlatformContextService,
		private ToastController: ToastController,
		private HttpConfigService: HttpConfigService
	) {
		super();
	}
	run(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.PlatformContextService.getToken()
			.then(token => {
				if (token) {
					this.HttpConfigService.setAuthHeader(token);
					console.log('Pass TokenGuard check!');
					resolve(true);
				} else {
					console.log('Fail TokenGuard check!');
					reject(false);
					this.ToastController.create({
					message: `Token not found or expired`,
						position: 'top',
						duration: 5000
					}).present();
				}
			})
			.catch(err => {
				console.log('Fail TokenGuard check!');
				reject(err);
			});
		});
	}
}
export function GuardFactory(Guards: Guard []) {
	return new PageGate(Guards);
}
export function PageGateProvider(deps: any []) {
	return {
		provide: PageGate,
		useFactory: GuardFactory,
		deps: deps
	}
}