webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"basic/pages/company-page/company-page.module": [
		189
	],
	"basic/pages/introduction/introduction-page.module": [
		188
	],
	"basic/pages/login/login-page.module": [
		186
	],
	"basic/pages/root-page/root-page.module": [
		174
	],
	"desktop/pages/desktop-page/desktop-page.module": [
		194
	],
	"desktop/pages/modules-page/modules-page.module": [
		190
	],
	"desktop/pages/profiles-page/profiles-page.module": [
		192
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 173;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPageModule", function() { return RootPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_page__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RootPageModule = (function () {
    function RootPageModule() {
    }
    return RootPageModule;
}());
RootPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__root_page__["a" /* RootPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__root_page__["a" /* RootPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__root_page__["a" /* RootPage */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__root_page__["a" /* RootPage */]]
    })
], RootPageModule);

//# sourceMappingURL=root-page.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RootPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RootPage = (function () {
    function RootPage(nav, navParams, PlatformContextService) {
        this.nav = nav;
        this.navParams = navParams;
        this.PlatformContextService = PlatformContextService;
    }
    RootPage.prototype.ionViewDidLoad = function () {
    };
    RootPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var touched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PlatformContextService.isFirstTimeRun()];
                    case 1:
                        touched = _a.sent();
                        if (touched) {
                            this.nav.push('basic-introduction', {}, { animate: false });
                        }
                        else {
                            this.PlatformContextService.isSignedIn()
                                .catch(function (err) {
                                console.warn(err.message);
                                _this.nav.push('basic-login', {}, {
                                    animate: false
                                });
                                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(err);
                            })
                                .subscribe(function (valid) {
                                if (valid) {
                                    _this.nav.push('desktop', {}, {
                                        animate: false
                                    });
                                }
                            });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return RootPage;
}());
RootPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-root-page',
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__["a" /* PlatformContextService */]])
], RootPage);

//# sourceMappingURL=root-page.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpConfigService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NetworkService = (function () {
    function NetworkService(Network, Platform) {
        this.Network = Network;
        this.Platform = Platform;
        Platform.ready().then(function () {
            Network.onConnect()
                .subscribe(function () {
                console.log('online');
            });
            Network.onDisconnect()
                .subscribe(function () {
                console.log('offline');
            });
        });
    }
    NetworkService.prototype.getConnectType = function () {
        return this.Network.type;
    };
    NetworkService.prototype.isOnline = function () {
        var _type = this.getConnectType();
        return (_type !== 'none');
    };
    return NetworkService;
}());
NetworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
], NetworkService);

//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_language_list_login_language_list__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_login_language_list_login_language_list__["a" /* LoginLanguageList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* CommonModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login-page.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_services_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_services_http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__platform_services_loading_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the BasicDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BasicDataService = (function () {
    function BasicDataService(http, PlatformContextService, LoadingService, HttpConfigService) {
        this.http = http;
        this.PlatformContextService = PlatformContextService;
        this.LoadingService = LoadingService;
        this.HttpConfigService = HttpConfigService;
    }
    BasicDataService.prototype.login = function (formData) {
        var _this = this;
        this.LoadingService.show();
        return this.http.identity(formData, false)
            .concatMap(function (token) {
            var _token = token.token_type + " " + token.access_token;
            _this.HttpConfigService.setAuthHeader(_token);
            var expire = new Date().getTime() + (token.expires_in - 600) * 1000;
            _this.PlatformContextService.setToken(_token, expire);
            return _this.PlatformContextService.getUserInfo();
        })
            .map(function (userInfo) {
            _this.userInfo = userInfo;
            return userInfo;
        })
            .finally(function () {
            _this.LoadingService.hide();
        });
    };
    return BasicDataService;
}());
BasicDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__platform_services_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_6__platform_services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_7__platform_services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_2__platform_services_http_config_service__["a" /* HttpConfigService */]])
], BasicDataService);

//# sourceMappingURL=basic-data.service.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction_page__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroductionPageModule = (function () {
    function IntroductionPageModule() {
    }
    return IntroductionPageModule;
}());
IntroductionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__introduction_page__["a" /* IntroductionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__introduction_page__["a" /* IntroductionPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__introduction_page__["a" /* IntroductionPage */]
        ]
    })
], IntroductionPageModule);

//# sourceMappingURL=introduction-page.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function() { return CompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_page__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_company_tree_company_tree__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_module__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanyPageModule = (function () {
    function CompanyPageModule() {
    }
    return CompanyPageModule;
}());
CompanyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__company_page__["a" /* CompanyPage */],
            __WEBPACK_IMPORTED_MODULE_4__components_company_tree_company_tree__["a" /* CompanyTree */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company_page__["a" /* CompanyPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_5__common_common_module__["a" /* CommonModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__company_page__["a" /* CompanyPage */]]
    })
], CompanyPageModule);

//# sourceMappingURL=company-page.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPageModule", function() { return ModulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_page__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_module_blocks_component_module_blocks_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModulesPageModule = (function () {
    function ModulesPageModule() {
    }
    return ModulesPageModule;
}());
ModulesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modules_page__["a" /* ModulesPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_module_blocks_component_module_blocks_component__["a" /* ModuleBlocksComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modules_page__["a" /* ModulesPage */]),
            __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* CommonModule */]
        ]
    })
], ModulesPageModule);

//# sourceMappingURL=modules-page.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModulesPage = (function () {
    function ModulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModulesPage.prototype.ionViewDidLoad = function () {
    };
    return ModulesPage;
}());
ModulesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modules-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/modules-page/modules-page.html"*/'<!--\n  Generated template for the ModulesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><y2-translate text="desktop.modules.title"></y2-translate></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<module-blocks></module-blocks>\n</ion-content>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/modules-page/modules-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ModulesPage);

//# sourceMappingURL=modules-page.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function() { return ProfilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profiles_page__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_setting_list_setting_list__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilesPageModule = (function () {
    function ProfilesPageModule() {
    }
    return ProfilesPageModule;
}());
ProfilesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profiles_page__["a" /* ProfilesPage */],
            __WEBPACK_IMPORTED_MODULE_4__components_setting_list_setting_list__["a" /* SettingList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profiles_page__["a" /* ProfilesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* CommonModule */]
        ]
    })
], ProfilesPageModule);

//# sourceMappingURL=profiles-page.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_services_secure_subscribe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilesPage = (function (_super) {
    __extends(ProfilesPage, _super);
    function ProfilesPage(navCtrl, navParams, PlatformContextService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.PlatformContextService = PlatformContextService;
        _this.user = {};
        _this.company = {};
        _this.rolelookup = {};
        _this.PlatformContextService.getUserInfo()
            .takeUntil(_this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.user = data;
        });
        return _this;
    }
    ProfilesPage.prototype.ionViewDidLoad = function () {
    };
    ProfilesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.PlatformContextService.getCompanyInfo()
            .then(function (data) {
            (_this.company = data.company, _this.rolelookup = data.rolelookup);
        });
    };
    ProfilesPage.prototype.getInitial = function () {
        var name = this.user.UserName.split(' ');
        name[0] = name[0] || '';
        name[1] = name[1] || '';
        return name[0].charAt(0).toUpperCase() + name[1].charAt(0).toUpperCase();
    };
    return ProfilesPage;
}(__WEBPACK_IMPORTED_MODULE_3__platform_services_secure_subscribe__["a" /* SecureSubscribe */]));
ProfilesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profiles-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/profiles-page/profiles-page.html"*/'<!--\n  Generated template for the ProfilesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><y2-translate text="desktop.profiles.title"></y2-translate></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      {{getInitial()}}\n    </ion-avatar>\n    <h2>{{user.UserName}}</h2>\n    <p>{{company.name}} | {{rolelookup.value}}</p>\n  </ion-item>\n</ion-list>\n<setting-list></setting-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/profiles-page/profiles-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__["a" /* PlatformContextService */]])
], ProfilesPage);

//# sourceMappingURL=profiles-page.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopPageModule", function() { return DesktopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop_page__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DesktopPageModule = (function () {
    function DesktopPageModule() {
    }
    return DesktopPageModule;
}());
DesktopPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__desktop_page__["a" /* DesktopPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desktop_page__["a" /* DesktopPage */]),
            __WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* CommonModule */]
        ]
    })
], DesktopPageModule);

//# sourceMappingURL=desktop-page.module.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformContextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loading_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/*
  Generated class for the PlatformContextService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
function UpdateContext(target, propertyKey, descriptor) {
    var origin = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = origin.apply(this, args);
        this.updateHttpHeaders();
        return result;
    };
    return descriptor;
}
function SaveToStorage(target, propertyKey, descriptor) {
    var origin = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = origin.apply(this, args);
        this.saveToStorage();
        return result;
    };
    return descriptor;
}
var PlatformContextService = (function () {
    function PlatformContextService(TranslateService, Storage, Config, HttpService, HttpConfigService, LoadingService) {
        this.TranslateService = TranslateService;
        this.Storage = Storage;
        this.Config = Config;
        this.HttpService = HttpService;
        this.HttpConfigService = HttpConfigService;
        this.LoadingService = LoadingService;
        this.defaultLanguage = 'en';
        this.defaultCulture = 'en-gb';
        this.contextStorageKey = 'default';
        this.languageList = [{
                lang: 'en',
                culture: 'en-gb',
                name: 'English'
            }, {
                lang: 'zh',
                culture: 'zh-hans',
                name: '中文'
            }, {
                lang: 'de',
                culture: 'de-de',
                name: 'Deutsch'
            }];
        this.init();
    }
    PlatformContextService.prototype.init = function () {
        // this.Storage.clear();
        this.isReady = this.initialize(this.contextStorageKey);
        return this.isReady;
    };
    PlatformContextService.prototype.getSysContext = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (ob) {
            if (_this.sysContext) {
                ob.next(_this.sysContext);
                ob.complete();
            }
            else {
                _this.Storage.get(_this.contextStorageKey)
                    .then(function (value) {
                    if (value) {
                        ob.next(value);
                    }
                    else {
                        console.log('sysContext not found');
                        ob.error('sysContext not found');
                    }
                    ob.complete();
                });
            }
        });
    };
    PlatformContextService.prototype.isSignedIn = function () {
        var _this = this;
        this.LoadingService.show('platform.empty');
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(this.isReady)
            .concatMap(function () {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(_this.getToken());
        })
            .concatMap(function (token) {
            if (token) {
                _this.HttpConfigService.setAuthHeader(token);
                return _this.getUserInfo();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new Error('token not found or expired'));
            }
        })
            .concatMap(function (userInfo) {
            // console.log(userInfo, this.contextStorageKey);
            if (userInfo) {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(_this.Storage.get(_this.contextStorageKey));
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new Error('get user info failed'));
            }
        })
            .concatMap(function (context) {
            if (context) {
                _this.sysContext = context;
                _this.setLanguage(_this.sysContext.language);
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(true);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new Error(_this.contextStorageKey + ": context not found"));
            }
        })
            .catch(function (err) {
            console.warn(err.message);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(err);
        })
            .finally(function () {
            _this.LoadingService.hide();
        });
    };
    PlatformContextService.prototype.getUserInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (ob) {
            if (_this.userInfo) {
                ob.next(_this.userInfo);
                ob.complete();
            }
            else {
                _this.HttpService.$get('services/login/getuserinfo')
                    .catch(function (err) {
                    ob.error(err);
                    ob.complete();
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(false);
                })
                    .subscribe(function (userInfo) {
                    _this.userInfo = userInfo;
                    _this.setContextKey();
                    ob.next(userInfo);
                    ob.complete();
                });
            }
        });
    };
    PlatformContextService.prototype.initialize = function (key) {
        var _this = this;
        this.sysContext = {
            signedInClientId: 0,
            clientId: 0,
            permissionClientId: 0,
            permissionRoleId: 0,
            dataLanguageId: 0,
            language: this.defaultLanguage,
            culture: this.defaultCulture
        };
        this.updateHttpHeaders();
        return this.Storage.get(key).then(function (value) {
            if (value) {
                _this.sysContext = value;
                _this.setLanguage(_this.sysContext.language);
                _this.updateHttpHeaders();
            }
        });
    };
    PlatformContextService.prototype.setCompanyInfo = function (company, rolelookup) {
        this.Storage.set('selectedCompany', { company: company, rolelookup: rolelookup });
    };
    PlatformContextService.prototype.getCompanyInfo = function () {
        return this.Storage.get('selectedCompany');
    };
    PlatformContextService.prototype.setToken = function (token, expireDate) {
        return this.Storage.set('token', { token: token, expireDate: expireDate });
    };
    PlatformContextService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Storage.get('token')];
                    case 1:
                        data = _a.sent();
                        if (!data.expireDate || (data.expireDate && (new Date).getTime() > data.expireDate)) {
                            return [2 /*return*/, undefined];
                        }
                        else {
                            return [2 /*return*/, data.token];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlatformContextService.prototype.setLanguage = function (lang) {
        var _this = this;
        var _value;
        if (this.languageList.some(function (value) {
            _value = value;
            return value.lang === lang;
        })) {
            this.sysContext.language = lang;
            this.TranslateService.use(lang);
            this.setCulture(_value.culture);
            this.TranslateService.get('platform.backButtonText')
                .subscribe(function (value) {
                _this.Config.set('backButtonText', value);
            });
            // this.saveLangToStorage();
        }
    };
    PlatformContextService.prototype.setCulture = function (culture) {
        this.sysContext.culture = culture;
    };
    // private saveLangToStorage() {
    // 	this.Storage.set('defaultLanguage', this.sysContext.language);
    // }
    PlatformContextService.prototype.setDataLanguageId = function (id) {
        this.sysContext.dataLanguageId = id;
    };
    PlatformContextService.prototype.setCompanyContext = function (signedInClientId, companyId, permissionCompanyId, permissionRoleId) {
        this.sysContext.signedInClientId = signedInClientId;
        this.sysContext.clientId = companyId;
        this.sysContext.permissionClientId = permissionCompanyId;
        this.sysContext.permissionRoleId = permissionRoleId;
    };
    PlatformContextService.prototype.saveToStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Storage.set(this.contextStorageKey, this.sysContext)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.Storage.get(this.contextStorageKey)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlatformContextService.prototype.readContextFromStorage = function () {
        var _this = this;
        return this.Storage.get(this.contextStorageKey)
            .then(function (data) {
            data = JSON.parse(data);
            _this.sysContext = data;
        });
    };
    PlatformContextService.prototype.setContextKey = function () {
        if (this.userInfo) {
            this.contextStorageKey = this.HttpConfigService.appBaseUrl + ':' + this.userInfo.UserId;
        }
    };
    PlatformContextService.prototype.updateHttpHeaders = function () {
        this.HttpConfigService.setClientContext(this.sysContext);
    };
    PlatformContextService.prototype.clear = function () {
        return Promise.all([
            this.Storage.remove(this.contextStorageKey),
            this.Storage.remove('token'),
            this.Storage.remove('selectedCompany')
        ]);
    };
    PlatformContextService.prototype.isFirstTimeRun = function () {
        return __awaiter(this, void 0, void 0, function () {
            var touched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Storage.get('appTouched')];
                    case 1:
                        touched = _a.sent();
                        if (!touched) {
                            this.Storage.set('appTouched', true);
                        }
                        return [2 /*return*/, touched];
                }
            });
        });
    };
    return PlatformContextService;
}());
__decorate([
    UpdateContext,
    SaveToStorage,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlatformContextService.prototype, "setLanguage", null);
__decorate([
    UpdateContext,
    SaveToStorage,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlatformContextService.prototype, "setDataLanguageId", null);
__decorate([
    UpdateContext,
    SaveToStorage,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], PlatformContextService.prototype, "setCompanyContext", null);
PlatformContextService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_9__http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_10__http_config_service__["a" /* HttpConfigService */],
        __WEBPACK_IMPORTED_MODULE_11__loading_service__["a" /* LoadingService */]])
], PlatformContextService);

//# sourceMappingURL=platform-context.service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_basic_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__desktop_desktop_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_components_svg_store_svg_store__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__common_components_svg_store_svg_store__["a" /* SVGStore */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__platform_platform_module__["a" /* PlatformModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], {}, {
                links: [
                    { loadChildren: 'basic/pages/root-page/root-page.module#RootPageModule', name: 'RootPage', segment: 'root-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'basic/pages/login/login-page.module#LoginPageModule', name: 'basic-login', segment: 'login-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'basic/pages/introduction/introduction-page.module#IntroductionPageModule', name: 'basic-introduction', segment: 'introduction-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'basic/pages/company-page/company-page.module#CompanyPageModule', name: 'basic-company', segment: 'company-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'desktop/pages/modules-page/modules-page.module#ModulesPageModule', name: 'ModulesPage', segment: 'modules-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'desktop/pages/profiles-page/profiles-page.module#ProfilesPageModule', name: 'ProfilesPage', segment: 'profiles-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'desktop/pages/desktop-page/desktop-page.module#DesktopPageModule', name: 'desktop', segment: 'desktop-page', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__basic_basic_module__["a" /* BasicModule */],
            __WEBPACK_IMPORTED_MODULE_6__desktop_desktop_module__["a" /* DesktopModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_basic_data_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_services_alert_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform_services_http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__platform_services_secure_subscribe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, BasicDataService, AlertService, AlertController, TranslateService, HttpConfigService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.BasicDataService = BasicDataService;
        _this.AlertService = AlertService;
        _this.AlertController = AlertController;
        _this.TranslateService = TranslateService;
        _this.HttpConfigService = HttpConfigService;
        _this.formData = {
            username: 'ribadmin',
            password: 'ribadmin',
            grant_type: 'password',
            client_id: 'iTWO.Cloud',
            client_secret: '{fec4c1a6-8182-4136-a1d4-81ad1af5db4a}',
            scope: 'default'
        };
        return _this;
    }
    LoginPage.prototype.ionViewWillLeave = function () {
        // this.StatusBar.backgroundColorByHexString('0067b1');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.navCtrl.first().name === 'RootPage') {
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.BasicDataService.login(this.formData)
            .takeUntil(this.ngUnsubscribe)
            .catch(function (err) {
            typeof err === 'object' && _this.AlertService.showBasic('basic.invalidUser');
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(false);
        })
            .subscribe(function (userInfo) {
            if (userInfo) {
                // this.PlatformContextService.setContextKey(userInfo.UserId);
                // this.PlatformContextService.setDataLanguageId(userInfo.UserDataLanguageId);
                _this.navCtrl.push('basic-company', { goToDesktop: true });
            }
        });
    };
    LoginPage.prototype.serverConfig = function () {
        var _this = this;
        this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel', 'basic.server'])
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.AlertController.create({
                title: data['basic.server'],
                message: '',
                enableBackdropDismiss: false,
                inputs: [{
                        name: 'serverAddress',
                        value: _this.HttpConfigService.baseUrl
                    }],
                buttons: [{
                        text: data['platform.alert.cancel'],
                        role: 'cancel'
                    }, {
                        text: data['platform.alert.ok'],
                        handler: function (data) {
                            _this.HttpConfigService.baseUrl = data.serverAddress;
                        }
                    }]
            }).present();
        });
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_7__platform_services_secure_subscribe__["a" /* SecureSubscribe */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])({
        name: 'basic-login'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/login/login-page.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>{{\'basic.login\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n<div ion-fixed class="login-main">\n    <ion-list>\n      <div style="text-align: center; margin-bottom: 20px;">\n        <svg-icon [width]="\'26rem\'" [height]="\'80px\'" [id]="\'svg-icon-ytwo-logo\'"></svg-icon>\n      </div>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="formData.username" placeholder="Username"></ion-input>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 20px;">\n        <ion-input type="password" [(ngModel)]="formData.password" placeholder="Password"></ion-input>\n      </ion-item>\n      <div style="margin-bottom: 20px">\n        <button type="button" class="login-button" (click)="login()" ion-button block  color="secondary"><y2-translate [text]="\'basic.login\'"></y2-translate></button>\n      </div>\n      <div>\n        <button type="button" class="login-button" (click)="serverConfig()" ion-button block  color="light"><y2-translate [text]="\'basic.server\'"></y2-translate></button>\n      </div>\n    </ion-list>\n    <login-language-list></login-language-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/login/login-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_basic_data_service__["a" /* BasicDataService */],
        __WEBPACK_IMPORTED_MODULE_3__platform_services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__platform_services_http_config_service__["a" /* HttpConfigService */]])
], LoginPage);

//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLanguageList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_services_secure_subscribe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginLanguageList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LoginLanguageList = (function (_super) {
    __extends(LoginLanguageList, _super);
    function LoginLanguageList(PlatformContextService) {
        var _this = _super.call(this) || this;
        _this.PlatformContextService = PlatformContextService;
        _this.languageList = [];
        var mapping;
        (function (mapping) {
            mapping[mapping["en"] = 'EN'] = "en";
            mapping[mapping["zh"] = '中'] = "zh";
            mapping[mapping["de"] = 'DE'] = "de";
        })(mapping || (mapping = {}));
        ;
        _this.mapping = mapping;
        return _this;
    }
    LoginLanguageList.prototype.ngOnInit = function () {
        var _this = this;
        this.PlatformContextService.isReady.then(function () {
            _this.PlatformContextService.languageList.forEach(function (lang) {
                _this.languageList.push(_this.mapping[lang.lang]);
            });
            _this.PlatformContextService.getSysContext()
                .takeUntil(_this.ngUnsubscribe)
                .subscribe(function (value) {
                _this.selected = _this.mapping[value.language];
            });
            _this.languageList.reverse();
        });
    };
    LoginLanguageList.prototype.changeLang = function (lang) {
        this.PlatformContextService.setLanguage(this.mapping[lang]);
        this.selected = lang;
        this.fab.close();
    };
    return LoginLanguageList;
}(__WEBPACK_IMPORTED_MODULE_3__platform_services_secure_subscribe__["b" /* SecureSubscribeForComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fab'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* FabContainer */])
], LoginLanguageList.prototype, "fab", void 0);
LoginLanguageList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login-language-list',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/components/login-language-list/login-language-list.html"*/'<!-- Generated template for the LoginLanguageList component -->\n  <ion-fab right bottom #fab>\n    <button ion-fab color="light">{{selected}}</button>\n    <ion-fab-list side="top">\n      <button ion-fab *ngFor="let item of languageList" (click)="changeLang(item)">{{item}}</button>\n    </ion-fab-list>\n  </ion-fab>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/components/login-language-list/login-language-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__platform_services_platform_context_service__["a" /* PlatformContextService */]])
], LoginLanguageList);

//# sourceMappingURL=login-language-list.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SVGIcon component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SVGIcon = (function () {
    function SVGIcon() {
    }
    return SVGIcon;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SVGIcon.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SVGIcon.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SVGIcon.prototype, "id", void 0);
SVGIcon = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'svg-icon',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/common/components/svg-icon/svg-icon.html"*/'<svg class="svg-icon" [style.width]="width" [style.height]="height">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="\'#\' + id"></use>\n</svg>'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/common/components/svg-icon/svg-icon.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], SVGIcon);

//# sourceMappingURL=svg-icon.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Y2Translate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CheckOnPush component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var Y2Translate = (function () {
    function Y2Translate() {
    }
    Y2Translate.prototype.ngOnInit = function () {
        // this.TranslateService.get(this.text)
        // .subscribe(value => {
        //   this.textTranslated = value;
        // });
        // this.ChangeDetectorRef.reattach();
    };
    return Y2Translate;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], Y2Translate.prototype, "text", void 0);
Y2Translate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'y2-translate',
        template: '{{text | translate}}',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], Y2Translate);

//# sourceMappingURL=y2-translate.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntroductionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IntroductionPage = (function () {
    function IntroductionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroductionPage.prototype.ionViewDidLoad = function () {
        console.log('');
    };
    IntroductionPage.prototype.enter = function () {
        this.navCtrl.push('basic-login');
    };
    return IntroductionPage;
}());
IntroductionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])({
        name: 'basic-introduction'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-introduction-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/introduction/introduction-page.html"*/'<!--\n  Generated template for the IntroductionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-slides pager>\n\n  <ion-slide style="background-color: fff">\n    <h2>Slide 1</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: fff">\n    <h2>Slide 2</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: fff">\n    <h2>Slide 3</h2>\n    <button type="button" (click)="enter()" ion-button color="secondary">{{\'basic.enter\' | translate}}</button>\n  </ion-slide>\n\n</ion-slides>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/introduction/introduction-page.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], IntroductionPage);

//# sourceMappingURL=introduction-page.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_basic_company_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_services_page_gate_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CompanyPage = (function (_super) {
    __extends(CompanyPage, _super);
    function CompanyPage(navCtrl, navParams, BasicCompanyService, PlatformContextService, TokenGuard) {
        var _this = _super.call(this, [TokenGuard]) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.BasicCompanyService = BasicCompanyService;
        _this.PlatformContextService = PlatformContextService;
        _this.TokenGuard = TokenGuard;
        return _this;
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var childCompany = this.navParams.get('item');
        this.goToDesktop = this.navParams.get('goToDesktop') || false;
        if (childCompany) {
            this.companies = childCompany.children;
        }
        else {
            this.PlatformContextService.isReady.then(function () {
                _this.BasicCompanyService.getCompanyList()
                    .takeUntil(_this.ngUnsubscribe)
                    .subscribe(function (data) {
                    _this.companies = data;
                });
            });
        }
    };
    return CompanyPage;
}(__WEBPACK_IMPORTED_MODULE_4__platform_services_page_gate_service__["b" /* PageGate */]));
CompanyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])({
        name: 'basic-company'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-company-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/company-page/company-page.html"*/'<!--\n  Generated template for the CompanyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><y2-translate [text]="\'basic.company.selectCompany\'"></y2-translate></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <company-tree [companies]="companies" [goToDesktop]="goToDesktop"></company-tree>\n</ion-content>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/company-page/company-page.html"*/,
        providers: [Object(__WEBPACK_IMPORTED_MODULE_4__platform_services_page_gate_service__["c" /* PageGateProvider */])([__WEBPACK_IMPORTED_MODULE_4__platform_services_page_gate_service__["d" /* TokenGuard */]])]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_basic_company_service__["a" /* BasicCompanyService */],
        __WEBPACK_IMPORTED_MODULE_3__platform_services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_4__platform_services_page_gate_service__["d" /* TokenGuard */]])
], CompanyPage);

//# sourceMappingURL=company-page.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStructureService; });
var DataStructureService = (function () {
    function DataStructureService(sortAttr, data) {
        this.currentSortAttr = sortAttr;
        this.data = data;
        this.timeStamp = (new Date()).getTime();
    }
    DataStructureService.prototype.sort = function () {
        if (!this.data) {
            return null;
        }
        this.quickSort(this.data, 0, this.data.length - 1, this.currentSortAttr);
    };
    ;
    DataStructureService.prototype.quickSort = function (arr, left, right, attr) {
        if (left > right) {
            return;
        }
        var pivot = arr[left], i = left, j = right;
        while (i !== j) {
            while (arr[j][attr] >= pivot[attr] && i < j) {
                j--;
            }
            while (arr[i][attr] <= pivot[attr] && i < j) {
                i++;
            }
            if (i < j) {
                var tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
        arr[left] = arr[i];
        arr[i] = pivot;
        this.quickSort(arr, left, i - 1, attr);
        this.quickSort(arr, i + 1, right, attr);
    };
    DataStructureService.prototype.setAttr = function (attr) {
        this.currentSortAttr = attr;
    };
    DataStructureService.prototype.find = function (value, isIndex) {
        if (isIndex === void 0) { isIndex = false; }
        if (!this.data) {
            return null;
        }
        var attr = this.currentSortAttr;
        var left = 0, right = this.data.length - 1;
        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (value > this.data[mid][attr]) {
                left = mid + 1;
            }
            else if (value < this.data[mid][attr]) {
                right = mid - 1;
            }
            else {
                return isIndex ? mid : this.data[mid];
            }
        }
        var shot = this.data[left] && (this.data[left][attr] === value); // shot or not shot, not shot will return the nearest index.
        return shot ? (isIndex ? left : this.data[left]) : (isIndex ? -(++left) : null); // in case index 0, cannot tell difference between 0 and -0, so add 1 to `left`;
    };
    DataStructureService.prototype.findByAttrLinear = function (attr, value) {
        if (!this.data) {
            return null;
        }
        var res = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][attr] === value) {
                res.push(this.data[i]);
            }
        }
        return res.length > 0 ? (res.length > 1 ? res : res[0]) : null;
    };
    DataStructureService.prototype.delete = function (value) {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        var index;
        index = this.find(value, true);
        if (index !== null) {
            for (var i = index; i < this.data.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            this.data.length = this.data.length - 1;
        }
        return index;
    };
    DataStructureService.prototype.insert = function (item) {
        // this.deleteByAttr(this.currentSortAttr, item[this.currentSortAttr]);
        var nearIndex = this.find(item[this.currentSortAttr], true);
        if (nearIndex >= 0) {
            this.data[nearIndex] = item;
            return this.data.length;
        }
        else {
            nearIndex = -(nearIndex + 1);
        }
        var destIndex = 0;
        if (this.data[nearIndex]) {
            destIndex = this.data[nearIndex][this.currentSortAttr] > item[this.currentSortAttr] ? nearIndex : nearIndex + 1;
        }
        this.data.push(item);
        for (var i = this.data.length - 2; i >= destIndex; i--) {
            // this.data[i + 1] = this.data[i];
            _a = [this.data[i], this.data[i + 1]], this.data[i + 1] = _a[0], this.data[i] = _a[1];
        }
        this.data[destIndex] = item;
        return this.data.length;
        var _a;
    };
    return DataStructureService;
}());

//# sourceMappingURL=data-structure.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_basic_company_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_services_secure_subscribe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CompanyTree component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CompanyTree = (function (_super) {
    __extends(CompanyTree, _super);
    function CompanyTree(NavController, BasicCompanyService, AlertController, TranslateService) {
        var _this = _super.call(this) || this;
        _this.NavController = NavController;
        _this.BasicCompanyService = BasicCompanyService;
        _this.AlertController = AlertController;
        _this.TranslateService = TranslateService;
        _this.classByType = function (rs) {
            var cls = ['svg-icon-comp-businessunit', 'svg-icon-comp-root', 'svg-icon-comp-profitcenter'], index = 0;
            if (rs && rs.companyType) {
                index = (rs.companyType - 1) % 3;
            }
            return cls[index];
        };
        return _this;
    }
    CompanyTree.prototype.isLeaf = function (item) {
        return (!item.children) || (item.children.length === 0);
    };
    CompanyTree.prototype.itemSelected = function (item) {
        var _this = this;
        if (!this.isLeaf(item)) {
            this.NavController.push('basic-company', { item: item, goToDesktop: this.goToDesktop });
        }
        else if (item.companyType === 1) {
            this.roles = this.BasicCompanyService.getRoleList(item);
            this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel'])
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function (data) {
                var alert = _this.AlertController.create();
                alert.setTitle(item.name);
                _this.roles.forEach(function (item, index) {
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
                    handler: function (data) {
                        _this.BasicCompanyService.saveContext(item.id, data);
                        if (_this.goToDesktop) {
                            _this.NavController.push('desktop')
                                .then(function () {
                                // clear company pages.
                                //this.NavController.remove(1, this.NavController.length() - 1);
                            });
                        }
                    }
                });
                alert.present();
            });
        }
    };
    return CompanyTree;
}(__WEBPACK_IMPORTED_MODULE_4__platform_services_secure_subscribe__["b" /* SecureSubscribeForComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], CompanyTree.prototype, "companies", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CompanyTree.prototype, "goToDesktop", void 0);
CompanyTree = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'company-tree',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/components/company-tree/company-tree.html"*/'<!-- Generated template for the CompanyTree component -->\n<ion-list>\n<button ion-item *ngFor="let item of companies" (click)="itemSelected(item)">\n    <svg-icon [width]="16" [height]="16" [id]="classByType(item)"></svg-icon>\n    {{item.name}}\n</button>\n\n</ion-list>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/basic/pages/components/company-tree/company-tree.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_basic_company_service__["a" /* BasicCompanyService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], CompanyTree);

//# sourceMappingURL=company-tree.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ModuleBlocksComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ModuleBlocksComponent = (function () {
    function ModuleBlocksComponent() {
        this.modules = [];
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
        });
    }
    return ModuleBlocksComponent;
}());
ModuleBlocksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'module-blocks',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/components/module-blocks-component/module-blocks-component.html"*/'<ion-card *ngFor="let item of modules">\n    <button class="module-block {{item.cssClass}}">\n        <svg-icon [width]="\'56px\'" [height]="\'56px\'" [id]="item.icon"></svg-icon>\n        <p><y2-translate [text]="item.name"></y2-translate></p>\n    </button>\n    \n</ion-card>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/components/module-blocks-component/module-blocks-component.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], ModuleBlocksComponent);

