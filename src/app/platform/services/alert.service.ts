import { Injectable } from '@angular/core';
import { AlertController, Alert } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
@Injectable()
export class AlertService {
	alertComponent: Alert;
	constructor(
		private AlertController: AlertController,
		private TranslateService: TranslateService) { 
			
			
	}
	hide() {
		
	}
	showBasic(content: string, needTranslate = true) {
		let okText = this.TranslateService.get('platform.alert.ok');
		let titleText = this.TranslateService.get('platform.alert.info');
		let _content: Observable<any> = needTranslate ? this.TranslateService.get(content) : Observable.of(content);
		let texts = Observable.forkJoin(okText, titleText, _content);
		texts.subscribe((values: any []) => {
			this.alertComponent = this.AlertController.create({
				title: values[1],
				subTitle: values[2],
				buttons: [values[0]]
			});
			this.alertComponent.present();
		})
		
	}

}