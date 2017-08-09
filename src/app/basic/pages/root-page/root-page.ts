import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformContextService } from '../../../platform/services/platform-context.service';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the RootPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-root-page',
	template: ''
})
export class RootPage {

	constructor(
		public nav: NavController, 
		public navParams: NavParams,
		private PlatformContextService: PlatformContextService) {}

	ionViewDidLoad() {
	}
	async ionViewCanEnter() {
		const touched = await this.PlatformContextService.isFirstTimeRun();
		if (touched) {
			this.nav.push('basic-introduction', {}, { animate: false });
		} else {
			this.PlatformContextService.isSignedIn()
			.catch((err: Error) => {
				console.warn(err.message);
				this.nav.push('basic-login', {}, {
					animate: false
				});
				return Observable.of(err);
			})
			.subscribe(valid => {
				if (valid) {
					this.nav.push('desktop', {}, {
						animate: false
					});
				}
			});
			return false;
		}
		
	}
}
