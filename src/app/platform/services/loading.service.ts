import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class LoadingService {
	loadComponent: Loading;
	constructor(
		private LoadingController: LoadingController,
		private TranslateService: TranslateService) { 

	}
	hide() {
		this.loadComponent.dismiss();
	}
	show(text = 'platform.loading') {
		this.TranslateService.get(text)
		.subscribe(value => {
			this.loadComponent = this.LoadingController.create({
				content: value
			});
			this.loadComponent.present();
		});
	}
	showText(text) {
		this.TranslateService.get(text)
		.subscribe(value => {
			this.loadComponent = this.LoadingController.create({
				content: value,
				spinner: 'hide',
				duration: 3000
			});
			this.loadComponent.present();
		});
	}
}