//# sourceMappingURL=module-blocks-component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_services_secure_subscribe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SettingList = (function (_super) {
    __extends(SettingList, _super);
    function SettingList(NavController, App, AlertController, PlatformContextService, TranslateService, Events) {
        var _this = _super.call(this) || this;
        _this.NavController = NavController;
        _this.App = App;
        _this.AlertController = AlertController;
        _this.PlatformContextService = PlatformContextService;
        _this.TranslateService = TranslateService;
        _this.Events = Events;
        _this.initLangInfo();
        return _this;
    }
    SettingList.prototype.initLangInfo = function () {
        var _this = this;
        this.currentLang = this.PlatformContextService.languageList.find(function (lang) {
            return lang.lang === _this.PlatformContextService.sysContext.language;
        });
    };
    SettingList.prototype.goTo = function (pageName) {
        // this.App.getRootNav().push(pageName);
        this.NavController.push(pageName);
    };
    SettingList.prototype.ngOnInit = function () {
        // console.log(this.NavController.getActive());
        // console.log(this.ViewController.index);
    };
    SettingList.prototype.selectLanguage = function () {
        var _this = this;
        this.TranslateService.get(['platform.alert.ok', 'platform.alert.cancel', 'desktop.profiles.changeLanguage'])
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            var alert = _this.AlertController.create();
            alert.setTitle(data['desktop.profiles.changeLanguage']);
            _this.PlatformContextService.languageList.forEach(function (item) {
                alert.addInput({
                    type: 'radio',
                    label: item.name,
                    value: item.lang,
                    checked: item.lang === _this.PlatformContextService.sysContext.language
                });
            });
            alert.addButton(data['platform.alert.cancel']);
            alert.addButton({
                text: data['platform.alert.ok'],
                handler: function (data) {
                    _this.PlatformContextService.setLanguage(data);
                    _this.Events.publish('changeLanguage');
                    _this.initLangInfo();
                }
            });
            alert.present();
        });
    };
    SettingList.prototype.logout = function () {
        var _this = this;
        this.PlatformContextService.clear()
            .then(function () {
            _this.App.getRootNav().popToRoot();
        });
    };
    return SettingList;
}(__WEBPACK_IMPORTED_MODULE_4__platform_services_secure_subscribe__["b" /* SecureSubscribeForComponent */]));
SettingList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting-list',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/components/setting-list/setting-list.html"*/'  <ion-list>\n    <ion-list-header>\n      <y2-translate [text]="\'desktop.profiles.setting\'"></y2-translate>\n    </ion-list-header>\n\n    <button ion-item (click)="goTo(\'basic-company\')">\n      <!--<ion-icon name="wifi" item-start color="primary"></ion-icon>-->\n      <ion-label>\n      <svg-icon [width]="\'18px\'" [height]="\'18px\'" [id]="\'svg-icon-company\'"></svg-icon>\n        <y2-translate [text]="\'desktop.profiles.changeCompany\'"></y2-translate>\n      </ion-label>\n    </button>\n\n    <button ion-item (click)="selectLanguage()">\n      <!--<ion-icon name="wifi" item-start color="primary"></ion-icon>-->\n      <ion-label>\n      <svg-icon [width]="\'18px\'" [height]="\'18px\'" [id]="\'svg-icon-switch-language\'"></svg-icon>\n        <y2-translate [text]="\'desktop.profiles.changeLanguage\'"></y2-translate>\n      </ion-label>\n      <ion-note item-end>{{currentLang.name}}</ion-note>\n    </button>\n\n    <!--<button ion-item (click)="goTo(\'basic-company\')">\n      <ion-icon name="wifi" item-start color="primary"></ion-icon>\n      <ion-label>\n      \n        <y2-translate [text]="\'desktop.profiles.changeLanguage\'"></y2-translate>\n      </ion-label>\n    </button>-->\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="logout()">\n      <ion-icon name="log-out" item-start color="primary"></ion-icon>\n      <ion-label>\n        <y2-translate [text]="\'desktop.profiles.logout\'"></y2-translate>\n      </ion-label>\n    </button>\n  </ion-list>'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/components/setting-list/setting-list.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__platform_services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SettingList);

//# sourceMappingURL=setting-list.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_page_modules_page__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profiles_page_profiles_page__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform_services_page_gate_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DesktopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DesktopPage = (function (_super) {
    __extends(DesktopPage, _super);
    function DesktopPage(navCtrl, navParams, TranslateService, Events, LoginGuard) {
        var _this = _super.call(this, [LoginGuard]) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.TranslateService = TranslateService;
        _this.Events = Events;
        _this.LoginGuard = LoginGuard;
        _this.ModulesPage = __WEBPACK_IMPORTED_MODULE_2__modules_page_modules_page__["a" /* ModulesPage */];
        _this.ProfilesPage = __WEBPACK_IMPORTED_MODULE_3__profiles_page_profiles_page__["a" /* ProfilesPage */];
        return _this;
    }
    DesktopPage.prototype.initTitles = function () {
        var _this = this;
        this.TranslateService.get(['desktop.modules.title', 'desktop.profiles.title'])
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.moduleTab.tabTitle = data['desktop.modules.title'];
            _this.profilesTab.tabTitle = data['desktop.profiles.title'];
        });
    };
    DesktopPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.initTitles();
        this.Events.subscribe('changeLanguage', function () {
            _this.initTitles();
        });
    };
    return DesktopPage;
}(__WEBPACK_IMPORTED_MODULE_5__platform_services_page_gate_service__["b" /* PageGate */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('moduleTab'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tab */])
], DesktopPage.prototype, "moduleTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('profilesTab'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tab */])
], DesktopPage.prototype, "profilesTab", void 0);
DesktopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])({
        name: 'desktop'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-desktop-page',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/desktop-page/desktop-page.html"*/'<!--\n  Generated template for the DesktopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab #moduleTab [root]="ModulesPage" tabTitle="Modules" [tabsHideOnSubPages]="true" tabIcon="apps"></ion-tab>\n  <ion-tab #profilesTab [root]="ProfilesPage" tabTitle="Profiles" [tabsHideOnSubPages]="true"  tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/app/desktop/pages/desktop-page/desktop-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__platform_services_page_gate_service__["a" /* LoginGuard */]])
], DesktopPage);

//# sourceMappingURL=desktop-page.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpServiceFactory */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_page_gate_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alert_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_network_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_jquery_dist_jquery_min_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_jquery_dist_jquery_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__node_modules_jquery_dist_jquery_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













function HttpServiceFactory(_backend, _defaultRequest, HttpConfigService, AlertService, NetworkService) {
    return new __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */](_backend, _defaultRequest, HttpConfigService, AlertService, NetworkService);
}
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var HttpServiceProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
    useFactory: HttpServiceFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_8__services_http_config_service__["a" /* HttpConfigService */], __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_11__services_network_service__["a" /* NetworkService */]]
};
var PlatformModule = (function () {
    function PlatformModule(PlatformModule) {
        if (PlatformModule) {
            throw new Error('PlatformModule is already loaded. Import it in the AppModule only');
        }
    }
    return PlatformModule;
}());
PlatformModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        exports: [],
        providers: [
            HttpServiceProvider,
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_platform_context_service__["a" /* PlatformContextService */],
            __WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_config_service__["a" /* HttpConfigService */],
            __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11__services_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_9__services_page_gate_service__["a" /* LoginGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services_page_gate_service__["d" /* TokenGuard */]
        ]
    })
    /**
     * PlatformModule is a pure service module, do not add any declaration class, such as component, directive, or pipe.
     */
    ,
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* SkipSelf */])()),
    __metadata("design:paramtypes", [PlatformModule])
], PlatformModule);

//# sourceMappingURL=platform.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_pages_root_page_root_page__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_services_platform_context_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(platform, statusBar, splashScreen, TranslateService, PlatformContextService, Config) {
        this.TranslateService = TranslateService;
        this.PlatformContextService = PlatformContextService;
        this.Config = Config;
        this.loadType = 1; // 0: first load, 1: loaded not log in, 2: logged in
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__basic_pages_root_page_root_page__["a" /* RootPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            // statusBar.backgroundColorByHexString('0067b1');
            // statusBar.overlaysWebView(false);
            splashScreen.hide();
        });
        console.log('app constructor');
        this.PlatformContextService.languageList;
        this.TranslateService.addLangs(['en', 'zh', 'de']);
        this.TranslateService.setDefaultLang('en');
        this.TranslateService.use('en');
        this.Config.set('swipeBackEnabled', false);
        // this.App.viewWillEnter
        // .subscribe(data => {
        //   console.log('befores', data);
        // })
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.nav.push('basic-login', {}, {
        //       animate: false
        //     });
        // console.log('App start');
        // let sub = this.nav.viewWillEnter
        // .subscribe(() => {
        //   console.log('app')
        //   let sub2 = this.PlatformContextService.isSignedIn()
        //   .catch((err: Error) => {
        //     console.warn(err.message);
        //     console.log(this.nav.getActive())
        //     this.nav.push('basic-login', {}, {
        //       animate: false
        //     });
        //     return Observable.throw(err);
        //   })
        //   .subscribe(valid => {
        //     let _active = this.nav.getActive();
        //     if (valid && (_active.name === 'RootPage' || _active.name === 'LoginPage')) {
        //       this.nav.push('desktop', {}, {
        //         animate: false
        //       });
        //     }
        //     sub2.unsubscribe();
        //   });
        //   sub.unsubscribe();
        // })
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
], AppComponent.prototype, "nav", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-nav #myNav [root]=\"rootPage\"></ion-nav>\n\t<svg-store></svg-store>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__platform_services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_root_page_root_page_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_page_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_introduction_introduction_page_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_company_page_company_page_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_basic_data_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_basic_company_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var BasicModule = (function () {
    function BasicModule(BasicModule) {
        if (BasicModule) {
            throw new Error('BasicModule is already loaded. Import it in the AppModule only');
        }
    }
    return BasicModule;
}());
BasicModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__pages_login_login_page_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_1__pages_root_page_root_page_module__["RootPageModule"],
            __WEBPACK_IMPORTED_MODULE_3__pages_introduction_introduction_page_module__["IntroductionPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__pages_company_page_company_page_module__["CompanyPageModule"]
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_basic_data_service__["a" /* BasicDataService */], __WEBPACK_IMPORTED_MODULE_6__services_basic_company_service__["a" /* BasicCompanyService */]]
    })
    /**
     * BasicModule is kind like PlatformModule, the difference is that BasicModule provides data related to business.
     * Never import BasicModule to any other module except AppModule.
     */
    ,
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* SkipSelf */])()),
    __metadata("design:paramtypes", [BasicModule])
], BasicModule);

//# sourceMappingURL=basic.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_desktop_page_desktop_page_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modules_page_modules_page_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profiles_page_profiles_page_module__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DesktopModule = (function () {
    function DesktopModule() {
    }
    return DesktopModule;
}());
DesktopModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__common_common_module__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__pages_desktop_page_desktop_page_module__["DesktopPageModule"],
            __WEBPACK_IMPORTED_MODULE_3__pages_modules_page_modules_page_module__["ModulesPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__pages_profiles_page_profiles_page_module__["ProfilesPageModule"]
        ],
        exports: [],
        providers: []
    })
], DesktopModule);

