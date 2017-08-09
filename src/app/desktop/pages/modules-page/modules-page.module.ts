import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModulesPage } from './modules-page';
import { ModuleBlocksComponent } from '../../components/module-blocks-component/module-blocks-component';
import { CommonModule } from '../../../common/common.module';
@NgModule({
	declarations: [
		ModulesPage,
		ModuleBlocksComponent
	],
	imports: [
		IonicPageModule.forChild(ModulesPage),
		CommonModule
	]
})
export class ModulesPageModule {}
