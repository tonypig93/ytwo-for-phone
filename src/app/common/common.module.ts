import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SVGIcon } from './components/svg-icon/svg-icon';
import { Y2Translate } from './components/y2-translate/y2-translate';
@NgModule({
	declarations: [SVGIcon, Y2Translate],
	imports: [
		TranslateModule
	],
	exports: [
		SVGIcon,
		Y2Translate
	]
})
export class CommonModule {}

