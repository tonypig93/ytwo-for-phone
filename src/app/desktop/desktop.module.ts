import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { DesktopPageModule } from './pages/desktop-page/desktop-page.module';
import { ModulesPageModule } from './pages/modules-page/modules-page.module';
import { ProfilesPageModule } from './pages/profiles-page/profiles-page.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		DesktopPageModule,
		ModulesPageModule,
		ProfilesPageModule
	],
	exports: [

	],
	providers: []
})
export class DesktopModule {}