//# sourceMappingURL=desktop.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SVGStore component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SVGStore = (function () {
    function SVGStore() {
    }
    return SVGStore;
}());
SVGStore = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'svg-store',template:/*ion-inline-start:"/Users/hay/workspace/YTWO/YTWO.Phone/src/assets/templates/svg-store.html"*/'<div class="visuallyhidden">\n    <!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="svg-icon-comp-businessunit" viewBox="0 0 16.00 16.00"><path fill="#3F7AB7" d="M0 0h11v3H0zM5 6h11v3H5V6zM5 12h11v3H5z"/><path fill="none" stroke-linejoin="round" stroke="#747474" d="M.5 6.5h2v2h-2v-2z"/><path fill="#747474" d="M1 3h1v3H1zM1 9h1v3H1z"/><path fill="none" stroke-linejoin="round" stroke="#747474" d="M.5 12.5h2v2h-2v-2z"/><path fill="#747474" d="M3 7h2v1H3zM3 13h2v1H3z"/></symbol><symbol id="svg-icon-comp-profitcenter" viewBox="0 0 16.00 16.00"><path fill="#FFF" stroke-linejoin="round" stroke="#3F7AB7" d="M5.5 1.5h6.536l3.464 3v10h-10v-13z"/><path fill="#747474" d="M3 7.999h2v1H3z"/><path fill="none" stroke-linejoin="round" stroke="#747474" d="M.5 7.5h2v2h-2v-2z"/></symbol><symbol id="svg-icon-comp-root" viewBox="0 0 16.00 16.00"><path fill="#3F7AB7" d="M1 7l1-1h12l1 1v7H1V7zM1 5V2h5l2 2h7v1H1z"/></symbol><symbol id="svg-icon-ytwo-logo" viewBox="0 0 223.00 57.00"><path fill="#231815" d="M18 56V28L36.906 1h14.649L30 31.784V56H18zm4.4-43.932l-7.723 9.893L0 1h14.65l7.75 11.068z"/><path fill="#4285F4" d="M67 56V10H49l5.822-9h33.413L91 10H79v46H67z"/><path fill="#EB4235" d="M113.438 45.018L123.045 1h14.699l9.606 44.018L157.789 1h11.158l-14.635 55h-14.054l-9.864-46.304L120.531 56h-14.055L91.842 1H103l10.438 44.018z"/><path fill="#FBBC05" d="M194.5 0C210.24 0 223 12.76 223 28.5S210.24 57 194.5 57 166 44.24 166 28.5a28.39 28.39 0 0 1 6.82-18.5H180v7.01a18.423 18.423 0 0 0-4 11.49c0 10.217 8.283 18.5 18.5 18.5S213 38.717 213 28.5 204.717 10 194.5 10a18.423 18.423 0 0 0-11.5 4.008V7h-7.209A28.39 28.39 0 0 1 194.5 0z"/></symbol><symbol id="svg-icon-create-invoice" viewBox="0 0 32 32"><path fill="#484747" d="M25.915 30.492H7.732c-2.6 0-4.637-1.58-4.637-3.596V9.37c0-.402.154-.789.431-1.083L10.895.492A1.583 1.583 0 0 1 12.04 0h13.875c2.601 0 4.638 1.582 4.638 3.6v23.297c0 2.015-2.037 3.595-4.638 3.595zM6.246 9.997v16.9c.062.083.596.449 1.486.449h18.183c.89 0 1.425-.366 1.5-.521L27.401 3.6c-.062-.085-.597-.451-1.486-.451H12.719L6.246 9.997z"/><path fill="#484747" d="M23.269 10.451h-12.89a1.575 1.575 0 1 1 0-3.149h12.889a1.575 1.575 0 0 1 .001 3.149zM23.269 19.724h-12.89a1.575 1.575 0 1 1 0-3.149h12.889a1.575 1.575 0 0 1 .001 3.149zM23.269 15.088h-12.89a1.575 1.575 0 1 1 0-3.149h12.889a1.575 1.575 0 0 1 .001 3.149z"/><circle fill="#484747" cx="8.994" cy="24.271" r="7.704"/><path fill="#FFF" d="M13.093 23.452H9.774v-3.284c0-.298-.478-.544-.778-.544-.303 0-.812.246-.812.544v3.284H4.898c-.305 0-.549.516-.549.818s.244.733.549.733h3.286v3.364c0 .303.508.546.812.546.3 0 .778-.243.778-.546v-3.364h3.319c.303 0 .546-.431.546-.733s-.243-.818-.546-.818z"/></symbol><symbol id="svg-icon-delivery-note" viewBox="0 0 56 56"><path fill="#FFF" d="M47.421.014H19.834c-7.533 0-14.095 7.381-14.095 13.428v39.463a3.184 3.184 0 0 0 3.183 3.178h28.139l.752-2.694H8.447V13.877h4.883c1.84 0 3.815-.639 4.951-1.774.938-.937 1.419-2.228 1.419-3.929 0-1.182-.039-5.246-.039-5.246H47.87v50.46H33.594l.876 2.694h12.951a3.18 3.18 0 0 0 3.174-3.178V3.195A3.184 3.184 0 0 0 47.421.014z"/><path fill="#FFF" d="M15.491 19.09h25.581c.747 0 1.354-.552 1.354-1.234 0-.681-.606-1.231-1.354-1.231H15.491c-.747 0-1.355.55-1.355 1.231 0 .682.608 1.234 1.355 1.234M15.491 23.848h25.581c.747 0 1.354-.55 1.354-1.231 0-.679-.606-1.231-1.354-1.231H15.491c-.747 0-1.355.553-1.355 1.231 0 .681.608 1.231 1.355 1.231M15.491 28.611h25.581c.747 0 1.354-.555 1.354-1.231 0-.686-.606-1.236-1.354-1.236H15.491c-.747 0-1.355.55-1.355 1.236 0 .676.608 1.231 1.355 1.231M31.02 47.001c-.214 0-.429-.053-.625-.167l-6.592-3.77a1.26 1.26 0 0 1-.47-1.721 1.265 1.265 0 0 1 1.724-.471l4.469 2.556s.785.47 1.363.091c.453-.297.967-1.106.967-1.106l6.8-9.468a1.274 1.274 0 0 1 1.768-.289c.564.406.696 1.196.285 1.765l-8.662 12.054a1.262 1.262 0 0 1-1.027.526z"/></symbol><symbol id="svg-icon-di" viewBox="0 0 32 32"><path opacity=".3" fill="#828282" d="M2.445 17.717l4.346-7.097 3.897-1.351 4.27 1.282 6.069-3.37 4.384 7.264 5.617-3.089v15.015H2.445z"/><path opacity=".5" fill="#626363" d="M2.445 20.306l3.412-.441 4.046 2.338 3.932-4.812h7.341l9.852-3.606v13.27l-28.583-1.11z"/><path opacity=".5" fill="#828282" d="M2.71 16.692l.437-8.957 4.95 5.679 4.501-2.734 9.667 10.104 6.407-5.162 2.356 3.887v7.546l-27.881-.957z"/><path fill="#393A3A" d="M3.147 23.016V5.101c0-.744-.592-1.351-1.325-1.351-.732 0-1.324.607-1.324 1.351v21.754c0 .753.592 1.353 1.324 1.353h28.849c.729 0 1.329-.6 1.329-1.353 0-.742-.6-1.343-1.329-1.343H4.453c-.956.001-1.306-.645-1.306-2.496z"/></symbol><symbol id="svg-icon-di-on" viewBox="0 0 32 32"><path opacity=".3" fill="#BCBCBC" d="M2.393 17.88l4.354-7.115 3.91-1.357 4.283 1.286 6.086-3.381 4.396 7.288 5.637-3.097v15.059H2.393z"/><path opacity=".5" fill="#9E9E9E" d="M2.393 20.483l3.417-.447 4.058 2.349 3.945-4.829h7.361l9.885-3.614V27.25L2.393 26.137z"/><path opacity=".5" fill="#E8E8E8" d="M2.654 16.852l.44-8.982 4.964 5.692 4.515-2.741 9.694 10.138 6.425-5.175 2.367 3.892v7.574l-27.965-.966z"/><path fill="#FFF" d="M3.094 23.202V5.227c0-.746-.595-1.353-1.328-1.353-.733 0-1.332.606-1.332 1.353v21.825c0 .747.599 1.353 1.332 1.353h28.936c.733 0 1.329-.605 1.329-1.353 0-.746-.596-1.354-1.329-1.354H4.401c-.958.001-1.307-.647-1.307-2.496z"/></symbol><symbol id="svg-icon-invoice-dashboard" viewBox="0 0 56 56"><g fill="#FFF"><path d="M15.905 44.229a.46.46 0 0 0 .461-.461.462.462 0 0 0-.461-.461h-1.383v-.462a.466.466 0 0 0-.461-.461.464.464 0 0 0-.46.461v.462h-.459c-.559 0-1.385.37-1.385 1.384v.922c0 1.013.826 1.384 1.385 1.384h.459v1.841h-1.382a.465.465 0 0 0-.462.465c0 .25.208.457.462.457h1.382v.462a.46.46 0 0 0 .921 0v-.462h.461c.557 0 1.383-.368 1.383-1.38v-.922c0-1.016-.826-1.384-1.383-1.384h-.461v-1.845h1.383zm-2.304 1.845h-.459c-.21-.004-.464-.09-.464-.461v-.922c0-.371.254-.454.464-.462h.459v1.845zm1.382.923c.205.005.461.087.461.461v.922c0 .368-.256.451-.461.458h-.461v-1.841h.461zM4.452 37.263h11.273c.329 0 .598-.243.598-.542 0-.3-.269-.543-.598-.543H4.452c-.329 0-.596.243-.596.543 0 .299.267.542.596.542zM4.452 39.362h11.273c.329 0 .598-.242.598-.547 0-.295-.269-.541-.598-.541H4.452c-.329 0-.596.246-.596.541 0 .305.267.547.596.547zM4.452 41.459h11.273c.329 0 .598-.246.598-.541 0-.306-.269-.546-.598-.546H4.452c-.329 0-.596.24-.596.546 0 .295.267.541.596.541zM10.628 44.567H4.452c-.329 0-.596.243-.596.545 0 .3.267.543.596.543h6.177c.33 0 .598-.243.598-.543-.001-.301-.269-.545-.599-.545zM10.628 42.468H4.452c-.329 0-.596.247-.596.545 0 .301.267.542.596.542h6.177c.33 0 .598-.241.598-.542-.001-.298-.269-.545-.599-.545zM10.628 46.666H4.452c-.329 0-.596.244-.596.542 0 .304.267.542.596.542h6.177c.33 0 .598-.238.598-.542-.001-.298-.269-.542-.599-.542zM10.628 48.762H4.452c-.329 0-.596.246-.596.545 0 .301.267.542.596.542h6.177c.33 0 .598-.241.598-.542-.001-.299-.269-.545-.599-.545z"/><path d="M55.9 32.257c0-15.095-12.237-27.333-27.334-27.333-14.704 0-26.663 11.617-27.276 26.171-.84 1.043-1.373 2.257-1.373 3.377v17.392c0 .773.63 1.401 1.402 1.401h16.965c.771 0 1.4-.628 1.4-1.401v-3.751h31.141A27.19 27.19 0 0 0 55.9 32.257zM28.287 10.113a2.996 2.996 0 1 1 0 5.993 2.998 2.998 0 1 1 0-5.993zm-14.388 5.993a3 3 0 1 1 0 5.998 3 3 0 0 1 0-5.998zM1.111 52.077V34.663h2.153c.81 0 1.68-.278 2.181-.778.414-.415.626-.983.626-1.731 0-.496-.016-2.108-.018-2.28h1.303c.021-.015.046-.021.067-.033h2.958c.021.012.046.019.068.033h8.036v22.204H1.111zm34.277-31.84l-3.856 12.176c.983.842 1.64 2.052 1.64 3.448a4.604 4.604 0 0 1-9.207 0c0-2.472 1.961-4.454 4.408-4.56l3.825-12.075a1.674 1.674 0 0 1 3.19 1.011zm5.451-1.13a2.996 2.996 0 1 1 5.994 0 2.992 2.992 0 0 1-2.995 2.995 2.993 2.993 0 0 1-2.999-2.995zm7.649 16.033a2.999 2.999 0 1 1 0-6 2.999 2.999 0 0 1 0 6z"/></g></symbol><symbol id="svg-icon-invoice-list" viewBox="0 0 32 32"><path fill="#484747" d="M25.207 31.957H6.145c-2.726 0-4.861-1.656-4.861-3.773V9.813c0-.421.161-.827.451-1.134L9.461.507a1.656 1.656 0 0 1 1.2-.516h14.546c2.725 0 4.86 1.657 4.86 3.772v24.42c0 2.118-2.135 3.774-4.86 3.774zM4.587 10.471v17.712c.065.091.627.473 1.558.473h19.062c.929 0 1.492-.382 1.572-.541l-.014-24.351c-.065-.087-.629-.472-1.558-.472H11.373l-6.786 7.179z"/><path fill="#484747" d="M22.431 10.947H8.92a1.651 1.651 0 1 1 0-3.301h13.511a1.651 1.651 0 1 1 0 3.301zM22.431 20.668H8.92a1.65 1.65 0 1 1 0-3.3h13.511a1.65 1.65 0 1 1 0 3.3zM16.249 25.529H8.92a1.651 1.651 0 0 1 0-3.3h7.329a1.65 1.65 0 1 1 0 3.3zM22.431 15.808H8.92a1.652 1.652 0 0 1 0-3.302h13.511a1.651 1.651 0 1 1 0 3.302z"/></symbol><symbol id="svg-icon-invoice-total-chart" viewBox="0 0 32 32"><path fill="#484747" d="M.177 9.221h7.987v19.613H.177zM12.094 13.444h7.99v15.39h-7.99zM24.01 5.704H32v23.13h-7.99z"/></symbol><symbol id="svg-icon-invoice-turnover-chart" viewBox="0 0 32 32"><path opacity=".5" fill="#767777" d="M31.304 25.849l-4.568-5.945-5.799 6.959-.87-2.355L16.18 7l-5.295 12.81-5.317-3.385-4.51 8.083v3.991h30.246z"/><path fill="#484747" d="M20.937 27.56a.693.693 0 0 1-.677-.534L16.003 9.25l-4.474 10.824a.696.696 0 0 1-1.017.321l-4.695-2.987-4.15 7.439a.697.697 0 1 1-1.217-.679l4.51-8.083a.695.695 0 0 1 .981-.247l4.617 2.938 4.977-12.041a.676.676 0 0 1 .698-.428.695.695 0 0 1 .623.53l4.433 18.515 4.912-5.895a.65.65 0 0 1 .548-.249.7.7 0 0 1 .539.271l4.567 5.944a.698.698 0 0 1-1.106.848l-4.037-5.254-5.242 6.291a.684.684 0 0 1-.533.252z"/></symbol><symbol id="svg-icon-invoice" viewBox="0 0 56 56"><path fill="#FFF" d="M42.157 35.607a1.044 1.044 0 0 0 0-2.087h-3.123v-1.039c0-.572-.47-1.042-1.039-1.042-.573 0-1.042.47-1.042 1.042v1.039h-1.037c-1.263 0-3.131.836-3.131 3.128v2.076c0 2.295 1.868 3.128 3.131 3.128h1.037v4.166h-3.124a1.05 1.05 0 0 0-1.044 1.041c0 .573.475 1.04 1.044 1.04h3.124v1.047a1.042 1.042 0 0 0 2.081 0V48.1h1.039c1.264 0 3.125-.831 3.125-3.121v-2.083c0-2.293-1.861-3.121-3.125-3.121h-1.039v-4.167h3.123zm-5.204 4.167h-1.037c-.473-.015-1.047-.207-1.047-1.05v-2.076c0-.84.574-1.029 1.047-1.041h1.037v4.167zm3.12 2.079c.468.013 1.042.199 1.042 1.043v2.083c0 .835-.574 1.027-1.042 1.04h-1.039v-4.166h1.039zM16.284 19.863h25.471c.74 0 1.349-.55 1.349-1.228 0-.679-.608-1.227-1.349-1.227H16.284c-.744 0-1.349.548-1.349 1.227 0 .678.605 1.228 1.349 1.228M16.284 24.601h25.471c.74 0 1.349-.548 1.349-1.227 0-.676-.608-1.227-1.349-1.227H16.284c-.744 0-1.349.551-1.349 1.227 0 .679.605 1.227 1.349 1.227M16.284 29.343h25.471c.74 0 1.349-.553 1.349-1.226 0-.683-.608-1.231-1.349-1.231H16.284c-.744 0-1.349.548-1.349 1.231 0 .673.605 1.226 1.349 1.226M16.284 38.821h13.954c.749 0 1.352-.548 1.352-1.227s-.603-1.227-1.352-1.227H16.284c-.744 0-1.349.548-1.349 1.227s.605 1.227 1.349 1.227M16.284 34.081h13.954c.749 0 1.352-.548 1.352-1.227s-.603-1.229-1.352-1.229H16.284c-.744 0-1.349.55-1.349 1.229s.605 1.227 1.349 1.227M16.284 43.561h13.954c.749 0 1.352-.548 1.352-1.226 0-.682-.603-1.229-1.352-1.229H16.284c-.744 0-1.349.547-1.349 1.229 0 .678.605 1.226 1.349 1.226M16.284 48.299h13.954c.749 0 1.352-.549 1.352-1.224 0-.679-.603-1.229-1.352-1.229H16.284c-.744 0-1.349.551-1.349 1.229 0 .675.605 1.224 1.349 1.224"/><path fill="#FFF" d="M47.541.188H20.074C12.573.188 6.04 7.537 6.04 13.558v39.293a3.169 3.169 0 0 0 3.168 3.166h38.333a3.166 3.166 0 0 0 3.162-3.166V3.356A3.17 3.17 0 0 0 47.541.188m.449 53.146H8.736V13.993h4.862c1.832 0 3.798-.636 4.929-1.767.934-.934 1.413-2.219 1.413-3.912 0-1.177-.04-5.224-.04-5.224h28.09v50.244z"/></symbol><symbol id="svg-icon-lock-menu" viewBox="0 0 32 32"><path fill="#484747" d="M24.981 31.896H6.653c-1.557 0-2.823-1.316-2.823-2.934V12.041c0-1.618 1.266-2.934 2.823-2.934h18.328c1.557 0 2.823 1.316 2.823 2.934v16.922c.001 1.617-1.266 2.933-2.823 2.933zM6.653 11.941l.011 17.022 18.268.1.038-17.022-18.317-.1zM10.239 8.3a1.416 1.416 0 0 1-1.402-1.221c-.076-.547-.649-4.449 2.69-5.942 2.657-1.194 5.908-1.224 8.481-.082 3.171 1.41 2.891 5.341 2.849 5.892a1.414 1.414 0 0 1-1.519 1.302A1.42 1.42 0 0 1 20.03 6.73c.077-1.061-.111-2.613-1.172-3.085-1.832-.813-4.256-.78-6.174.078-1.117.5-1.183 1.951-1.042 2.962A1.417 1.417 0 0 1 10.239 8.3z"/></symbol><symbol id="svg-icon-material-dashboard" viewBox="0 0 56 56"><path fill="#FFF" d="M28.063 7.254C12.625 7.254.112 19.767.112 35.204c0 4.369 1.018 8.494 2.807 12.175h4.509c.638 0 1.156.52 1.156 1.157v2.422c0 .162-.037.319-.099.46h2.081a1.13 1.13 0 0 1-.098-.46v-2.422c0-.638.515-1.157 1.153-1.157h5.609c.638 0 1.154.52 1.154 1.157v2.422c0 .162-.037.319-.099.46h2.177a1.147 1.147 0 0 1-.099-.46v-2.422c0-.638.519-1.157 1.154-1.157h5.609c.639 0 1.154.52 1.154 1.157v2.422c0 .162-.037.319-.098.46h22.642a27.814 27.814 0 0 0 5.19-16.214c0-15.437-12.514-27.95-27.951-27.95zm-.287 5.307a3.064 3.064 0 1 1 0 6.127 3.064 3.064 0 1 1 0-6.127zm-9.479 21.427v2.422c0 .638-.52 1.153-1.157 1.153h-5.607a1.153 1.153 0 0 1-1.154-1.153v-2.422c0-.637.516-1.157 1.154-1.157h5.607a1.16 1.16 0 0 1 1.157 1.157zm-5.233-15.3a3.068 3.068 0 0 1 0 6.134 3.063 3.063 0 0 1-3.065-3.063 3.069 3.069 0 0 1 3.065-3.071zm.213 24.981c0 .639-.518 1.157-1.156 1.157H6.515a1.157 1.157 0 0 1-1.156-1.157v-2.42c0-.638.518-1.152 1.156-1.152h5.606c.638 0 1.156.515 1.156 1.152v2.42zm10.237 0c0 .639-.518 1.157-1.156 1.157H16.75a1.156 1.156 0 0 1-1.154-1.157v-2.42c0-.638.516-1.152 1.154-1.152h5.608c.638 0 1.156.515 1.156 1.152v2.42zm11.522-20.755l-3.943 12.451c1.007.859 1.677 2.099 1.677 3.526a4.707 4.707 0 1 1-9.415 0c0-2.531 2.005-4.556 4.508-4.664l3.911-12.347a1.716 1.716 0 0 1 2.148-1.115 1.709 1.709 0 0 1 1.114 2.149zm5.575-1.155a3.07 3.07 0 0 1 3.065-3.071 3.068 3.068 0 0 1 0 6.134 3.064 3.064 0 0 1-3.065-3.063zm7.821 16.393a3.072 3.072 0 0 1-3.066-3.067 3.065 3.065 0 1 1 6.131 0 3.068 3.068 0 0 1-3.065 3.067z"/></symbol><symbol id="svg-icon-material-dashboard2" viewBox="0 0 56 56"><path fill="#FFF" d="M56.106 32.756c0-15.382-12.468-27.851-27.851-27.851S.402 17.374.402 32.756c0 4.244.977 8.245 2.675 11.842H1.606c-.833 0-1.513.676-1.513 1.513v2.481c0 .833.679 1.516 1.513 1.516h5.751c.721 0 1.298-.52 1.449-1.196h1.535c.152.677.728 1.196 1.448 1.196h5.751c.722 0 1.298-.52 1.448-1.196h1.502c.151.677.727 1.196 1.448 1.196h5.751c.72 0 1.297-.52 1.448-1.196h21.795a27.704 27.704 0 0 0 5.174-16.156zM27.97 10.193a3.052 3.052 0 1 1 0 6.105 3.053 3.053 0 1 1 0-6.105zm-16.187 20.2h5.587c.292 0 .551.118.754.298a.84.84 0 0 1 .184.503v2.483a.858.858 0 0 1-.859.855H11.7a.856.856 0 0 1-.854-.855v-2.483a.83.83 0 0 1 .18-.5c.202-.183.464-.301.757-.301zm11.875 10.726a.856.856 0 0 1-.855.857H17.05a.857.857 0 0 1-.854-.857v-2.477c0-.475.385-.855.854-.855h5.753c.471 0 .855.381.855.855v2.477zm-10.499-2.476v2.477a.855.855 0 0 1-.856.857h-5.75a.857.857 0 0 1-.856-.857v-2.477c0-.475.384-.855.856-.855h5.749a.853.853 0 0 1 .857.855zm.151-22.345a3.057 3.057 0 0 1 3.055 3.059 3.053 3.053 0 0 1-3.055 3.053 3.053 3.053 0 0 1-3.055-3.053 3.058 3.058 0 0 1 3.055-3.059zM8.215 48.592a.856.856 0 0 1-.857.855H1.606a.855.855 0 0 1-.854-.855V46.11c0-.476.382-.858.854-.858h5.751c.473 0 .857.383.857.858v2.482zm10.18 0a.854.854 0 0 1-.854.855H11.79a.858.858 0 0 1-.857-.855V46.11c0-.476.386-.858.857-.858h5.751c.472 0 .854.383.854.858v2.482zm9.296.855H21.94a.856.856 0 0 1-.857-.855V46.11c0-.476.384-.858.857-.858h5.751c.299 0 .549.165.702.398.044.123.08.253.08.391v2.414c0 .161-.038.316-.1.456h.106a.852.852 0 0 1-.788.536zm7.516-28.938l-3.932 12.406c1.001.857 1.668 2.092 1.668 3.513a4.69 4.69 0 1 1-9.378 0c0-2.521 1.998-4.538 4.49-4.646l3.9-12.304a1.708 1.708 0 0 1 2.14-1.111 1.71 1.71 0 0 1 1.112 2.142zm5.553-1.152a3.058 3.058 0 0 1 3.056-3.059 3.057 3.057 0 0 1 3.055 3.059 3.053 3.053 0 0 1-3.055 3.053 3.053 3.053 0 0 1-3.056-3.053zm7.793 16.336a3.057 3.057 0 1 1-.003-6.113 3.057 3.057 0 0 1 .003 6.113z"/></symbol><symbol id="svg-icon-po-dashboard" viewBox="0 0 56 56"><g fill="#FFF"><path d="M4.427 37.48h11.107c.325 0 .588-.24.588-.537 0-.295-.264-.534-.588-.534H4.427c-.324 0-.588.239-.588.534-.001.297.264.537.588.537zM4.427 39.547h11.107c.325 0 .588-.24.588-.536 0-.295-.264-.535-.588-.535H4.427c-.324 0-.588.24-.588.535-.001.296.264.536.588.536zM4.427 41.615h11.107c.325 0 .588-.243.588-.534 0-.301-.264-.539-.588-.539H4.427c-.324 0-.588.238-.588.539-.001.291.264.534.588.534zM15.58 44.677h-1.61c-.323 0-.588.24-.588.535 0 .296.266.535.588.535h1.61c.327 0 .589-.239.589-.535 0-.295-.262-.535-.589-.535zM15.58 42.608h-1.61c-.323 0-.588.24-.588.537 0 .295.266.535.588.535h1.61c.327 0 .589-.24.589-.535 0-.296-.262-.537-.589-.537zM15.58 46.743h-1.61c-.323 0-.588.239-.588.535 0 .297.266.535.588.535h1.61c.327 0 .589-.238.589-.535 0-.296-.262-.535-.589-.535zM15.58 48.812h-1.61c-.323 0-.588.237-.588.534 0 .296.266.534.588.534h1.61c.327 0 .589-.238.589-.534 0-.297-.262-.534-.589-.534zM6.037 44.677h-1.61c-.324 0-.588.24-.588.535 0 .296.264.535.588.535h1.61c.326 0 .589-.239.589-.535 0-.295-.264-.535-.589-.535zM6.037 42.608h-1.61c-.324 0-.588.24-.588.537 0 .295.264.535.588.535h1.61c.326 0 .589-.24.589-.535 0-.296-.264-.537-.589-.537zM6.037 46.743h-1.61c-.324 0-.588.239-.588.535 0 .297.264.535.588.535h1.61c.326 0 .589-.238.589-.535 0-.296-.264-.535-.589-.535zM6.037 48.812h-1.61c-.324 0-.588.237-.588.534 0 .296.264.534.588.534h1.61c.326 0 .589-.238.589-.534 0-.297-.264-.534-.589-.534z"/><path d="M28.599 4.865c-14.988 0-27.153 11.97-27.519 26.865-.673.949-1.073 2.014-1.073 2.998v17.137c0 .763.62 1.381 1.381 1.381h6.139l.242-1.17H1.183V34.92h2.12c.799 0 1.656-.278 2.149-.771.406-.406.615-.967.615-1.707 0-.512-.016-2.277-.016-2.277H18.3v21.911h-6.122l-.971-4.439c.99-.465 1.462-1.242 1.462-2.408 0-1.608-1.082-3.131-2.689-3.131s-2.71 1.303-2.71 2.91c0 1.044.352 1.959 1.18 2.474.078.05.161.09.243.13l-1.167 5.635 2.454-1.042 2.454 1.042h5.67a1.38 1.38 0 0 0 1.379-1.381v-3.468h31.552a27.414 27.414 0 0 0 5.114-15.982c.001-15.217-12.334-27.551-27.55-27.551zm-.282 5.23a3.02 3.02 0 0 1 3.021 3.022 3.019 3.019 0 0 1-3.021 3.02 3.02 3.02 0 1 1 0-6.042zm-14.502 6.041a3.022 3.022 0 0 1 0 6.044 3.023 3.023 0 0 1 0-6.044zm5.669 14.144c0-.095-.036-.179-.055-.269h.055v.269zm15.992-9.98l-3.888 12.274c.991.848 1.652 2.067 1.652 3.476a4.641 4.641 0 0 1-9.282 0c0-2.492 1.977-4.489 4.444-4.597l3.855-12.171a1.688 1.688 0 0 1 3.219 1.018zm5.493-1.139a3.02 3.02 0 1 1 6.042 0 3.017 3.017 0 0 1-3.019 3.02 3.02 3.02 0 0 1-3.023-3.02zm7.712 16.16a3.023 3.023 0 1 1 0 0z"/></g></symbol><symbol id="svg-icon-po" viewBox="0 0 56 56"><g fill="#FFF"><path d="M14.499 18.548c0 .68.608 1.232 1.355 1.232h25.542c.746 0 1.353-.553 1.353-1.232s-.606-1.229-1.353-1.229H15.854c-.747-.001-1.355.549-1.355 1.229zM15.832 24.531h25.542c.747 0 1.354-.548 1.354-1.229 0-.677-.606-1.229-1.354-1.229H15.832c-.747 0-1.355.552-1.355 1.229-.001.68.607 1.229 1.355 1.229zM42.705 28.058c0-.684-.606-1.234-1.353-1.234H15.81c-.747 0-1.355.55-1.355 1.234 0 .676.608 1.229 1.355 1.229h25.543c.746 0 1.352-.554 1.352-1.229zM41.436 36.333h-3.701c-.744 0-1.353.55-1.353 1.229s.608 1.229 1.353 1.229h3.701c.749 0 1.355-.55 1.355-1.229s-.606-1.229-1.355-1.229zM41.413 31.577h-3.701c-.745 0-1.353.551-1.353 1.232 0 .68.607 1.229 1.353 1.229h3.701c.749 0 1.355-.55 1.355-1.229.001-.681-.606-1.232-1.355-1.232zM41.457 41.084h-3.7c-.744 0-1.354.55-1.354 1.232 0 .68.609 1.229 1.354 1.229h3.7c.75 0 1.356-.55 1.356-1.229 0-.682-.606-1.232-1.356-1.232zM19.509 36.333h-3.702c-.744 0-1.353.55-1.353 1.229s.608 1.229 1.353 1.229h3.702c.749 0 1.355-.55 1.355-1.229s-.606-1.229-1.355-1.229zM19.509 31.577h-3.702c-.744 0-1.353.551-1.353 1.232 0 .68.608 1.229 1.353 1.229h3.702c.749 0 1.355-.55 1.355-1.229 0-.681-.606-1.232-1.355-1.232zM19.509 41.084h-3.702c-.744 0-1.353.55-1.353 1.232 0 .68.608 1.229 1.353 1.229h3.702c.749 0 1.355-.55 1.355-1.229 0-.682-.606-1.232-1.355-1.232z"/><path d="M47.254.11H19.708C12.185.11 5.632 7.481 5.632 13.518v39.407a3.18 3.18 0 0 0 3.179 3.174h14.126l.014-.066 5.628-2.387 5.615 2.381.014.072h13.046a3.176 3.176 0 0 0 3.169-3.174V3.287A3.18 3.18 0 0 0 47.254.11zm.448 53.298H33.688l.31 1.602-2.597-11.871c2.278-1.069 3.363-2.857 3.363-5.538 0-3.7-2.488-7.199-6.186-7.199-3.694 0-6.229 2.994-6.229 6.693 0 2.399.809 4.504 2.711 5.686.18.112.37.203.561.298l-2.14 10.33H8.337V13.955h4.875c1.839 0 3.81-.638 4.944-1.772.936-.936 1.417-2.225 1.417-3.923 0-1.18-.039-5.238-.039-5.238h28.168v50.386z"/></g></symbol><symbol id="svg-icon-restore-the-default" viewBox="0 0 32 32"><path fill="#FFF" d="M15.972-.001c4.274 0 8.326 1.735 11.289 4.683l4.683-4.683v13.694h-13.69l5.779-5.783a11.449 11.449 0 0 0-8.061-3.343c-6.293 0-11.413 5.117-11.413 11.407 0 6.291 5.12 11.41 11.413 11.41 4.061 0 7.844-2.185 9.879-5.706l3.952 2.283c-2.848 4.926-8.149 7.988-13.831 7.988C7.161 31.949 0 24.778 0 15.974 0 7.17 7.161-.001 15.972-.001z"/></symbol><symbol id="svg-icon-about" viewBox="0 0 32 32"><path fill="#484747" d="M17.718 10.314h-3.382V7.53h3.382v2.784zm-3.382 1.903h3.382v12.301h-3.382V12.217z"/><path fill="#484747" d="M16.025 32.049C7.189 32.049 0 24.86 0 16.025S7.189 0 16.025 0s16.023 7.189 16.023 16.025-7.187 16.024-16.023 16.024zm0-29.382c-7.366 0-13.359 5.992-13.359 13.358 0 7.366 5.993 13.358 13.359 13.358s13.357-5.992 13.357-13.358c.001-7.366-5.99-13.358-13.357-13.358z"/></symbol><symbol id="svg-icon-ac" viewBox="0 0 32 32"><path fill="#8C8C8C" d="M2.217 26.332l5.915-9.912 10.267-2.587 3.571-4.911L32 5.173v21.778z"/><path fill="#FFFEFE" d="M4.839 25.613H2.816l-.599-.352 6.387-4.726 6.566 2.037 3.487-4.69 4.603 3.511 4.486-2.742L32 21.335v2.008l-4.239-2.622-4.743 2.73-4.004-3.053-3.164 4.259-6.902-2.148z"/><path fill="#393A3A" d="M19.25 14.226l3.854-5.091 8.883-3.233L32 4.004 21.999 7.635l-3.788 5.005-11.059 2.677-4.336 7.824V5.344a1.34 1.34 0 1 0-2.678 0v21.607c0 .74.6 1.34 1.339 1.34h29.17a1.34 1.34 0 0 0 0-2.678H3.49l4.844-8.747 10.916-2.64z"/></symbol><symbol id="svg-icon-ac-on" viewBox="0 0 32 32"><path fill="#C2C1C1" d="M2.253 26.122l5.906-9.901 10.255-2.582 3.568-4.909L32 4.988v21.75z"/><path fill="#707070" d="M4.873 25.406H2.852l-.599-.361 6.373-4.713 6.562 2.033 3.481-4.69 4.602 3.516 4.479-2.742L32 21.123v2.011l-4.234-2.621-4.745 2.733-3.998-3.057-3.158 4.262-6.889-2.145z"/><path fill="#FFF" d="M19.265 14.03l3.847-5.089 8.874-3.223L32 3.821l-9.991 3.622-3.783 5.007-11.05 2.672-4.324 7.808V5.162a1.34 1.34 0 0 0-1.336-1.341c-.738 0-1.34.603-1.34 1.341v21.577c0 .739.602 1.342 1.34 1.342h29.133c.738 0 1.337-.603 1.337-1.342 0-.737-.599-1.332-1.337-1.332H3.521l4.842-8.741 10.902-2.636z"/></symbol><symbol id="svg-icon-change" viewBox="0 0 32 32"><g fill="#373838"><path d="M16.777 19.312h.655c.295-.008.656-.132.656-.654v-1.313c0-.534-.361-.652-.656-.66h-.655v2.627zM14.148 13.403v1.309c0 .532.361.653.66.659h.656v-2.624h-.656c-.298.004-.66.127-.66.656z"/><path d="M16.117 8.998a7.027 7.027 0 0 0-7.027 7.029 7.03 7.03 0 1 0 7.027-7.029zm1.316 6.373c.791 0 1.969.525 1.969 1.973v1.313c0 1.441-1.178 1.971-1.969 1.971h-.655v.652a.654.654 0 0 1-.66.654.653.653 0 0 1-.653-.654v-.652h-1.973a.668.668 0 0 1-.659-.66c0-.358.301-.656.659-.656h1.973v-2.628h-.656c-.8 0-1.976-.525-1.976-1.972v-1.309c0-1.447 1.175-1.972 1.976-1.972h.656v-.656a.656.656 0 0 1 1.313 0v.656h1.971a.659.659 0 0 1 0 1.316h-1.971v2.624h.655z"/></g><path fill="#373838" d="M13.083 26.059c-4.483-.914-7.866-5.089-7.866-9.833 0-2.222.767-4.25 2.016-5.896H2.629a13.666 13.666 0 0 0-1.343 5.896c0 6.93 5.131 12.808 11.797 13.76v2.045l7.863-4.008-7.863-4.137v2.173zM18.98 1.98V-.032l-7.864 3.98 7.864 4.417V5.917c4.482.915 7.863 5.081 7.863 9.828 0 2.218-.769 4.25-2.015 5.901h4.606a13.676 13.676 0 0 0 1.34-5.901C30.775 8.811 25.642 2.938 18.98 1.98z"/></symbol><symbol id="svg-icon-change-on" viewBox="0 0 32 32"><g fill="#FFF"><path d="M16.742 19.343h.656c.294-.008.654-.131.654-.66v-1.309c0-.527-.36-.65-.654-.656h-.656v2.625zM14.121 13.445v1.305c0 .528.361.646.659.655h.653v-2.619h-.653c-.298.008-.659.128-.659.659z"/><path d="M16.085 9.048a7.014 7.014 0 0 0-7.012 7.016c0 3.872 3.141 7.017 7.012 7.017a7.017 7.017 0 0 0 7.017-7.017 7.013 7.013 0 0 0-7.017-7.016zm1.313 6.358c.792 0 1.967.524 1.967 1.968v1.309c0 1.445-1.175 1.969-1.967 1.969h-.656v.656a.655.655 0 0 1-1.31 0v-.656h-1.967a.66.66 0 0 1-.656-.654c0-.361.297-.654.656-.654h1.967v-2.625h-.652c-.796 0-1.97-.522-1.97-1.967v-1.305c0-1.445 1.174-1.968 1.97-1.968h.653v-.659a.655.655 0 0 1 1.31 0v.659h1.968a.655.655 0 0 1 0 1.309h-1.968v2.619h.655z"/></g><path fill="#FFF" d="M13.058 26.073c-4.474-.914-7.849-5.076-7.849-9.81 0-2.219.765-4.246 2.012-5.889H2.625a13.644 13.644 0 0 0-1.341 5.889c0 6.917 5.121 12.777 11.774 13.734v2.035l7.849-4-7.849-4.127v2.168zM18.941 2.044V.033l-7.846 3.976 7.846 4.405V5.969c4.478.913 7.851 5.075 7.851 9.809 0 2.219-.767 4.246-2.012 5.891h4.599a13.668 13.668 0 0 0 1.337-5.891c0-6.916-5.123-12.778-11.775-13.734z"/></symbol><symbol id="svg-icon-chart" viewBox="0 0 32 32"><path fill="#FFF" d="M0 5.31h8.032v23.479H0zM11.982 10.365h8.035v18.423h-8.035zM23.965 12.306H32v16.482h-8.035z"/></symbol><symbol id="svg-icon-company" viewBox="0 0 32 32"><path fill="#484747" d="M30.275 12.945H8.612v-8.23c0-.971-.872-1.173-1.637-.295-2.367 2.717-3.713 4.263-5.425 6.2C.333 11.998 0 12.644 0 13.203v12.105c0 .973.787 1.76 1.758 1.76h28.518c.971 0 1.758-.787 1.758-1.76V14.703a1.76 1.76 0 0 0-1.759-1.758zM5.538 23.799H3.342v-4.142h2.196v4.142zm0-6.395H3.342v-4.142h2.196v4.142zm8.939 6.391h-4.144v-2.196h4.144v2.196zm0-5.037h-4.144v-2.196h4.144v2.196zm7.163 5.037h-4.142v-2.196h4.142v2.196zm0-5.037h-4.142v-2.196h4.142v2.196zm7.165 5.037h-4.144v-2.196h4.144v2.196zm0-5.037h-4.144v-2.196h4.144v2.196z"/></symbol><symbol id="svg-icon-count" viewBox="0 0 32 32"><path fill="#2F3030" d="M6.846 23.113c-.046-.759.029-1.454.235-2.092.194-.632.485-1.21.869-1.732.207-.27.456-.493.688-.75v-4.363h-1.48c-.059-1.025.059-1.931.308-2.736H4.995c-.021.628-.177 1.168-.456 1.606-.265.438-.62.785-1.041 1.033-.435.27-.911.456-1.446.565a7.535 7.535 0 0 1-1.641.139v3.187h3.613v8.896h4.612v-3.752h-1.79zM18.933 16.755c.013-.915.189-1.708.535-2.369a4.857 4.857 0 0 1 1.387-1.665 6.437 6.437 0 0 1 2.045-.966 9.383 9.383 0 0 1 2.454-.316c1.13 0 2.065.139 2.832.426.759.291 1.374.649 1.843 1.054.46.418.793.856.986 1.312.202.459.3.852.3 1.176 0 .81-.105 1.434-.315 1.872-.225.438-.452.759-.705.957-.244.215-.481.337-.696.384-.218.046-.315.076-.315.085v.05c0 .03.06.055.189.084.123.026.278.089.461.165.185.084.383.194.605.328.224.144.431.338.611.607.19.257.346.582.468.97.128.4.19.886.19 1.463 0 .468-.11.978-.3 1.548-.201.561-.539 1.079-1.05 1.567-.488.485-1.158.898-1.981 1.236-.839.323-1.892.488-3.145.488-1.155 0-2.12-.11-2.926-.358-.797-.245-1.45-.561-1.961-.94-.501-.388-.894-.816-1.171-1.277-.271-.468-.478-.915-.604-1.374a5.355 5.355 0 0 1-.198-1.227c-.004-.375 0-.649.017-.844h4.203c-.029.83.169 1.442.6 1.843.215.248.472.421.792.526.316.102.671.16 1.05.16.633 0 1.134-.134 1.51-.392.362-.258.551-.704.551-1.34 0-.347-.058-.616-.177-.818a1.464 1.464 0 0 0-.463-.493 1.837 1.837 0 0 0-.666-.236 6.602 6.602 0 0 0-1.518-.013c-.186.013-.358.051-.523.08v-3.019c.165.013.347.033.548.055.203.025.443.029.738.029.24 0 .477-.012.721-.038.245-.033.473-.093.679-.202.198-.101.372-.245.506-.434.135-.185.203-.417.203-.712a.998.998 0 0 0-.194-.624 1.353 1.353 0 0 0-.477-.431 2.409 2.409 0 0 0-.648-.223 2.928 2.928 0 0 0-.7-.08c-.291 0-.578.038-.84.118a1.839 1.839 0 0 0-1.143.966c-.108.24-.16.519-.143.843h-4.165z"/><path fill="#2F3030" d="M21.138 21.014v-1.838h-6.986v-.013a31.003 31.003 0 0 1 2.285-1.281c.599-.32 1.13-.68 1.652-1.05v-.258h-.05c.004-.126.041-.24.05-.371v-.261h.025c.067-.636.206-1.239.464-1.737a4.684 4.684 0 0 1 1.396-1.656c.27-.207.62-.292.932-.439-.013-.771-.16-1.458-.451-2.04a4.033 4.033 0 0 0-1.277-1.518c-.556-.405-1.223-.704-2.003-.902-.771-.203-1.627-.304-2.554-.304-1.033 0-1.965.156-2.804.447s-1.543.733-2.112 1.294c-.582.569-1.012 1.265-1.294 2.095-.274.834-.388 1.774-.328 2.837h4.169c-.03-.944.13-1.707.477-2.293.341-.586.957-.869 1.846-.869.514 0 .957.126 1.315.405.363.279.548.767.548 1.472 0 .283-.063.536-.211.758a2.293 2.293 0 0 1-.531.586c-.215.186-.447.35-.688.498-.245.147-.464.274-.646.396-.501.295-.999.6-1.517.902a22.55 22.55 0 0 0-1.493.954c-.48.325-.935.687-1.353 1.075a7.83 7.83 0 0 0-1.121 1.239 5.656 5.656 0 0 0-.873 1.725c-.207.637-.283 1.332-.236 2.082h10.005a4.605 4.605 0 0 1-.187-1.092 8.318 8.318 0 0 1 .009-.843h3.542z"/></symbol><symbol id="svg-icon-count-on" viewBox="0 0 32 32"><path fill="#FFF" d="M6.846 23.113c-.046-.759.029-1.454.235-2.092.194-.632.485-1.21.869-1.732.207-.27.456-.493.688-.75v-4.363h-1.48c-.059-1.025.059-1.931.308-2.736H4.995c-.021.628-.177 1.168-.456 1.606-.265.438-.62.785-1.041 1.033-.435.27-.911.456-1.446.565a7.535 7.535 0 0 1-1.641.139v3.187h3.613v8.896h4.612v-3.752h-1.79zM18.933 16.755c.013-.915.189-1.708.535-2.369a4.857 4.857 0 0 1 1.387-1.665 6.437 6.437 0 0 1 2.045-.966 9.383 9.383 0 0 1 2.454-.316c1.13 0 2.065.139 2.832.426.759.291 1.374.649 1.843 1.054.46.418.793.856.986 1.312.202.459.3.852.3 1.176 0 .81-.105 1.434-.315 1.872-.225.438-.452.759-.705.957-.244.215-.481.337-.696.384-.218.046-.315.076-.315.085v.05c0 .03.06.055.189.084.123.026.278.089.461.165.185.084.383.194.605.328.224.144.431.338.611.607.19.257.346.582.468.97.128.4.19.886.19 1.463 0 .468-.11.978-.3 1.548-.201.561-.539 1.079-1.05 1.567-.488.485-1.158.898-1.981 1.236-.839.323-1.892.488-3.145.488-1.155 0-2.12-.11-2.926-.358-.797-.245-1.45-.561-1.961-.94-.501-.388-.894-.816-1.171-1.277-.271-.468-.478-.915-.604-1.374a5.355 5.355 0 0 1-.198-1.227c-.004-.375 0-.649.017-.844h4.203c-.029.83.169 1.442.6 1.843.215.248.472.421.792.526.316.102.671.16 1.05.16.633 0 1.134-.134 1.51-.392.362-.258.551-.704.551-1.34 0-.347-.058-.616-.177-.818a1.464 1.464 0 0 0-.463-.493 1.837 1.837 0 0 0-.666-.236 6.602 6.602 0 0 0-1.518-.013c-.186.013-.358.051-.523.08v-3.019c.165.013.347.033.548.055.203.025.443.029.738.029.24 0 .477-.012.721-.038.245-.033.473-.093.679-.202.198-.101.372-.245.506-.434.135-.185.203-.417.203-.712a.998.998 0 0 0-.194-.624 1.353 1.353 0 0 0-.477-.431 2.409 2.409 0 0 0-.648-.223 2.928 2.928 0 0 0-.7-.08c-.291 0-.578.038-.84.118a1.839 1.839 0 0 0-1.143.966c-.108.24-.16.519-.143.843h-4.165z"/><path fill="#FFF" d="M21.138 21.014v-1.838h-6.986v-.013a31.003 31.003 0 0 1 2.285-1.281c.599-.32 1.13-.68 1.652-1.05v-.258h-.05c.004-.126.041-.24.05-.371v-.261h.025c.067-.636.206-1.239.464-1.737a4.684 4.684 0 0 1 1.396-1.656c.27-.207.62-.292.932-.439-.013-.771-.16-1.458-.451-2.04a4.033 4.033 0 0 0-1.277-1.518c-.556-.405-1.223-.704-2.003-.902-.771-.203-1.627-.304-2.554-.304-1.033 0-1.965.156-2.804.447s-1.543.733-2.112 1.294c-.582.569-1.012 1.265-1.294 2.095-.274.834-.388 1.774-.328 2.837h4.169c-.03-.944.13-1.707.477-2.293.341-.586.957-.869 1.846-.869.514 0 .957.126 1.315.405.363.279.548.767.548 1.472 0 .283-.063.536-.211.758a2.293 2.293 0 0 1-.531.586c-.215.186-.447.35-.688.498-.245.147-.464.274-.646.396-.501.295-.999.6-1.517.902a22.55 22.55 0 0 0-1.493.954c-.48.325-.935.687-1.353 1.075a7.83 7.83 0 0 0-1.121 1.239 5.656 5.656 0 0 0-.873 1.725c-.207.637-.283 1.332-.236 2.082h10.005a4.605 4.605 0 0 1-.187-1.092 8.318 8.318 0 0 1 .009-.843h3.542z"/></symbol><symbol id="svg-icon-dollar" viewBox="0 0 32 32"><g fill="#2F3030"><path d="M17.526 23.493h1.493c.667-.021 1.487-.294 1.487-1.493v-2.976c0-1.209-.82-1.482-1.487-1.504h-1.493v5.973zM11.554 10.066v2.976c0 1.209.826 1.482 1.499 1.504h1.494V8.583h-1.494c-.674.011-1.499.274-1.499 1.483z"/><path d="M16.033.066C7.216.066.071 7.205.071 16.028S7.216 32 16.033 32C24.855 32 32 24.851 32 16.028 32 7.206 24.855.066 16.033.066zm2.987 14.48c1.798 0 4.474 1.188 4.474 4.479V22c0 3.281-2.676 4.47-4.474 4.47h-1.493v1.503c0 .811-.673 1.482-1.488 1.482a1.492 1.492 0 0 1-1.492-1.482V26.47h-4.48a1.5 1.5 0 0 1-1.493-1.482c0-.82.679-1.494 1.493-1.494h4.48v-5.973h-1.494c-1.804 0-4.479-1.188-4.479-4.479v-2.976c0-3.291 2.676-4.469 4.479-4.469h1.494V4.094c0-.82.667-1.482 1.492-1.482.815 0 1.488.662 1.488 1.482v1.503H22c.82 0 1.493.662 1.493 1.482S22.82 8.583 22 8.583h-4.474v5.962h1.494z"/></g></symbol><symbol id="svg-icon-dollar-on" viewBox="0 0 32 32"><g fill="#FFF"><path d="M17.526 23.493h1.493c.667-.021 1.487-.294 1.487-1.493v-2.976c0-1.209-.82-1.482-1.487-1.504h-1.493v5.973zM11.554 10.066v2.976c0 1.209.826 1.482 1.499 1.504h1.494V8.583h-1.494c-.674.011-1.499.274-1.499 1.483z"/><path d="M16.033.066C7.216.066.071 7.205.071 16.028S7.216 32 16.033 32C24.855 32 32 24.851 32 16.028 32 7.206 24.855.066 16.033.066zm2.987 14.48c1.798 0 4.474 1.188 4.474 4.479V22c0 3.281-2.676 4.47-4.474 4.47h-1.493v1.503c0 .811-.673 1.482-1.488 1.482a1.492 1.492 0 0 1-1.492-1.482V26.47h-4.48a1.5 1.5 0 0 1-1.493-1.482c0-.82.679-1.494 1.493-1.494h4.48v-5.973h-1.494c-1.804 0-4.479-1.188-4.479-4.479v-2.976c0-3.291 2.676-4.469 4.479-4.469h1.494V4.094c0-.82.667-1.482 1.492-1.482.815 0 1.488.662 1.488 1.482v1.503H22c.82 0 1.493.662 1.493 1.482S22.82 8.583 22 8.583h-4.474v5.962h1.494z"/></g></symbol><symbol id="svg-icon-end-day" viewBox="0 0 32 32"><g fill="#484747"><path d="M29.033 3.382h-3.302V1.916h-2.112v1.466H8.513V1.916H6.401v1.466H3.098A2.971 2.971 0 0 0 .13 6.35v20.44a2.971 2.971 0 0 0 2.968 2.969h25.936a2.97 2.97 0 0 0 2.967-2.969V6.351a2.972 2.972 0 0 0-2.968-2.969zM3.098 5.58h3.304v1.832h2.112V5.58H23.62v1.832h2.112V5.58h3.302c.423 0 .769.346.769.771v5.317H2.328V6.351c0-.425.345-.771.77-.771zm25.935 21.98H3.098a.77.77 0 0 1-.77-.77V13.78h27.474v13.01a.77.77 0 0 1-.769.77z"/><path d="M5.442 16.978h5.495v2.112H5.442zM13.593 16.978h5.496v2.112h-5.496zM21.743 16.978h5.496v2.112h-5.496zM5.442 22.107h5.495v2.112H5.442zM13.593 22.107h5.496v2.112h-5.496zM21.743 22.107h5.496v2.112h-5.496z"/></g></symbol><symbol id="svg-icon-exit" viewBox="0 0 32 32"><path fill="#484747" d="M24.41 31a7.75 7.75 0 0 1-.264-.006l-3.407.003a1.377 1.377 0 0 1-1.378-1.372l-.015-4.313-4.729.014-.015 4.299a1.376 1.376 0 0 1-1.378 1.372h-4.33c-.333.011-1.921-.072-2.872-1.022-.863-.858-.981-2.653-.974-3.647V18.34a1.379 1.379 0 0 1-1.634-.308L.706 15.048a1.38 1.38 0 0 1-.353-1.05 1.38 1.38 0 0 1 .533-.968l11.931-9.173c.212-.183 1.623-1.322 3.192-1.37h.003c1.752 0 3.192 1.251 3.351 1.394l.676.531V3.383c0-.762.616-1.378 1.378-1.378h3.749c.762 0 1.378.616 1.378 1.378v6.032l4.896 3.604c.6.441.739 1.281.313 1.895l-2.07 2.979c-.215.313-.552.52-.926.575a1.19 1.19 0 0 1-.342.009v8.185c.032.236.169 2.175-.913 3.333-.773.83-2.107 1.005-3.092 1.005zm-2.299-2.759l2.299.003c.646 0 1.036-.116 1.127-.172.084-.116.175-.784.127-1.276l-.006-10.879a1.377 1.377 0 0 1 2.228-1.084l.367.289.47-.678-4.375-3.222a1.37 1.37 0 0 1-.561-1.109v-5.35h-.993V7.25c0 .527-.301 1.009-.774 1.241a1.383 1.383 0 0 1-1.457-.159L17.59 5.988c-.38-.331-1.053-.746-1.483-.746-.496.014-1.254.499-1.554.754L3.751 14.303l.945 1.041 1.023-.61a1.377 1.377 0 1 1 2.084 1.183v10.419c-.003.691.113 1.553.238 1.778.028.011.441.127.822.127h2.986l.015-4.295a1.379 1.379 0 0 1 1.374-1.373l7.478-.02h.003c.76 0 1.375.614 1.378 1.373l.014 4.315z"/></symbol><symbol id="svg-icon-login-out" viewBox="0 0 32 32"><g fill="#484747"><path d="M23.194 24.658c-.668 0-1.208.539-1.208 1.208v3.673H4.895V2.586h17.092v3.82a1.207 1.207 0 1 0 2.414 0V1.38c0-.667-.54-1.207-1.206-1.207H3.688c-.667 0-1.207.54-1.207 1.207v29.364c0 .667.54 1.206 1.207 1.206h19.506c.666 0 1.206-.539 1.206-1.206v-4.878c0-.669-.54-1.208-1.206-1.208z"/><path d="M29.864 15.06l-6.001-6.001a1.205 1.205 0 0 0-1.706 0 1.204 1.204 0 0 0 0 1.707l3.891 3.891H12.776a1.206 1.206 0 1 0 0 2.414h13.371l-3.891 3.892a1.205 1.205 0 0 0 .854 2.061 1.2 1.2 0 0 0 .853-.353l5.902-5.904a1.21 1.21 0 0 0-.001-1.707z"/></g></symbol><symbol id="svg-icon-m" viewBox="0 0 32 32"><path fill="#2F3030" d="M.226 1.125h9.091l6.873 20.206h.084L22.77 1.125h9.096V30.5H25.82V9.68h-.085L18.537 30.5h-4.98L6.358 9.888h-.085V30.5H.226V1.125z"/></symbol><symbol id="svg-icon-m-on" viewBox="0 0 32 32"><path fill="#FFF" d="M.226 1.125h9.091l6.873 20.206h.084L22.77 1.125h9.096V30.5H25.82V9.68h-.085L18.537 30.5h-4.98L6.358 9.888h-.085V30.5H.226V1.125z"/></symbol><symbol id="svg-icon-nvoice-status-chart" viewBox="0 0 32 32"><path fill="#484747" d="M0 3.462h5.9v26.329H0zM13.555 29.756H6.803V14.198h6.752v15.558zm-5.697-1.052H12.5V15.248H7.858v13.456zM18.24 7.053h5.899v22.738H18.24zM31.94 29.833h-6.902V9.717h6.902v20.116zm-5.696-1.206h4.491V10.923h-4.491v17.704z"/></symbol><symbol id="svg-icon-pack-up" viewBox="0 0 32 32"><path fill="#FFF" d="M0 7.724l4.684 2.392v7.359l4.684 2.19v-7.76l5.588 2.774v17.406L0 25.407zM16.619 14.679l14.959-6.955v17.529l-14.959 6.832zM10.445 11.047l5.418 2.426 14.505-6.724-5.591-2.786zM.845 6.795l5.122 2.361L20.408 2.05 16.014.001z"/></symbol><symbol id="svg-icon-refresh" viewBox="0 0 32 32"><g fill="#FFF"><path d="M27.555 16.138c-.056 6.399-5.29 11.547-11.688 11.488a11.38 11.38 0 0 1-4.725-1.063l2.982-2.335-10.27-3.026.472 10.7 3.081-2.409a15.858 15.858 0 0 0 8.42 2.508c8.809.075 16.025-7.007 16.1-15.822a15.795 15.795 0 0 0-.395-3.612l-4.261.951c.185.844.293 1.718.284 2.62zM.382 19.471l4.272-.939a11.618 11.618 0 0 1-.282-2.594C4.43 9.537 9.665 4.391 16.064 4.445c1.829.017 3.547.47 5.079 1.24l-2.845 2.342 10.346 2.771L27.909.113l-3.168 2.611A15.852 15.852 0 0 0 16.104.07C7.284-.004.077 7.082.002 15.898a16.12 16.12 0 0 0 .38 3.573z"/></g></symbol><symbol id="svg-icon-server" viewBox="0 0 32 32"><path fill="#484747" d="M29.122 11.465H2.559c-1.399 0-2.536-1.071-2.536-2.386V4.685c0-1.316 1.137-2.387 2.536-2.387h26.563c1.397 0 2.535 1.071 2.535 2.387v4.394c0 1.316-1.137 2.386-2.535 2.386zm.031-6.78l-26.594.117-.032 4.277 26.595-.117c.053 0 .079-.019.079-.019l-.048-4.258zM29.122 21.082H2.559c-1.399 0-2.536-1.072-2.536-2.389V14.3c0-1.316 1.137-2.387 2.536-2.387h26.563c1.397 0 2.535 1.071 2.535 2.387v4.394c0 1.316-1.137 2.388-2.535 2.388zm.031-6.782l-26.594.117-.032 4.277 26.595-.113c.053 0 .077-.02.077-.02l-.046-4.261zM29.122 30.717H2.559c-1.399 0-2.536-1.07-2.536-2.387v-4.396c0-1.314 1.137-2.387 2.536-2.387h26.563c1.397 0 2.535 1.072 2.535 2.387v4.396c0 1.316-1.137 2.387-2.535 2.387zm.031-6.783l-26.594.117-.032 4.279 26.595-.117c.053 0 .077-.018.079-.018l-.048-4.261z"/><path fill="#484747" d="M4.75 5.462h1.521v2.836H4.75zM7.606 5.462h1.523v2.836H7.606zM10.467 5.462h1.518v2.836h-1.518zM25.271 6.13h1.521v1.503h-1.521zM4.75 15.183h1.521v2.836H4.75zM7.606 15.183h1.523v2.836H7.606zM10.467 15.183h1.518v2.836h-1.518zM25.271 15.847h1.521v1.504h-1.521zM4.75 24.711h1.521v2.84H4.75zM7.606 24.711h1.523v2.84H7.606zM10.467 24.711h1.518v2.84h-1.518zM25.271 25.379h1.521v1.506h-1.521z"/></symbol><symbol id="svg-icon-start-day" viewBox="0 0 32 32"><g fill="#484747"><path d="M29.033 3.382h-3.302V1.916h-2.112v1.466H8.513V1.916H6.401v1.466H3.098A2.971 2.971 0 0 0 .13 6.35v20.44a2.971 2.971 0 0 0 2.968 2.969h25.936a2.97 2.97 0 0 0 2.967-2.969V6.351a2.972 2.972 0 0 0-2.968-2.969zM3.098 5.58h3.304v1.832h2.112V5.58H23.62v1.832h2.112V5.58h3.302c.423 0 .769.346.769.771v5.317H2.328V6.351c0-.425.345-.771.77-.771zm25.935 21.98H3.098a.77.77 0 0 1-.77-.77V13.78h27.474v13.01a.77.77 0 0 1-.769.77z"/><path d="M5.442 16.978h5.495v2.112H5.442zM13.593 16.978h5.496v2.112h-5.496zM21.743 16.978h5.496v2.112h-5.496zM5.442 22.107h5.495v2.112H5.442zM13.593 22.107h5.496v2.112h-5.496zM21.743 22.107h5.496v2.112h-5.496z"/></g></symbol><symbol id="svg-icon-status" viewBox="0 0 32 32"><g fill="#484747"><path d="M15.126 23.77c-1.576 0-2.896 1.056-3.328 2.492H6.985a3.479 3.479 0 0 0-2.331-2.328v-3.07a3.483 3.483 0 0 0 2.408-2.579h4.659a3.494 3.494 0 0 0 3.405 2.743 3.492 3.492 0 0 0 3.404-2.743h4.702a3.292 3.292 0 0 0 3.128 2.291 3.306 3.306 0 0 0 3.304-3.304 3.295 3.295 0 0 0-2.321-3.138V10.22a3.492 3.492 0 0 0 2.742-3.405 3.494 3.494 0 0 0-3.49-3.49c-1.388 0-2.578.82-3.14 1.994h-5.189a3.486 3.486 0 0 0-3.14-1.994c-1.924 0-3.49 1.566-3.49 3.49s1.566 3.49 3.49 3.49c1.754 0 3.195-1.305 3.439-2.991h4.589a3.482 3.482 0 0 0 2.194 2.751v4.077a3.29 3.29 0 0 0-2.126 2.146h-4.847c-.504-1.309-1.766-2.243-3.25-2.243s-2.747.935-3.25 2.243H6.907a3.486 3.486 0 0 0-3.25-2.243 3.494 3.494 0 0 0-3.49 3.49c0 1.576 1.057 2.896 2.493 3.327v3.07c-1.436.433-2.493 1.751-2.493 3.326a3.495 3.495 0 0 0 3.49 3.491c1.576 0 2.896-1.056 3.328-2.494h4.813c.433 1.438 1.752 2.494 3.328 2.494a3.495 3.495 0 0 0 3.49-3.491 3.494 3.494 0 0 0-3.49-3.488zm0-15.458a1.498 1.498 0 0 1-1.496-1.496c0-.825.671-1.496 1.496-1.496s1.496.671 1.496 1.496-.671 1.496-1.496 1.496zm11.469-2.993c.823 0 1.495.671 1.495 1.496s-.672 1.496-1.495 1.496a1.498 1.498 0 0 1-1.496-1.496c0-.824.672-1.496 1.496-1.496zM15.126 16.041c.825 0 1.496.671 1.496 1.496 0 .824-.671 1.496-1.496 1.496a1.497 1.497 0 0 1 0-2.992zM2.161 17.536c0-.825.671-1.496 1.496-1.496s1.496.671 1.496 1.496c0 .824-.671 1.496-1.496 1.496a1.498 1.498 0 0 1-1.496-1.496zm1.496 11.22a1.498 1.498 0 0 1-1.496-1.496c0-.823.671-1.495 1.496-1.495s1.496.672 1.496 1.495c0 .824-.671 1.496-1.496 1.496zm11.469 0a1.498 1.498 0 0 1-1.496-1.496c0-.823.671-1.495 1.496-1.495s1.496.672 1.496 1.495c0 .824-.671 1.496-1.496 1.496z"/><path d="M24.289 13.233v-1.11a5.584 5.584 0 0 0-3.191 3.388h1.106c.423-.975 1.142-1.792 2.085-2.278zM28.153 12.036v1.044a4.568 4.568 0 0 1 2.77 4.193 4.565 4.565 0 0 1-4.563 4.561c-1.752 0-3.258-1.005-4.021-2.458h-1.116a5.563 5.563 0 0 0 5.138 3.455 5.564 5.564 0 0 0 5.56-5.558c-.001-2.435-1.587-4.486-3.768-5.237z"/></g></symbol><symbol id="svg-icon-stretch-out" viewBox="0 0 32 32"><path fill="#FFF" d="M2.915 14.575l9.159 2.996 3.329-3.912v12.987L2.915 21.568zM16.818 13.659l3.331 3.831 8.994-2.831v6.993l-12.325 4.994z"/><path fill="#FFF" d="M29.474 8.624L16.068 4.75 2.75 8.624 0 12.244l11.74 3.997 3.497-4.163.832.25.75-.25 3.415 4.163 11.905-3.997-2.665-3.62zM15.956 11.31L6.527 8.624l9.511-2.683 9.575 2.683-9.657 2.686z"/></symbol><symbol id="svg-icon-submit" viewBox="0 0 32 32"><path fill="#FFF" d="M31.531 7.008L24.467.424A1.596 1.596 0 0 0 23.388 0H1.581C.708 0 0 .708 0 1.581v28.871a1.58 1.58 0 0 0 1.581 1.579h28.874a1.58 1.58 0 0 0 1.578-1.579V8.163a1.585 1.585 0 0 0-.502-1.155zm-11.673-3.85l-.006 5.864h-3.835V3.158h3.841zm3.604 25.715H7.648v-8.19h15.813v8.19zm5.409 0h-2.254v-9.77c0-.872-.703-1.58-1.577-1.58H6.068a1.58 1.58 0 0 0-1.581 1.58v9.77H3.164V3.158h1.32L4.469 10.6c0 .417.169.821.462 1.121.3.295.703.46 1.118.46h15.38c.872 0 1.578-.706 1.581-1.578l.012-7.205 5.849 5.451v20.024z"/></symbol><symbol id="svg-icon-switch-language" viewBox="0 0 32 32"><path fill="#484747" d="M16 .233c-.063 0-.124.008-.188.011-.019-.003-.042-.008-.061-.008-.023 0-.042.013-.066.013C7.139.418.235 7.411.235 16c0 8.59 6.903 15.582 15.45 15.752.024 0 .042.014.066.014.019 0 .042-.006.061-.008.063.002.124.01.188.01 8.692 0 15.765-7.072 15.765-15.768C31.765 7.306 24.692.233 16 .233zm12.919 14.388h-3.094a20.185 20.185 0 0 0-1.521-6.129c.507-.322.98-.706 1.45-1.088a12.927 12.927 0 0 1 3.165 7.217zM17.104 3.541c1.026.66 2.326 1.913 3.496 3.756-1.123.417-2.304.634-3.495.743V3.541zm4.825.887c.634.325 1.241.687 1.81 1.11-.232.172-.454.356-.697.512a17.655 17.655 0 0 0-1.113-1.622zm-7.53-.734v4.328c-1.111-.119-2.208-.328-3.255-.713 1.075-1.697 2.268-2.917 3.255-3.615zM8.7 6.061c-.197-.127-.378-.277-.568-.417.483-.367.993-.692 1.525-.991-.331.436-.649.909-.957 1.408zm5.699 4.766v3.794H8.702c.194-1.839.609-3.461 1.188-4.864 1.431.589 2.95.925 4.509 1.07zm0 6.499v3.865c-1.635.154-3.221.531-4.716 1.17-.606-1.445-.998-3.131-1.083-5.035h5.799zm0 6.672v4.322c-1.022-.686-2.289-1.887-3.401-3.539 1.092-.42 2.237-.662 3.401-.783zM9.444 27.23a13.285 13.285 0 0 1-1.298-.863c.152-.111.298-.23.454-.332.271.42.552.819.844 1.195zm7.66 1.235v-4.486c1.247.111 2.476.359 3.644.809-1.21 1.796-2.587 3.026-3.644 3.677zm6.04-2.422c.201.135.389.285.584.43-.504.375-1.043.693-1.599.99.351-.44.69-.918 1.015-1.42zm-6.04-4.873v-3.844h6.045c-.085 1.908-.479 3.596-1.086 5.043-1.569-.672-3.236-1.06-4.959-1.199zm0-6.549v-3.773c1.644-.132 3.244-.478 4.753-1.099.581 1.405.996 3.027 1.188 4.872h-5.941zM6.142 7.53c.425.335.845.681 1.3.972a20.112 20.112 0 0 0-1.518 6.119H3.081A12.917 12.917 0 0 1 6.142 7.53zm-3.066 9.796h2.787c.091 2.342.63 4.451 1.441 6.293-.401.26-.775.563-1.154.861a12.922 12.922 0 0 1-3.074-7.154zm22.67 7.281a15.23 15.23 0 0 0-1.305-.977 17.212 17.212 0 0 0 1.445-6.305h3.038a12.923 12.923 0 0 1-3.178 7.282z"/></symbol><symbol id="svg-icon-tab" viewBox="0 0 32 32"><path fill="#FFF" d="M0 2.642v26.712h32V2.642H0zm11.748 19.096v-4.572h8.633v4.572h-8.633zm8.633 1.524v4.566h-8.633v-4.566h8.633zM1.524 11.864h8.698v3.779H1.524v-3.779zm0 5.302h8.698v4.572H1.524v-4.572zm10.224-1.523v-3.779h8.633v3.779h-8.633zM1.524 23.262h8.698v4.566H1.524v-4.566zm28.951 4.566h-8.568v-4.566h8.568v4.566zm0-6.09h-8.568v-4.572h8.568v4.572zm-8.569-6.095v-3.779h8.568v3.779h-8.568z"/></symbol><symbol id="svg-icon-to-top" viewBox="0 0 32 32"><g fill="#FFF"><path d="M15.057 6.017l-4.256 4.253v.003l-8.505 8.505 4.252 4.256 5.484-5.479v14.532h6.017V17.518l5.514 5.516 4.252-4.256-8.93-8.934zM0 0h30.08v4.01H0z"/></g></symbol><symbol id="svg-icon-w" viewBox="0 0 32 32"><path fill="#2F3030" d="M25.623 28.609h-5.264l-4.085-16.403h-.067L12.19 28.609H6.824L.444 4.511h5.299l3.814 16.403h.067L13.81 4.511h4.961l4.119 16.606h.066l3.949-16.606h5.197l-6.479 24.098z"/></symbol><symbol id="svg-icon-w-on" viewBox="0 0 32 32"><path fill="#FFF" d="M25.623 28.609h-5.264l-4.085-16.403h-.067L12.19 28.609H6.824L.444 4.511h5.299l3.814 16.403h.067L13.81 4.511h4.961l4.119 16.606h.066l3.949-16.606h5.197l-6.479 24.098z"/></symbol><symbol id="svg-icon-y" viewBox="0 0 32 32"><path fill="#2F3030" d="M11.763 19.501L0 0h7.918l7.472 12.616L22.813 0h7.834L18.791 19.685v12.259h-7.028V19.501z"/></symbol><symbol id="svg-icon-y-on" viewBox="0 0 32 32"><path fill="#FFF" d="M11.763 19.501L0 0h7.918l7.472 12.616L22.813 0h7.834L18.791 19.685v12.259h-7.028V19.501z"/></symbol><symbol id="svg-icon-status1" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#cc4c33"/><path d="M1.989 11.888l9.899-9.899 2.121 2.122-9.898 9.898-2.122-2.121" fill="#fff"/><path d="M1.989 4.111l2.122-2.122 9.9 9.9-2.122 2.122-9.9-9.9" fill="#fff"/></g></symbol><symbol id="svg-icon-status10" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M8 11L2 5h12l-6 6" fill="#fff"/></g></symbol><symbol id="svg-icon-status100" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M16 13l-5-5h3l-4-4h2L8 0 4 4h2L2 8h3l-5 5h6v3h4v-3h6z" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status101" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M11.325 13.182c-.67-1.246-2.049-3.679-3.571-5.59 0 0-1.892-.049-2.008-.136 1.195 1.659 2.49 3.807 2.88 5.572-3.192.14-5.893 1.316-7.118 2.972H16c-1.017-1.377-2.453-2.421-4.675-2.818zm-8.818-8.15c-.677 1.23-1.023 2.791.248 5.969 0-1.653 1.199-4.238 2-5 1 0 2 1 2 1 0-1-.258-1.524-.642-2.147 1.557-.072 3.978.155 4.642 2.147-1-3-3-4-4-4 1-1 1-1 3-1-3.07-2.303-4.956-.486-5.671.486-.321-.66-.329-1.801-.329-2.486 0 0-1.031 1.037-1.239 2.364C1.278 2.003.001 1.001.001 1.001c.44.439 1 2 1.394 2.228C-.244 4.499.001 8.001.001 8.001.918 6.167 1.59 5.183 2.507 5.032z" fill="#fff"/></symbol><symbol id="svg-icon-status102" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M16 0L0 8h8v8l8-16z" fill="#fff"/></g></symbol><symbol id="svg-icon-status103" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M7.502 14c-.275 0-.5.225-.5.5l-.001 1a.5.5 0 1 0 1 .002l.001-1.002c0-.275-.225-.5-.5-.5zm5.095-1.404a.501.501 0 0 0-.706 0 .502.502 0 0 0 0 .707l.706.707a.5.5 0 0 0 .708-.705l-.708-.709zm-9.899-.705l-.708.707a.5.5 0 0 0 .707.707l.708-.707a.502.502 0 0 0 0-.707.504.504 0 0 0-.707 0zM8.001 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm7.5 5a.5.5 0 1 1-.002 1l-.999-.002a.501.501 0 0 1-.5-.5c0-.273.225-.498.5-.498h1.001zM1.5 7.002c.275 0 .5.225.5.5s-.225.5-.5.5h-1a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5h1zm11.801-2.893l.707-.705a.5.5 0 1 0-.705-.707l-.708.707a.503.503 0 0 0-.001.707.502.502 0 0 0 .707-.002zm-9.898-.705a.5.5 0 0 0 .707-.707l-.707-.707a.504.504 0 0 0-.707 0 .502.502 0 0 0 0 .707l.707.707zM8.5 2c.275.002.5-.223.5-.498L9.001.5c0-.275-.225-.5-.5-.5a.503.503 0 0 0-.5.5L8 1.5c0 .275.225.5.5.5z" fill="#fff"/></symbol><symbol id="svg-icon-status104" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.88 7.932A3.98 3.98 0 0 0 14 7a4 4 0 0 0-4-4c-1.554 0-2.886.897-3.548 2.19A2.492 2.492 0 0 0 5.5 5a2.498 2.498 0 0 0-2.492 2.416C1.816 7.938 1 8.897 1 10c0 1.651 1.8 3 4 3h6c2.2 0 4-1.349 4-3 0-.8-.431-1.529-1.12-2.068" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status105" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.88 4.932A3.98 3.98 0 0 0 14 4a4 4 0 0 0-4-4C8.446 0 7.114.897 6.452 2.19A2.492 2.492 0 0 0 5.5 2a2.498 2.498 0 0 0-2.492 2.416C1.816 4.938 1 5.897 1 7c0 1.651 1.8 3 4 3h6c2.2 0 4-1.349 4-3 0-.8-.431-1.529-1.12-2.068M3 13.668C3 14.404 3.448 15 4 15s1-.596 1-1.332C5 12.93 4 11 4 11s-1 1.93-1 2.668M7 14.668C7 15.404 7.448 16 8 16s1-.596 1-1.332C9 13.93 8 12 8 12s-1 1.93-1 2.668M11 13.668c0 .736.448 1.332 1 1.332s1-.596 1-1.332C13 12.93 12 11 12 11s-1 1.93-1 2.668" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status106" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.88 4.932A3.98 3.98 0 0 0 14 4a4 4 0 0 0-4-4C8.446 0 7.114.897 6.452 2.19A2.492 2.492 0 0 0 5.5 2a2.498 2.498 0 0 0-2.492 2.416C1.816 4.938 1 5.897 1 7c0 1.651 1.8 3 4 3h.5L4 12h2.5L4 16l6-5H7l1-1h3c2.2 0 4-1.349 4-3 0-.8-.431-1.529-1.12-2.068" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status107" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M1.5 15a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 1.5 15zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 4.5 15zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 7.5 15zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 10.5 15zm-7-2a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 3.5 13zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 6.5 13zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 9.5 13zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 12.5 13zm-11-2a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 1.5 11zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 4.5 11zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 7.5 11zm3 0a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 10.5 11zm.5-1H5c-2.2 0-4-1.349-4-3 0-1.103.816-2.062 2.008-2.584A2.498 2.498 0 0 1 5.5 2c.338 0 .658.069.952.19C7.114.897 8.446 0 10 0a4 4 0 0 1 4 4c0 .323-.048.631-.12.932C14.569 5.471 15 6.2 15 7c0 1.651-1.8 3-4 3z" fill="#fff"/></symbol><symbol id="svg-icon-status108" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M9 1.025V.5a.5.5 0 0 0-1 0v.525C4.092 1.283 1 4.527 1 8.5c0 .17.014.334.025.5h.025a2.502 2.502 0 0 1 4.9 0h.1A2.502 2.502 0 0 1 8 7.054V12.5C8 15 7.403 15 6.5 15 5 15 5 14.5 5 13.5a.5.5 0 0 0-1 0c0 .996 0 2.5 2.5 2.5 1.317 0 2.5-.268 2.5-3.5V7.054c.979.2 1.751.967 1.95 1.946h.1a2.502 2.502 0 0 1 4.9 0h.025c.011-.166.025-.33.025-.5 0-3.973-3.092-7.217-7-7.475" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status109" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M15.791 9.992L10 5.736V3c0-.75-.75-3-1.5-3S7 2.25 7 3v2.736L1.21 9.992a.5.5 0 0 0-.21.406v.102c0 .154.071.301.193.394a.497.497 0 0 0 .429.092L7 9.539v4.185l-1.777 1.289A.504.504 0 0 0 5 15.43v.07a.498.498 0 0 0 .638.48L8.5 15l2.863.967a.5.5 0 0 0 .637-.481v-.07a.503.503 0 0 0-.222-.416L10 13.721V9.539l5.379 1.447c.15.037.308.004.429-.092A.495.495 0 0 0 16 10.5v-.102a.499.499 0 0 0-.209-.406" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status11" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M10.999 8l-6 6V2l6 6" fill="#fff"/></g></symbol><symbol id="svg-icon-status110" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M15.5 4.999H15v3h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5M13 9.999H3v-6h10v6zm-1 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2-11h4v1H6v-1zm5-1H5c-1.656 0-3 1.344-3 3v9a1 1 0 0 0 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0 1-1v-9a3 3 0 0 0-3-3M0 5.499v2a.5.5 0 0 0 .5.5H1v-3H.5c-.275 0-.5.225-.5.5" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status111" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M11.312 0L16 15H0L4.687 0h6.625zM9 14v-3H7v3h2zm0-5V6H7v3h2zm0-5V1H7v3h2z" fill="#fff"/></symbol><symbol id="svg-icon-status112" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M5.88 14h4.239l-.44-1h1.566l1.321 3H11l-.441-1H5.44L5 16H3.433l1.321-3h1.567l-.441 1zM10 0c1.021 0 1.977.783 2.177 1.785l1.607 8.039a1.82 1.82 0 0 1-.362 1.522A1.823 1.823 0 0 1 12 12H4a1.823 1.823 0 0 1-1.422-.654 1.82 1.82 0 0 1-.362-1.522l1.607-8.039C4.023.783 4.979 0 6 0h4zm0 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6.4-3l-1-5H4.6L4 6l-.4 2h8.8zM9 2V1H7v1h2z" fill="#fff"/></symbol><symbol id="svg-icon-status113" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M12 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 0H6V9h4v1zm-6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m.632-6.734C4.67 3.152 4.88 3 5 3h2v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3h2c.12 0 .33.152.368.266L12.612 7H3.387l1.245-3.734zM14.5 7h-.833l-.334-1H14.5a.5.5 0 1 0 0-1H13l-.684-2.051C12.142 2.428 11.55 2 11 2H5c-.55 0-1.142.428-1.316.949L3 5H1.5a.5.5 0 0 0 0 1h1.167l-.334 1H1.5c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5H2v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h6v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h.5c.275 0 .5-.225.5-.5v-3c0-.275-.225-.5-.5-.5" fill="#fff"/></g></symbol><symbol id="svg-icon-status114" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M12.214 14.396c-.804.803-1.489.803-2.293 0-1.178-1.178-2.493-1.18-3.702-.004-.807.783-1.496.783-2.303 0-1.226-1.193-2.471-1.193-3.697 0-.074.072-.147.129-.219.19v1.179a3.37 3.37 0 0 0 .916-.652c.839-.817 1.464-.817 2.303 0 1.192 1.158 2.505 1.158 3.697 0 .829-.807 1.495-.807 2.298-.006.598.598 1.226.897 1.854.897.627 0 1.255-.299 1.853-.897.802-.801 1.468-.801 2.298.006.26.252.52.43.781.562v-1.207c-.029-.025-.055-.045-.084-.072-1.227-1.193-2.506-1.191-3.702.004" fill="#fff"/><path d="M10.999 6l-3-1-3 1V4h1V3h4v1h1v2zm4.917 5.393c-1.228-1.194-2.507-1.192-3.703.003-.072.073-.143.131-.214.192V9l1.428-1.428a.5.5 0 0 0-.196-.828l-1.232-.41V3h-1V2h-2V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V2h-2v1h-1v3.334l-1.232.41a.502.502 0 0 0-.196.828L3.999 9v2.465c-.028-.026-.055-.045-.083-.072-1.227-1.194-2.471-1.194-3.698 0-.074.072-.147.128-.219.189v1.18c.31-.145.617-.362.917-.653.838-.816 1.463-.816 2.302 0 1.193 1.159 2.505 1.159 3.698 0 .042-.041.083-.072.124-.109.731-.65 1.347-.65 2.057 0 .039.035.077.064.116.104.598.597 1.226.896 1.854.896.628 0 1.256-.299 1.853-.896.803-.801 1.469-.801 2.298.005.26.252.521.43.781.563v-1.207c-.028-.026-.055-.045-.083-.072" fill="#fff"/></g></symbol><symbol id="svg-icon-status115" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M12 12h-1c-.55 0-1-.449-1-1 0-.549.45-1 1-1h1c.55 0 1 .451 1 1 0 .551-.45 1-1 1m-7 0H4c-.55 0-1-.449-1-1 0-.549.45-1 1-1h1c.55 0 1 .451 1 1 0 .551-.45 1-1 1m6-8a1 1 0 0 1 1 1v2H4V5a1 1 0 0 1 1-1h6zm2-3H3a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H2v2.5a.5.5 0 0 0 .5.5H3v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h.5a.5.5 0 0 0 .5-.5V11h.5a.5.5 0 0 0 .5-.5V3a2 2 0 0 0-2-2" fill="#fff"/></g></symbol><symbol id="svg-icon-status116" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M2.143 11.713A2.149 2.149 0 0 0 0 13.86C0 15.044.961 16 2.143 16a2.141 2.141 0 0 0 2.146-2.14c0-1.181-.96-2.147-2.146-2.147zM.144 0v2.81c7.154.078 12.961 5.898 13.039 13.07h2.815C15.919 7.158 8.851.078.144 0zM10.51 15.88H7.69a7.67 7.67 0 0 0-2.254-5.315A7.622 7.622 0 0 0 .141 8.306V5.494c5.684.077 10.291 4.694 10.369 10.386z" fill="#fff"/></symbol><symbol id="svg-icon-status117" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M12.58 10.071c-.57 0-1.094.185-1.525.492L6.059 7.962 11 5.391c.441.334.984.538 1.58.538a2.636 2.636 0 1 0-2.635-2.635l.01.093L5 5.967a2.606 2.606 0 0 0-1.58-.54 2.637 2.637 0 1 0 0 5.271 2.61 2.61 0 0 0 1.73-.662l4.811 2.505-.016.165a2.636 2.636 0 1 0 2.635-2.635" fill="#fff"/></g></symbol><symbol id="svg-icon-status118" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M7.637 12.458a.49.49 0 0 0-.238-.3 11.244 11.244 0 0 1-2.516-1.89l-.027-.009-.026.016-2.767 4.982A.499.499 0 0 0 2.5 16h5.487a.5.5 0 0 0 .48-.638l-.83-2.904zM14.65 2a1 1 0 1 0-1-1c0 .206.076.386.184.544l-5 3.333L4.337.38a1.045 1.045 0 0 0-1.783.74c.006 2.989 1.104 5.924 3.328 8.148 2.225 2.224 5.161 3.324 8.151 3.328a1.045 1.045 0 0 0 .738-1.783l-3.998-3.998 3.332-4.998c.158.106.34.183.545.183z" fill="#fff"/></symbol><symbol id="svg-icon-status119" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M9 16.001H7v-9a1 1 0 1 1 2 0v9zM8 0a8 8 0 0 0-8 8 7.92 7.92 0 0 0 1.227 4.233l.851-.531A6.913 6.913 0 0 1 1 8c0-3.86 3.141-7 7-7s7 3.14 7 7c0 1.362-.4 2.627-1.076 3.702l.849.531A7.92 7.92 0 0 0 16 8a8 8 0 0 0-8-8zm0 3a5 5 0 0 0-5 5c0 .974.289 1.876.773 2.643l.856-.537A3.907 3.907 0 0 1 4 8c0-2.206 1.795-4 4-4s4 1.794 4 4a3.89 3.89 0 0 1-.629 2.106l.858.537A4.931 4.931 0 0 0 13 8a5 5 0 0 0-5-5z" fill="#fff"/></symbol><symbol id="svg-icon-status12" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M2 10l4-4v3h6V2h2v9H6v3l-4-4" fill="#fff"/></g></symbol><symbol id="svg-icon-status120" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M7.112 6.25c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75m8.277-2.486A7.984 7.984 0 0 0 8.612 0a8 8 0 0 0 0 16 7.984 7.984 0 0 0 6.777-3.764L8.612 8l6.777-4.236z" fill="#fff"/></g></symbol><symbol id="svg-icon-status13" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M14 10l-4-4v3H4V2H2v9h8v3l4-4" fill="#fff"/></g></symbol><symbol id="svg-icon-status14" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M7 3v4h7v2H7v4L2 8l5-5" fill="#fff"/></g></symbol><symbol id="svg-icon-status15" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M3 9h4V2h2v7h4l-5 5-5-5" fill="#fff"/></g></symbol><symbol id="svg-icon-status16" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M9 13V9H2V7h7V3l5 5-5 5" fill="#fff"/></g></symbol><symbol id="svg-icon-status17" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M13 7H9v7H7V7H3l5-5 5 5" fill="#fff"/></g></symbol><symbol id="svg-icon-status18" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M7 13H4V3h3v10zm5 0H9V3h3v10z" fill="#fff"/></symbol><symbol id="svg-icon-status19" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8.09 1.001a6.965 6.965 0 0 1 2.868.654 7.051 7.051 0 0 1 3.196 3.008c.328.603.566 1.255.703 1.927.155.755.183 1.536.086 2.301a6.984 6.984 0 0 1-2.053 4.118A6.995 6.995 0 0 1 8.09 15a7.003 7.003 0 0 1-2.657-.485 7.025 7.025 0 0 1-3.706-3.403 6.981 6.981 0 0 1-.647-2.047 7.046 7.046 0 0 1 .014-2.217c.112-.68.327-1.342.633-1.96a7.066 7.066 0 0 1 3.161-3.16 6.992 6.992 0 0 1 3.202-.727zm-.161 1.5a5.568 5.568 0 0 0-2.253.513 5.545 5.545 0 0 0-2.481 2.307 5.46 5.46 0 0 0-.651 3.38 5.47 5.47 0 0 0 1.613 3.235 5.533 5.533 0 0 0 1.702 1.133 5.514 5.514 0 0 0 5.887-1.042 5.511 5.511 0 0 0 1.69-3.188 5.55 5.55 0 0 0-.023-1.814 5.436 5.436 0 0 0-.515-1.528 5.543 5.543 0 0 0-2.454-2.425 5.548 5.548 0 0 0-2.515-.571zM9 7.92a.985.985 0 0 1-.07.447 1 1 0 0 1-1.045.626L3 9V7l4-.005V3h2v4.92z" fill="#fff"/></symbol><symbol id="svg-icon-status2" viewBox="0 0 16 16"><path d="M0-1h16v16H0V-1" fill="#50b289" fill-rule="nonzero"/><path d="M3.5 9.5l3 2 6-9" fill="none" stroke="#fff" stroke-width="3"/></symbol><symbol id="svg-icon-status20" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8.09 1.001a6.983 6.983 0 0 1 4.977 2.169 6.995 6.995 0 0 1 1.754 6.41 6.942 6.942 0 0 1-.707 1.832 7.055 7.055 0 0 1-3.389 3.038A6.995 6.995 0 0 1 8.09 15a7.003 7.003 0 0 1-2.657-.485 7.025 7.025 0 0 1-3.706-3.403 6.981 6.981 0 0 1-.647-2.047 7.046 7.046 0 0 1 .014-2.217 6.957 6.957 0 0 1 .596-1.883 7.062 7.062 0 0 1 3.198-3.237 6.992 6.992 0 0 1 3.202-.727zm-.161 1.5a5.568 5.568 0 0 0-2.253.513 5.549 5.549 0 0 0-2.513 2.365 5.483 5.483 0 0 0-.619 3.322 5.46 5.46 0 0 0 .469 1.623 5.515 5.515 0 0 0 2.846 2.745 5.514 5.514 0 0 0 5.888-1.042 5.53 5.53 0 0 0 1.182-1.583 5.463 5.463 0 0 0 .508-1.605 5.552 5.552 0 0 0-.035-1.881 5.451 5.451 0 0 0-.565-1.579 5.546 5.546 0 0 0-2.393-2.307 5.548 5.548 0 0 0-2.515-.571zM9 13H7V3h2v10z" fill="#fff"/></symbol><symbol id="svg-icon-status21" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8.09 1.001a6.965 6.965 0 0 1 2.868.654 7.051 7.051 0 0 1 3.196 3.008c.328.603.566 1.255.703 1.927.155.755.183 1.536.086 2.301a6.984 6.984 0 0 1-2.053 4.118A6.995 6.995 0 0 1 8.09 15a7.003 7.003 0 0 1-2.657-.485 7.025 7.025 0 0 1-3.706-3.403 6.981 6.981 0 0 1-.647-2.047 7.046 7.046 0 0 1 .014-2.217c.112-.68.327-1.342.633-1.959a7.063 7.063 0 0 1 3.161-3.161 6.992 6.992 0 0 1 3.202-.727zm-.161 1.5a5.568 5.568 0 0 0-2.253.513 5.545 5.545 0 0 0-2.481 2.307 5.46 5.46 0 0 0-.651 3.38 5.47 5.47 0 0 0 1.613 3.235 5.533 5.533 0 0 0 1.702 1.133 5.514 5.514 0 0 0 5.887-1.042 5.511 5.511 0 0 0 1.69-3.188 5.55 5.55 0 0 0-.023-1.814 5.436 5.436 0 0 0-.515-1.528 5.538 5.538 0 0 0-2.454-2.425 5.548 5.548 0 0 0-2.515-.571zM9 6.961h3.991v2H8.276a1.002 1.002 0 0 1-1.253-.745A1.018 1.018 0 0 1 7 7.824V3h2v3.961z" fill="#fff"/></symbol><symbol id="svg-icon-status22" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8.09 1.001a6.965 6.965 0 0 1 2.868.654 7.049 7.049 0 0 1 3.155 2.934 6.96 6.96 0 0 1 .744 2.001c.155.755.183 1.536.086 2.301a6.984 6.984 0 0 1-2.053 4.118A6.995 6.995 0 0 1 8.09 15a7.003 7.003 0 0 1-2.657-.485 7.025 7.025 0 0 1-3.706-3.403 6.981 6.981 0 0 1-.647-2.047 7.046 7.046 0 0 1 .014-2.217c.112-.68.327-1.342.633-1.959a7.063 7.063 0 0 1 3.161-3.161 6.992 6.992 0 0 1 3.202-.727zm-.161 1.5a5.568 5.568 0 0 0-2.253.513 5.545 5.545 0 0 0-2.481 2.307 5.46 5.46 0 0 0-.651 3.38 5.47 5.47 0 0 0 1.613 3.235 5.533 5.533 0 0 0 1.702 1.133 5.514 5.514 0 0 0 5.887-1.042 5.511 5.511 0 0 0 1.69-3.188 5.55 5.55 0 0 0-.023-1.814 5.468 5.468 0 0 0-.515-1.528 5.538 5.538 0 0 0-2.454-2.425 5.548 5.548 0 0 0-2.515-.571zM9 8a1 1 0 0 1-2 0V3h2v5z" fill="#fff"/></symbol><symbol id="svg-icon-status23" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M13 12H3V9h10v3zm0-8v3H3V4h10z" fill="#fff"/></symbol><symbol id="svg-icon-status24" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M6.2 11c-.063-.161-.075-.543-.109-.745a3.482 3.482 0 0 1 .033-1.356c.057-.236.141-.458.253-.667a2.96 2.96 0 0 1 .422-.596c.169-.189.365-.377.589-.564.237-.2.444-.385.623-.555.177-.17.329-.341.454-.512.126-.172.219-.349.282-.532.062-.184.093-.388.093-.612 0-.192-.035-.37-.104-.534a1.192 1.192 0 0 0-.295-.424 1.351 1.351 0 0 0-.466-.28 1.753 1.753 0 0 0-.614-.103c-.486 0-.99.108-1.513.324C5.324 4.06 4.468 4.561 4 5V2.2c.471-.277 1.344-.575 1.899-.713a7.104 7.104 0 0 1 1.722-.207c.567 0 1.095.063 1.583.187a3.65 3.65 0 0 1 1.279.589c.362.268.646.611.85 1.027.204.416.307.917.307 1.502 0 .371-.041.707-.125 1.008a3.422 3.422 0 0 1-.367.854c-.16.268-.359.524-.597.77-.239.246-.514.5-.824.763-.208.176-.392.341-.55.492-.158.152-.29.303-.394.453-.104.15-.183.308-.236.475-.054.168-.08.357-.08.569 0 .146.02.295.058.447.039.153.207.481.275.584H6.2zm1.348 4.02c-.487 0-.891-.144-1.213-.435-.322-.301-.482-.657-.482-1.066 0-.423.16-.775.482-1.059.322-.284.726-.427 1.213-.427.479 0 .876.143 1.193.427.315.277.472.631.472 1.059 0 .433-.154.792-.464 1.076-.317.284-.717.425-1.201.425" fill="#fff"/></g></symbol><symbol id="svg-icon-status25" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8 11a2 2 0 1 1-.001 4.001A2 2 0 0 1 8 11zm2-1H6V1h4v9z" fill="#fff"/></symbol><symbol id="svg-icon-status26" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8 3a6 6 0 0 1 0 12A6 6 0 0 1 8 3zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM7 9V5h2v4a1 1 0 0 1-2 0zm3-6H6V1h4v2z" fill="#fff"/></symbol><symbol id="svg-icon-status27" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#50b289" fill-rule="nonzero"/><path d="M8 3a6 6 0 0 1 0 12A6 6 0 0 1 8 3zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm4 5.5H8a1 1 0 1 1 0-2h4v2zm-2-7H6V1h4v2z" fill="#fff"/></symbol><symbol id="svg-icon-status28" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#eab766" fill-rule="nonzero"/><path d="M8 3a6 6 0 0 1 0 12A6 6 0 0 1 8 3zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM9 13H7V9a1 1 0 0 1 1-1l-.016-.001C8.535 7.999 9 8.448 9 9v4zM6 1h4v2H6V1z" fill="#fff"/></symbol><symbol id="svg-icon-status29" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#cc4c33" fill-rule="nonzero"/><path d="M8 3a6 6 0 0 1 0 12A6 6 0 0 1 8 3zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM8 10H4V8h4c.551 0 1.011.468 1 1 0 .552-.449 1-1 1zM6 1h4v2H6V1z" fill="#fff"/></symbol><symbol id="svg-icon-status3" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#cc4c33"/><path d="M2 6h12v4H2V6" fill="#fff"/></g></symbol><symbol id="svg-icon-status30" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#50b289" fill-rule="nonzero"/><path d="M11.577 14.104C7.889 14.104 7.719 13.397 4 13H3c-.48 0-1-.273-1-1V8c0-.727.52-1 1-1h1c2.555-.771 5.731-2.74 6.741-4.487L10.768 1l.468.003h.013C12.011 1.045 13.551 2.724 11 7h2l.008.003h.592a.999.999 0 1 1 0 1.998h-.469l-.018.002h.387a1 1 0 0 1 0 1.998H13v.003a1 1 0 0 1 0 1.999c.101.974-.547 1.101-1.423 1.101" fill="#fff"/></symbol><symbol id="svg-icon-status31" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#eab766" fill-rule="nonzero"/><path d="M1.896 11.577C1.896 7.889 2.603 7.717 3 4V3c0-.48.273-1 1-1h4c.727 0 1 .52 1 1v1c.771 2.555 2.74 5.731 4.487 6.741l1.513.026-.003.469v.013c-.042.762-1.721 2.302-5.997-.249v2l-.003.008v.592a.998.998 0 1 1-1.998 0v-.469l-.002-.018v.387a1 1 0 0 1-1.998 0V13h-.003a1 1 0 0 1-1.999 0c-.974.101-1.101-.547-1.101-1.423" fill="#fff"/></symbol><symbol id="svg-icon-status32" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#cc4c33" fill-rule="nonzero"/><path d="M4.423 1.896C8.111 1.896 8.281 2.603 12 3h1c.48 0 1 .273 1 1v4c0 .727-.52 1-1 1h-1c-2.555.771-5.731 2.74-6.741 4.487L5.233 15l-.469-.003-.013-.001C3.989 14.955 2.449 13.276 5 9H3l-.008-.003H2.4a.999.999 0 1 1 0-1.998h.469l.018-.002H2.5a1 1 0 0 1 0-1.998H3v-.003a1 1 0 0 1 0-1.999c-.101-.974.547-1.101 1.423-1.101" fill="#fff"/></symbol><symbol id="svg-icon-status33" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#cc4c33"/><path d="M8 2a6 6 0 0 1 0 12A6 6 0 0 1 8 2zm0 1.5a4.5 4.5 0 0 0-3.811 6.896l6.206-6.207A4.488 4.488 0 0 0 8 3.5zm0 9a4.5 4.5 0 0 0 3.809-6.896l-6.205 6.205A4.47 4.47 0 0 0 8 12.5" fill="#fff"/></g></symbol><symbol id="svg-icon-status34" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#50b289"/><path d="M2.264 1.4l1.716.951.547.302 2.42 6.243c2.128.031 4.256.063 5.286-.771.964-.78.966-2.317.906-3.902h.004a.783.783 0 0 1 1.56.117l-.003.077c0 1.964 0 3.928-1.468 4.91-1.468.981-4.404.981-7.34.981l-.316-.789-.001.001-2.367-5.807-1.703-.944A.783.783 0 0 1 2.264 1.4zm3.901 9.577a1.762 1.762 0 1 1 .003 3.523 1.762 1.762 0 0 1-.003-3.523zm6.343 0a1.76 1.76 0 1 1 0 3.521 1.76 1.76 0 0 1 0-3.521" fill="#fff"/></g></symbol><symbol id="svg-icon-status35" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M14 12H2V4.7l6 4.776L14 4.7V12zM8 8.171L2.721 4h10.558L8 8.171" fill="#fff"/></g></symbol><symbol id="svg-icon-status36" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M9.164 9.676h-.035c-.336 1.033-.994 1.551-1.974 1.551-.627 0-1.131-.242-1.514-.726-.382-.484-.574-1.134-.574-1.953 0-1.081.262-1.981.788-2.699.525-.717 1.218-1.076 2.078-1.076.327 0 .619.094.878.279.257.185.422.408.497.668h.021c.014-.129.05-.396.108-.8h1.19a430.425 430.425 0 0 0-.338 3.859c0 .948.242 1.421.724 1.421.442 0 .808-.263 1.098-.789.29-.527.436-1.208.436-2.046 0-1.237-.394-2.248-1.18-3.03-.787-.783-1.878-1.175-3.274-1.175-1.336 0-2.444.475-3.322 1.423-.879.949-1.318 2.136-1.318 3.56 0 1.406.426 2.541 1.275 3.404.851.862 1.997 1.293 3.439 1.293 1.134 0 2.105-.196 2.913-.587v1.091c-.831.348-1.869.523-3.115.523-1.749 0-3.158-.523-4.228-1.57-1.069-1.046-1.604-2.417-1.604-4.112 0-1.741.566-3.185 1.695-4.332 1.129-1.146 2.572-1.72 4.328-1.72 1.647 0 3.011.482 4.091 1.444 1.08.963 1.62 2.219 1.62 3.768 0 1.135-.295 2.066-.886 2.792-.59.727-1.31 1.09-2.16 1.09-1.1 0-1.652-.518-1.657-1.551zM8.073 5.8c-.505 0-.913.26-1.222.779-.31.52-.464 1.166-.464 1.941 0 .52.104.929.313 1.229.208.302.487.451.835.451.505 0 .905-.272 1.198-.819.294-.545.44-1.268.44-2.166 0-.943-.366-1.415-1.1-1.415" fill="#fff"/></g></symbol><symbol id="svg-icon-status37" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M2 8h2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8h2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm6 1L4 5h3V1h2v4h3L8 9" fill="#fff"/></g></symbol><symbol id="svg-icon-status38" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M2 8h2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8h2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm5 1V5H4l4-4 4 4H9v4H7" fill="#fff"/></g></symbol><symbol id="svg-icon-status39" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#cc4c33" fill-rule="nonzero"/><path d="M13 11H3l-1 1v1h4c0 .959 1.032 2 2.008 2C8.968 15 10 13.959 10 13h4v-1l-1-1zm-.625-3.439a4.328 4.328 0 0 0-2.63-4v-.809A1.74 1.74 0 0 0 8.008 1c-.976 0-1.753.777-1.753 1.752v.809a4.328 4.328 0 0 0-2.63 4v2.459h8.75V7.561" fill="#fff"/></symbol><symbol id="svg-icon-status4" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#50b289"/><path d="M2 6h4V2h4v4h4v4h-4v4H6v-4H2V6" fill="#fff"/></g></symbol><symbol id="svg-icon-status40" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M14.727 11.676c-.42-.64-1.834-1.037-3.23-1.605-1.397-.568-1.729-.766-1.729-.766l-.013-1.306s.524-.394.686-1.623c.327.092.671-.476.69-.776.018-.289-.044-1.091-.444-1.009.081-.604.14-1.146.11-1.434C10.693 2.108 9.633 1 8.004 1 6.372 1 5.311 2.108 5.207 3.157c-.03.288.03.83.11 1.434-.398-.082-.461.72-.444 1.009.02.3.363.868.691.776.163 1.229.688 1.623.688 1.623l-.015 1.306s-.332.198-1.729.766c-1.397.568-2.811.965-3.231 1.605C.9 12.248 1.013 15 1.013 15h13.978s.113-2.752-.264-3.324" fill="#fff"/></g></symbol><symbol id="svg-icon-status41" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M15 8h-1.749c-.048 2.861-2.178 5.251-5.048 5.251a5.22 5.22 0 0 1-2.915-.884c2.715-.138 4.872-2.079 4.927-4.367H8.437l3.326-3.5L15 8zM7.563 8l-3.238 3.5L1 8h1.751C2.797 5.139 5.129 2.749 8 2.749c1.079 0 2.081.326 2.915.884C8.2 3.771 5.429 5.712 5.375 8h2.188z" fill="#fff"/></symbol><symbol id="svg-icon-status42" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#50b289"/><path d="M3 2h10v1H3V2zm6.357 6L12 12H4l2.643-4L4 4h8L9.357 8zm2.586 5H13v1H3v-1h8.943zM8 8l1.8-3H6.2L8 8" fill="#fff"/></g></symbol><symbol id="svg-icon-status43" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#cc4c33"/><path d="M3 2h10v1H3V2zm6.357 6L12 12H4l2.643-4L4 4h8L9.357 8zm2.586 5H13v1H3v-1h8.943zM6 11h4L8 8l-2 3" fill="#fff"/></g></symbol><symbol id="svg-icon-status44" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M15 1H7.929L.464 8.464l7.072 7.072L15 8.071V1zM9.768 4.818l-4.95 4.95 1.414 1.414 4.95-4.95-1.414-1.414z" fill="#fff"/></symbol><symbol id="svg-icon-status45" viewBox="0 0 16 16"><path fill="#50b289" d="M0 0h16v16H0z"/><path d="M15 1H7.929L.464 8.464l7.072 7.072L15 8.071V1zM8 6.586l1.768-1.768 1.414 1.414L9.414 8l1.768 1.768-1.414 1.414L8 9.414l-1.768 1.768-1.414-1.414L6.586 8 4.818 6.232l1.414-1.414L8 6.586z" fill="#fff"/></symbol><symbol id="svg-icon-status46" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#50b289" fill-rule="nonzero"/><path d="M5.924 12.049l-.801.804a.932.932 0 0 1-1.321 0l-.661-.663a.937.937 0 0 1 0-1.324l3.962-3.972a.929.929 0 0 1 1.32 0l.548.549 1.361-1.284-.588-.59a2.796 2.796 0 0 0-3.962 0L1.82 9.542a2.817 2.817 0 0 0 0 3.973l.66.662a2.797 2.797 0 0 0 3.962.001l1.96-1.966a2.865 2.865 0 0 1-2.478-.163zm8.256-9.564l-.66-.662a2.797 2.797 0 0 0-3.962-.001l-1.96 1.965a2.865 2.865 0 0 1 2.478.164l.802-.803a.93.93 0 0 1 1.321 0l.66.661a.939.939 0 0 1 0 1.325L8.897 9.107a.932.932 0 0 1-1.32 0l-.548-.551-1.36 1.286.588.588a2.793 2.793 0 0 0 3.961 0l3.962-3.973a2.816 2.816 0 0 0 0-3.972z" fill="#fff"/></symbol><symbol id="svg-icon-status47" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#cc4c33" fill-rule="nonzero"/><path d="M5.228 12.804a.958.958 0 0 1-1.355.001l-.677-.677a.958.958 0 0 1 0-1.356l2.195-2.195-1.354-1.354-2.195 2.196a2.871 2.871 0 0 0 0 4.063l.677.677a2.873 2.873 0 0 0 4.062 0l2.195-2.196-1.354-1.354-2.194 2.195zm9.682-8.713l-.235-.929A2.875 2.875 0 0 0 11.18 1.09l-3.01.767.475 1.855 3.008-.766a.958.958 0 0 1 1.166.69l.235.928a.956.956 0 0 1-.691 1.165l-3.008.769.473 1.855 3.01-.768a2.874 2.874 0 0 0 2.072-3.494z" fill="#fff"/></symbol><symbol id="svg-icon-status48" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M3.951 14.478c-.541 0-1.075-.25-1.576-.752l-.073-.072c-.517-.509-2.656-2.288.007-4.752 1.095-1.013 2.442-2.48 3.941-3.961.806-.796 1.644-1.624 2.478-2.458 1.506-1.505 2.607-1.161 4.315.465 2.017 1.921 2.386 3.81 1.513 4.817-1.158 1.335-5.54 5.719-5.726 5.904a.628.628 0 1 1-.889-.888c.045-.045 4.537-4.538 5.666-5.841.259-.298.299-1.435-1.431-3.082-.996-.949-1.292-1.754-2.559-.486a468.65 468.65 0 0 1-2.484 2.462C5.642 7.309 4.26 8.727 3.22 9.767c-1.649 1.65-.578 2.458-.036 2.994l.079.077c.462.461.84.586 1.515-.09a138.2 138.2 0 0 1 1.068-1.044c1.361-1.322 3.892-3.782 4.403-4.422.162-.202.398-.692.173-.891-.311-.272-.884.278-1.051.453-1.774 1.862-4.091 4.093-4.114 4.115a.627.627 0 1 1-.871-.906 157.14 157.14 0 0 0 4.075-4.075c1.137-1.196 2.186-1.059 2.788-.533.732.64.56 1.899-.019 2.623-.516.647-2.51 2.595-4.507 4.537-.485.471-.871.846-1.057 1.031-.56.562-1.142.842-1.715.842" fill="#fff"/></g></symbol><symbol id="svg-icon-status49" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M15 5.375L5.375 15v-4.375H1L10.625 1 15 5.375z" fill="#fff"/></g></symbol><symbol id="svg-icon-status5" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M15 8l-4.691-1.333 1.191-4.73L8 5.332 4.5 1.937l1.189 4.73L1 8l4.689 1.333-1.189 4.73L8 10.667l3.5 3.396-1.191-4.73L15 8" fill="#fff"/></g></symbol><symbol id="svg-icon-status50" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M14.3 6.137a1.021 1.021 0 0 0 .4-1.694L11.517 1.26a1.025 1.025 0 0 0-1.695.4l-.398 1.191-2.762 2.762-.473-.473a1.026 1.026 0 0 0-1.048-.248l-1.377.459a.514.514 0 0 0-.199.849l2.177 2.176-.923.921L1 15l5.662-3.861.921-.921 2.177 2.177a.51.51 0 0 0 .848-.2l.459-1.377a1.024 1.024 0 0 0-.248-1.047l-.473-.474 2.762-2.761 1.192-.399z" fill="#fff"/></g></symbol><symbol id="svg-icon-status51" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M11.5 1.448c-1.614 0-3.209 1.484-3.5 2.586-.289-1.102-1.885-2.586-3.5-2.586-1.75 0-3.5 1.75-3.5 4.375 0 4.375 4.375 7.875 7 8.729 2.625-.854 7-4.354 7-8.729 0-2.625-1.75-4.375-3.5-4.375" fill="#fff"/></g></symbol><symbol id="svg-icon-status52" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M11.5 1.448c-1.614 0-3.209 1.484-3.5 2.586-.289-1.102-1.885-2.586-3.5-2.586-1.75 0-3.5 1.75-3.5 4.375 0 4.375 4.375 7.875 7 8.729 2.625-.854 7-4.354 7-8.729 0-2.625-1.75-4.375-3.5-4.375zM9 7V5H7v2H5v2h2v2h2V9h2V7H9z" fill="#fff"/></symbol><symbol id="svg-icon-status53" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M11.5 1.448c-1.614 0-3.209 1.484-3.5 2.586-.289-1.102-1.885-2.586-3.5-2.586-1.75 0-3.5 1.75-3.5 4.375 0 4.375 4.375 7.875 7 8.729 2.625-.854 7-4.354 7-8.729 0-2.625-1.75-4.375-3.5-4.375zM11 7H5v2h6V7z" fill="#fff"/></symbol><symbol id="svg-icon-status54" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M1 7.5l-.003 1c3.114 5.317 10.774 5.25 14 0l.003-1c-3.115-5.317-10.774-5.25-14 0zm7.098 3.661a3.17 3.17 0 1 0 .067-6.34 3.17 3.17 0 0 0-.067 6.34zm-.077-4.752a1.585 1.585 0 1 0 .22 3.162 1.585 1.585 0 0 0-.22-3.162z" fill="#fff"/></symbol><symbol id="svg-icon-status55" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#cc4c33"/><path d="M12.025 2.75c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25-1.25-.561-1.25-1.25.561-1.25 1.25-1.25M7 14l-.688-2.114.859-.778 1.278 1.322 1.496-1.496L8.8 9.551l1.057-1.053a3.848 3.848 0 0 0 4.014-.894 3.855 3.855 0 0 0-5.45-5.45 3.843 3.843 0 0 0-.894 4.01l-5.723 5.722L1 15h3l1-2 2 1z" fill="#fff"/></g></symbol><symbol id="svg-icon-status56" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.25 1H7.125L2.75 8h4.375l-3.5 7 8.75-8.75H8L13.25 1z" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status57" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.09 1.001a6.976 6.976 0 0 1 2.868.654 7.056 7.056 0 0 1 3.275 3.159c.301.586.518 1.215.642 1.862a7.09 7.09 0 0 1 .069 2.214 6.977 6.977 0 0 1-2.055 4.118 6.994 6.994 0 0 1-4.799 1.991 6.994 6.994 0 0 1-2.656-.485 7.025 7.025 0 0 1-3.706-3.403 6.984 6.984 0 0 1-.633-4.262 6.957 6.957 0 0 1 .596-1.883 7.064 7.064 0 0 1 3.198-3.238 6.971 6.971 0 0 1 3.201-.727zM7.929 2.5a5.569 5.569 0 0 0-2.252.514A5.55 5.55 0 0 0 3.164 5.38a5.467 5.467 0 0 0-.552 1.512 5.55 5.55 0 0 0-.068 1.809c.072.561.23 1.11.47 1.622A5.513 5.513 0 0 0 7.929 13.5a5.51 5.51 0 0 0 2.086-.381 5.521 5.521 0 0 0 3.422-4.281c.091-.6.084-1.215-.023-1.812a5.455 5.455 0 0 0-.486-1.469 5.553 5.553 0 0 0-2.485-2.485A5.545 5.545 0 0 0 7.929 2.5zm.174 1.501a4.018 4.018 0 0 1 1.718.437 4.002 4.002 0 0 1-.264 7.247 4 4 0 1 1-1.66-7.684h.206zm-.168 1.5a2.547 2.547 0 0 0-1.072.272 2.524 2.524 0 0 0-1.312 1.723c-.055.27-.066.549-.031.823a2.504 2.504 0 0 0 3.396 2.008 2.507 2.507 0 0 0 1.311-1.19c.112-.218.191-.453.234-.694.048-.272.052-.552.01-.824a2.521 2.521 0 0 0-1.228-1.788 2.545 2.545 0 0 0-1.308-.33zM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#fff"/></symbol><symbol id="svg-icon-status58" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M2 4.732A1.999 1.999 0 0 1 3 1a2 2 0 0 1 1 3.732V15H2V4.732zM11.5 8.5l3.625 3.5H5V5h10l-3.5 3.5z" fill="#fff"/></symbol><symbol id="svg-icon-status59" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M15.407 11.094a.093.093 0 0 1 .051.171l-1.996 1.347a.093.093 0 0 0-.033.117l1.082 2.365a.093.093 0 0 1-.024.11.092.092 0 0 1-.111.009l-2.363-1.486a.095.095 0 0 0-.1 0L9.55 15.213a.092.092 0 0 1-.111-.009.095.095 0 0 1-.024-.11l1.083-2.365a.094.094 0 0 0-.033-.117l-1.998-1.347a.094.094 0 0 1-.037-.105.095.095 0 0 1 .09-.066h2.488a.095.095 0 0 0 .09-.066l.775-2.494a.095.095 0 0 1 .09-.065c.042 0 .077.026.089.065l.777 2.494a.092.092 0 0 0 .089.066h2.489zM3.948 8.338a.093.093 0 0 1 .09-.065c.041 0 .077.026.089.065l.776 2.494c.012.04.048.066.089.066h2.489c.041 0 .077.027.089.066a.095.095 0 0 1-.037.106l-1.997 1.346a.093.093 0 0 0-.033.117l1.082 2.366a.092.092 0 0 1-.024.11.092.092 0 0 1-.111.008l-2.363-1.485a.09.09 0 0 0-.1 0l-2.363 1.485a.092.092 0 0 1-.111-.008.097.097 0 0 1-.024-.11l1.083-2.366a.095.095 0 0 0-.032-.117L.542 11.07a.095.095 0 0 1-.038-.106.095.095 0 0 1 .09-.066h2.488a.092.092 0 0 0 .09-.066l.776-2.494zm3.963-7.5a.093.093 0 0 1 .09-.065c.041 0 .076.026.089.065l.776 2.494a.093.093 0 0 0 .089.066h2.489c.041 0 .077.027.089.066a.095.095 0 0 1-.037.106L9.499 4.916a.093.093 0 0 0-.033.117l1.082 2.366a.093.093 0 0 1-.024.11.092.092 0 0 1-.111.008L8.05 6.032a.09.09 0 0 0-.1 0L5.587 7.517a.092.092 0 0 1-.111-.008.096.096 0 0 1-.024-.11l1.083-2.366a.094.094 0 0 0-.033-.117L4.505 3.57a.095.095 0 0 1-.038-.106.095.095 0 0 1 .09-.066h2.488a.095.095 0 0 0 .09-.066L7.911.838z" fill="#fff"/></symbol><symbol id="svg-icon-status6" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M4.5 15H1v-3.5L4.5 15zm1.375-2.4l1.238 1.238 5.93-5.932-1.238-1.237-5.93 5.931zM9.95 4.813l-5.932 5.93 1.239 1.238 5.93-5.931L9.95 4.813zm-.619-.618L8.094 2.956 2.162 8.888l1.239 1.237 5.93-5.93zm5.156-.207l-2.474-2.475a1.75 1.75 0 0 0-2.475-.001l-.618.619 4.949 4.95.618-.618a1.752 1.752 0 0 0 0-2.475z" fill="#fff"/></symbol><symbol id="svg-icon-status60" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13 13v2H3v-2h10zm2-10.133a1.4 1.4 0 1 0-2.205 1.142l-2.462 4.924-1.622-4.866c.41-.245.689-.688.689-1.2a1.4 1.4 0 1 0-2.8 0c0 .512.279.955.689 1.2L5.667 8.933 3.205 4.01A1.4 1.4 0 1 0 1 2.867c0 .644.438 1.181 1.031 1.344L3 12h10l.97-7.789c.592-.163 1.03-.7 1.03-1.344z" fill="#fff"/></symbol><symbol id="svg-icon-status61" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M8 4.5a5.252 5.252 0 0 0 0 10.501A5.25 5.25 0 0 0 8 4.5zm0 9.626a4.38 4.38 0 0 1-4.376-4.375A4.38 4.38 0 0 1 8 5.375a4.38 4.38 0 0 1 4.375 4.376A4.38 4.38 0 0 1 8 14.126zm-.826-5.333L8 6.25l.826 2.543H11.5l-2.164 1.573.828 2.542L8 11.336l-2.164 1.572.827-2.542-2.164-1.573h2.675zM5.698 4.078a6.13 6.13 0 0 0-1.852 1.185L1 1h2.625l2.073 3.078zM15 1l-2.846 4.263a6.13 6.13 0 0 0-1.852-1.185L12.375 1H15z" fill="#fff"/></symbol><symbol id="svg-icon-status62" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M4.478 11.378l-.056-.028c.622-1.023 4.383-6.949 9.151-9.085-2.536 1.561-7.987 7.826-9.095 9.113M14.933 1.067C5.937 1.651 4.455 7.209 3.313 12.16L1 15h1.198l2.047-2.632c4.804-1.11 7.343-3.582 7.343-3.582L9.577 7.695S12.52 6.801 13.356 7c.598-.49 1.96-2.23 1.577-5.933" fill="#fff"/></g></symbol><symbol id="svg-icon-status63" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M9.978 11.078a.45.45 0 0 0-.632 0l-2.528 2.528a.448.448 0 0 0 0 .632l.632.632a.447.447 0 0 0 .631 0l2.529-2.528a.448.448 0 0 0 0-.632l-.632-.632zM8.714 9.814l-.632-.632a.45.45 0 0 0-.632 0L4.922 11.71a.448.448 0 0 0 0 .632l.632.632a.448.448 0 0 0 .632 0l2.528-2.528a.448.448 0 0 0 0-.632zm6.005-6.636s.632-.632 0-1.265l-.632-.632c-.632-.632-1.265 0-1.265 0l-3.159 3.16s-.632.632-1.264 0l-.632-.631c-1.264-1.264-2.529 0-2.529 0l-.632.632 6.953 6.953.631-.632s1.265-1.265 0-2.529l-.631-.632c-.632-.632 0-1.264 0-1.264l3.16-3.16zm-7.901 4.74l-.631-.632a.448.448 0 0 0-.632 0L3.026 9.814a.448.448 0 0 0 0 .632l.632.632a.448.448 0 0 0 .632 0L6.818 8.55a.448.448 0 0 0 0-.632zM4.923 6.022l-.632-.632a.448.448 0 0 0-.632 0L1.13 7.919a.448.448 0 0 0 0 .631l.632.632a.448.448 0 0 0 .632 0l2.529-2.528a.45.45 0 0 0 0-.632zm8.216-3.793a.448.448 0 1 1 .632.635.448.448 0 0 1-.632-.635z" fill="#fff"/></symbol><symbol id="svg-icon-status64" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13 2c0-.55-.45-1-1-1H2c-.549 0-1 .45-1 1v2c0 .55.451 1 1 1h10c.55 0 1-.45 1-1V3h1v4H7v2H6v4.5a1.5 1.5 0 1 0 3 0V9H8V8h7V2h-2z" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status65" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.875 1.438C3.625 1.438 1 6.688 1 10.188c0 .874 1.75 2.624 2.625-.001.391-1.174 2.625-.875 2.625.875 0 1.957.875 3.5 2.625 3.5 5.25 0 6.125-4.375 6.125-7s-.875-6.125-6.125-6.125zm.438 10.719a1.533 1.533 0 0 1-1.532-1.531c0-.844.687-1.531 1.531-1.531.845 0 1.532.687 1.532 1.531 0 .844-.687 1.531-1.532 1.531zM7.001 4.001A2 2 0 1 1 7 8.002 2 2 0 0 1 7 4.001zm5.062 3.906a1.533 1.533 0 0 1-1.531-1.531c0-.844.687-1.531 1.531-1.531.845 0 1.532.687 1.532 1.531 0 .844-.687 1.531-1.532 1.531z" fill="#fff"/></symbol><symbol id="svg-icon-status66" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13 14v1H3v-1h10zM6 9c.134-.127.238-.298.299-.547.875-3.5-.924-3.078-.924-4.828C5.375 2.75 6.25 1 8 1s2.625 1.75 2.625 2.625c0 1.75-1.799 1.328-.924 4.828.061.249.165.42.299.547h3c.482 0 1 .52 1 1v3H2v-3c0-.48.52-1 1-1h3zm1.234-3.425c0-.002-.673-3.044 1.168-3.754-1.46-.402-2.516 1.257-2.079 2.406.438 1.147.91 1.348.911 1.348z" fill="#fff"/></symbol><symbol id="svg-icon-status67" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M14.173 11.911l-.074-.156c-.217-.512-2.888-1.297-3.108-1.31l-.178.013c-.365.075-.765.42-1.609 1.166-.948-.438-2.248-1.609-2.86-2.3-.663-.747-1.491-2.004-1.788-2.943.961-.851 1.361-1.221 1.386-1.632.014-.221-.444-2.966-.927-3.244l-.144-.091c-.308-.198-.772-.497-1.288-.392a1.122 1.122 0 0 0-.361.145c-.346.219-1.193.807-1.58 1.576-.239.479-.346 4.849 2.929 8.542 3.236 3.653 7.227 3.811 7.826 3.689l.016-.004.054-.015c.808-.29 1.495-1.062 1.753-1.38.476-.589.136-1.288-.047-1.664" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status68" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M14.173 11.911l-.074-.156c-.217-.512-2.888-1.297-3.108-1.31l-.178.013c-.365.075-.765.42-1.609 1.166-.948-.438-2.248-1.609-2.86-2.3-.663-.747-1.491-2.004-1.788-2.943.961-.851 1.361-1.221 1.386-1.632.014-.221-.444-2.966-.927-3.244l-.144-.091c-.308-.198-.772-.497-1.288-.392a1.122 1.122 0 0 0-.361.145c-.346.219-1.193.807-1.58 1.576-.239.479-.346 4.849 2.929 8.542 3.236 3.653 7.227 3.811 7.826 3.689l.016-.004.054-.015c.808-.29 1.495-1.062 1.753-1.38.476-.589.136-1.288-.047-1.664zM15 6l-1.793-1.793-3.157 3.157L8.636 5.95l3.157-3.157L10 1h5v5z" fill="#fff"/></symbol><symbol id="svg-icon-status69" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M14.173 11.911l-.074-.156c-.217-.512-2.888-1.297-3.108-1.31l-.178.013c-.365.075-.765.42-1.609 1.166-.948-.438-2.248-1.609-2.86-2.3-.663-.747-1.491-2.004-1.788-2.943.961-.851 1.361-1.221 1.386-1.632.014-.221-.444-2.966-.927-3.244l-.144-.091c-.308-.198-.772-.497-1.288-.392a1.122 1.122 0 0 0-.361.145c-.346.219-1.193.807-1.58 1.576-.239.479-.346 4.849 2.929 8.542 3.236 3.653 7.227 3.811 7.826 3.689l.016-.004.054-.015c.808-.29 1.495-1.062 1.753-1.38.476-.589.136-1.288-.047-1.664zM14 7H9V2l1.793 1.793L13.95.636l1.414 1.414-3.157 3.157L14 7z" fill="#fff"/></symbol><symbol id="svg-icon-status7" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 16h16V0H0v16" fill="#cc4c33"/><path d="M9.499 2.011a2.5 2.5 0 0 1 2.5 2.489H12V7h1v7H3V7h1l-.001-2.489a2.5 2.5 0 0 1 2.5-2.5h3zM10 4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V7h4V4.5zm-2 4a1.5 1.5 0 0 0-1 2.619V13h2v-1.881A1.5 1.5 0 0 0 8 8.5" fill="#fff"/></g></symbol><symbol id="svg-icon-status70" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.25 5.375c.875 0 1.75.875 1.75 1.75v3.5c0 .875-.875 1.75-1.75 1.75V15l-2.625-2.625H6.25c-.875 0-1.75-.875-1.75-1.75v-.513l1.237-1.237H9.75c1.35 0 2.625-1.276 2.625-2.625v-.875h.875zM9.75 1c.875 0 1.75.875 1.75 1.75v3.5c0 .875-.875 1.75-1.75 1.75H5.375L2.75 10.625V8C1.875 8 1 7.125 1 6.25v-3.5C1 1.875 1.875 1 2.75 1h7z" fill="#fff"/></symbol><symbol id="svg-icon-status71" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M8 1C4.134 1 1 3.743 1 7.125c0 1.604.71 3.058 1.863 4.15L1 15l4.391-2.195A7.82 7.82 0 0 0 8 13.25c3.867 0 7-2.742 7-6.125C15 3.743 11.867 1 8 1" fill="#fff"/></g></symbol><symbol id="svg-icon-status72" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M9.509 10.569c-.001.354-.256.408-.408.408H6.459c-.152 0-.408-.054-.408-.408v-.674c0-.354.256-.407.408-.407h.401V6.822h-.411c-.153 0-.408-.053-.408-.407v-.674c0-.355.255-.407.408-.407h1.843c.152 0 .408.052.408.407v3.747h.401c.152 0 .407.053.407.407v.674zM7.776 2.951a1.118 1.118 0 0 1 0 2.234 1.124 1.124 0 0 1-1.123-1.122c0-.623.494-1.112 1.123-1.112M8.001 1c-3.866 0-7 2.743-7 6.125 0 1.604.711 3.059 1.863 4.151L1.001 15l4.391-2.194a7.85 7.85 0 0 0 2.609.444c3.867 0 7-2.742 7-6.125 0-3.382-3.133-6.125-7-6.125" fill="#fff"/></g></symbol><symbol id="svg-icon-status73" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M8.048 11.776a1.294 1.294 0 0 1-1.299-1.287c0-.728.57-1.297 1.299-1.297.71 0 1.286.582 1.286 1.297 0 .699-.588 1.287-1.286 1.287m-.672-9.289h1.305c.456 0 .506.294.506.42l-.281 5.038c-.042.397-.237.478-.518.478h-.693c-.282 0-.476-.081-.519-.49l-.28-5.026c0-.126.046-.42.48-.42M8 1C4.134 1 1 3.742 1 7.125c0 1.603.711 3.058 1.863 4.15L1 15l4.391-2.195A7.85 7.85 0 0 0 8 13.25c3.868 0 7-2.743 7-6.125C15 3.742 11.867 1 8 1" fill="#fff"/></g></symbol><symbol id="svg-icon-status74" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.7 7.531v.641c0 .363-.155.518-.517.518h-.89c-.364 0-.519-.155-.519-.518V6.649c0-.428.435-.555.784-.656.085-.026.173-.051.256-.079.427-.154.691-.344.691-.814 0-.259-.078-.603-.749-.603-.485 0-.93.188-1.196.301-.155.066-.24.102-.328.102h-.103l-.254-.233-.353-.934-.028-.181c0-.677 2.012-.981 2.53-.981 1.586 0 2.652 1.022 2.652 2.541 0 1.62-1.193 2.144-1.976 2.419m-.921 4.329a1.293 1.293 0 0 1-1.297-1.287c0-.728.569-1.297 1.297-1.297.71 0 1.287.582 1.287 1.297 0 .698-.589 1.287-1.287 1.287M8 1C4.134 1 1 3.742 1 7.125c0 1.603.711 3.058 1.863 4.15L1 15l4.391-2.195A7.825 7.825 0 0 0 8 13.25c3.867 0 7-2.743 7-6.125C15 3.742 11.867 1 8 1" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status75" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.612 5.375A1.14 1.14 0 0 1 9.75 4.237a1.138 1.138 0 1 1-1.138 1.138m-1.225 0a1.138 1.138 0 0 1-2.275 0A1.14 1.14 0 0 1 6.25 4.237a1.14 1.14 0 0 1 1.137 1.138m4.367 2.691a3.781 3.781 0 0 1-.981 1.72 3.74 3.74 0 0 1-2.66 1.101c-.328 0-.656-.042-.975-.128a3.775 3.775 0 0 1-2.664-2.686l-.057-.336h1.426l.062.175a2.361 2.361 0 0 0 1.597 1.495c.2.053.405.08.612.08.63 0 1.223-.245 1.669-.692.229-.228.41-.526.537-.883l.061-.175h1.458l-.085.329zM8 1C4.134 1 1 3.743 1 7.125c0 1.604.71 3.058 1.863 4.15L1 15l4.39-2.195A7.831 7.831 0 0 0 8 13.25c3.867 0 7-2.742 7-6.125C15 3.743 11.867 1 8 1" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status76" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8 1C4.133 1 1 3.742 1 7.125c0 1.603.711 3.058 1.864 4.15L1 15l4.39-2.195A7.827 7.827 0 0 0 8 13.25c3.867 0 7-2.743 7-6.125C15 3.742 11.867 1 8 1zm1.368 7.498l.047.123a.809.809 0 0 0 .149.244c.069.08.148.146.243.205a1.245 1.245 0 0 0 .678.185c.333 0 .613-.077.854-.235.25-.164.452-.373.62-.64.168-.268.296-.578.38-.92.083-.354.126-.711.126-1.06 0-.634-.102-1.211-.303-1.713a3.706 3.706 0 0 0-.84-1.282 3.675 3.675 0 0 0-1.281-.809A4.628 4.628 0 0 0 8.4 2.312a5.25 5.25 0 0 0-1.37.172 4.612 4.612 0 0 0-1.168.491c-.35.211-.667.468-.941.764a4.623 4.623 0 0 0-.702.998c-.192.367-.34.768-.441 1.194a5.825 5.825 0 0 0-.153 1.35c0 .671.099 1.278.294 1.804.193.523.474.968.835 1.324.361.359.814.638 1.342.828.533.193 1.15.291 1.834.291.494 0 .963-.046 1.397-.14a6.124 6.124 0 0 0 1.07-.328v-.723a7.954 7.954 0 0 1-1.074.299 8.97 8.97 0 0 1-.707.115 5.965 5.965 0 0 1-.697.043 4.103 4.103 0 0 1-1.436-.234 2.81 2.81 0 0 1-1.073-.694 2.97 2.97 0 0 1-.653-1.123 4.844 4.844 0 0 1-.215-1.496c0-.605.083-1.167.247-1.669.167-.514.414-.963.737-1.339a3.343 3.343 0 0 1 1.214-.888c.477-.21 1.036-.315 1.66-.315.45 0 .872.075 1.256.224.387.15.728.372 1.012.662.281.288.503.644.662 1.059.156.414.236.887.236 1.407 0 .28-.019.545-.055.795a3.39 3.39 0 0 1-.163.67 1.424 1.424 0 0 1-.295.496.67.67 0 0 1-.498.218.568.568 0 0 1-.241-.051.485.485 0 0 1-.224-.193.9.9 0 0 1-.131-.315 1.89 1.89 0 0 1-.044-.451v-.158c0-.088.005-.178.013-.263l.116-2.313a5.49 5.49 0 0 0-.718-.171 6.888 6.888 0 0 0-.529-.073 4.78 4.78 0 0 0-.526-.029c-.377 0-.719.063-1.018.188a2.158 2.158 0 0 0-.761.522c-.208.223-.37.495-.482.806a3.079 3.079 0 0 0-.171 1.045c0 .327.043.629.128.898.08.26.199.485.356.672.152.182.344.324.567.423.226.101.491.151.788.151.154 0 .298-.019.427-.055.13-.035.249-.085.357-.148.105-.061.203-.132.294-.216.089-.084.168-.172.236-.262l.146-.076h.23zm-.752-3.247a2.992 2.992 0 0 0-.345-.019c-.266 0-.498.059-.688.175a1.391 1.391 0 0 0-.453.45 1.89 1.89 0 0 0-.243.611 3.228 3.228 0 0 0-.073.667c0 .485.088.833.264 1.065a.895.895 0 0 0 .747.367c.2 0 .378-.049.53-.144.147-.095.267-.227.359-.394.084-.153.151-.34.196-.551.043-.203.071-.431.084-.679l.079-1.457-.154-.039a2.28 2.28 0 0 0-.303-.052z" fill="#fff"/></symbol><symbol id="svg-icon-status77" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M1.033 7.313A7.002 7.002 0 0 1 8.09 1.001h.001a7.002 7.002 0 0 1 6.885 6.41l.001.017c.03.376.031.755.001 1.131l-.002.026-.003.039-.001.001v.01l-.001.005v.001a7.001 7.001 0 0 1-6.789 6.357l-.042.001H8.09L8.047 15h-.089a7.001 7.001 0 0 1-6.925-6.313v-.006l-.001-.008v-.002a7.082 7.082 0 0 1 .001-1.358zM7.929 2.5a5.467 5.467 0 0 0-2.251.513 5.555 5.555 0 0 0-2.45 2.252 5.458 5.458 0 0 0-.602 1.559A5.493 5.493 0 0 0 5.8 13.042a5.51 5.51 0 0 0 4.153.101 5.53 5.53 0 0 0 2.946-2.642 5.474 5.474 0 0 0 .527-3.408 5.506 5.506 0 0 0-.497-1.535 5.56 5.56 0 0 0-2.427-2.457A5.557 5.557 0 0 0 7.929 2.5zm3.571 6a3.5 3.5 0 1 1-7 0h1.33a2.17 2.17 0 0 0 4.34 0h1.33zM6 4.5c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S5 6.828 5 6s.448-1.5 1-1.5zm4 0c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S9 6.828 9 6s.448-1.5 1-1.5z" fill="#fff"/></symbol><symbol id="svg-icon-status78" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.045 1l.045.001.115.003.115.004.114.006.115.008.015.001.12.011.121.012.119.015.12.017.021.003.094.015.093.016.093.017.092.019.092.02.092.021.092.023.092.023.063.018.106.03.105.031.104.034.104.035.085.03.085.031.085.033.084.033.083.034.083.036.083.037.082.037.098.047.098.048.096.05.096.052.095.053.094.054.093.056.092.057.092.058.09.06.09.062.088.062.088.065.086.065.086.067.084.068.064.052.063.054.063.054.061.055.062.056.06.056.06.057.059.058.059.059.058.059.057.06.057.06.055.061.055.062.055.062.053.063.053.064.052.064.052.065.05.066.05.066.049.067.049.067.047.068.047.068.046.069.045.07.044.07.044.071.042.071.042.072.041.072.038.069.059.111.057.113.055.113.054.115.051.116.049.116.047.117.044.119.043.118.04.12.038.121.036.121.034.121.032.123.029.123.027.123.008.035.018.094.017.093.016.095.015.094.013.094.012.095.011.095.01.095.008.095.007.095.005.095.005.096.003.095.002.096v.095l-.001.096-.002.097-.001.034-.006.14-.009.139-.012.14-.014.139-.011.094-.011.082-.012.082-.001.003v.005l-.02.121-.022.122-.024.121-.026.12-.028.12-.031.12-.032.119-.035.118-.037.118-.038.117-.041.117-.043.115-.045.115-.047.114-.049.114-.051.112-.005.011-.041.087-.043.086-.043.085-.045.085-.046.084-.047.084-.048.082-.05.083-.05.081-.052.081-.052.08-.054.08-.055.078-.056.078-.057.077-.058.077-.054.07-.055.069-.057.068-.057.068-.058.067-.058.066-.06.066-.06.065-.1.103-.101.101-.086.082-.087.081-.089.08-.09.078-.092.077-.092.075-.094.073-.095.072-.097.07-.097.068-.099.067-.1.066-.101.063-.101.062-.103.06-.104.058-.049.026-.083.045-.084.043-.104.051-.105.05-.107.048-.106.047-.073.03-.072.029-.073.028-.073.028-.074.027-.074.026-.074.025-.074.024-.075.023-.075.023-.075.022-.075.021-.076.02-.076.019-.076.018-.076.018-.076.016-.077.016-.077.015-.077.014-.077.013-.077.013-.077.011-.078.011-.077.01-.078.009-.078.008-.078.007-.078.006-.078.006-.078.004-.078.004-.102.003-.102.002-.085.001h-.082l-.082-.002-.082-.002-.083-.004-.082-.004-.082-.005-.082-.006-.082-.007-.082-.008-.081-.01-.082-.01-.081-.011-.082-.011-.081-.013-.081-.014-.081-.015-.081-.016-.08-.016-.081-.018-.08-.018-.079-.02-.08-.02-.08-.022-.079-.022-.079-.023-.078-.024-.079-.025-.078-.026-.077-.027-.078-.028-.077-.029-.077-.03-.121-.049-.121-.052-.12-.054-.118-.056-.118-.058-.116-.061-.115-.063-.114-.064L4.394 14l-.004-.003-.009-.006-.078-.048-.078-.049-.092-.06-.119-.081-.117-.083-.115-.085-.114-.088-.112-.09-.109-.092-.108-.095-.106-.096-.062-.058-.061-.059-.06-.059-.059-.06-.094-.098-.092-.1-.09-.102-.088-.104-.086-.105-.084-.106-.082-.109-.08-.11-.078-.111-.076-.113-.073-.114-.071-.116-.069-.117-.067-.118-.064-.12-.062-.121-.007-.014-.038-.078-.037-.079-.036-.078-.036-.08-.034-.08-.033-.08-.032-.08-.032-.081-.03-.082-.029-.081-.028-.083-.027-.082-.026-.083-.025-.083-.024-.083-.023-.084-.023-.087-.022-.088-.02-.088-.02-.088-.02-.099-.019-.099-.017-.099-.016-.1-.02-.137-.017-.138-.014-.139-.012-.139-.008-.139-.006-.139-.003-.139L1 7.956l.002-.139.005-.139.008-.139.01-.139.014-.138.015-.139.019-.138.022-.137.021-.122.023-.122.026-.121.028-.12.03-.12.032-.12.034-.119.037-.118.038-.118.041-.117.042-.116.045-.115.046-.115.049-.114.051-.113.053-.112.032-.065.032-.065.033-.064.034-.064.035-.064.035-.064.036-.063.036-.062.038-.062.037-.062.039-.062.039-.061.08-.12.082-.119.085-.118.088-.115.089-.114.092-.112.094-.11.096-.108.099-.106.1-.104.103-.101.105-.1.107-.098.109-.095.11-.093.113-.091.114-.089.117-.086.118-.084.119-.082.061-.039.061-.04.061-.038.062-.038.062-.037.063-.037.063-.036.063-.035.064-.035.064-.034.064-.033.065-.033.071-.034.07-.034.071-.033.072-.032.072-.031.072-.031.073-.03.073-.028.073-.028.073-.028.074-.026.074-.026.075-.024.074-.024.075-.023.075-.022.13-.036.13-.034.131-.031.131-.028.091-.019.092-.017.12-.02.12-.018.121-.016.121-.014.121-.012.121-.01.122-.008.122-.006h.009l.131-.003L8 1h.045zm-.116 1.5l-.097.003-.096.004-.096.005-.096.007-.096.009-.096.01-.095.012-.096.014-.096.015-.095.017-.096.019-.095.021-.094.022-.094.024-.094.026-.093.027-.093.03-.092.03-.092.033-.091.033-.091.036-.089.037-.09.039-.088.04-.097.047-.097.049-.095.05-.094.052-.093.054-.092.056-.091.058-.09.059-.088.062-.088.062-.086.065-.085.066-.083.068-.082.069-.081.071-.08.073-.078.074-.076.076-.075.077-.074.078-.072.08-.071.081-.069.083-.067.083-.066.086-.064.086-.063.088-.06.089-.059.09-.058.091-.055.093-.054.094-.048.088L3.1 5.5l-.045.09-.043.091-.042.092-.04.092-.038.094-.037.093-.035.095-.033.095-.031.096-.03.096-.027.097-.026.097-.025.098-.022.098-.024.116-.021.116-.019.116-.016.117-.014.117-.012.118-.009.118-.006.117-.004.118-.001.118.001.118.004.118.006.118.009.118.011.117.013.118.014.1.016.101.017.1.02.1.021.099.023.099.025.099.027.098.028.097.031.097.032.097.034.096.036.095.037.094.039.094.041.093.053.113.055.111.058.111.06.108.062.108.065.106.068.104.069.103.072.102.074.1.077.098.078.096.081.095.083.092.085.091.087.089.092.09.094.088.096.085.098.083.1.081.101.079.104.076.105.074.107.071.108.069.111.066.055.032.056.032.056.03.057.031.057.029.058.029.057.028.059.028.058.027.059.026.061.026.061.025.061.025.062.024.062.023.063.023.062.021.063.021.063.02.064.02.063.018.064.018.064.017.064.016.065.016.064.015.065.014.065.013.065.012.065.012.066.011.065.01.066.009.066.008.066.008.065.007.066.006.067.005.066.005.066.003.066.003.066.002.067.001.067.001h.067l.067-.001.067-.002.066-.003.067-.004.067-.004.067-.005.066-.006.067-.007.066-.007.066-.009.066-.009.066-.01.066-.01.066-.012.066-.012.065-.013.066-.014.065-.015.065-.016.065-.016.064-.017.064-.018.065-.018.064-.02.063-.02.064-.021.063-.022.063-.023.063-.023.06-.023.059-.024.06-.025.059-.025.059-.026.058-.027.059-.027.057-.029.058-.028.057-.03.057-.03.057-.031.056-.031.055-.032.111-.067.109-.068.107-.071.105-.074.104-.076.102-.079.1-.081.05-.041.048-.042.049-.042.048-.043.091-.085.089-.087.087-.088.085-.091.083-.092.081-.094.079-.096.076-.098.075-.099.072-.101.07-.103.067-.104.066-.106.062-.107.061-.109.058-.11.047-.094.045-.095.044-.096.041-.097.04-.097.038-.099.036-.099.034-.1.032-.1.03-.101.028-.101.027-.103.024-.102.022-.103.02-.104.019-.103.017-.113.015-.113.013-.113.011-.113.008-.114.005-.113.004-.114L13.5 8l-.001-.114-.004-.114-.005-.113-.008-.114-.011-.113-.013-.113-.015-.113-.017-.113-.018-.099-.019-.1-.021-.099-.023-.098-.025-.098-.027-.098-.028-.097-.031-.097-.032-.096-.034-.095-.035-.095-.038-.094-.039-.093-.04-.093-.043-.092-.044-.091-.05-.098-.052-.097-.054-.096-.056-.094-.057-.094-.06-.092-.061-.091-.063-.09-.065-.088-.066-.088-.069-.085-.069-.085-.072-.083-.073-.082-.075-.08-.076-.079-.078-.077-.079-.076-.081-.074-.082-.072-.084-.071-.085-.069-.086-.068-.088-.066-.089-.064-.09-.062-.092-.061-.093-.059-.094-.057-.095-.055-.096-.053-.097-.051-.065-.032-.066-.032-.065-.031-.066-.03-.066-.029-.067-.028-.067-.027-.067-.026-.068-.026-.068-.024-.068-.024-.068-.022-.069-.022-.069-.021-.07-.02-.069-.019-.07-.018-.07-.017-.07-.016-.071-.016-.07-.014-.071-.014-.071-.012-.072-.012-.071-.011-.072-.01-.071-.009-.072-.008-.072-.007-.072-.007-.073-.005-.072-.005-.089-.003-.089-.002-.089-.002h-.088zm.161 5.501l.09.004.089.005.089.008.088.01.087.012.087.015.085.016.085.019.085.02.083.023.083.024.082.027.08.028.08.031.079.032.078.034.077.036.076.038.075.039.074.042.073.043.071.044.071.047.069.048.068.049.067.051.065.053.064.054.063.056.062.057.06.059.059.06.057.062.056.063.054.064.052.065.052.067.049.068.048.069.047.071.044.071.043.073.042.074.039.075.038.076.036.077.034.078.032.079.031.08.028.08.027.082.024.083.023.083.02.085.019.085.016.085.015.087.012.087.01.088.008.089.005.089.004.09.001.09h-1.33l-.001-.056-.002-.056-.003-.055-.005-.055-.006-.054-.008-.054-.009-.054-.01-.053-.012-.053-.012-.052-.014-.052-.016-.051-.016-.051-.018-.05-.019-.05-.02-.049-.021-.048-.022-.048-.023-.047-.025-.046-.026-.046-.026-.045-.028-.045-.029-.043-.029-.043-.031-.042-.032-.042-.033-.04-.033-.04-.035-.039-.035-.038-.037-.037-.037-.037-.038-.035-.039-.035-.04-.033-.04-.033-.042-.032-.042-.031-.043-.029-.043-.029-.045-.028-.045-.026-.046-.026-.046-.025-.047-.023-.048-.022-.048-.021-.049-.02-.05-.019-.05-.018-.051-.016-.051-.016-.052-.014-.052-.012-.053-.012-.053-.01-.054-.009-.054-.008-.054-.006-.055-.005-.055-.003-.056-.002L8 9.33l-.056.001-.056.002-.055.003-.055.005-.054.006-.054.008-.054.009-.053.01-.053.012-.052.012-.052.014-.051.016-.051.016-.05.018-.05.019-.049.02-.048.021-.048.022-.047.023-.046.025-.046.026-.045.026-.045.028-.043.029-.043.029-.042.031-.042.032-.04.033-.04.033-.039.035-.038.035-.037.037-.037.037-.035.038-.035.039-.033.04-.033.04-.032.042-.031.042-.029.043-.029.043-.028.045-.027.045-.025.046-.025.046-.023.047-.022.048-.021.048-.02.049-.019.05-.018.05-.016.051-.016.051-.014.052-.012.052-.012.053-.01.053-.009.054-.008.054-.006.054-.005.055-.003.055-.002.056-.001.056H4.5l.001-.09.004-.09.005-.089.008-.089.01-.088.012-.087.015-.087.016-.085.019-.085.02-.085.023-.083.024-.083.027-.082.028-.08.031-.08.032-.079.034-.078.036-.077.038-.076.039-.075.042-.074.043-.073.044-.071.047-.071.048-.069.049-.068.052-.067.052-.065.054-.064.056-.063.057-.062.059-.06.06-.059.062-.057.063-.056.064-.054.065-.052.067-.052.068-.049.069-.048.071-.047.071-.044.073-.043.074-.042.075-.039.076-.038.077-.036.078-.034.079-.032.08-.031.08-.028.082-.027.083-.024.083-.023.085-.02.085-.019.085-.016.087-.015.087-.012.088-.01.089-.008.089-.005.09-.004L8 8l.09.001zM6.026 4.5l.025.002.026.002.025.004.025.004.025.005.025.006.024.007.025.008.024.009.024.01.023.01.024.012.023.012.023.013.022.014.022.015.022.015.022.016.021.017.022.018.02.018.041.039.039.042.038.045.036.047.035.05.033.052.032.054.029.057.028.059.026.06.024.063.022.065.02.066.018.068.016.07.013.071.012.073.008.074.007.075.004.076L7 6l-.001.077-.004.076-.007.075-.008.074-.012.073-.013.071-.016.07-.018.068-.02.066-.022.065-.024.063-.026.06-.028.059-.029.057-.032.054-.033.052-.035.05-.036.047-.038.045-.039.042-.041.039-.02.018-.022.018-.021.017-.022.016-.022.015-.022.015-.022.014-.023.013-.023.012-.024.012-.023.01-.024.01-.024.009-.025.008-.024.007-.025.006-.025.005-.025.004-.025.004-.026.002-.025.002h-.052l-.025-.002-.026-.002-.025-.004-.025-.004-.025-.005-.025-.006-.024-.007-.025-.008-.024-.009-.024-.01-.023-.01-.024-.012-.023-.012-.023-.013-.022-.014-.022-.015-.022-.015-.022-.016-.021-.017-.022-.018-.02-.018-.041-.039-.039-.042-.038-.045-.036-.047-.035-.05-.033-.052-.032-.054-.029-.057-.028-.059-.026-.06-.024-.063-.022-.065-.02-.066-.018-.068-.016-.07-.013-.071-.012-.073-.008-.074-.007-.075-.004-.076L5 6l.001-.077.004-.076.007-.075.008-.074.012-.073.013-.071.016-.07.018-.068.02-.066.022-.065.024-.063.026-.06.028-.059.029-.057.032-.054.033-.052.035-.05.036-.047.038-.045.039-.042.041-.039.02-.018.022-.018.021-.017.022-.016.022-.015.022-.015.022-.014.023-.013.023-.012.024-.012.023-.01.024-.01.024-.009.025-.008.024-.007.025-.006.025-.005.025-.004.025-.004.026-.002.025-.002h.052zm4 0l.025.002.026.002.025.004.025.004.025.005.025.006.024.007.025.008.024.009.024.01.023.01.024.012.023.012.023.013.022.014.022.015.022.015.022.016.021.017.022.018.02.018.041.039.039.042.038.045.036.047.035.05.033.052.032.054.029.057.028.059.026.06.024.063.022.065.02.066.018.068.016.07.013.071.012.073.008.074.007.075.004.076L11 6l-.001.077-.004.076-.007.075-.008.074-.012.073-.013.071-.016.07-.018.068-.02.066-.022.065-.024.063-.026.06-.028.059-.029.057-.032.054-.033.052-.035.05-.036.047-.038.045-.039.042-.041.039-.02.018-.022.018-.021.017-.022.016-.022.015-.022.015-.022.014-.023.013-.023.012-.024.012-.023.01-.024.01-.024.009-.025.008-.024.007-.025.006-.025.005-.025.004-.025.004-.026.002-.025.002h-.052l-.025-.002-.026-.002-.025-.004-.025-.004-.025-.005-.025-.006-.024-.007-.025-.008-.024-.009-.024-.01-.023-.01-.024-.012-.023-.012-.023-.013-.022-.014-.022-.015-.022-.015-.022-.016-.021-.017-.022-.018-.02-.018-.041-.039-.039-.042-.038-.045-.036-.047-.035-.05-.033-.052-.032-.054-.029-.057-.028-.059-.026-.06-.024-.063-.022-.065-.02-.066-.018-.068-.016-.07-.013-.071-.012-.073-.008-.074-.007-.075-.004-.076L9 6l.001-.077.004-.076.007-.075.008-.074.012-.073.013-.071.016-.07.018-.068.02-.066.022-.065.024-.063.026-.06.028-.059.029-.057.032-.054.033-.052.035-.05.036-.047.038-.045.039-.042.041-.039.02-.018.022-.018.021-.017.022-.016.022-.015.022-.015.022-.014.023-.013.023-.012.024-.012.023-.01.024-.01.024-.009.025-.008.024-.007.025-.006.025-.005.025-.004.025-.004.026-.002.025-.002h.052z" fill="#fff"/></symbol><symbol id="svg-icon-status79" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M1.033 7.313A7.002 7.002 0 0 1 8.09 1.001h.001a7.002 7.002 0 0 1 6.885 6.41l.001.017c.024.295.029.591.016.887l-.003.072-.005.072-.005.073-.001.018-.001.009-.002.026v.001l-.002.018-.001.018v.002l-.001.001v.01l-.001.005v.001a7.001 7.001 0 0 1-6.789 6.357l-.042.001H8.09L8.047 15h-.089a7.001 7.001 0 0 1-6.925-6.313v-.006l-.001-.008v-.005l-.002-.017a75.434 75.434 0 0 1-.012-.139l-.004-.069a6.842 6.842 0 0 1-.003-.835l.004-.069.005-.07.005-.069.008-.087zM7.929 2.5a5.467 5.467 0 0 0-2.251.513 5.562 5.562 0 0 0-2.483 2.31 5.461 5.461 0 0 0-.583 1.568 5.48 5.48 0 0 0 1.595 5.09 5.53 5.53 0 0 0 1.716 1.113A5.497 5.497 0 0 0 8 13.5c.711 0 1.419-.137 2.077-.406a5.53 5.53 0 0 0 2.881-2.712 5.466 5.466 0 0 0 .443-3.424 5.439 5.439 0 0 0-.533-1.519 5.563 5.563 0 0 0-2.486-2.397 5.534 5.534 0 0 0-2.239-.54C8.071 2.5 8 2.5 7.929 2.5zM11 10H5V9h6v1zM6 4.5c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S5 6.828 5 6s.448-1.5 1-1.5zm4 0c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S9 6.828 9 6s.448-1.5 1-1.5z" fill="#fff"/></symbol><symbol id="svg-icon-status8" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M8 5l6 6H2l6-6" fill="#fff"/></g></symbol><symbol id="svg-icon-status80" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.045 1l.045.001a7.229 7.229 0 0 1 1.284.134l.044.009.074.016.015.003a7.6 7.6 0 0 1 .364.09l.166.049.019.005a6.918 6.918 0 0 1 .901.347 7.076 7.076 0 0 1 3.198 3.011 6.96 6.96 0 0 1 .693 1.878l.01.047.01.053.014.071.013.071.006.037.009.052.011.072.009.064.003.022.008.057.002.013.006.046.002.024.008.068v.001c.031.281.044.564.041.847v.078a7 7 0 1 1-14 0v-.077a7.247 7.247 0 0 1 .022-.642v-.012l.001-.006v-.004l.001-.008.001-.007V7.4l.001-.009v-.004l.001-.004.001-.012v-.003l.005-.057h.001v-.002l.001-.013v-.005l.001-.003.001-.009v-.007l.001-.003.001-.007V7.253l.001-.003v-.006l.001-.007.001-.004v-.006l.001-.009.001-.004V7.21l.001-.011.001-.004v-.001l.004-.037v-.001l.001-.004.001-.011.001-.003v-.006l.001-.009.001-.003v-.003l.001-.004.001-.007v-.004l.001-.004v-.004l.001-.005.001-.006v-.004l.001-.003v-.004l.001-.008.001-.004v-.006l.002-.009V7.04l.001-.001v-.002l.001-.012.001-.004V7.02l.003-.018v-.004l.002-.013v-.001l.001-.002v-.005l.002-.009v-.005l.001-.005.001-.007.001-.004v-.003l.001-.004.001-.006.001-.005v-.004l.001-.004v-.004l.001-.007.001-.004.001-.003v-.004l.001-.007.001-.006.001-.002v-.002l.002-.01v-.005l.001-.001.003-.018a6.962 6.962 0 0 1 .662-2.015 7.073 7.073 0 0 1 2.039-2.427l.002-.002.006-.004c.34-.256.704-.482 1.086-.672l.028-.014.014-.006A6.975 6.975 0 0 1 8.023 1h.022zm-.116 1.5a5.467 5.467 0 0 0-2.251.513 5.564 5.564 0 0 0-2.515 2.368 5.48 5.48 0 0 0-.619 3.321 5.493 5.493 0 0 0 3.256 4.34 5.51 5.51 0 0 0 4.153.101 5.53 5.53 0 0 0 2.946-2.642 5.474 5.474 0 0 0 .527-3.408 5.506 5.506 0 0 0-.497-1.535 5.56 5.56 0 0 0-2.427-2.457A5.557 5.557 0 0 0 7.929 2.5zm4.072 6.541a3.906 3.906 0 0 1-.51 1.304c-.762 1.261-1.906 1.992-3.491 1.992-1.582 0-2.728-.731-3.49-1.992a3.875 3.875 0 0 1-.491-1.221l-.018-.083h8zM6 4.5c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S5 6.828 5 6s.448-1.5 1-1.5zm4 0c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5S9 6.828 9 6s.448-1.5 1-1.5z" fill="#fff"/></symbol><symbol id="svg-icon-status81" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M1.018 8.509a7.082 7.082 0 0 1 .032-1.35l.001-.007v-.005l.003-.024.002-.014.002-.013.005-.042.003-.02.002-.013.002-.017.003-.019.001-.007.008-.052.001-.01.002-.011.002-.014.007-.039v-.004l.001-.004.007-.04.002-.012.001-.006.001-.005a7.01 7.01 0 0 1 5.168-5.567l.004-.001h.003l.012-.003.04-.01.005-.002.023-.005.016-.004.004-.001a7.117 7.117 0 0 1 .587-.112l.01-.002.016-.002.008-.001.003-.001a7.41 7.41 0 0 1 .655-.062l.069-.003.078-.002C7.871 1.001 7.935 1 8 1h.09l.07.002c.222.005.442.02.658.045l.037.005a7.225 7.225 0 0 1 .595.098l.042.009.046.011.019.004a7.004 7.004 0 0 1 5.419 7.412A7.003 7.003 0 0 1 8.077 15H8a7.002 7.002 0 0 1-6.956-6.207v-.004l-.001-.006-.002-.023-.003-.03-.001-.01-.001-.004-.005-.052-.001-.013-.002-.017v-.007l-.001-.008-.006-.074v-.002L1.02 8.53l-.001-.004v-.01l-.001-.004v-.003zM7.929 2.5a5.467 5.467 0 0 0-2.251.513 5.562 5.562 0 0 0-2.483 2.31 5.458 5.458 0 0 0-.569 1.501A5.493 5.493 0 0 0 5.8 13.042a5.51 5.51 0 0 0 4.153.101 5.53 5.53 0 0 0 2.946-2.642 5.474 5.474 0 0 0 .527-3.408 5.506 5.506 0 0 0-.497-1.535 5.56 5.56 0 0 0-2.427-2.457A5.557 5.557 0 0 0 7.929 2.5zm3.571 6a3.5 3.5 0 1 1-7 0h1.33a2.17 2.17 0 0 0 4.34 0h1.33zM6 4c.552 0 1 .672 1 1.5S6.552 7 6 7s-1-.672-1-1.5S5.448 4 6 4zm5 2H9V5h2v1z" fill="#fff"/></symbol><symbol id="svg-icon-status82" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M1.018 8.509a7.082 7.082 0 0 1 .032-1.35l.001-.007v-.005l.003-.024.002-.014.002-.013.005-.042.003-.02.002-.013.002-.017.003-.019.001-.007.008-.052.001-.01.002-.011.002-.014.007-.039v-.004l.001-.004.007-.04.002-.012.001-.006.001-.005a7.01 7.01 0 0 1 5.168-5.567l.004-.001h.003l.012-.003.04-.01.005-.002.023-.005.016-.004.004-.001a7.117 7.117 0 0 1 .587-.112l.01-.002.016-.002.008-.001.003-.001a7.41 7.41 0 0 1 .655-.062l.069-.003.078-.002C7.871 1.001 7.935 1 8 1h.09l.07.002c.222.005.442.02.658.045l.037.005a7.225 7.225 0 0 1 .595.098l.042.009.046.011.019.004a7.004 7.004 0 0 1 5.419 7.412A7.003 7.003 0 0 1 8.077 15H8a7.002 7.002 0 0 1-6.956-6.207v-.004l-.001-.006-.002-.023-.003-.03-.001-.01-.001-.004-.005-.052-.001-.013-.002-.017v-.007l-.001-.008-.006-.074v-.002L1.02 8.53l-.001-.004v-.01l-.001-.004v-.003zM7.929 2.5a5.467 5.467 0 0 0-2.251.513 5.562 5.562 0 0 0-2.483 2.31 5.458 5.458 0 0 0-.569 1.501A5.493 5.493 0 0 0 5.8 13.042a5.51 5.51 0 0 0 4.153.101 5.53 5.53 0 0 0 2.946-2.642 5.474 5.474 0 0 0 .527-3.408 5.506 5.506 0 0 0-.497-1.535 5.56 5.56 0 0 0-2.427-2.457A5.557 5.557 0 0 0 7.929 2.5zM8 7.625c-.966 0-2 1.034-2 2s1.034 2 2 2c.967 0 2-1.034 2-2s-1.033-2-2-2zM6 4c.552 0 1 .672 1 1.5S6.552 7 6 7s-1-.672-1-1.5S5.448 4 6 4zm4 0c.552 0 1 .672 1 1.5S10.552 7 10 7s-1-.672-1-1.5S9.448 4 10 4z" fill="#fff"/></symbol><symbol id="svg-icon-status83" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M10 15H6v-5H5V6.75C5 5.788 5.787 5 6.75 5h2.5c.963 0 1.75.788 1.75 1.75V10h-1v5zM8 1a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 1z" fill="#fff"/></symbol><symbol id="svg-icon-status84" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M9 15H7l-1-5H5V6.75C5 5.788 5.787 5 6.75 5h.273L8 7l1-2h.25c.963 0 1.75.788 1.75 1.75V10h-1l-1 5zM8 1a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 1z" fill="#fff"/></symbol><symbol id="svg-icon-status85" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8 7l1-2h1c.604 0 1.147.368 1.372.929L13 10h-1l-2-3-.777 1 2.277 3H9.4L9 15H7l-.4-4H4.5l2.277-3L6 7l-2 3H3l1.628-4.071A1.479 1.479 0 0 1 6 5h1l1 2zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#fff"/></symbol><symbol id="svg-icon-status86" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M11.938 7.125A2.633 2.633 0 0 0 9.312 9.75v2.625A2.633 2.633 0 0 0 11.937 15a2.632 2.632 0 0 0 2.625-2.625V9.75a2.632 2.632 0 0 0-2.625-2.625zM4.501 15h-.875c-.241 0-.341-.172-.223-.382l7.446-13.237A.83.83 0 0 1 11.501 1h.875c.241 0 .341.172.223.381L5.153 14.618a.83.83 0 0 1-.652.382zm7.437-6.125c.475 0 .875.401.875.875v2.625c0 .474-.4.875-.875.875a.887.887 0 0 1-.875-.875V9.75c0-.474.401-.875.875-.875zM4.063 1a2.633 2.633 0 0 0-2.625 2.625V6.25a2.633 2.633 0 0 0 2.625 2.625A2.632 2.632 0 0 0 6.688 6.25V3.625A2.632 2.632 0 0 0 4.063 1zm0 1.75c.475 0 .875.401.875.875V6.25c0 .474-.4.875-.875.875a.887.887 0 0 1-.875-.875V3.625c0-.474.401-.875.875-.875z" fill="#fff"/></symbol><symbol id="svg-icon-status87" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M13.191 9.495c.514.443.809.957.809 1.505 0 1.656-2.689 3-6 3s-6-1.344-6-3c0-.55.297-1.066.815-1.51" fill="none" stroke="#fff"/><path d="M13.207 6.509c.505.44.793.949.793 1.491 0 1.656-2.689 3-6 3S2 9.656 2 8c0-.543.289-1.053.795-1.493" fill="none" stroke="#fff"/><ellipse cx="8" cy="5" rx="6" ry="3" fill="none" stroke="#fff"/></symbol><symbol id="svg-icon-status88" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M14.068 3.002s.18.025.267.056c.259.092.473.291.582.544.046.106.081.398.081.398L15 12s-.019.226-.058.335c-.1.281-.326.507-.607.607a1.865 1.865 0 0 1-.267.056L2 13s-.226-.019-.335-.058a1.008 1.008 0 0 1-.607-.607c-.031-.087-.056-.335-.056-.335L1 4s.012-.181.037-.27a1.01 1.01 0 0 1 .565-.647c.106-.046.33-.081.33-.081h12.136zM14 4H2v8h12V4zm-1 7H3V5h10v6zM9.732 7a1.999 1.999 0 0 0-3.464 0H4v2h2.268a1.999 1.999 0 0 0 3.464 0H12V7H9.732z" fill="#fff"/></symbol><symbol id="svg-icon-status89" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.09 1.001l.091.001.089.003.09.004.089.005.089.006.089.008.088.008.088.01.088.01.087.012.087.013.087.014.086.014.086.016.086.017.085.018.085.019.084.02.085.022.083.022.083.023.083.024.083.025.082.026.081.027.081.028.081.029.08.03.08.031.079.032.079.032.078.034.078.035.077.035.077.037.076.037.076.038.075.039.074.04.075.041.073.042.073.043.073.043.071.044.072.045.071.046.07.047.069.048.069.048.068.049.068.05.067.051.067.052.065.052.066.053.064.054.064.055.063.055.063.056.061.057.062.058.06.058.06.059.059.06.058.06.058.062.057.061.056.063.055.063.055.064.054.064.053.066.052.065.052.067.051.067.05.068.049.068.048.069.048.069.047.07.046.071.045.072.044.071.043.073.043.073.042.073.041.075.04.074.039.075.038.076.037.076.037.077.035.077.035.078.034.078.032.079.032.079.031.08.03.08.029.081.028.081.027.081.026.082.025.083.024.083.023.083.022.083.022.085.02.084.019.085.018.085.017.086.016.086.014.086.014.087.013.087.012.087.01.088.01.088.008.088.008.089.006.089.005.089.004.09.003.089.001.091L15 8l-.001.09-.001.091-.003.089-.004.09-.005.089-.006.089-.008.089-.008.088-.01.088-.01.088-.012.087-.013.087-.014.087-.014.086-.016.086-.017.086-.018.085-.019.085-.02.084-.022.085-.022.083-.023.083-.024.083-.025.083-.026.082-.027.081-.028.081-.029.081-.03.08-.031.08-.032.079-.032.079-.034.078-.035.078-.035.077-.037.077-.037.076-.038.076-.039.075-.04.074-.041.075-.042.073-.043.073-.043.073-.044.071-.045.072-.046.071-.047.07-.048.069-.048.069-.049.068-.05.068-.051.067-.052.067-.052.065-.053.066-.054.064-.055.064-.055.063-.056.063-.057.061-.058.062-.058.06-.059.06-.06.059-.06.058-.062.058-.061.057-.063.056-.063.055-.064.055-.064.054-.066.053-.065.052-.067.052-.067.051-.068.05-.068.049-.069.048-.069.048-.07.047-.071.046-.072.045-.071.044-.073.043-.073.043-.073.042-.075.041-.074.04-.075.039-.076.038-.076.037-.077.037-.077.035-.078.035-.078.034-.079.032-.079.032-.08.031-.08.03-.081.029-.081.028-.081.027-.082.026-.083.025-.083.024-.083.023-.083.022-.085.022-.084.02-.085.019-.085.018-.086.017-.086.016-.086.014-.087.014-.087.013-.087.012-.088.01-.088.01-.088.008-.089.008-.089.006-.089.005-.09.004-.089.003-.091.001L8 15l-.09-.001-.091-.001-.089-.003-.09-.004-.089-.005-.089-.006-.089-.008-.088-.008-.088-.01-.088-.01-.087-.012-.087-.013-.087-.014-.086-.014-.086-.016-.086-.017-.085-.018-.085-.019-.084-.02-.085-.022-.083-.022-.083-.023-.083-.024-.083-.025-.082-.026-.081-.027-.081-.028-.081-.029-.08-.03-.08-.031-.079-.032-.079-.032-.078-.034-.078-.035-.077-.035-.077-.037-.076-.037-.076-.038-.075-.039-.074-.04-.075-.041-.073-.042-.073-.043-.073-.043-.071-.044-.072-.045-.071-.046-.07-.047-.069-.048-.069-.048-.068-.049-.068-.05-.067-.051-.067-.052-.065-.052-.066-.053-.064-.054-.064-.055-.063-.055-.063-.056-.061-.057-.062-.058-.06-.058-.06-.059-.059-.06-.058-.06-.058-.062-.057-.061-.056-.063-.055-.063-.055-.064-.054-.064-.053-.066-.052-.065-.052-.067-.051-.067-.05-.068-.049-.068-.048-.069-.048-.069-.047-.07-.046-.071-.045-.072-.044-.071-.043-.073-.043-.073-.042-.073-.041-.075-.04-.074-.039-.075-.038-.076-.037-.076-.037-.077-.035-.077-.035-.078-.034-.078-.032-.079-.032-.079-.031-.08-.03-.08-.029-.081-.028-.081-.027-.081-.026-.082-.025-.083-.024-.083-.023-.083-.022-.083-.022-.085-.02-.084-.019-.085-.018-.085-.017-.086-.016-.086-.014-.086-.014-.087-.013-.087-.012-.087-.01-.088-.01-.088-.008-.088-.008-.089-.006-.089-.005-.089-.004-.09-.003-.089-.001-.091L1 8l.001-.09.001-.091.003-.089.004-.09.005-.089.006-.089.008-.089.008-.088.01-.088.01-.088.012-.087.013-.087.014-.087.014-.086.016-.086.017-.086.018-.085.019-.085.02-.084.022-.085.022-.083.023-.083.024-.083.025-.083.026-.082.027-.081.028-.081.029-.081.03-.08.031-.08.032-.079.032-.079.034-.078.035-.078.035-.077.037-.077.037-.076.038-.076.039-.075.04-.074.041-.075.042-.073.043-.073.043-.073.044-.071.045-.072.046-.071.047-.07.048-.069.048-.069.049-.068.05-.068.051-.067.052-.067.052-.065.053-.066.054-.064.055-.064.055-.063.056-.063.057-.061.058-.062.058-.06.059-.06.06-.059.06-.058.062-.058.061-.057.063-.056.063-.055.064-.055.064-.054.066-.053.065-.052.067-.052.067-.051.068-.05.068-.049.069-.048.069-.048.07-.047.071-.046.072-.045.071-.044.073-.043.073-.043.073-.042.075-.041.074-.04.075-.039.076-.038.076-.037.077-.037.077-.035.078-.035.078-.034.079-.032.079-.032.08-.031.08-.03.081-.029.081-.028.081-.027.082-.026.083-.025.083-.024.083-.023.083-.022.085-.022.084-.02.085-.019.085-.018.086-.017.086-.016.086-.014.087-.014.087-.013.087-.012.088-.01.088-.01.088-.008.089-.008.089-.006.089-.005.09-.004.089-.003.091-.001L8 1l.09.001zM7.929 2.5l-.071.002-.071.002-.071.003-.07.004-.07.005-.07.006-.07.007-.069.007-.069.008-.068.009-.069.011-.068.01-.067.012-.068.013-.067.013-.067.014-.066.015-.067.016-.065.016-.066.018-.065.018-.065.019-.065.019-.064.021-.064.021-.063.022-.064.022-.063.024-.062.024-.062.025-.062.026-.061.026-.061.027-.061.028-.06.029-.06.029-.06.03-.059.031-.058.031-.058.032-.058.033-.058.034-.056.034-.057.035-.056.035-.056.036-.055.037-.054.037-.055.039-.053.038-.054.04-.052.04-.053.04-.051.041-.052.042-.05.043-.051.043-.049.043-.05.044-.048.045-.048.045-.048.046-.047.047-.047.047-.045.048-.046.048-.045.048-.044.05-.043.049-.043.051-.043.05-.042.052-.041.051-.04.053-.04.052-.04.054-.039.053-.038.055-.037.054-.037.055-.036.056-.035.056-.035.057-.034.056-.034.058-.033.058-.032.058-.031.059-.031.059-.03.059-.029.06-.029.06-.028.061-.027.061-.026.061-.026.062-.025.062-.024.062-.023.063-.023.063-.022.064-.021.064-.021.064-.019.065-.019.065-.019.065-.017.066-.016.065-.016.067-.015.066-.014.067-.013.067-.013.068-.012.067-.01.068-.011.069-.009.068-.008.069-.007.069-.007.07-.006.07-.005.07-.004.07-.003.071-.002.071-.002.071v.142l.002.071.002.071.003.071.004.07.005.07.006.07.007.07.007.069.008.069.009.068.011.069.01.068.012.067.013.068.013.067.014.067.015.066.016.067.016.065.017.066.019.065.019.065.019.065.021.064.021.064.022.064.023.063.023.063.024.062.025.062.026.062.026.061.027.061.028.061.029.06.029.06.03.059.031.059.031.059.032.058.033.058.034.058.034.056.035.057.035.056.036.056.037.055.037.054.038.055.039.053.04.054.04.052.04.053.041.051.042.052.043.05.043.051.043.049.044.05.045.048.046.048.045.048.047.047.047.047.048.046.048.045.048.045.05.044.049.043.051.043.05.043.052.042.051.041.053.04.052.04.054.04.053.038.055.039.054.037.055.037.056.036.056.035.057.035.056.034.058.034.058.033.058.032.058.031.059.031.06.03.06.029.06.029.061.028.061.027.061.026.062.026.062.025.062.024.063.024.064.022.063.022.064.021.064.021.065.019.065.019.065.018.066.018.065.016.067.016.066.015.067.014.067.013.068.013.067.012.068.01.069.011.068.009.069.008.069.007.07.007.07.006.07.005.07.004.071.003.071.002.071.002h.142l.071-.002.071-.002.071-.003.07-.004.07-.005.07-.006.07-.007.069-.007.069-.008.068-.009.069-.011.068-.01.067-.012.068-.013.067-.013.067-.014.066-.015.067-.016.065-.016.066-.018.065-.018.065-.019.065-.019.064-.021.064-.021.063-.022.064-.022.063-.024.062-.024.062-.025.062-.026.061-.026.061-.027.061-.028.06-.029.06-.029.059-.03.06-.031.058-.031.058-.032.058-.033.058-.034.056-.034.057-.035.056-.035.056-.036.055-.037.054-.037.055-.039.053-.038.054-.04.052-.04.053-.04.051-.041.052-.042.05-.043.051-.043.049-.043.05-.044.048-.045.048-.045.048-.046.047-.047.047-.047.046-.048.045-.048.045-.048.044-.049.043-.05.043-.051.043-.05.042-.052.041-.051.04-.053.04-.052.04-.054.038-.053.039-.055.037-.054.037-.055.036-.056.035-.056.035-.057.034-.056.034-.058.033-.058.032-.058.031-.058.031-.06.03-.059.029-.06.029-.06.028-.061.027-.061.026-.061.026-.062.025-.062.024-.062.024-.063.022-.064.022-.063.021-.064.021-.064.02-.065.018-.065.018-.065.018-.066.016-.065.016-.067.015-.066.014-.067.013-.067.013-.068.012-.067.011-.068.01-.069.009-.068.008-.069.007-.069.007-.07.006-.07.005-.07.004-.07.003-.071.002-.07.002-.072v-.142l-.002-.072-.002-.07-.003-.071-.004-.07-.005-.07-.006-.07-.007-.07-.007-.069-.008-.069-.009-.068-.01-.069-.011-.068-.012-.067-.013-.068-.013-.067-.014-.067-.015-.066-.016-.067-.016-.065-.018-.066-.018-.065-.018-.065-.02-.065-.021-.064-.021-.064-.022-.063-.022-.064-.024-.063-.024-.062-.025-.062-.026-.062-.026-.061-.027-.061-.028-.061-.029-.06-.029-.06-.03-.059-.031-.06-.031-.058-.032-.058-.033-.058-.034-.058-.034-.056-.035-.057-.035-.056-.036-.056-.037-.055-.037-.054-.039-.055-.038-.053-.04-.054-.04-.052-.04-.053-.041-.051-.042-.052-.043-.05-.043-.051-.043-.05-.044-.049-.045-.048-.045-.048-.046-.048-.047-.047-.047-.047-.048-.046-.048-.045-.048-.045-.05-.044-.049-.043-.051-.043-.05-.043-.052-.042-.051-.041-.053-.04-.052-.04-.054-.04-.053-.038-.055-.039-.054-.037-.055-.037-.056-.036-.056-.035-.057-.035-.056-.034-.058-.034-.058-.033-.058-.032-.058-.031-.06-.031-.059-.03-.06-.029-.06-.029-.061-.028-.061-.027-.061-.026-.062-.026-.062-.025-.062-.024-.063-.024-.064-.022-.063-.022-.064-.021-.064-.021-.065-.019-.065-.019-.065-.018-.066-.018-.065-.016-.067-.016-.066-.015-.067-.014-.067-.013-.068-.013-.067-.012-.068-.01-.069-.011-.068-.009-.069-.008-.069-.007-.07-.007-.07-.006-.07-.005-.07-.004-.071-.003-.071-.002-.071-.002h-.142z" fill="#fff"/><path d="M7.635 10.461V8.279c-.68-.195-1.179-.489-1.497-.883-.318-.394-.477-.873-.477-1.435 0-.57.18-1.048.54-1.435.359-.387.837-.61 1.434-.669v-.516h.756v.516c.552.066.991.254 1.317.565.327.311.535.726.625 1.247l-1.317.172c-.08-.41-.289-.687-.625-.833v2.036c.833.226 1.401.519 1.703.878.302.359.453.82.453 1.383 0 .628-.19 1.158-.57 1.588-.381.431-.909.695-1.586.792v.974h-.756v-.948c-.6-.073-1.088-.297-1.463-.672-.375-.375-.615-.904-.719-1.588l1.36-.146c.055.277.159.517.312.718.153.202.323.348.51.438zm0-5.469a.984.984 0 0 0-.489.354.914.914 0 0 0-.182.552c0 .184.055.355.166.513.111.158.28.286.505.383V4.992zm.756 5.542a1.06 1.06 0 0 0 .635-.362 1.02 1.02 0 0 0 .245-.68.923.923 0 0 0-.206-.601c-.137-.169-.362-.298-.674-.388v2.031z" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status9" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M0 0h16v16H0V0" fill="#3f7ab7"/><path d="M5 8l5.999-6v12L5 8" fill="#fff"/></g></symbol><symbol id="svg-icon-status90" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8.09 1.001l.091.001.089.003.09.004.089.005.089.006.089.008.088.008.088.01.088.01.087.012.087.013.087.014.086.014.086.016.086.017.085.018.085.019.084.02.085.022.083.022.083.023.083.024.083.025.082.026.081.027.081.028.081.029.08.03.08.031.079.032.079.032.078.034.078.035.077.035.077.037.076.037.076.038.075.039.074.04.075.041.073.042.073.043.073.043.071.044.072.045.071.046.07.047.069.048.069.048.068.049.068.05.067.051.067.052.065.052.066.053.064.054.064.055.063.055.063.056.061.057.062.058.06.058.06.059.059.06.058.06.058.062.057.061.056.063.055.063.055.064.054.064.053.066.052.065.052.067.051.067.05.068.049.068.048.069.048.069.047.07.046.071.045.072.044.071.043.073.043.073.042.073.041.075.04.074.039.075.038.076.037.076.037.077.035.077.035.078.034.078.032.079.032.079.031.08.03.08.029.081.028.081.027.081.026.082.025.083.024.083.023.083.022.083.022.085.02.084.019.085.018.085.017.086.016.086.014.086.014.087.013.087.012.087.01.088.01.088.008.088.008.089.006.089.005.089.004.09.003.089.001.091L15 8l-.001.09-.001.091-.003.089-.004.09-.005.089-.006.089-.008.089-.008.088-.01.088-.01.088-.012.087-.013.087-.014.087-.014.086-.016.086-.017.086-.018.085-.019.085-.02.084-.022.085-.022.083-.023.083-.024.083-.025.083-.026.082-.027.081-.028.081-.029.081-.03.08-.031.08-.032.079-.032.079-.034.078-.035.078-.035.077-.037.077-.037.076-.038.076-.039.075-.04.074-.041.075-.042.073-.043.073-.043.073-.044.071-.045.072-.046.071-.047.07-.048.069-.048.069-.049.068-.05.068-.051.067-.052.067-.052.065-.053.066-.054.064-.055.064-.055.063-.056.063-.057.061-.058.062-.058.06-.059.06-.06.059-.06.058-.062.058-.061.057-.063.056-.063.055-.064.055-.064.054-.066.053-.065.052-.067.052-.067.051-.068.05-.068.049-.069.048-.069.048-.07.047-.071.046-.072.045-.071.044-.073.043-.073.043-.073.042-.075.041-.074.04-.075.039-.076.038-.076.037-.077.037-.077.035-.078.035-.078.034-.079.032-.079.032-.08.031-.08.03-.081.029-.081.028-.081.027-.082.026-.083.025-.083.024-.083.023-.083.022-.085.022-.084.02-.085.019-.085.018-.086.017-.086.016-.086.014-.087.014-.087.013-.087.012-.088.01-.088.01-.088.008-.089.008-.089.006-.089.005-.09.004-.089.003-.091.001L8 15l-.09-.001-.091-.001-.089-.003-.09-.004-.089-.005-.089-.006-.089-.008-.088-.008-.088-.01-.088-.01-.087-.012-.087-.013-.087-.014-.086-.014-.086-.016-.086-.017-.085-.018-.085-.019-.084-.02-.085-.022-.083-.022-.083-.023-.083-.024-.083-.025-.082-.026-.081-.027-.081-.028-.081-.029-.08-.03-.08-.031-.079-.032-.079-.032-.078-.034-.078-.035-.077-.035-.077-.037-.076-.037-.076-.038-.075-.039-.074-.04-.075-.041-.073-.042-.073-.043-.073-.043-.071-.044-.072-.045-.071-.046-.07-.047-.069-.048-.069-.048-.068-.049-.068-.05-.067-.051-.067-.052-.065-.052-.066-.053-.064-.054-.064-.055-.063-.055-.063-.056-.061-.057-.062-.058-.06-.058-.06-.059-.059-.06-.058-.06-.058-.062-.057-.061-.056-.063-.055-.063-.055-.064-.054-.064-.053-.066-.052-.065-.052-.067-.051-.067-.05-.068-.049-.068-.048-.069-.048-.069-.047-.07-.046-.071-.045-.072-.044-.071-.043-.073-.043-.073-.042-.073-.041-.075-.04-.074-.039-.075-.038-.076-.037-.076-.037-.077-.035-.077-.035-.078-.034-.078-.032-.079-.032-.079-.031-.08-.03-.08-.029-.081-.028-.081-.027-.081-.026-.082-.025-.083-.024-.083-.023-.083-.022-.083-.022-.085-.02-.084-.019-.085-.018-.085-.017-.086-.016-.086-.014-.086-.014-.087-.013-.087-.012-.087-.01-.088-.01-.088-.008-.088-.008-.089-.006-.089-.005-.089-.004-.09-.003-.089-.001-.091L1 8l.001-.09.001-.091.003-.089.004-.09.005-.089.006-.089.008-.089.008-.088.01-.088.01-.088.012-.087.013-.087.014-.087.014-.086.016-.086.017-.086.018-.085.019-.085.02-.084.022-.085.022-.083.023-.083.024-.083.025-.083.026-.082.027-.081.028-.081.029-.081.03-.08.031-.08.032-.079.032-.079.034-.078.035-.078.035-.077.037-.077.037-.076.038-.076.039-.075.04-.074.041-.075.042-.073.043-.073.043-.073.044-.071.045-.072.046-.071.047-.07.048-.069.048-.069.049-.068.05-.068.051-.067.052-.067.052-.065.053-.066.054-.064.055-.064.055-.063.056-.063.057-.061.058-.062.058-.06.059-.06.06-.059.06-.058.062-.058.061-.057.063-.056.063-.055.064-.055.064-.054.066-.053.065-.052.067-.052.067-.051.068-.05.068-.049.069-.048.069-.048.07-.047.071-.046.072-.045.071-.044.073-.043.073-.043.073-.042.075-.041.074-.04.075-.039.076-.038.076-.037.077-.037.077-.035.078-.035.078-.034.079-.032.079-.032.08-.031.08-.03.081-.029.081-.028.081-.027.082-.026.083-.025.083-.024.083-.023.083-.022.085-.022.084-.02.085-.019.085-.018.086-.017.086-.016.086-.014.087-.014.087-.013.087-.012.088-.01.088-.01.088-.008.089-.008.089-.006.089-.005.09-.004.089-.003.091-.001L8 1l.09.001zM7.929 2.5l-.071.002-.071.002-.071.003-.07.004-.07.005-.07.006-.07.007-.069.007-.069.008-.068.009-.069.011-.068.01-.067.012-.068.013-.067.013-.067.014-.066.015-.067.016-.065.016-.066.018-.065.018-.065.019-.065.019-.064.021-.064.021-.063.022-.064.022-.063.024-.062.024-.062.025-.062.026-.061.026-.061.027-.061.028-.06.029-.06.029-.059.03-.06.031-.058.031-.058.032-.058.033-.058.034-.056.034-.057.035-.056.035-.056.036-.055.037-.054.037-.055.039-.053.038-.054.04-.052.04-.053.04-.051.041-.052.042-.05.043-.051.043-.049.043-.05.044-.048.045-.048.045-.048.046-.047.047-.047.047-.046.048-.045.048-.045.048-.044.049-.043.05-.043.051-.043.05-.042.052-.041.051-.04.053-.04.052-.04.054-.038.053-.039.055-.037.054-.037.055-.036.056-.035.056-.035.057-.034.056-.034.058-.033.058-.032.058-.031.058-.031.06-.03.059-.029.06-.029.06-.028.061-.027.061-.026.061-.026.062-.025.062-.024.062-.024.063-.022.064-.022.063-.021.064-.021.064-.02.065-.018.065-.018.065-.018.066-.016.065-.016.067-.015.066-.014.067-.013.067-.013.068-.012.067-.011.068-.01.069-.009.068-.008.069-.007.069-.007.07-.006.07-.005.07-.004.07-.003.071-.002.07-.002.072v.142l.002.072.002.07.003.071.004.07.005.07.006.07.007.07.007.069.008.069.009.068.01.069.011.068.012.067.013.068.013.067.014.067.015.066.016.067.016.065.018.066.018.065.018.065.02.065.021.064.021.064.022.063.022.064.024.063.024.062.025.062.026.062.026.061.027.061.028.061.029.06.029.06.03.059.031.06.031.058.032.058.033.058.034.058.034.056.035.057.035.056.036.056.037.055.037.054.039.055.038.053.04.054.04.052.04.053.041.051.042.052.043.05.043.051.043.05.044.049.045.048.045.048.046.048.047.047.047.047.048.046.048.045.048.045.05.044.049.043.051.043.05.043.052.042.051.041.053.04.052.04.054.04.053.038.055.039.054.037.055.037.056.036.056.035.057.035.056.034.058.034.058.033.058.032.058.031.06.031.059.03.06.029.06.029.061.028.061.027.061.026.062.026.062.025.062.024.063.024.064.022.063.022.064.021.064.021.065.019.065.019.065.018.066.018.065.016.067.016.066.015.067.014.067.013.068.013.067.012.068.01.069.011.068.009.069.008.069.007.07.007.07.006.07.005.07.004.071.003.071.002.071.002h.142l.071-.002.071-.002.071-.003.07-.004.07-.005.07-.006.07-.007.069-.007.069-.008.068-.009.069-.011.068-.01.067-.012.068-.013.067-.013.067-.014.066-.015.067-.016.065-.016.066-.018.065-.018.065-.019.065-.019.064-.021.064-.021.063-.022.064-.022.063-.024.062-.024.062-.025.062-.026.061-.026.061-.027.061-.028.06-.029.06-.029.06-.03.059-.031.058-.031.058-.032.058-.033.058-.034.056-.034.057-.035.056-.035.056-.036.055-.037.054-.037.055-.039.053-.038.054-.04.052-.04.053-.04.051-.041.052-.042.05-.043.051-.043.049-.043.05-.044.048-.045.048-.045.048-.046.047-.047.047-.047.045-.048.046-.048.045-.048.044-.05.043-.049.043-.051.043-.05.042-.052.041-.051.04-.053.04-.052.04-.054.039-.053.038-.055.037-.054.037-.055.036-.056.035-.056.035-.057.034-.056.034-.058.033-.058.032-.058.031-.059.031-.059.03-.059.029-.06.029-.06.028-.061.027-.061.026-.061.026-.062.025-.062.024-.062.023-.063.023-.063.022-.064.021-.064.021-.064.019-.065.019-.065.019-.065.017-.066.016-.065.016-.067.015-.066.014-.067.013-.067.013-.068.012-.067.01-.068.011-.069.009-.068.008-.069.007-.069.007-.07.006-.07.005-.07.004-.07.003-.071.002-.071.002-.071v-.142l-.002-.071-.002-.071-.003-.071-.004-.07-.005-.07-.006-.07-.007-.07-.007-.069-.008-.069-.009-.068-.011-.069-.01-.068-.012-.067-.013-.068-.013-.067-.014-.067-.015-.066-.016-.067-.016-.065-.017-.066-.019-.065-.019-.065-.019-.065-.021-.064-.021-.064-.022-.064-.023-.063-.023-.063-.024-.062-.025-.062-.026-.062-.026-.061-.027-.061-.028-.061-.029-.06-.029-.06-.03-.059-.031-.059-.031-.059-.032-.058-.033-.058-.034-.058-.034-.056-.035-.057-.035-.056-.036-.056-.037-.055-.037-.054-.038-.055-.039-.053-.04-.054-.04-.052-.04-.053-.041-.051-.042-.052-.043-.05-.043-.051-.043-.049-.044-.05-.045-.048-.046-.048-.045-.048-.047-.047-.047-.047-.048-.046-.048-.045-.048-.045-.05-.044-.049-.043-.051-.043-.05-.043-.052-.042-.051-.041-.053-.04-.052-.04-.054-.04-.053-.038-.055-.039-.054-.037-.055-.037-.056-.036-.056-.035-.057-.035-.056-.034-.058-.034-.058-.033-.058-.032-.058-.031-.059-.031-.06-.03-.06-.029-.06-.029-.061-.028-.061-.027-.061-.026-.062-.026-.062-.025-.062-.024-.063-.024-.064-.022-.063-.022-.064-.021-.064-.021-.065-.019-.065-.019-.065-.018-.066-.018-.065-.016-.067-.016-.066-.015-.067-.014-.067-.013-.068-.013-.067-.012-.068-.01-.069-.011-.068-.009-.069-.008-.069-.007-.07-.007-.07-.006-.07-.005-.07-.004-.071-.003-.071-.002-.071-.002h-.142z" fill="#fff"/><path d="M10 4a4 4 0 0 0 0 8v-1.6a2.4 2.4 0 0 1 0-4.8V4z" fill="#fff"/><path fill="#fff" d="M5 7h5v2H5z"/></symbol><symbol id="svg-icon-status91" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M2 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm7 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm2-3.5c.981 0 1 0 1-1V4c0-1.299 1.03-2 2-2a1 1 0 0 1 0 2v5c0 3-2.026 3-3 3H2a1 1 0 0 1 0-2h9z" fill="#fff"/></symbol><symbol id="svg-icon-status92" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M2 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm7 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm2-1.5H2a1 1 0 0 1 0-2h9c.981 0 1 0 1-1V4c0-1.299 1.03-2 2-2a1 1 0 0 1 0 2v5c0 3-2.026 3-3 3zm0-7H8v4H6V5H3l4-4 4 4z" fill="#fff"/></symbol><symbol id="svg-icon-status93" viewBox="0 0 16 16"><path d="M0 0h16v16H0V0" fill="#3f7ab7" fill-rule="nonzero"/><path d="M2 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm7 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm2-1.5H2a1 1 0 0 1 0-2h9c.981 0 1 0 1-1V4c0-1.299 1.03-2 2-2a1 1 0 0 1 0 2v5c0 3-2.026 3-3 3zM8 5h3L7 9 3 5h3V1h2v4z" fill="#fff"/></symbol><symbol id="svg-icon-status94" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M4.5 11a1.75 1.75 0 1 0-.001 3.499A1.75 1.75 0 0 0 4.5 11zm7.875 0a1.75 1.75 0 1 0-.001 3.499A1.75 1.75 0 0 0 12.375 11zm2.188-9a.44.44 0 0 1 .437.438v8.75a.43.43 0 0 1-.19.349 2.623 2.623 0 0 0-2.435-1.662c-1.14 0-2.102.733-2.464 1.75H6.962A2.618 2.618 0 0 0 4.5 9.875a2.625 2.625 0 0 0-2.451 1.704 1.19 1.19 0 0 1-.484-.264l-.255-.255a1.211 1.211 0 0 1-.31-.747V7.688c0-.241.088-.614.195-.829l1.358-2.468A.78.78 0 0 1 3.188 4H5V2.438C5 2.197 5.197 2 5.437 2h9.126zM5 8V5H3L2 8h3z" fill="#fff"/></symbol><symbol id="svg-icon-status95" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M11 4.008V2h2v4.014l2.064 2.071-1.416 1.412-.647-.649L13 14H3l.001-5.153-.649.65L.936 8.085 7.999.999 8 1l.001-.001L11 4.008zM10 8H6v5h4V8z" fill="#fff"/></symbol><symbol id="svg-icon-status96" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M14 2H4L2 4l2 2h10V2zM2 8h10l2 2-2 2H2V8z" fill="#fff"/><path fill="#fff" d="M7 1h2v14H7z"/></symbol><symbol id="svg-icon-status97" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8 2a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2m6.92 7h-2.022A5.008 5.008 0 0 1 9 12.891V7h3V6H9V4.723c.596-.347 1-.985 1-1.723a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V6H4v1h3v5.891A5.008 5.008 0 0 1 3.102 9H1.08c.488 3.387 3.4 6 6.92 6s6.432-2.613 6.92-6z" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status98" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M3.518 5.358h3.436L8 1.989l1.047 3.369h3.436L9.717 7.221l1.475 3.225L8 8.44l-3.189 2.006 1.475-3.225-2.768-1.863zM8 1a5.5 5.5 0 0 0-5.5 5.5C2.5 10 6.211 11.706 8 16c1.789-4.296 5.5-6 5.5-9.5A5.5 5.5 0 0 0 8 1" fill="#fff" fill-rule="nonzero"/></symbol><symbol id="svg-icon-status99" viewBox="0 0 16 16"><path fill="#3f7ab7" d="M0 0h16v16H0z"/><path d="M8 1a5.5 5.5 0 0 0-5.5 5.5C2.5 10 6.211 11.706 8 16c1.789-4.296 5.5-6 5.5-9.5A5.5 5.5 0 0 0 8 1zm0 3c1.104 0 2 1.12 2 2.5S9.104 9 8 9 6 7.88 6 6.5 6.896 4 8 4zm-.003-2h.006L8 1.989 7.997 2z" fill="#fff"/></symbol></svg><!-- endinject -->\n</div>'/*ion-inline-end:"/Users/hay/workspace/YTWO/YTWO.Phone/src/assets/templates/svg-store.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], SVGStore);

//# sourceMappingURL=svg-store.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpConfigService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttpConfigService = (function () {
    function HttpConfigService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': '' });
        this.baseUrl = 'https://ytwo.rib-software.com:98/ytwo/daily/services/';
        this.identityServer = 'https://itwo40-int.rib-software.com/itwo40/identityserver/core/connect/token';
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: this.headers });
        this.appBaseUrl = "" + window.location.host + window.location.pathname.replace('index.html', '');
    }
    HttpConfigService.prototype.setAuthHeader = function (token) {
        this._options.headers.set('Authorization', token);
    };
    HttpConfigService.prototype.setClientContext = function (context) {
        this._options.headers.set('Client-Context', JSON.stringify(context));
    };
    return HttpConfigService;
}());
HttpConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpConfigService);

//# sourceMappingURL=http-config.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SecureSubscribeForComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CleanOnDestroy = (function () {
    function CleanOnDestroy() {
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    CleanOnDestroy.prototype.cleanSubscriptions = function () {
        console.group(this['constructor'].name);
        console.log('clean up subscriptions');
        console.groupEnd();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return CleanOnDestroy;
}());
/**
 * this class is used to prevent memory leak from rxjs.
 */
