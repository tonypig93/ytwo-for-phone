import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesktopPage } from './desktop-page';
import { CommonModule } from '../../../common/common.module';
@NgModule({
	declarations: [
		DesktopPage
	],
	imports: [
		IonicPageModule.forChild(DesktopPage),
		CommonModule
	]
})
export class DesktopPageModule {}
