import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ICompany, IRoleLookup } from '../../../platform/interfaces/basic.interface';
import { BasicCompanyService } from '../../services/basic-company.service';
import { TranslateService } from '@ngx-translate/core';
import { SecureSubscribeForComponent } from '../../../platform/services/secure-subscribe';
import 'rxjs/add/operator/takeUntil';
/**
 * Generated class for the CompanyTree component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
	selector: 'company-tree',
	templateUrl: 'company-tree.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTree extends SecureSubscribeForComponent {

	@Input() companies: ICompany [];
	@Input() goToDesktop: boolean;
	roles: IRoleLookup [];
	constructor(
		private NavController: NavController,
		private BasicCompanyService: BasicCompanyService,
		private AlertController: AlertController,
		private TranslateService: TranslateService
	) {
		super();
	}
	classByType = function (rs) {
		let cls = ['svg-icon-comp-businessunit', 'svg-icon-comp-root', 'svg-icon-comp-profitcenter'],
			index = 0;
		if (rs && rs.companyType) {
			index = (rs.companyType - 1) % 3;
		}
		return cls[index];
	}
	isLeaf(item: ICompany) {
		return (!item.children) || (item.children.length === 0);
	}
	itemSelected(item: ICompany) {
		if (!this.isLeaf(item)) {
			this.NavController.push('basic-company', {item: item, goToDesktop: this.goToDesktop});
		} else if (item.companyType === 1) {
			this.roles = this.BasicCompanyService.getRoleList(item);
			this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel'])
			.takeUntil(this.ngUnsubscribe)
			.subscribe(data => {
				let alert = this.AlertController.create();
				alert.setTitle(item.name);
				this.roles.forEach((item, index) => {
					alert.addInput({
						type: 'radio',
						label: item.value,
						value: item.key.toString(),
						checked: index === 0
					});
				});
				alert.addButton(data['platform.alert.cancel']);
				alert.addButton({
				text: data['platform.alert.ok'],
					handler: data => {
						this.BasicCompanyService.saveContext(item.id, data);
						if (this.goToDesktop) {
							this.NavController.push('desktop')
							.then(() => {
								// clear company pages.
								//this.NavController.remove(1, this.NavController.length() - 1);
							});
						}
					}
				});
				alert.present();
			})
		}
	}
}
