import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { PlatformModule } from './platform/platform.module';

import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { DesktopModule } from './desktop/desktop.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SVGStore } from './common/components/svg-store/svg-store';
import { Network } from '@ionic-native/network'

@NgModule({
	declarations: [
		AppComponent,
		SVGStore
	],
	imports: [
		BrowserModule,
		PlatformModule,
		IonicModule.forRoot(AppComponent),
		BasicModule,
		DesktopModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		AppComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		Network,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
