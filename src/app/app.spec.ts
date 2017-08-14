
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';


import { PlatformModule } from './platform/platform.module';

import { AppComponent } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { SVGStore } from './common/components/svg-store/svg-store';
import { Network } from '@ionic-native/network';
import { RootPage } from './basic/pages/root-page/root-page';
let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
 
describe('Component: Root Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [AppComponent, SVGStore],
 
            providers: [
                { provide: StatusBar, useValue: {} },
                { provide: SplashScreen, useValue: {hide: () => {}} },
                { provide: Network, useValue: {} }
            ],
 
            imports: [
                IonicModule.forRoot(AppComponent),
                PlatformModule
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(AppComponent);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });
 
    it('initialises with a root page of RootPage', () => {
        expect(comp['rootPage']).toBe(RootPage);
    });
 
});