var SecureSubscribe = (function (_super) {
    __extends(SecureSubscribe, _super);
    function SecureSubscribe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ionViewDidLeave() {
    //     this.cleanSubscriptions();
    // }
    SecureSubscribe.prototype.ngOnDestroy = function () {
        this.cleanSubscriptions();
    };
    return SecureSubscribe;
}(CleanOnDestroy));

var SecureSubscribeForComponent = (function (_super) {
    __extends(SecureSubscribeForComponent, _super);
    function SecureSubscribeForComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureSubscribeForComponent.prototype.ngOnDestroy = function () {
        this.cleanSubscriptions();
    };
    return SecureSubscribeForComponent;
}(CleanOnDestroy));

//# sourceMappingURL=secure-subscribe.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_svg_icon_svg_icon__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_y2_translate_y2_translate__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__components_svg_icon_svg_icon__["a" /* SVGIcon */], __WEBPACK_IMPORTED_MODULE_3__components_y2_translate_y2_translate__["a" /* Y2Translate */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_svg_icon_svg_icon__["a" /* SVGIcon */],
            __WEBPACK_IMPORTED_MODULE_3__components_y2_translate_y2_translate__["a" /* Y2Translate */]
        ]
    })
], CommonModule);

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_network_service__ = __webpack_require__(183);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










