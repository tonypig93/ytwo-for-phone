import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login-page';
import { LoginLanguageList } from '../components/login-language-list/login-language-list';
import { CommonModule } from '../../../common/common.module';
@NgModule({
	declarations: [
		LoginPage,
		LoginLanguageList
	],
	imports: [
		IonicPageModule.forChild(LoginPage),
		CommonModule
	],
	entryComponents: [
		LoginPage
	]
})
export class LoginPageModule {}
