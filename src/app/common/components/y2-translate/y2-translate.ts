import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
/**
 * Generated class for the CheckOnPush component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
	selector: 'y2-translate',
	template: '{{text | translate}}',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Y2Translate {

	@Input() text: string;
	constructor(
		// private TranslateService: TranslateService,
		// private ChangeDetectorRef: ChangeDetectorRef
		) {}
	ngOnInit() {
		// this.TranslateService.get(this.text)
		// .subscribe(value => {
		//   this.textTranslated = value;
		// });
		// this.ChangeDetectorRef.reattach();
	}
}
