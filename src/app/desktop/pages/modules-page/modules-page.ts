import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-modules-page',
	templateUrl: 'modules-page.html'
})
export class ModulesPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
