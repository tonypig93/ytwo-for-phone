import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPage } from './company-page';
import { TranslateModule } from "@ngx-translate/core";
import { CompanyTree } from '../components/company-tree/company-tree';
import { CommonModule } from '../../../common/common.module';
@NgModule({
	declarations: [
		CompanyPage,
		CompanyTree
	],
	imports: [
		IonicPageModule.forChild(CompanyPage),
		TranslateModule,
		CommonModule
	],
	entryComponents: [CompanyPage]
})
export class CompanyPageModule {}
