webpackJsonp(["main"],{

/***/ "./modules/ng-config-ngrx-store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("./modules/ng-config-ngrx-store/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.



/***/ }),

/***/ "./modules/ng-config-ngrx-store/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("./modules/ng-config-ngrx-store/src/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.


/***/ }),

/***/ "./modules/ng-config-ngrx-store/src/config.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Load; });
/* unused harmony export Reload */
var ConfigActionTypes;
(function (ConfigActionTypes) {
    ConfigActionTypes["Load"] = "[Config] Load";
    ConfigActionTypes["Reload"] = "[Config] Reload";
})(ConfigActionTypes || (ConfigActionTypes = {}));
var Load = /** @class */ (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.Load;
    }
    return Load;
}());

var Reload = /** @class */ (function () {
    function Reload(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.Reload;
    }
    return Reload;
}());



/***/ }),

/***/ "./modules/ng-config-ngrx-store/src/config.ngrx-store-loader-wrapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigNgrxStoreLoaderWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_actions__ = __webpack_require__("./modules/ng-config-ngrx-store/src/config.actions.ts");

var ConfigNgrxStoreLoaderWrapper = /** @class */ (function () {
    function ConfigNgrxStoreLoaderWrapper(_store, _configLoader) {
        this._store = _store;
        this._configLoader = _configLoader;
        if (!this._store) {
            throw new Error("'Store<ConfigState>' service is not available.");
        }
        if (!this._configLoader) {
            throw new Error("'configLoader' service is not available.");
        }
    }
    ConfigNgrxStoreLoaderWrapper.prototype.source = function () {
        return 'ConfigNgrxStoreLoader';
    };
    ConfigNgrxStoreLoaderWrapper.prototype.load = function () {
        var _this = this;
        return this._configLoader.load()
            .then(function (data) {
            var source = _this._configLoader.source();
            var action = new __WEBPACK_IMPORTED_MODULE_0__config_actions__["b" /* Load */]({
                data: data,
                loaded: true,
                source: source
            });
            _this._store.dispatch(action);
            return data;
        });
    };
    return ConfigNgrxStoreLoaderWrapper;
}());



/***/ }),

/***/ "./modules/ng-config-ngrx-store/src/config.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = configReducer;
/* unused harmony export getConfigData */
/* unused harmony export getConfigLoaded */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_actions__ = __webpack_require__("./modules/ng-config-ngrx-store/src/config.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    data: {},
    source: '',
    loaded: false,
};
function configReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__config_actions__["a" /* ConfigActionTypes */].Load:
            {
                return __assign({}, state, { data: action.payload.data, source: action.payload.source, loaded: true });
            }
        case __WEBPACK_IMPORTED_MODULE_0__config_actions__["a" /* ConfigActionTypes */].Reload:
            {
                return __assign({}, state, { data: action.payload.data, source: action.payload.source, loaded: true });
            }
        default:
            {
                return state;
            }
    }
}
var getConfigData = function (state) { return state.data; };
var getConfigLoaded = function (state) { return state.loaded; };


/***/ }),

/***/ "./modules/ng-config-ngrx-store/src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_actions__ = __webpack_require__("./modules/ng-config-ngrx-store/src/config.actions.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_ngrx_store_loader_wrapper__ = __webpack_require__("./modules/ng-config-ngrx-store/src/config.ngrx-store-loader-wrapper.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__config_ngrx_store_loader_wrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_reducer__ = __webpack_require__("./modules/ng-config-ngrx-store/src/config.reducer.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__config_reducer__["a"]; });
/* unused harmony reexport getConfigData */
/* unused harmony reexport getConfigLoaded */





/***/ }),

/***/ "./modules/ng-config/http-loader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("./modules/ng-config/http-loader/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.



/***/ }),

/***/ "./modules/ng-config/http-loader/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_config_http_loader__ = __webpack_require__("./modules/ng-config/http-loader/src/config.http-loader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_config_http_loader__["a"]; });



/***/ }),

/***/ "./modules/ng-config/http-loader/src/config.http-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigHttpLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);

var ConfigHttpLoader = /** @class */ (function () {
    function ConfigHttpLoader(_httpClient, _endpoint) {
        this._httpClient = _httpClient;
        this._endpoint = _endpoint;
    }
    ConfigHttpLoader.prototype.source = function () {
        return 'ConfigHttpLoader';
    };
    ConfigHttpLoader.prototype.load = function () {
        return this._httpClient.get(this._endpoint)
            .toPromise();
    };
    return ConfigHttpLoader;
}());



/***/ }),

/***/ "./modules/ng-config/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("./modules/ng-config/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["c"]; });
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.



/***/ }),

/***/ "./modules/ng-config/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("./modules/ng-config/src/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.


/***/ }),

/***/ "./modules/ng-config/src/config.loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigLoader; });
var ConfigLoader = /** @class */ (function () {
    function ConfigLoader() {
    }
    return ConfigLoader;
}());



/***/ }),

