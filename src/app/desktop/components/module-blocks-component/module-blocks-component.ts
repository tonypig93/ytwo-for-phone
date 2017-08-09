import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IModule } from '../../../platform/interfaces/desktop.interface';
/**
 * Generated class for the ModuleBlocksComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
	selector: 'module-blocks',
	templateUrl: 'module-blocks-component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleBlocksComponent {

	modules: IModule [] = [];

	constructor() {
		this.modules.push({
			name: 'desktop.modules.invoice',
			pageName: 'invoice',
			icon: 'svg-icon-invoice',
			width: '100%',
			height: '200px',
			cssClass: 'bg-red'
		}, {
			name: 'desktop.modules.pes',
			pageName: 'pes',
			icon: 'svg-icon-delivery-note',
			width: '100%',
			height: '200px',
			cssClass: 'bg-blue'
		}, {
			name: 'desktop.modules.po',
			pageName: 'po',
			icon: 'svg-icon-po',
			width: '100%',
			height: '200px',
			cssClass: 'bg-yellow'
		})
	}

}
