import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ILoginForm } from '../../../platform/interfaces/basic.interface';
import { BasicDataService } from '../../services/basic-data.service';
import { AlertService } from '../../../platform/services/alert.service';
import { IUserInfo } from '../../..//platform/interfaces/platform.interface';
import { TranslateService } from '@ngx-translate/core';
import { HttpConfigService } from '../../../platform/services/http-config.service';
import { Observable } from 'rxjs/Observable';
import { SecureSubscribe } from '../../../platform/services/secure-subscribe';
import 'rxjs/add/operator/takeUntil';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
	name: 'basic-login'
})
@Component({
	selector: 'page-login-page',
	templateUrl: 'login-page.html',
})
export class LoginPage extends SecureSubscribe {
	formData: ILoginForm = {
		username: 'ribadmin',
		password: 'ribadmin',
		grant_type: 'password',
		client_id: 'iTWO.Cloud',
		client_secret: '{fec4c1a6-8182-4136-a1d4-81ad1af5db4a}',
		scope: 'default'
	};
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private BasicDataService: BasicDataService,
		private AlertService: AlertService,
		private AlertController: AlertController,
		private TranslateService: TranslateService,
		private HttpConfigService: HttpConfigService) {
			super();
	}
	ionViewWillLeave() {
		// this.StatusBar.backgroundColorByHexString('0067b1');
	}
	ionViewDidLoad() {
		if (this.navCtrl.first().name === 'RootPage') {
		
		}
	}
	login() {
		this.BasicDataService.login(this.formData)
		.takeUntil(this.ngUnsubscribe)
		.catch(err => {
			typeof err === 'object' && this.AlertService.showBasic('basic.invalidUser');
			return Observable.of(false);
		})
		.subscribe((userInfo: IUserInfo) => {
			if (userInfo) {
				// this.PlatformContextService.setContextKey(userInfo.UserId);
				// this.PlatformContextService.setDataLanguageId(userInfo.UserDataLanguageId);
				this.navCtrl.push('basic-company', {goToDesktop: true});
			}
		});
	}
	serverConfig() {
		this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel', 'basic.server'])
		.takeUntil(this.ngUnsubscribe)
		.subscribe(data => {
			this.AlertController.create({
				title: data['basic.server'],
				message: '',
				enableBackdropDismiss: false,
				inputs: [{
					name: 'serverAddress',
					value: this.HttpConfigService.baseUrl
				}],
				buttons: [{
					text: data['platform.alert.cancel'],
					role: 'cancel'
				},{
					text: data['platform.alert.ok'],
					handler: data => {
						this.HttpConfigService.baseUrl = data.serverAddress;
					}
				}]
			}).present();
		})
		
	}
}
