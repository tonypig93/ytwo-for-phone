import { Component,ChangeDetectionStrategy } from '@angular/core';
import { NavController, App, AlertController, Events } from 'ionic-angular';
import { PlatformContextService } from '../../../platform/services/platform-context.service';
import { TranslateService } from '@ngx-translate/core';
import { SecureSubscribeForComponent } from '../../../platform/services/secure-subscribe';
import 'rxjs/add/operator/takeUntil';
/**
 * Generated class for the SettingList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
	selector: 'setting-list',
	templateUrl: 'setting-list.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingList extends SecureSubscribeForComponent {

	currentLang: any;
	constructor(
		private NavController: NavController,
		private App: App,
		private AlertController: AlertController,
		private PlatformContextService: PlatformContextService,
		private TranslateService: TranslateService,
		private Events: Events
	) {
		super();
		this.initLangInfo();
	}
	private initLangInfo() {
		this.currentLang = this.PlatformContextService.languageList.find((lang) => {
			return lang.lang === this.PlatformContextService.sysContext.language;
		});
	}
	goTo(pageName: string) {
		// this.App.getRootNav().push(pageName);
		this.NavController.push(pageName)
	}
	ngOnInit() {
		// console.log(this.NavController.getActive());
		// console.log(this.ViewController.index);
	}
	selectLanguage() {
		this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel', 'desktop.profiles.changeLanguage'])
		.takeUntil(this.ngUnsubscribe)
		.subscribe(data => {
			let alert = this.AlertController.create();
			alert.setTitle(data['desktop.profiles.changeLanguage']);
			this.PlatformContextService.languageList.forEach((item) => {
				alert.addInput({
					type: 'radio',
					label: item.name,
					value: item.lang,
					checked: item.lang === this.PlatformContextService.sysContext.language
				});
			});
			alert.addButton(data['platform.alert.cancel']);
			alert.addButton({
				text: data['platform.alert.ok'],
				handler: data => {
					this.PlatformContextService.setLanguage(data);
					this.Events.publish('changeLanguage');
					this.initLangInfo();
				}
			});
			alert.present();
		});
		
	}
	logout() {
		this.PlatformContextService.clear()
		.then(() => {
			this.App.getRootNav().popToRoot();
		});
	}
}
