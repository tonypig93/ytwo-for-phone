import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction-page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	declarations: [
		IntroductionPage,
	],
	imports: [
		IonicPageModule.forChild(IntroductionPage),
		TranslateModule
	],
	exports: [
		IntroductionPage
	]
})
export class IntroductionPageModule {}