/***/ "./modules/ng-config/src/config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* unused harmony export configStaticLoaderFactory */
/* unused harmony export configAppInitializerFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_pipe__ = __webpack_require__("./modules/ng-config/src/config.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_loader__ = __webpack_require__("./modules/ng-config/src/config.loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_static_loader__ = __webpack_require__("./modules/ng-config/src/config.static.loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("./modules/ng-config/src/config.service.ts");
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





var ConfigModule = /** @class */ (function () {
    function ConfigModule(parentModule) {
        if (parentModule) {
            throw new Error('ConfigModule already loaded, import in root module only.');
        }
    }
    ConfigModule_1 = ConfigModule;
    ConfigModule.forRoot = function (configuredProvider) {
        if (configuredProvider === void 0) { configuredProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_2__config_loader__["a" /* ConfigLoader */],
            useFactory: (configStaticLoaderFactory)
        }; }
        return {
            ngModule: ConfigModule_1,
            providers: [
                configuredProvider,
                __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_INITIALIZER */],
                    useFactory: (configAppInitializerFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]],
                    multi: true
                }
            ]
        };
    };
    ConfigModule = ConfigModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__config_pipe__["a" /* ConfigPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__config_pipe__["a" /* ConfigPipe */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* SkipSelf */])()),
        __metadata("design:paramtypes", [ConfigModule])
    ], ConfigModule);
    return ConfigModule;
    var ConfigModule_1;
}());

function configStaticLoaderFactory() {
    return new __WEBPACK_IMPORTED_MODULE_3__config_static_loader__["a" /* ConfigStaticLoader */]({});
}
function configAppInitializerFactory(configService) {
    var res = function () { return configService.load(); };
    return res;
}


/***/ }),

/***/ "./modules/ng-config/src/config.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./modules/ng-config/src/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigPipe = /** @class */ (function () {
    function ConfigPipe(_config) {
        this._config = _config;
    }
    ConfigPipe.prototype.transform = function (value) {
        return this._config.getSettings(value);
    };
    ConfigPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Pipe */])({
            name: 'config'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]])
    ], ConfigPipe);
    return ConfigPipe;
}());



/***/ }),

/***/ "./modules/ng-config/src/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_loader__ = __webpack_require__("./modules/ng-config/src/config.loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(loader) {
        this.loader = loader;
    }
    ConfigService.prototype.load = function () {
        var _this = this;
        return this.loader.load()
            .then(function (data) { return _this._cachedSettings = data; });
    };
    ConfigService.prototype.getSettings = function (key, defaultValue) {
        if (!this._cachedSettings || !key || (Array.isArray(key) && !key[0])) {
            return this._cachedSettings;
        }
        var keyArray = Array.isArray(key) ? key : key.split(/\.|:/);
        var result = keyArray.reduce(function (acc, current) { return acc && acc[current]; }, this._cachedSettings);
        if (result === undefined) {
            result = defaultValue;
        }
        return result;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_loader__["a" /* ConfigLoader */]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./modules/ng-config/src/config.static.loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigStaticLoader; });
var ConfigStaticLoader = /** @class */ (function () {
    function ConfigStaticLoader(settings) {
        this.settings = settings;
    }
    ConfigStaticLoader.prototype.source = function () {
        return 'ConfigStaticLoader';
    };
    ConfigStaticLoader.prototype.load = function () {
        return Promise.resolve(this.settings);
    };
    return ConfigStaticLoader;
}());



/***/ }),

/***/ "./modules/ng-config/src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_loader__ = __webpack_require__("./modules/ng-config/src/config.loader.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__config_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_static_loader__ = __webpack_require__("./modules/ng-config/src/config.static.loader.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./modules/ng-config/src/config.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__config_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_pipe__ = __webpack_require__("./modules/ng-config/src/config.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_module__ = __webpack_require__("./modules/ng-config/src/config.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__config_module__["a"]; });







/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./samples/ng-config-aspnetcore-sample/ClientApp/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.browser.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export configLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bizappframework_ng_config__ = __webpack_require__("./modules/ng-config/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bizappframework_ng_config_http_loader__ = __webpack_require__("./modules/ng-config/http-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bizappframework_ng_config_ngrx_store__ = __webpack_require__("./modules/ng-config-ngrx-store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers__ = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                // ngrx
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__reducers__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_10__reducers__["a" /* metaReducers */] }),
                !__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_6__bizappframework_ng_config__["b" /* ConfigModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_6__bizappframework_ng_config__["a" /* ConfigLoader */],
                    useFactory: (configLoaderFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                })
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());

// config factory
function configLoaderFactory(store, http) {
    var originUrl = window.location.origin;
    var configHttpLoader = new __WEBPACK_IMPORTED_MODULE_7__bizappframework_ng_config_http_loader__["a" /* ConfigHttpLoader */](http, originUrl + "/appsettings.json");
    return new __WEBPACK_IMPORTED_MODULE_8__bizappframework_ng_config_ngrx_store__["a" /* ConfigNgrxStoreLoaderWrapper */](store, configHttpLoader);
}


/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Config Json</h5>\r\n<div>\r\n{{configJson}}\r\n</div>\r\n<h5>Config Pipe</h5>\r\n<div>\r\n    {{\"key1\" | config}}\r\n</div>\r\n"

/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bizappframework_ng_config__ = __webpack_require__("./modules/ng-config/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_configService) {
        this._configService = _configService;
    }
    Object.defineProperty(AppComponent.prototype, "configJson", {
        get: function () {
            var config = this._configService.getSettings();
            return JSON.stringify(config, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bizappframework_ng_config__["c" /* ConfigService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bizappframework_ng_config_ngrx_store__ = __webpack_require__("./modules/ng-config-ngrx-store/index.ts");

var reducers = {
    config: __WEBPACK_IMPORTED_MODULE_0__bizappframework_ng_config_ngrx_store__["b" /* configReducer */],
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = [logger];


/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./samples/ng-config-aspnetcore-sample/ClientApp/src/main.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/app/app.browser.module.ts");






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./samples/ng-config-aspnetcore-sample/ClientApp/src/main.browser.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.js.map