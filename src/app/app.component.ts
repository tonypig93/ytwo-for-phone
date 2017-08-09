import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RootPage } from './basic/pages/root-page/root-page';
import { NavController, Config } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { PlatformContextService } from './platform/services/platform-context.service';
@Component({
	template: `<ion-nav #myNav [root]="rootPage"></ion-nav>
	<svg-store></svg-store>`
})
export class AppComponent {
	loadType = 1; // 0: first load, 1: loaded not log in, 2: logged in
	rootPage: any = RootPage;
	@ViewChild('myNav') nav: NavController;

	constructor(
		platform: Platform, 
		statusBar: StatusBar, 
		splashScreen: SplashScreen,
		private TranslateService: TranslateService,
		private PlatformContextService: PlatformContextService,
		private Config: Config) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			// statusBar.styleDefault();
			// statusBar.backgroundColorByHexString('0067b1');
			// statusBar.overlaysWebView(false);
			splashScreen.hide();
		});
		console.log('app constructor')
		this.PlatformContextService.languageList;
		this.TranslateService.addLangs(['en', 'zh', 'de']);
		this.TranslateService.setDefaultLang('en');
		this.TranslateService.use('en');
		this.Config.set('swipeBackEnabled', false);
		// this.App.viewWillEnter
		// .subscribe(data => {
		//   console.log('befores', data);
		// })
	}
	ngOnInit() {
		// this.nav.push('basic-login', {}, {
		//       animate: false
		//     });
		// console.log('App start');
		// let sub = this.nav.viewWillEnter
		// .subscribe(() => {
		//   console.log('app')
		//   let sub2 = this.PlatformContextService.isSignedIn()
		//   .catch((err: Error) => {
		//     console.warn(err.message);
		//     console.log(this.nav.getActive())
		//     this.nav.push('basic-login', {}, {
		//       animate: false
		//     });
		//     return Observable.throw(err);
		//   })
		//   .subscribe(valid => {
		//     let _active = this.nav.getActive();
		//     if (valid && (_active.name === 'RootPage' || _active.name === 'LoginPage')) {
		//       this.nav.push('desktop', {}, {
		//         animate: false
		//       });
		//     }
		//     sub2.unsubscribe();
		//   });
		//   sub.unsubscribe();
		// })

	}
	ngAfterViewInit() {
		
	}
}
