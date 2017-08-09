import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the SVGIcon component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
	selector: 'svg-icon',
	templateUrl: 'svg-icon.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGIcon {

	@Input() width: string;
	@Input() height: string;
	@Input() id: string;

	constructor() {
		
	}

}