window['$'] = window['jQuery'] = __WEBPACK_IMPORTED_MODULE_6_jquery___default.a;
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: method, url: url }));
}
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(_backend, _defaultOptions, HttpConfigService, AlertService, NetworkService) {
        var _this = _super.call(this, _backend, _defaultOptions) || this;
        _this.HttpConfigService = HttpConfigService;
        _this.AlertService = AlertService;
        _this.NetworkService = NetworkService;
        return _this;
    }
    // this method handles all http request, so we can do some validation like network check.
    HttpService.prototype.$request = function (url, showAlert) {
        var ret = this.request(url)
            .map(this.successHandler())
            .catch(this.errorHandler(showAlert));
        var errorMsg;
        var _url = url.url;
        if (!/^http(s|s{0}):\/\//.test(_url)) {
            url.url = this.HttpConfigService.baseUrl + _url;
        }
        // {0} Test network connection
        if (!this.NetworkService.isOnline()) {
            errorMsg = 'No Network Connection';
            ret = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
            this.AlertService.showBasic(errorMsg, false);
        }
        return ret;
    };
    HttpService.prototype.$get = function (url, showAlert) {
        if (showAlert === void 0) { showAlert = true; }
        // let request: Observable<any>;
        // return Observable.create(ob => {
        //     if ((this.Network && this.Network.type === 'none') || !this.Network) {
        //         ob.error('No Network Connection');
        //         ob.complete();
        //     } else {
        //         super.get(this.HttpConfigService.baseUrl + url, this.HttpConfigService._options)
        //         .subscribe(data => {
        //             ob.next(data);
        //             ob.complete();
        //         });
        //     }
        // })
        // .map(this.successHandler())
        // .catch(this.errorHandler(showAlert));
        // if (!this.NetworkService.isOnline()) {
        //     this.AlertService.showBasic('No Network Connection', false);
        //     return Observable.throw('No Network Connection');
        // }
        // return super.get(this.HttpConfigService.baseUrl + url, this.HttpConfigService._options)
        // .map(this.successHandler())
        // .catch(this.errorHandler(showAlert));
        return this.$request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](mergeOptions(this._defaultOptions, this.HttpConfigService._options, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, url)), showAlert);
    };
    HttpService.prototype.$post = function (url, body, showAlert, options) {
        if (body === void 0) { body = {}; }
        if (showAlert === void 0) { showAlert = true; }
        // if (!this.NetworkService.isOnline()) {
        //     this.AlertService.showBasic('No Network Connection', false);
        //     return Observable.throw('No Network Connection');
        // }
        // return super.post(this.HttpConfigService.baseUrl + url, body, this.HttpConfigService._options)
        // .map(this.successHandler())
        // .catch(this.errorHandler(showAlert));
        return this.$request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ body: body })), this.HttpConfigService._options.merge(options), __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, url)), showAlert);
    };
    HttpService.prototype.successHandler = function () {
        return function (res) {
            var ret = res.json();
            return ret;
        };
    };
    HttpService.prototype.errorHandler = function (showAlert) {
        var _this = this;
        return function (error) {
            if (showAlert) {
                _this.AlertService.showBasic(error.toLocaleString(), false);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        };
    };
    HttpService.prototype.identity = function (data, showAlert) {
        if (showAlert === void 0) { showAlert = true; }
        data = __WEBPACK_IMPORTED_MODULE_6_jquery___default.a.param(data);
        var url = this.HttpConfigService.identityServer;
        var option = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Client-Context': '{"signedInClientId":0,"clientId":0,"permissionClientId":0,"permissionRoleId":0,"dataLanguageId":0,"language":"en","culture":"en-gb"}'
            })
        };
        return this.$post(url, data, showAlert, option);
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* XHRBackend */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */],
        __WEBPACK_IMPORTED_MODULE_7__http_config_service__["a" /* HttpConfigService */],
        __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_9__services_network_service__["a" /* NetworkService */]])
], HttpService);

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingService = (function () {
    function LoadingService(LoadingController, TranslateService) {
        this.LoadingController = LoadingController;
        this.TranslateService = TranslateService;
    }
    LoadingService.prototype.hide = function () {
        this.loadComponent.dismiss();
    };
    LoadingService.prototype.show = function (text) {
        var _this = this;
        if (text === void 0) { text = 'platform.loading'; }
        this.TranslateService.get(text)
            .subscribe(function (value) {
            _this.loadComponent = _this.LoadingController.create({
                content: value
            });
            _this.loadComponent.present();
        });
    };
    LoadingService.prototype.showText = function (text) {
        var _this = this;
        this.TranslateService.get(text)
            .subscribe(function (value) {
            _this.loadComponent = _this.LoadingController.create({
                content: value,
                spinner: 'hide',
                duration: 3000
            });
            _this.loadComponent.present();
        });
    };
    return LoadingService;
}());
LoadingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertService = (function () {
    function AlertService(AlertController, TranslateService) {
        this.AlertController = AlertController;
        this.TranslateService = TranslateService;
    }
    AlertService.prototype.hide = function () {
    };
    AlertService.prototype.showBasic = function (content, needTranslate) {
        var _this = this;
        if (needTranslate === void 0) { needTranslate = true; }
        var okText = this.TranslateService.get('platform.alert.ok');
        var titleText = this.TranslateService.get('platform.alert.info');
        var _content = needTranslate ? this.TranslateService.get(content) : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(content);
        var texts = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin(okText, titleText, _content);
        texts.subscribe(function (values) {
            _this.alertComponent = _this.AlertController.create({
                title: values[1],
                subTitle: values[2],
                buttons: [values[0]]
            });
            _this.alertComponent.present();
        });
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicCompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_services_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_services_data_structure_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_services_loading_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the BasicCompanyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BasicCompanyService = (function () {
    function BasicCompanyService(http, LoadingService, PlatformContextService) {
        this.http = http;
        this.LoadingService = LoadingService;
        this.PlatformContextService = PlatformContextService;
    }
    BasicCompanyService.prototype.getCompanyList = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (ob) {
            if (_this.masterData) {
                ob.next(_this.masterData.companies);
                ob.complete();
            }
            else {
                _this.LoadingService.show();
                _this.http.$get('/basics/company/getassignedcompanieswithroles')
                    .map(function (data) {
                    _this.LoadingService.hide();
                    return _this.setMasterData(data);
                })
                    .subscribe(function (data) {
                    ob.next(data);
                    ob.complete();
                });
            }
        });
        // return this.http.$get('/basics/company/getassignedcompanieswithroles')
        // .map((data: IAssignedCompany) => {
        //   this.LoadingService.hide();
        //   return this.setMasterData(data);
        // });
    };
    BasicCompanyService.prototype.setLinearData = function () {
        var _data = [];
        this.masterData.companies.forEach(function (item) {
            var _obj = {};
            $.extend(_obj, item);
            _data.push(_obj);
        });
        _data = this.toLinear(_data);
        this.linearData = new __WEBPACK_IMPORTED_MODULE_2__platform_services_data_structure_service__["a" /* DataStructureService */]('id', _data);
        this.linearData.sort();
    };
    BasicCompanyService.prototype.setMasterData = function (data) {
        this.masterData = data;
        this.setLinearData();
        return data.companies;
        // let _data = this.toLinear(this.masterData.companies.concat());
        // this.linearData = new DataStructureService<ICompany>('id', _data);
        // this.linearData.sort();
        // this.linearData = this.toLinear(this.masterData.companies.concat());
        // this.linearData.sort((a:ICompany, b:ICompany):number => {
        //   return a.id > b.id ? 1 : -1;
        // });
    };
    BasicCompanyService.prototype.toLinear = function (data) {
        var arrays = [], rootIds = [];
        this._toLinear(data, arrays, rootIds);
        return arrays;
    };
    BasicCompanyService.prototype._toLinear = function (data, arrays, childrenIds) {
        for (var i = 0; i < data.length; i++) {
            childrenIds.push(data[i].id);
            if (data[i].children && data[i].children.length > 0) {
                var _childrenIds = [];
                this._toLinear(data[i].children, arrays, _childrenIds);
                data[i].children = _childrenIds;
            }
            else {
                data[i].children = null;
            }
            arrays.push(data[i]);
        }
    };
    BasicCompanyService.prototype.getCompanyById = function (id) {
        if (id) {
            return this.linearData.find(id);
        }
    };
    BasicCompanyService.prototype.getRoleLookupByKey = function (key) {
        return this.masterData.rolesLookup.find(function (item) {
            return item.key === key;
        });
    };
    BasicCompanyService.prototype._getRoleList = function (id, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (id == arr[i].clientId) {
                return arr[i].roleIds;
            }
        }
        var company = this.getCompanyById(id);
        if (company.parentId) {
            this._getRoleList(company.parentId, arr);
        }
        return null;
    };
    BasicCompanyService.prototype.getRoleList = function (company) {
        if (company.companyType === 2)
            return null;
        var roleIds = this._getRoleList(company.id, this.masterData.roles);
        var result = [];
        if (roleIds) {
            for (var i = 0; i < this.masterData.rolesLookup.length; i++) {
                if (roleIds.indexOf(this.masterData.rolesLookup[i].key) > -1) {
                    result.push(this.masterData.rolesLookup[i]);
                }
            }
        }
        return result;
    };
    BasicCompanyService.prototype._getClientId = function (id) {
        var company = this.getCompanyById(id);
        if (company && company.companyType === 1) {
            return id;
        }
        if (company.parentId) {
            return this._getClientId(company.parentId);
        }
        return null;
    };
    BasicCompanyService.prototype.saveContext = function (companyId, roleId) {
        roleId = Number(roleId);
        this.selectedCompany = this.getCompanyById(companyId);
        this.selectedRole = this.getRoleLookupByKey(roleId);
        this.PlatformContextService.setCompanyInfo(this.selectedCompany, this.selectedRole);
        var signedInClientId = companyId;
        var clientId = this._getClientId(signedInClientId);
        this.PlatformContextService.setContextKey();
        this.PlatformContextService.setCompanyContext(signedInClientId, clientId, companyId, roleId);
    };
    return BasicCompanyService;
}());
BasicCompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__platform_services_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__platform_services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_4__platform_services_platform_context_service__["a" /* PlatformContextService */]])
], BasicCompanyService);

