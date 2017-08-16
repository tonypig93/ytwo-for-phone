import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the IntroductionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name: 'basic-introduction'
})
@Component({
	selector: 'page-introduction-page',
	templateUrl: 'introduction-page.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private ViewController: ViewController) {
	}

	ionViewDidLoad() {
		console.log('%c', 'background: url(http://localhost:8100/assets/img/logo@2x.png) no-repeat;line-height:150px;padding:50px 100px;background-size:200px');
	}
	enter() {
		this.navCtrl.push('basic-login', {}, {
			animation: 'wp-transition'
		});
	}
	// ionViewWillLeave() {
	// 	var dom = $(this.ViewController.pageRef().nativeElement);
	// 	dom.fadeOut();
	// }
}