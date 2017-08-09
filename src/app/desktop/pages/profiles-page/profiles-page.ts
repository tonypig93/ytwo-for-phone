import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUserInfo } from '../../../platform/interfaces/platform.interface';
import { PlatformContextService } from '../../../platform/services/platform-context.service';
import { SecureSubscribe } from '../../../platform/services/secure-subscribe';
import 'rxjs/add/operator/takeUntil';
/**
 * Generated class for the ProfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-profiles-page',
	templateUrl: 'profiles-page.html'
})
export class ProfilesPage extends SecureSubscribe {
	user: IUserInfo | any = {};
	company = {};
	rolelookup = {};
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private PlatformContextService: PlatformContextService) {
		super();
		this.PlatformContextService.getUserInfo()
		.takeUntil(this.ngUnsubscribe)
		.subscribe(data => {
			this.user = data;
		});
	}

	ionViewDidLoad() {
		
	}
	ionViewWillEnter() {
		this.PlatformContextService.getCompanyInfo()
		.then((data: any) => {
			({company: this.company, rolelookup: this.rolelookup} = data);
		});
		
	}

	getInitial() {
		let name = this.user.UserName.split(' ');
		name[0] = name[0] || '';
		name[1] = name[1] || '';
		return name[0].charAt(0).toUpperCase() + name[1].charAt(0).toUpperCase();
	}
}
