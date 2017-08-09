import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tab, Events } from 'ionic-angular';
import { ModulesPage } from '../modules-page/modules-page';
import { ProfilesPage } from '../profiles-page/profiles-page';
import { TranslateService } from '@ngx-translate/core';
import { PageGate, LoginGuard } from '../../../platform/services/page-gate.service';
import 'rxjs/add/operator/takeUntil';
/**
 * Generated class for the DesktopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  	name: 'desktop'
})
@Component({
  	selector: 'page-desktop-page',
  	templateUrl: 'desktop-page.html'
})
export class DesktopPage extends PageGate {
	ModulesPage = ModulesPage;
	ProfilesPage = ProfilesPage;
	@ViewChild('moduleTab') moduleTab: Tab;
	@ViewChild('profilesTab') profilesTab: Tab;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private TranslateService: TranslateService,
		private Events: Events,
		public LoginGuard: LoginGuard) {
		super([LoginGuard]);
	}
	initTitles() {
		this.TranslateService.get(['desktop.modules.title', 'desktop.profiles.title'])
		.takeUntil(this.ngUnsubscribe)
		.subscribe(data => {
			this.moduleTab.tabTitle = data['desktop.modules.title'];
			this.profilesTab.tabTitle = data['desktop.profiles.title'];
		});
	}
	ionViewDidLoad() {
		this.initTitles();
		this.Events.subscribe('changeLanguage', () => {
			this.initTitles();
		});
	}
}
