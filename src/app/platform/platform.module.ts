import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpService } from './services/http.service';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import { PlatformContextService } from './services/platform-context.service';
import { LoadingService } from './services/loading.service';
import { HttpConfigService } from './services/http-config.service';
import { LoginGuard, TokenGuard } from './services/page-gate.service';
import { AlertService } from './services/alert.service';
import { NetworkService } from './services/network.service';

export function HttpServiceFactory (
	_backend: XHRBackend, 
	_defaultRequest: RequestOptions, 
	HttpConfigService: HttpConfigService,
	AlertService: AlertService,
	NetworkService: NetworkService) {
		return new HttpService(_backend, _defaultRequest, HttpConfigService, AlertService, NetworkService);
}
export function createTranslateLoader(http: HttpService) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let HttpServiceProvider = {
    provide: HttpService,
    useFactory: HttpServiceFactory,
    deps: [XHRBackend, RequestOptions, HttpConfigService, AlertService, NetworkService]
};
@NgModule({
	declarations: [],
	imports: [
		HttpModule,    
		TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}
		}),
		IonicStorageModule.forRoot(),
	],
	exports: [
		
	],
	providers: [
		HttpServiceProvider,
		TranslateService,
		PlatformContextService,
		LoadingService,
		HttpConfigService,
		AlertService,
		NetworkService,
		LoginGuard,
		TokenGuard
	]
})
/**
 * PlatformModule is a pure service module, do not add any declaration class, such as component, directive, or pipe.
 */
export class PlatformModule {
	constructor(@Optional() @SkipSelf() PlatformModule: PlatformModule) {
		if (PlatformModule) {
			throw new Error(
			'PlatformModule is already loaded. Import it in the AppModule only');
		}
	}
}