//# sourceMappingURL=basic-company.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Guard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TokenGuard; });
/* unused harmony export GuardFactory */
/* harmony export (immutable) */ __webpack_exports__["c"] = PageGateProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_config_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_platform_context_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_secure_subscribe__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Guard = (function () {
    function Guard() {
    }
    return Guard;
}());

var PageGate = (function (_super) {
    __extends(PageGate, _super);
    function PageGate(Guards) {
        var _this = _super.call(this) || this;
        _this.Guards = Guards;
        return _this;
    }
    PageGate.prototype.ionViewCanEnter = function () {
        console.log(this['constructor'].name);
        return Promise.all(this.Guards.concat().map(function (item) { return item.run(); }));
    };
    return PageGate;
}(__WEBPACK_IMPORTED_MODULE_5__services_secure_subscribe__["a" /* SecureSubscribe */]));

var LoginGuard = (function (_super) {
    __extends(LoginGuard, _super);
    function LoginGuard(PlatformContextService, ToastController) {
        var _this = _super.call(this) || this;
        _this.PlatformContextService = PlatformContextService;
        _this.ToastController = ToastController;
        return _this;
    }
    LoginGuard.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.PlatformContextService.isSignedIn()
                .catch(function (err) {
                reject(false);
                _this.ToastController.create({
                    message: "Not Logged In: " + err.message,
                    position: 'top',
                    duration: 5000
                }).present();
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err);
            })
                .subscribe(function (valid) {
                if (valid) {
                    console.log('Pass LoginGuard check!');
                    resolve(true);
                }
                else {
                    console.log('Fail LoginGuard check!');
                    reject(false);
                }
            });
        });
    };
    return LoginGuard;
}(Guard));
LoginGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */]])
], LoginGuard);

