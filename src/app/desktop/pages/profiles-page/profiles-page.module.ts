import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilesPage } from './profiles-page';
import { CommonModule } from '../../../common/common.module';
import { SettingList } from '../../components/setting-list/setting-list';
@NgModule({
	declarations: [
		ProfilesPage,
		SettingList
	],
	imports: [
		IonicPageModule.forChild(ProfilesPage),
		CommonModule
	]
})
export class ProfilesPageModule {}