var TokenGuard = (function (_super) {
    __extends(TokenGuard, _super);
    function TokenGuard(PlatformContextService, ToastController, HttpConfigService) {
        var _this = _super.call(this) || this;
        _this.PlatformContextService = PlatformContextService;
        _this.ToastController = ToastController;
        _this.HttpConfigService = HttpConfigService;
        return _this;
    }
    TokenGuard.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.PlatformContextService.getToken()
                .then(function (token) {
                if (token) {
                    _this.HttpConfigService.setAuthHeader(token);
                    console.log('Pass TokenGuard check!');
                    resolve(true);
                }
                else {
                    console.log('Fail TokenGuard check!');
                    reject(false);
                    _this.ToastController.create({
                        message: "Token not found or expired",
                        position: 'top',
                        duration: 5000
                    }).present();
                }
            })
                .catch(function (err) {
                console.log('Fail TokenGuard check!');
                reject(err);
            });
        });
    };
    return TokenGuard;
}(Guard));
TokenGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_platform_context_service__["a" /* PlatformContextService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__http_config_service__["a" /* HttpConfigService */]])
], TokenGuard);

function GuardFactory(Guards) {
    return new PageGate(Guards);
}
function PageGateProvider(deps) {
    return {
        provide: PageGate,
        useFactory: GuardFactory,
        deps: deps
    };
}
//# sourceMappingURL=page-gate.service.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map