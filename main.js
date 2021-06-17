(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner-home/banner-home.component */ "./src/app/components/banner-home/banner-home.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "./src/app/components/subscription/subscription.component.ts");
/* harmony import */ var _components_region_region_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/region/region.component */ "./src/app/components/region/region.component.ts");
/* harmony import */ var _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/case-studies/case-studies.component */ "./src/app/components/case-studies/case-studies.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");










class AppComponent {
    constructor() {
        this.title = 'my-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-case-studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_2__["BannerHomeComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionComponent"], _components_region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"], _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_6__["CaseStudiesComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/banner-home/banner-home.component */ "./src/app/components/banner-home/banner-home.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "./src/app/components/subscription/subscription.component.ts");
/* harmony import */ var _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/case-studies/case-studies.component */ "./src/app/components/case-studies/case-studies.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_region_region_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/region/region.component */ "./src/app/components/region/region.component.ts");
/* harmony import */ var _components_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_6__["BannerHomeComponent"],
        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
        _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionComponent"],
        _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_9__["CaseStudiesComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
        _components_region_region_component__WEBPACK_IMPORTED_MODULE_11__["RegionComponent"],
        _components_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_12__["TitleLineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_6__["BannerHomeComponent"],
                    _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                    _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionComponent"],
                    _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_9__["CaseStudiesComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
                    _components_region_region_component__WEBPACK_IMPORTED_MODULE_11__["RegionComponent"],
                    _components_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_12__["TitleLineComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");



class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 141, vars: 0, consts: [["sectionName", "quem somos"], [1, "section-odd", "d-flex", "flex-column", "align-items-center"], [1, "container", "mt-5"], [1, "container", "p-0", "my-5"], [1, "row", "text-center", "pt-4"], [1, "col"], ["viewBox", "0 0 512 512", "fill", "#29889d", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m474.414062 122.4375 24.832032-24.828125c4.125-4.128906 5.484375-10.277344 3.480468-15.757813-2.003906-5.484374-7.007812-9.304687-12.828124-9.796874l-46.066407-3.886719-3.886719-46.066407c-.488281-5.816406-4.3125-10.820312-9.792968-12.824218-5.480469-2.007813-11.628906-.648438-15.757813 3.480468l-24.832031 24.828126c-40.15625-24.621094-86.070312-37.585938-133.5625-37.585938-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-47.492188-12.964844-93.402344-37.585938-133.5625zm-59.414062-39.125c.617188 7.289062 6.398438 13.070312 13.6875 13.6875l26.503906 2.234375-35.875 35.875-39.125-3.300781-3.300781-39.125 35.875-35.875zm-108 172.6875c0 28.121094-22.878906 51-51 51s-51-22.878906-51-51 22.878906-51 51-51c8.613281 0 16.726562 2.152344 23.847656 5.9375l-34.453125 34.457031c-5.859375 5.855469-5.859375 15.351563 0 21.210938 2.925781 2.929687 6.765625 4.394531 10.605469 4.394531s7.679688-1.464844 10.605469-4.394531l34.457031-34.453125c3.785156 7.121094 5.9375 15.234375 5.9375 23.847656zm-5.347656-66.867188c-13.007813-8.90625-28.730469-14.132812-45.652344-14.132812-44.664062 0-81 36.335938-81 81s36.335938 81 81 81 81-36.335938 81-81c0-16.921875-5.226562-32.644531-14.132812-45.652344l42.828124-42.828125c19.566407 24.210938 31.304688 55 31.304688 88.480469 0 77.746094-63.253906 141-141 141s-141-63.253906-141-141 63.253906-141 141-141c33.480469 0 64.269531 11.738281 88.480469 31.304688zm114.152344 226.671876c-42.683594 42.6875-99.4375 66.195312-159.804688 66.195312s-117.121094-23.507812-159.804688-66.195312c-42.6875-42.683594-66.195312-99.4375-66.195312-159.804688s23.507812-117.121094 66.195312-159.804688c42.683594-42.6875 99.4375-66.195312 159.804688-66.195312 39.492188 0 77.746094 10.144531 111.671875 29.476562l-16.917969 16.917969c-2.734375 2.734375-4.292968 6.398438-4.390625 10.222657-.011719.546874.003907 1.09375.046875 1.644531l2.019532 23.933593c-26.667969-17.203124-58.402344-27.195312-92.429688-27.195312-94.289062 0-171 76.710938-171 171s76.710938 171 171 171 171-76.710938 171-171c0-34.027344-9.992188-65.761719-27.195312-92.429688l23.933593 2.019532c.421875.03125.84375.050781 1.261719.050781.070312 0 .144531-.007813.214844-.011719.199218 0 .394531-.015625.59375-.027344.324218-.019531.652344-.039062.972656-.078124.199219-.027344.398438-.058594.597656-.089844.316406-.050782.628906-.109375.941406-.179688.199219-.046875.394532-.097656.589844-.148437.304688-.082031.605469-.175781.90625-.277344.195313-.066406.386719-.132813.578125-.207031.292969-.113282.582031-.238282.871094-.375.183594-.082032.367187-.164063.550781-.257813.289063-.148437.570313-.3125.847656-.476562.167969-.101563.335938-.195313.5-.296875.296876-.195313.582032-.40625.867188-.621094.132812-.101562.269531-.191406.398438-.296875.40625-.328125.800781-.675781 1.175781-1.050781l16.917969-16.917969c19.332031 33.925781 29.476562 72.179687 29.476562 111.671875 0 60.367188-23.507812 117.121094-66.195312 159.804688zm0 0"], [1, "mt-2", "icon-label"], ["fill", "#29889d", "viewBox", "-36 0 512 512.0008", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m247.96875 0c-105.804688 0-191.878906 86.074219-191.878906 191.878906v6.121094l-55.214844 102.539062c-2.0625 3.832032-.335938 8.757813 3.65625 10.46875l51.558594 22.09375v107.269532c0 4.152344 3.363281 7.515625 7.515625 7.515625h105.8125l15.164062 58.496093c1.058594 4.082032 5.40625 6.511719 9.4375 5.3125 3.820313-1.136718 6.109375-5.234374 5.113281-9.082031l-16.625-64.128906c-.859374-3.3125-3.851562-5.628906-7.277343-5.628906h-104.113281v-104.707031c0-3.003907-1.789063-5.722657-4.554688-6.90625l-48.558594-20.8125 52.214844-96.972657c.589844-1.09375.898438-2.320312.898438-3.5625v-8.015625c0-97.515625 79.335937-176.851562 176.851562-176.851562 97.511719 0 176.847656 79.335937 176.847656 176.851562 0 55.839844-25.566406 107.242188-70.140625 141.019532-2.492187 1.890624-3.554687 5.125-2.667969 8.125l13.816407 46.625c1.179687 3.980468 5.359375 6.25 9.339843 5.074218 3.980469-1.179687 6.25-5.363281 5.074219-9.34375l-12.363281-41.714844c21.277344-17.066406 38.933594-38.75 51.253906-62.988281 13.746094-27.046875 20.71875-56.25 20.71875-86.796875 0-105.804687-86.078125-191.878906-191.878906-191.878906zm0 0"], ["d", "m389.851562 415.828125c-1.179687-3.976563-5.359374-6.242187-9.339843-5.070313-3.980469 1.179688-6.25 5.363282-5.070313 9.339844l25.636719 86.535156c1.214844 4.085938 5.726563 6.363282 9.742187 4.9375 3.710938-1.316406 5.785157-5.441406 4.671876-9.207031zm0 0"], ["d", "m327.625 191.878906c0-43.921875-35.734375-79.65625-79.65625-79.65625-43.925781 0-79.65625 35.734375-79.65625 79.65625 0 28.863282 15.234375 54.9375 40.078125 69.128906v3.515626h-.5c-4.152344 0-7.515625 3.363281-7.515625 7.515624v16.53125h-.503906c-4.148438 0-7.511719 3.363282-7.511719 7.515626 0 4.152343 3.363281 7.515624 7.511719 7.515624h.503906v8.015626h-.503906c-4.148438 0-7.511719 3.363281-7.511719 7.511718 0 4.152344 3.363281 7.515625 7.511719 7.515625h1.046875c3.117187 18.734375 19.429687 33.066407 39.035156 33.066407h16.03125c19.605469 0 35.917969-14.332032 39.03125-33.066407h1.046875c4.152344 0 7.515625-3.363281 7.515625-7.515625 0-4.148437-3.363281-7.511718-7.515625-7.511718h-.5v-8.015626h.5c4.152344 0 7.515625-3.363281 7.515625-7.515624 0-4.152344-3.363281-7.515626-7.515625-7.515626h-.5v-16.53125c0-4.152343-3.363281-7.515624-7.515625-7.515624h-.5v-3.515626c24.839844-14.191406 40.078125-40.265624 40.078125-69.128906zm-71.640625 152.800782h-16.03125c-11.28125 0-20.804687-7.648438-23.664063-18.035157h63.359376c-2.859376 10.386719-12.382813 18.035157-23.664063 18.035157zm24.546875-33.0625h-65.128906v-8.015626h65.128906zm-65.128906-23.046876v-9.019531h65.128906v9.019531zm40.082031-24.046874v-49.097657h16.53125c4.152344 0 7.515625-3.363281 7.515625-7.515625v-24.046875c0-4.152343-3.363281-7.515625-7.515625-7.515625s-7.515625 3.363282-7.515625 7.515625v16.53125h-33.066406v-16.53125c0-4.152343-3.363282-7.515625-7.511719-7.515625-4.152344 0-7.515625 3.363282-7.515625 7.515625v24.046875c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.53125v49.097657h-17.035156v-8.019532c0-2.851562-1.613281-5.457031-4.167969-6.726562-22.148438-11.011719-35.910156-33.195313-35.910156-57.898438 0-35.636718 28.992187-64.628906 64.628906-64.628906s64.628906 28.992188 64.628906 64.628906c0 24.703125-13.761718 46.886719-35.910156 57.898438-2.554688 1.269531-4.171875 3.875-4.171875 6.726562v8.019532zm0 0"], ["d", "m255.484375 95.6875v-16.03125c0-4.148438-3.363281-7.511719-7.515625-7.511719s-7.515625 3.363281-7.515625 7.511719v16.03125c0 4.152344 3.363281 7.515625 7.515625 7.515625s7.515625-3.363281 7.515625-7.515625zm0 0"], ["d", "m199.878906 116.089844c5.699219 0 9.335938-6.367188 6.503906-11.273438l-8.019531-13.882812c-2.074219-3.59375-6.671875-4.824219-10.261719-2.75-3.597656 2.074218-4.828124 6.671875-2.753906 10.265625 2.652344 4.59375 5.246094 9.230469 7.960938 13.785156 1.394531 2.339844 3.808594 3.855469 6.570312 3.855469zm0 0"], ["d", "m160.90625 150.292969c3.835938 2.210937 8.871094.546875 10.644531-3.5 1.519531-3.460938.140625-7.628907-3.128906-9.519531l-13.882813-8.015626c-3.597656-2.074218-8.191406-.84375-10.265624 2.753907-2.074219 3.59375-.84375 8.1875 2.75 10.261719zm0 0"], ["d", "m128.230469 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.152344 0 7.515625-3.363281 7.515625-7.515625s-3.363281-7.515625-7.515625-7.515625h-16.03125c-4.148438 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m150.789062 255.507812c1.273438 0 2.566407-.328124 3.75-1.011718l13.882813-8.015625c3.59375-2.074219 4.824219-6.667969 2.75-10.261719-2.074219-3.597656-6.671875-4.828125-10.265625-2.753906l-13.882812 8.015625c-2.796876 1.617187-4.269532 4.941406-3.589844 8.097656.742187 3.421875 3.855468 5.929687 7.355468 5.929687zm0 0"], ["d", "m348.914062 241.480469-13.886718-8.015625c-3.59375-2.074219-8.1875-.84375-10.261719 2.753906-2.078125 3.59375-.84375 8.1875 2.75 10.261719l13.882813 8.015625c3.832031 2.214844 8.871093.546875 10.644531-3.496094 1.515625-3.460938.140625-7.628906-3.128907-9.519531zm0 0"], ["d", "m336.644531 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.148438 0 7.511719-3.363281 7.511719-7.515625s-3.363281-7.515625-7.511719-7.515625h-16.03125c-4.152344 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m341.398438 129.261719c-3.34375 1.929687-6.683594 3.859375-10.027344 5.789062-1.28125.738281-2.578125 1.457031-3.847656 2.21875-2.902344 1.742188-4.40625 5.191407-3.503907 8.496094 1.28125 4.675781 6.800781 6.957031 11.007813 4.527344l13.886718-8.015625c3.59375-2.074219 4.824219-6.671875 2.75-10.265625-2.074218-3.59375-6.675781-4.824219-10.265624-2.75zm0 0"], ["d", "m296.054688 116.089844c2.597656 0 5.125-1.347656 6.515624-3.757813l8.015626-13.882812c2.074218-3.59375.84375-8.191407-2.75-10.265625-3.59375-2.074219-8.191407-.84375-10.265626 2.75l-8.015624 13.882812c-2.832032 4.90625.804687 11.273438 6.5 11.273438zm0 0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#29889d", "id", "outline", "viewBox", "0 0 512 512", 1, "icon"], ["d", "M488,248H424a8,8,0,0,0-8,8v72H360a8,8,0,0,0-8,8v56H296a8,8,0,0,0-8,8v72H272V392c0-4.498-2.17529-12.91406-16.74463-18.74121C246.77783,369.86719,235.67773,368,224,368s-22.77783,1.86719-31.25537,5.25879c-.25494.10205-.49725.20654-.74463.31006V352c0-4.498-2.17529-12.91406-16.74463-18.74121C166.77783,329.86719,155.67773,328,144,328s-22.77783,1.86719-31.25537,5.25879c-.25494.10205-.49725.20654-.74463.31006V272c0-4.498-2.17529-12.91406-16.74463-18.74121C86.77783,249.86719,75.67773,248,64,248s-22.77783,1.86719-31.25537,5.25879C18.17529,259.08594,16,267.502,16,272V472c0,4.498,2.17529,12.91406,16.74463,18.74121C41.22217,494.13281,52.32227,496,64,496s22.77783-1.86719,31.25537-5.25879A38.53428,38.53428,0,0,0,104,486a38.53428,38.53428,0,0,0,8.74463,4.74121C121.22217,494.13281,132.32227,496,144,496s22.77783-1.86719,31.25537-5.25879A38.53428,38.53428,0,0,0,184,486a38.53428,38.53428,0,0,0,8.74463,4.74121C201.22217,494.13281,212.32227,496,224,496s22.77783-1.86719,31.25537-5.25879A43.5138,43.5138,0,0,0,260.94366,488H488a8,8,0,0,0,8-8V256A8,8,0,0,0,488,248ZM32,410.43115c.24738.10352.48969.208.74463.31006C41.22217,414.13281,52.32227,416,64,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,434.17432,83.54132,440,64,440s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,374.13281,52.32227,376,64,376s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,394.17432,83.54132,400,64,400s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,334.13281,52.32227,336,64,336s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,354.17432,83.54132,360,64,360s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,294.13281,52.32227,296,64,296s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,314.17432,83.54132,320,64,320s-30.61029-5.82568-32-8.30273ZM144,400c-19.54132,0-30.61029-5.82568-32-8.30273V370.43115c.24738.10352.48969.208.74463.31006C121.22217,374.13281,132.32227,376,144,376s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C174.61029,394.17432,163.54132,400,144,400Zm-32,10.43115c.24738.10352.48969.208.74463.31006C121.22217,414.13281,132.32227,416,144,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C174.61029,434.17432,163.54132,440,144,440s-30.61029-5.82568-32-8.30273Zm80,0c.24738.10352.48969.208.74463.31006C201.22217,414.13281,212.32227,416,224,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C254.61029,434.17432,243.54132,440,224,440s-30.61029-5.82568-32-8.30273ZM224,384c18.82532,0,29.76691,5.40039,31.788,8.01123C253.70776,394.63281,242.75488,400,224,400s-29.70776-5.36719-31.788-7.98877C194.23309,389.40039,205.17468,384,224,384Zm-80-40c18.82532,0,29.76691,5.40039,31.788,8.01123C173.70776,354.63281,162.75488,360,144,360c-18.7818,0-29.73859-5.38232-31.79614-8C114.26141,349.38232,125.2182,344,144,344ZM64,264c18.82532,0,29.76691,5.40039,31.788,8.01123C93.70776,274.63281,82.75488,280,64,280s-29.70776-5.36719-31.788-7.98877C34.23309,269.40039,45.17468,264,64,264Zm0,216c-19.50684,0-30.57861-5.80762-32-8.292V450.43115c.24738.10352.48969.208.74463.31006C41.22217,454.13281,52.32227,456,64,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C94.57861,474.19238,83.50684,480,64,480Zm80,0c-19.54132,0-30.61029-5.82568-32-8.30273V450.43115c.24738.10352.48969.208.74463.31006C121.22217,454.13281,132.32227,456,144,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C174.57861,474.19238,163.50684,480,144,480Zm80,0c-19.50684,0-30.57861-5.80762-32-8.292V450.43115c.24738.10352.48969.208.74463.31006C201.22217,454.13281,212.32227,456,224,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C254.57861,474.19238,243.50684,480,224,480Zm80-72h48v64H304Zm64-64h48V472H368Zm64,128V264h48V472Z"], ["x", "224", "y", "336", "width", "16", "height", "16"], ["d", "M256,336v16h40a8.00035,8.00035,0,0,0,5.65674-2.34277L464,187.314V200h16V168a8.00008,8.00008,0,0,0-8-8H440v16h12.686l-160,160Z"], ["d", "M362.126,66.82031A191.42794,191.42794,0,0,0,232,16C126.13086,16,40,102.13086,40,208a194.4809,194.4809,0,0,0,1.61816,25.0332l15.86622-2.0664A178.42561,178.42561,0,0,1,56,208c0-2.68164.07031-5.34717.18964-8H92l21.6001,28.7998A7.99927,7.99927,0,0,0,120,232h59.4707l17.957,29.92871-26.22753,19.6709A8.0009,8.0009,0,0,0,168,288v24h16V292l28.7998-21.59961a8.0005,8.0005,0,0,0,2.06006-10.5166l-24-40A8.00072,8.00072,0,0,0,184,216H124l-21.6001-28.7998A7.99927,7.99927,0,0,0,96,184H57.64325A175.16422,175.16422,0,0,1,92.916,100.2793L120,116.5293V144a8.00008,8.00008,0,0,0,8,8h36.686l29.65722,29.65723a7.99989,7.99989,0,0,0,10.09423.999l48-32A7.99941,7.99941,0,0,0,256,144V99.31348l50.7074-50.707a175.59533,175.59533,0,0,1,34.873,21.66308l-42.702,35.585a7.99927,7.99927,0,0,0-2.30615,9.11621l14.33007,35.82618L292,176H256a8.00222,8.00222,0,0,0-4.7998,1.59961l-32,24a8,8,0,0,0-1.85645,10.83789l32,48A7.99943,7.99943,0,0,0,256,264h24v48h16V256a8.00008,8.00008,0,0,0-8-8H260.28125l-25.42676-38.14062L258.6665,192H296a7.99927,7.99927,0,0,0,6.3999-3.2002l24-32a7.99806,7.99806,0,0,0,1.02783-7.7705l-13.8413-34.6045,40.18634-33.48852a175.349,175.349,0,0,1,53.57049,111.75024l15.94141-1.373A191.3713,191.3713,0,0,0,362.126,66.82031ZM242.34326,90.34277A8.00076,8.00076,0,0,0,240,96v43.71875l-38.98047,25.9873-27.36279-27.36328A8.00035,8.00035,0,0,0,168,136H136V112a8.00091,8.00091,0,0,0-3.88428-6.86035L103.441,87.93481A175.9247,175.9247,0,0,1,290.654,42.032Z"], ["fill", "#29889d", "viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", 1, "icon"], ["d", "m296.484 112a6 6 0 0 0 0-12h-6.325a16.153 16.153 0 0 1 -11.289-5h13.851a6 6 0 0 0 0-12h-19.683a2.74 2.74 0 0 1 0-1h19.683a6 6 0 0 0 0-12h-13.85a16.149 16.149 0 0 1 11.288-5h6.325a6 6 0 0 0 0-12h-6.325c-11.452 0-21.38 7-26.149 17h-5.593a6 6 0 1 0 0 12h2.6a5.446 5.446 0 0 0 0 1h-2.6a6 6 0 1 0 0 12h5.593c4.769 10 14.7 17 26.149 17z"], ["d", "m453.15 389.28-3.636 1.177c-8.066-15.127-25.7-23.736-41.11-19.164-.049.015-.1.029-.144.045l-8.154 2.645a49.968 49.968 0 0 0 -35.265-17.919l-28.519-26.752a214.336 214.336 0 0 0 -39.086-29.069 151.418 151.418 0 0 0 -26.136-11.987 105.991 105.991 0 0 0 -15.8-4.144c.344-1.142.712-2.288 1.125-3.442a68.958 68.958 0 0 1 10.432-19.037l5.566.347a76.9 76.9 0 0 0 10.232.7 62.793 62.793 0 0 0 41.071-14.593c18.626-15.563 30.092-42.847 31.459-74.855a6 6 0 0 0 -7.989-5.914l-50.874 17.932c-16.322 5.75-29.002 20.65-33.915 39.842a207.869 207.869 0 0 0 -4.948 29.057q-1.85 2.375-3.528 4.9c-7.092-23.1-4.5-46.081 7.79-68.471a118.712 118.712 0 0 1 24.987-31.21 76.973 76.973 0 1 0 -16.078-1.155 131.57 131.57 0 0 0 -19.212 26.2c-11.318 20.434-15.418 41.959-12.262 63.399-.792-1.965-1.605-3.919-2.46-5.849l.35-11.659c1.548-51.57-32.362-95.067-75.592-96.963a6 6 0 0 0 -6.216 6.743l5.18 41.2c2.117 19.444 10.9 36.03 25.4 47.966 10.92 8.988 25.042 15.28 40.044 17.884a179.55 179.55 0 0 1 11.329 35.248c-.333 0-.664-.02-1-.02a106.434 106.434 0 0 0 -26.828 3.436l-1.982.517c-.127.033-.253.071-.378.112-23.4 7.773-33.483 22.358-42.334 39.461a108.142 108.142 0 0 0 -45.7 11.483c-.147.074-.291.153-.431.239l-17.51 10.662-93.193 57.868a6 6 0 0 0 -2.608 6.731 170.474 170.474 0 0 0 60.417 88.671l1.814 1.381a6 6 0 0 0 6.559.464l69.848-39a28.173 28.173 0 0 1 20.362 1.176c.116.053.234.1.355.147l87.662 33.254a118.171 118.171 0 0 0 15.045 4.536 109.423 109.423 0 0 0 24.518 2.751 117.223 117.223 0 0 0 47.767-10.288l163.879-73.424a6 6 0 0 0 3.159-7.6 42.9 42.9 0 0 0 -53.462-25.659zm-179.118-161.212c3.918-15.306 13.743-27.084 26.282-31.5l42.2-14.876c-2.715 24.676-12.147 45.209-26.483 57.188-10.665 8.913-23.568 12.8-38.388 11.59l34.509-31.555a6.166 6.166 0 0 0 .689-8.5 6 6 0 0 0 -8.6-.519l-32.688 29.889c.738-4.22 1.563-8.138 2.479-11.717zm-31.408-95.688.953-.908a5.984 5.984 0 1 0 -8.44-8.485l-.908.694a63.552 63.552 0 0 1 -14.714-35.681h1.307a6 6 0 0 0 0-12h-1.307a65.278 65.278 0 0 1 14.714-35.253l.908 1.014a6.037 6.037 0 0 0 4.242 1.811 5.967 5.967 0 0 0 4.243-10.2l-1-.9a65.652 65.652 0 0 1 35.378-14.711v1.307a6 6 0 0 0 12 0v-1.307a63.173 63.173 0 0 1 35.558 14.714l-.862.908a6.014 6.014 0 0 0 8.524 8.485l.911-1.122a65.287 65.287 0 0 1 14.716 35.254h-1.306a6 6 0 0 0 0 12h1.306a63.552 63.552 0 0 1 -14.713 35.68l-.907-.8a6.029 6.029 0 0 0 -8.487 8.565l.818.922a63.189 63.189 0 0 1 -35.558 14.727v-1.307a6 6 0 0 0 -12 0v1.307a65.661 65.661 0 0 1 -35.376-14.714zm-22.584 79.871-19.171-27.551a6 6 0 1 0 -9.849 6.854l19.17 27.549a163.09 163.09 0 0 1 8.769 14.128c-22.027-6.443-43.312-22.93-46.623-53.342l-4.246-33.775c30.431 5.375 53.957 35.954 56.72 73.395q-2.31-3.697-4.77-7.258zm191.846 170.526c9.233-2.7 20.155 2.462 25.947 11.462l-71.341 23.092a51.587 51.587 0 0 0 -6-17.877zm-201.281-84.9 1.788-.465a94.406 94.406 0 0 1 23.8-3.049c1.064 0 2.124.03 3.185.066q.766 4.856 1.353 9.58l.295 2.474c.184 1.618.363 3.232.512 4.817a6 6 0 0 0 5.966 5.44c.187 0 .377-.009.567-.026a6 6 0 0 0 5.414-6.533c-.221-2.358-.49-4.759-.785-7.183a52.181 52.181 0 0 1 .234-7.128 94.006 94.006 0 0 1 14.22 3.716 139.4 139.4 0 0 1 24.062 11.034 202.38 202.38 0 0 1 36.9 27.439l46.954 44.045-21.988 7.135a51.333 51.333 0 0 0 -28.443-15.57l-60.343-11.009a67.318 67.318 0 0 1 -27.468-11.8l-5.674-4.145a107.926 107.926 0 0 0 -53.1-20.336c8.261-14.649 16.546-23.136 32.551-28.498zm124.062 187.13c-20.61 9.235-43.584 11.648-64.689 6.794a106.17 106.17 0 0 1 -13.494-4.068l-87.474-33.178a40.115 40.115 0 0 0 -29.517-1.361 5.972 5.972 0 0 0 -.984.438l-66.9 37.357a158.531 158.531 0 0 1 -53.543-77.075l89.25-55.415 17.247-10.499a95.7 95.7 0 0 1 99.508 8.416l5.675 4.145a79.386 79.386 0 0 0 32.393 13.913l60.342 11.009a39.673 39.673 0 0 1 32.5 39.605c0 .06-.007.12-.008.18l-44.438-10.2a265.219 265.219 0 0 0 -47.845-6.468 6 6 0 0 0 -.515 11.989 253.173 253.173 0 0 1 45.672 6.171l51.053 11.717a6 6 0 0 0 7.246-4.771q.349-1.917.552-3.828l90.16-29.184a30.915 30.915 0 0 1 36.071 13.411z"], ["d", "m218.734 310h-11.277a6 6 0 0 0 0 12h11.277a6 6 0 1 0 0-12z"], ["d", "m241.657 337a6 6 0 1 0 0-12h-8.984a6 6 0 0 0 0 12z"], ["d", "m298.139 340h9.084a6 6 0 0 0 0-12h-9.084a6 6 0 0 0 0 12z"], ["d", "m266.073 330h8.877a6 6 0 1 0 0-12h-8.877a6 6 0 0 0 0 12z"], ["d", "m108.585 371.834-55.231 34.293a6 6 0 1 0 6.33 10.194l55.232-34.293a6 6 0 1 0 -6.331-10.194z"], ["d", "m128.041 359.927-4.292 2.614a6 6 0 1 0 6.241 10.249l4.292-2.614a6 6 0 0 0 -6.241-10.249z"], ["d", "m340.686 82.428a56.5 56.5 0 1 0 -56.5 56.5 56.569 56.569 0 0 0 56.5-56.5zm-101.009 0a44.5 44.5 0 1 1 44.505 44.5 44.556 44.556 0 0 1 -44.505-44.5z"], ["fill", "#29889d", "viewBox", "0 0 74 74", "xmlns", "http://www.w3.org/2000/svg", "data-name", "line Icons", 1, "icon"], ["d", "m51.087 64.082a1 1 0 0 1 -1-1v-53.122l-12.674-5.317-10.643 4.187v54.252a1 1 0 0 1 -2 0v-54.934a1 1 0 0 1 .634-.931l11.655-4.585a1 1 0 0 1 .753.008l13.662 5.733a1 1 0 0 1 .613.922v53.787a1 1 0 0 1 -1 1z"], ["d", "m37.425 64.082a1 1 0 0 1 -1-1v-59.519a1 1 0 0 1 2 0v59.519a1 1 0 0 1 -1 1z"], ["d", "m67.232 64.082a1 1 0 0 1 -1-1v-31.43l-9.778-5.689h-5.367a1 1 0 0 1 0-2h5.637a1 1 0 0 1 .5.136l10.509 6.114a1 1 0 0 1 .5.864v32a1 1 0 0 1 -1.001 1.005z"], ["d", "m56.724 64.082a1 1 0 0 1 -1-1v-38.119a1 1 0 0 1 2 0v38.119a1 1 0 0 1 -1 1z"], ["d", "m5.229 64.082a1 1 0 0 1 -1-1v-31.145a1 1 0 0 1 1-1h20.541a1 1 0 0 1 0 2h-19.541v30.145a1 1 0 0 1 -1 1z"], ["d", "m10.734 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 36.778h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 41.471h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 41.471h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 41.471h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 46.163h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 50.856h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 55.549h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m16.563 55.549h-2.126a1 1 0 1 1 0-2h2.126a1 1 0 1 1 0 2z"], ["d", "m22.39 55.549h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 60.242h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m33.9 13.352a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 14.515a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 20.874a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 22.037a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 28.4a1 1 0 0 1 -1-1v-1.891a1 1 0 1 1 2 0v1.891a1 1 0 0 1 -1 1z"], ["d", "m29.34 29.559a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 35.917a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 37.08a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 43.439a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 44.6a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m33.9 50.961a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 52.124a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 58.482a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m29.34 59.646a1 1 0 0 1 -1-1v-1.888a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1.001z"], ["d", "m40.8 12.4a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m44.177 13.675a1 1 0 0 1 -1-1v-1.886a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m47.552 14.949a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 19.9a1 1 0 0 1 -1-1v-1.89a1 1 0 0 1 2 0v1.89a1 1 0 0 1 -1 1z"], ["d", "m44.177 21.17a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.886a1 1 0 0 1 -1 1z"], ["d", "m47.552 22.444a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 27.392a1 1 0 0 1 -1-1v-1.892a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1.005z"], ["d", "m44.177 28.666a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 29.939a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 34.887a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 36.161a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 37.435a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 42.382a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m44.177 43.656a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 44.93a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 49.877a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 51.151a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 52.425a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 57.372a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 58.646a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 59.92a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m60.2 33.65a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 35.768a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 38.588a1 1 0 0 1 -1-1v-1.01a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .999z"], ["d", "m63.57 40.706a1 1 0 0 1 -1-1v-1.006a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .995z"], ["d", "m60.2 43.527a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 45.645a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 48.466a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 50.583a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 53.4a1 1 0 0 1 -1-1v-1.007a1 1 0 0 1 2 0v1.007a1 1 0 0 1 -1 1z"], ["d", "m63.57 55.522a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 58.343a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 60.46a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m70.231 64.066h-68a1 1 0 1 1 0-2h68a1 1 0 0 1 0 2z"], [1, "text-left"], [1, "row", "my-5", "border", "aboutus-info"], [1, "title-info", "p-0"], [1, "text-uppercase", "m-0", "ms-5"], [1, "ps-5", "py-3"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Regional Economics surge para dar conhecimento da realidade regional \u00E0s empresas, atrav\u00E9s da divulga\u00E7\u00E3o de informa\u00E7\u00E3o econ\u00F3mica sistematizada, intuitiva e acess\u00EDvel, maximizando assim as suas hip\u00F3teses de sucesso. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Objetivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Intuitivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Macroeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Microeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " As empresas dedicam muito tempo a conhecer a economia do pa\u00EDs, mas tendem a negligenciar a economia da sua regi\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Segundo a OCDE, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u201CX% das empresas vai \u00E0 fal\u00EAncia, por desconhecimento da realidade do tecido empresarial onde est\u00E3o inseridas\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "proposta de valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Disponibiliza\u00E7\u00E3o de conhecimento econ\u00F3mico regional objetivo;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Transforma\u00E7\u00E3o de informa\u00E7\u00E3o econ\u00F3mica complexa em analises intuitivas e acess\u00EDveis;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Liga\u00E7\u00E3o das v\u00E1rias dimens\u00F5es da atividade econ\u00F3mica regional: da macroeconomia \u00E0s empresas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: [".bgBlue[_ngcontent-%COMP%] {\n  background-color: var(--color1);\n}\n\nli[_ngcontent-%COMP%] {\n  color: white;\n}\n\nul[_ngcontent-%COMP%] {\n  line-height: 2.5;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 2,0;\n  text-align: justify;\n  margin-top: 80px;\n  color: var(--color1)\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 2,0;\n  text-align: justify;\n  color: var(--color1)\n}\n\nspan[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color3);\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.icon-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  margin-top: 5px;\n  color: var(--color1);\n  text-transform: uppercase;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  background: var(--color1);\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.title-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 1.5;\n  padding: 10px 0px;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  line-height: 2.5;\n  color: black;\n}\n\nli[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 10px;\n  font-size: 18px;\n  color: var(--color1);\n  font-weight: 900;\n}\n\n.aboutus-info[_ngcontent-%COMP%] {\n  background: #FFF;\n  transform: translateY(-8px);box-shadow: 0 5px 10px 0 rgba(50,50,50,.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkIsQ0FBQywwQ0FBMEM7QUFDeEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdCbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxubGkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnVsIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDIsMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSlcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyLDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpXG59XG5cbnNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjMpO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uaWNvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpdGxlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUtaW5mbyBoNSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG51bCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5saSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfihpInO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5hYm91dHVzLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7Ym94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoNTAsNTAsNTAsLjUpO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/banner-home/banner-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/banner-home/banner-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerHomeComponent", function() { return BannerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerHomeComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 5,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
        this.sizeOfScreen = 900;
    }
    ngOnInit() {
        this.getSizeOfScreen();
    }
    getSizeOfScreen() {
        this.sizeOfScreen = document.documentElement.clientHeight || window.innerHeight;
    }
}
BannerHomeComponent.ɵfac = function BannerHomeComponent_Factory(t) { return new (t || BannerHomeComponent)(); };
BannerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerHomeComponent, selectors: [["app-banner-home"]], decls: 17, vars: 0, consts: [[1, "container-fluid", "bg1", "d-flex", "align-items-center"], [1, "container", "position-relative", "d-flex", "justify-content-end"], ["src", "assets/img/portugalmap2.png", "alt", "portugal-map"], [1, "info", "position-absolute"], [1, "text-light", "text-uppercase"], [1, "row", "justify-content-between"], [1, "col", "text-light", "text-uppercase", "text-center", "bg3"], [1, "col", "mx-4", "text-light", "text-uppercase", "text-center", "bg3"], [1, "container-fluid", "bg2", "p-0"], [2, "height", "140px", "overflow", "hidden"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M0.00,49.98 C188.76,178.13 302.76,-15.28 500.00,49.98 L500.00,0.00 L0.00,0.00 Z", 2, "stroke", "none", "fill", "#1B485B"]], template: function BannerHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Informa\u00E7\u00E3o econ\u00F3mica regional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Objetiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Intuitiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Acess\u00EDvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg1[_ngcontent-%COMP%] {\n    height: 90vh;\n    background-color: var(--color1);\n    padding-top: 65px;\n    font-family: serif;\n}\n\n.bg1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 550px;\n}\n\n.bg2[_ngcontent-%COMP%] {\n    height: 10vh;\n    background-color: #F6F6F6;\n}\n\n.info[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 0%;\n    transform: translateY(-50%);\n}\n\n.goals[_ngcontent-%COMP%] {\n    background-color: var(--color3);\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 11px 9px 10px 9px rgb(50 50 50 / 50%);\n}\n\n.bg3[_ngcontent-%COMP%] {\n    background: var(--color3);\n    \n    padding: 15px;\n    font-size: 20px;\n    box-shadow: 11px 9px 10px 9px rgb(50 50 50 / 50%);\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItaG9tZS9iYW5uZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLGVBQWU7SUFDZixpREFBaUQ7QUFDckQ7O0FBR0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItaG9tZS9iYW5uZXItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnMSB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gICAgcGFkZGluZy10b3A6IDY1cHg7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uYmcxIC5jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNTUwcHg7XG59XG5cbi5iZzIge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xufVxuXG4uaW5mbyB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uZ29hbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDExcHggOXB4IDEwcHggOXB4IHJnYig1MCA1MCA1MCAvIDUwJSk7XG59XG5cbi5iZzMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMyk7XG4gICAgXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTFweCA5cHggMTBweCA5cHggcmdiKDUwIDUwIDUwIC8gNTAlKTtcbn1cblxuXG5wIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-home',
                templateUrl: './banner-home.component.html',
                styleUrls: ['./banner-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/case-studies/case-studies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/case-studies/case-studies.component.ts ***!
  \*******************************************************************/
/*! exports provided: CaseStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudiesComponent", function() { return CaseStudiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");



class CaseStudiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CaseStudiesComponent.ɵfac = function CaseStudiesComponent_Factory(t) { return new (t || CaseStudiesComponent)(); };
CaseStudiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaseStudiesComponent, selectors: [["app-case-studies"]], decls: 4, vars: 0, consts: [[1, "section-even"], ["sectionName", "case studies"]], template: function CaseStudiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "case-studies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL2Nhc2Utc3R1ZGllcy5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaseStudiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-case-studies',
                templateUrl: './case-studies.component.html',
                styleUrls: ['./case-studies.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer", "container-fluid", "p-0"], [1, "footer-body", "d-flex", "align-items-center"], [1, "container"], ["src", "assets/img/logo-oficial-white.png", "alt", "logo-footer", 1, "img-size"], [1, "credits", "d-flex", "align-items-center"], [1, "m-0", "text-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Copyright \u00A9 2021 Regional Economics. Todos os direitos reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 200px;\n  border-top: 5px solid var(--color1);\n}\n\n.footer-body[_ngcontent-%COMP%] {\n  height: 140px;\n  background: var(--color1);\n}\n\n.credits[_ngcontent-%COMP%] {\n  height: 60px;\n  background: var(--color1);\n}\n\n.img-size[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XG59XG5cbi5mb290ZXItYm9keSB7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG59XG5cbi5jcmVkaXRzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xufVxuXG4uaW1nLXNpemUge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [[1, "container-fluid", "header-border"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-6"], ["src", "assets/img/logo-header.png", "alt", "logo-header"], [1, "col-6", "d-flex", "justify-content-between", "align-items-center"], [1, "text-uppercase", "my-0"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "a regi\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "case studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "a equipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header-border[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--color1);\n  position: fixed;\n  background: #FFF;\n  z-index: 1;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 65px;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--colorText);\n  cursor: pointer;\n  transition: 0.2s ease;\n  font-weight: 500;\n  font-family: sans-serif;\n}\n\nh6[_ngcontent-%COMP%]:hover {\n  color: var(--color1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1jb2xvcjEpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5yb3cge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbmg2IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yVGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaDY6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/region/region.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/region/region.component.ts ***!
  \*******************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");



class RegionComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegionComponent.ɵfac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(); };
RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionComponent, selectors: [["app-region"]], decls: 4, vars: 0, consts: [[1, "section-odd"], ["sectionName", "a regi\u00E3o"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "region works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-region',
                templateUrl: './region.component.html',
                styleUrls: ['./region.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/subscription/subscription.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/subscription/subscription.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");



class SubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(); };
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 4, vars: 0, consts: [[1, "section-even"], ["sectionName", "subscri\u00E7\u00E3o"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "subscription works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subscription',
                templateUrl: './subscription.component.html',
                styleUrls: ['./subscription.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-line/title-line.component */ "./src/app/components/title-line/title-line.component.ts");



class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 185, vars: 0, consts: [["sectionName", "a equipa"], [1, "section-odd", "d-flex", "flex-column", "justify-content-center", "align-items-center", "py-5"], [1, "container", "py-5"], [1, "row"], [1, "col", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "employee"], [1, "name"], [1, "curriculum", "text-center"], [1, "m-0"], ["href", "https://www.linkedin.com/in/pedro93carvalho/", "target", "_blank"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "linkedin", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-linkedin", "fa-w-14"], ["fill", "0000", "d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"], ["href", "https://www.linkedin.com/in/carlosrafaelvm/", "target", "_blank"], ["href", "https://www.linkedin.com/in/tiago-marques-9b7244ba/", "target", "_blank"], ["href", "https://www.linkedin.com/in/john-loureiro-96b230149/", "target", "_blank"], [1, "container", "mt-5", "experiencia"], [1, "text-center", "mb-5"], [1, "row", "justify-content-between"], [1, "col", "p-0", "d-flex", "flex-column", "justify-content-start", "align-items-center"], [1, "title-info"], [1, "text-uppercase", "m-0"], ["viewBox", "-36 0 512 512.0008", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m247.96875 0c-105.804688 0-191.878906 86.074219-191.878906 191.878906v6.121094l-55.214844 102.539062c-2.0625 3.832032-.335938 8.757813 3.65625 10.46875l51.558594 22.09375v107.269532c0 4.152344 3.363281 7.515625 7.515625 7.515625h105.8125l15.164062 58.496093c1.058594 4.082032 5.40625 6.511719 9.4375 5.3125 3.820313-1.136718 6.109375-5.234374 5.113281-9.082031l-16.625-64.128906c-.859374-3.3125-3.851562-5.628906-7.277343-5.628906h-104.113281v-104.707031c0-3.003907-1.789063-5.722657-4.554688-6.90625l-48.558594-20.8125 52.214844-96.972657c.589844-1.09375.898438-2.320312.898438-3.5625v-8.015625c0-97.515625 79.335937-176.851562 176.851562-176.851562 97.511719 0 176.847656 79.335937 176.847656 176.851562 0 55.839844-25.566406 107.242188-70.140625 141.019532-2.492187 1.890624-3.554687 5.125-2.667969 8.125l13.816407 46.625c1.179687 3.980468 5.359375 6.25 9.339843 5.074218 3.980469-1.179687 6.25-5.363281 5.074219-9.34375l-12.363281-41.714844c21.277344-17.066406 38.933594-38.75 51.253906-62.988281 13.746094-27.046875 20.71875-56.25 20.71875-86.796875 0-105.804687-86.078125-191.878906-191.878906-191.878906zm0 0"], ["d", "m389.851562 415.828125c-1.179687-3.976563-5.359374-6.242187-9.339843-5.070313-3.980469 1.179688-6.25 5.363282-5.070313 9.339844l25.636719 86.535156c1.214844 4.085938 5.726563 6.363282 9.742187 4.9375 3.710938-1.316406 5.785157-5.441406 4.671876-9.207031zm0 0"], ["d", "m327.625 191.878906c0-43.921875-35.734375-79.65625-79.65625-79.65625-43.925781 0-79.65625 35.734375-79.65625 79.65625 0 28.863282 15.234375 54.9375 40.078125 69.128906v3.515626h-.5c-4.152344 0-7.515625 3.363281-7.515625 7.515624v16.53125h-.503906c-4.148438 0-7.511719 3.363282-7.511719 7.515626 0 4.152343 3.363281 7.515624 7.511719 7.515624h.503906v8.015626h-.503906c-4.148438 0-7.511719 3.363281-7.511719 7.511718 0 4.152344 3.363281 7.515625 7.511719 7.515625h1.046875c3.117187 18.734375 19.429687 33.066407 39.035156 33.066407h16.03125c19.605469 0 35.917969-14.332032 39.03125-33.066407h1.046875c4.152344 0 7.515625-3.363281 7.515625-7.515625 0-4.148437-3.363281-7.511718-7.515625-7.511718h-.5v-8.015626h.5c4.152344 0 7.515625-3.363281 7.515625-7.515624 0-4.152344-3.363281-7.515626-7.515625-7.515626h-.5v-16.53125c0-4.152343-3.363281-7.515624-7.515625-7.515624h-.5v-3.515626c24.839844-14.191406 40.078125-40.265624 40.078125-69.128906zm-71.640625 152.800782h-16.03125c-11.28125 0-20.804687-7.648438-23.664063-18.035157h63.359376c-2.859376 10.386719-12.382813 18.035157-23.664063 18.035157zm24.546875-33.0625h-65.128906v-8.015626h65.128906zm-65.128906-23.046876v-9.019531h65.128906v9.019531zm40.082031-24.046874v-49.097657h16.53125c4.152344 0 7.515625-3.363281 7.515625-7.515625v-24.046875c0-4.152343-3.363281-7.515625-7.515625-7.515625s-7.515625 3.363282-7.515625 7.515625v16.53125h-33.066406v-16.53125c0-4.152343-3.363282-7.515625-7.511719-7.515625-4.152344 0-7.515625 3.363282-7.515625 7.515625v24.046875c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.53125v49.097657h-17.035156v-8.019532c0-2.851562-1.613281-5.457031-4.167969-6.726562-22.148438-11.011719-35.910156-33.195313-35.910156-57.898438 0-35.636718 28.992187-64.628906 64.628906-64.628906s64.628906 28.992188 64.628906 64.628906c0 24.703125-13.761718 46.886719-35.910156 57.898438-2.554688 1.269531-4.171875 3.875-4.171875 6.726562v8.019532zm0 0"], ["d", "m255.484375 95.6875v-16.03125c0-4.148438-3.363281-7.511719-7.515625-7.511719s-7.515625 3.363281-7.515625 7.511719v16.03125c0 4.152344 3.363281 7.515625 7.515625 7.515625s7.515625-3.363281 7.515625-7.515625zm0 0"], ["d", "m199.878906 116.089844c5.699219 0 9.335938-6.367188 6.503906-11.273438l-8.019531-13.882812c-2.074219-3.59375-6.671875-4.824219-10.261719-2.75-3.597656 2.074218-4.828124 6.671875-2.753906 10.265625 2.652344 4.59375 5.246094 9.230469 7.960938 13.785156 1.394531 2.339844 3.808594 3.855469 6.570312 3.855469zm0 0"], ["d", "m160.90625 150.292969c3.835938 2.210937 8.871094.546875 10.644531-3.5 1.519531-3.460938.140625-7.628907-3.128906-9.519531l-13.882813-8.015626c-3.597656-2.074218-8.191406-.84375-10.265624 2.753907-2.074219 3.59375-.84375 8.1875 2.75 10.261719zm0 0"], ["d", "m128.230469 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.152344 0 7.515625-3.363281 7.515625-7.515625s-3.363281-7.515625-7.515625-7.515625h-16.03125c-4.148438 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m150.789062 255.507812c1.273438 0 2.566407-.328124 3.75-1.011718l13.882813-8.015625c3.59375-2.074219 4.824219-6.667969 2.75-10.261719-2.074219-3.597656-6.671875-4.828125-10.265625-2.753906l-13.882812 8.015625c-2.796876 1.617187-4.269532 4.941406-3.589844 8.097656.742187 3.421875 3.855468 5.929687 7.355468 5.929687zm0 0"], ["d", "m348.914062 241.480469-13.886718-8.015625c-3.59375-2.074219-8.1875-.84375-10.261719 2.753906-2.078125 3.59375-.84375 8.1875 2.75 10.261719l13.882813 8.015625c3.832031 2.214844 8.871093.546875 10.644531-3.496094 1.515625-3.460938.140625-7.628906-3.128907-9.519531zm0 0"], ["d", "m336.644531 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.148438 0 7.511719-3.363281 7.511719-7.515625s-3.363281-7.515625-7.511719-7.515625h-16.03125c-4.152344 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m341.398438 129.261719c-3.34375 1.929687-6.683594 3.859375-10.027344 5.789062-1.28125.738281-2.578125 1.457031-3.847656 2.21875-2.902344 1.742188-4.40625 5.191407-3.503907 8.496094 1.28125 4.675781 6.800781 6.957031 11.007813 4.527344l13.886718-8.015625c3.59375-2.074219 4.824219-6.671875 2.75-10.265625-2.074218-3.59375-6.675781-4.824219-10.265624-2.75zm0 0"], ["d", "m296.054688 116.089844c2.597656 0 5.125-1.347656 6.515624-3.757813l8.015626-13.882812c2.074218-3.59375.84375-8.191407-2.75-10.265625-3.59375-2.074219-8.191407-.84375-10.265626 2.75l-8.015624 13.882812c-2.832032 4.90625.804687 11.273438 6.5 11.273438zm0 0"], [1, "animate-border-bottom"], [1, "col", "p-0", "d-flex", "flex-column", "justify-content-start", "align-items-center", "mx-4"], ["viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", 1, "icon"], ["d", "m296.484 112a6 6 0 0 0 0-12h-6.325a16.153 16.153 0 0 1 -11.289-5h13.851a6 6 0 0 0 0-12h-19.683a2.74 2.74 0 0 1 0-1h19.683a6 6 0 0 0 0-12h-13.85a16.149 16.149 0 0 1 11.288-5h6.325a6 6 0 0 0 0-12h-6.325c-11.452 0-21.38 7-26.149 17h-5.593a6 6 0 1 0 0 12h2.6a5.446 5.446 0 0 0 0 1h-2.6a6 6 0 1 0 0 12h5.593c4.769 10 14.7 17 26.149 17z"], ["d", "m453.15 389.28-3.636 1.177c-8.066-15.127-25.7-23.736-41.11-19.164-.049.015-.1.029-.144.045l-8.154 2.645a49.968 49.968 0 0 0 -35.265-17.919l-28.519-26.752a214.336 214.336 0 0 0 -39.086-29.069 151.418 151.418 0 0 0 -26.136-11.987 105.991 105.991 0 0 0 -15.8-4.144c.344-1.142.712-2.288 1.125-3.442a68.958 68.958 0 0 1 10.432-19.037l5.566.347a76.9 76.9 0 0 0 10.232.7 62.793 62.793 0 0 0 41.071-14.593c18.626-15.563 30.092-42.847 31.459-74.855a6 6 0 0 0 -7.989-5.914l-50.874 17.932c-16.322 5.75-29.002 20.65-33.915 39.842a207.869 207.869 0 0 0 -4.948 29.057q-1.85 2.375-3.528 4.9c-7.092-23.1-4.5-46.081 7.79-68.471a118.712 118.712 0 0 1 24.987-31.21 76.973 76.973 0 1 0 -16.078-1.155 131.57 131.57 0 0 0 -19.212 26.2c-11.318 20.434-15.418 41.959-12.262 63.399-.792-1.965-1.605-3.919-2.46-5.849l.35-11.659c1.548-51.57-32.362-95.067-75.592-96.963a6 6 0 0 0 -6.216 6.743l5.18 41.2c2.117 19.444 10.9 36.03 25.4 47.966 10.92 8.988 25.042 15.28 40.044 17.884a179.55 179.55 0 0 1 11.329 35.248c-.333 0-.664-.02-1-.02a106.434 106.434 0 0 0 -26.828 3.436l-1.982.517c-.127.033-.253.071-.378.112-23.4 7.773-33.483 22.358-42.334 39.461a108.142 108.142 0 0 0 -45.7 11.483c-.147.074-.291.153-.431.239l-17.51 10.662-93.193 57.868a6 6 0 0 0 -2.608 6.731 170.474 170.474 0 0 0 60.417 88.671l1.814 1.381a6 6 0 0 0 6.559.464l69.848-39a28.173 28.173 0 0 1 20.362 1.176c.116.053.234.1.355.147l87.662 33.254a118.171 118.171 0 0 0 15.045 4.536 109.423 109.423 0 0 0 24.518 2.751 117.223 117.223 0 0 0 47.767-10.288l163.879-73.424a6 6 0 0 0 3.159-7.6 42.9 42.9 0 0 0 -53.462-25.659zm-179.118-161.212c3.918-15.306 13.743-27.084 26.282-31.5l42.2-14.876c-2.715 24.676-12.147 45.209-26.483 57.188-10.665 8.913-23.568 12.8-38.388 11.59l34.509-31.555a6.166 6.166 0 0 0 .689-8.5 6 6 0 0 0 -8.6-.519l-32.688 29.889c.738-4.22 1.563-8.138 2.479-11.717zm-31.408-95.688.953-.908a5.984 5.984 0 1 0 -8.44-8.485l-.908.694a63.552 63.552 0 0 1 -14.714-35.681h1.307a6 6 0 0 0 0-12h-1.307a65.278 65.278 0 0 1 14.714-35.253l.908 1.014a6.037 6.037 0 0 0 4.242 1.811 5.967 5.967 0 0 0 4.243-10.2l-1-.9a65.652 65.652 0 0 1 35.378-14.711v1.307a6 6 0 0 0 12 0v-1.307a63.173 63.173 0 0 1 35.558 14.714l-.862.908a6.014 6.014 0 0 0 8.524 8.485l.911-1.122a65.287 65.287 0 0 1 14.716 35.254h-1.306a6 6 0 0 0 0 12h1.306a63.552 63.552 0 0 1 -14.713 35.68l-.907-.8a6.029 6.029 0 0 0 -8.487 8.565l.818.922a63.189 63.189 0 0 1 -35.558 14.727v-1.307a6 6 0 0 0 -12 0v1.307a65.661 65.661 0 0 1 -35.376-14.714zm-22.584 79.871-19.171-27.551a6 6 0 1 0 -9.849 6.854l19.17 27.549a163.09 163.09 0 0 1 8.769 14.128c-22.027-6.443-43.312-22.93-46.623-53.342l-4.246-33.775c30.431 5.375 53.957 35.954 56.72 73.395q-2.31-3.697-4.77-7.258zm191.846 170.526c9.233-2.7 20.155 2.462 25.947 11.462l-71.341 23.092a51.587 51.587 0 0 0 -6-17.877zm-201.281-84.9 1.788-.465a94.406 94.406 0 0 1 23.8-3.049c1.064 0 2.124.03 3.185.066q.766 4.856 1.353 9.58l.295 2.474c.184 1.618.363 3.232.512 4.817a6 6 0 0 0 5.966 5.44c.187 0 .377-.009.567-.026a6 6 0 0 0 5.414-6.533c-.221-2.358-.49-4.759-.785-7.183a52.181 52.181 0 0 1 .234-7.128 94.006 94.006 0 0 1 14.22 3.716 139.4 139.4 0 0 1 24.062 11.034 202.38 202.38 0 0 1 36.9 27.439l46.954 44.045-21.988 7.135a51.333 51.333 0 0 0 -28.443-15.57l-60.343-11.009a67.318 67.318 0 0 1 -27.468-11.8l-5.674-4.145a107.926 107.926 0 0 0 -53.1-20.336c8.261-14.649 16.546-23.136 32.551-28.498zm124.062 187.13c-20.61 9.235-43.584 11.648-64.689 6.794a106.17 106.17 0 0 1 -13.494-4.068l-87.474-33.178a40.115 40.115 0 0 0 -29.517-1.361 5.972 5.972 0 0 0 -.984.438l-66.9 37.357a158.531 158.531 0 0 1 -53.543-77.075l89.25-55.415 17.247-10.499a95.7 95.7 0 0 1 99.508 8.416l5.675 4.145a79.386 79.386 0 0 0 32.393 13.913l60.342 11.009a39.673 39.673 0 0 1 32.5 39.605c0 .06-.007.12-.008.18l-44.438-10.2a265.219 265.219 0 0 0 -47.845-6.468 6 6 0 0 0 -.515 11.989 253.173 253.173 0 0 1 45.672 6.171l51.053 11.717a6 6 0 0 0 7.246-4.771q.349-1.917.552-3.828l90.16-29.184a30.915 30.915 0 0 1 36.071 13.411z"], ["d", "m218.734 310h-11.277a6 6 0 0 0 0 12h11.277a6 6 0 1 0 0-12z"], ["d", "m241.657 337a6 6 0 1 0 0-12h-8.984a6 6 0 0 0 0 12z"], ["d", "m298.139 340h9.084a6 6 0 0 0 0-12h-9.084a6 6 0 0 0 0 12z"], ["d", "m266.073 330h8.877a6 6 0 1 0 0-12h-8.877a6 6 0 0 0 0 12z"], ["d", "m108.585 371.834-55.231 34.293a6 6 0 1 0 6.33 10.194l55.232-34.293a6 6 0 1 0 -6.331-10.194z"], ["d", "m128.041 359.927-4.292 2.614a6 6 0 1 0 6.241 10.249l4.292-2.614a6 6 0 0 0 -6.241-10.249z"], ["d", "m340.686 82.428a56.5 56.5 0 1 0 -56.5 56.5 56.569 56.569 0 0 0 56.5-56.5zm-101.009 0a44.5 44.5 0 1 1 44.505 44.5 44.556 44.556 0 0 1 -44.505-44.5z"], ["viewBox", "0 0 74 74", "xmlns", "http://www.w3.org/2000/svg", "data-name", "line Icons", 1, "icon"], ["d", "m51.087 64.082a1 1 0 0 1 -1-1v-53.122l-12.674-5.317-10.643 4.187v54.252a1 1 0 0 1 -2 0v-54.934a1 1 0 0 1 .634-.931l11.655-4.585a1 1 0 0 1 .753.008l13.662 5.733a1 1 0 0 1 .613.922v53.787a1 1 0 0 1 -1 1z"], ["d", "m37.425 64.082a1 1 0 0 1 -1-1v-59.519a1 1 0 0 1 2 0v59.519a1 1 0 0 1 -1 1z"], ["d", "m67.232 64.082a1 1 0 0 1 -1-1v-31.43l-9.778-5.689h-5.367a1 1 0 0 1 0-2h5.637a1 1 0 0 1 .5.136l10.509 6.114a1 1 0 0 1 .5.864v32a1 1 0 0 1 -1.001 1.005z"], ["d", "m56.724 64.082a1 1 0 0 1 -1-1v-38.119a1 1 0 0 1 2 0v38.119a1 1 0 0 1 -1 1z"], ["d", "m5.229 64.082a1 1 0 0 1 -1-1v-31.145a1 1 0 0 1 1-1h20.541a1 1 0 0 1 0 2h-19.541v30.145a1 1 0 0 1 -1 1z"], ["d", "m10.734 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 36.778h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 41.471h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 41.471h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 41.471h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 46.163h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 50.856h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 55.549h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m16.563 55.549h-2.126a1 1 0 1 1 0-2h2.126a1 1 0 1 1 0 2z"], ["d", "m22.39 55.549h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 60.242h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m33.9 13.352a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 14.515a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 20.874a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 22.037a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 28.4a1 1 0 0 1 -1-1v-1.891a1 1 0 1 1 2 0v1.891a1 1 0 0 1 -1 1z"], ["d", "m29.34 29.559a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 35.917a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 37.08a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 43.439a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 44.6a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m33.9 50.961a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 52.124a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 58.482a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m29.34 59.646a1 1 0 0 1 -1-1v-1.888a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1.001z"], ["d", "m40.8 12.4a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m44.177 13.675a1 1 0 0 1 -1-1v-1.886a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m47.552 14.949a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 19.9a1 1 0 0 1 -1-1v-1.89a1 1 0 0 1 2 0v1.89a1 1 0 0 1 -1 1z"], ["d", "m44.177 21.17a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.886a1 1 0 0 1 -1 1z"], ["d", "m47.552 22.444a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 27.392a1 1 0 0 1 -1-1v-1.892a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1.005z"], ["d", "m44.177 28.666a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 29.939a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 34.887a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 36.161a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 37.435a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 42.382a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m44.177 43.656a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 44.93a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 49.877a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 51.151a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 52.425a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 57.372a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 58.646a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 59.92a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m60.2 33.65a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 35.768a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 38.588a1 1 0 0 1 -1-1v-1.01a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .999z"], ["d", "m63.57 40.706a1 1 0 0 1 -1-1v-1.006a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .995z"], ["d", "m60.2 43.527a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 45.645a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 48.466a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 50.583a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 53.4a1 1 0 0 1 -1-1v-1.007a1 1 0 0 1 2 0v1.007a1 1 0 0 1 -1 1z"], ["d", "m63.57 55.522a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 58.343a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 60.46a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m70.231 64.066h-68a1 1 0 1 1 0-2h68a1 1 0 0 1 0 2z"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pedro Rodrigues Carvalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Microeconomia & Estrat\u00E9gia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Carlos Monteiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Empreendorismo & Contabilidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tiago Marques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Macroeconomia & Finan\u00E7as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "John Loureiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Direito & Fiscalidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Experi\u00EAncia Profissional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Macroeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Comiss\u00E3o Europeia: Impacto Econ\u00F3mico de Legisla\u00E7\u00E3o Europeia; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "As Consequ\u00EAncias do Brexit no Tecido Econ\u00F3mico Portugu\u00EAs; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "An\u00E1lise Macroecon\u00F3mica de Pa\u00EDses e Regi\u00F5es; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Avalia\u00E7\u00E3o de Candidaturas a Fundos Europeus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Microeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Diagn\u00F3stico Econ\u00F3mico e Plano Estrat\u00E9gico de v\u00E1rios Munic\u00EDpios;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Estudo de Impacto do Papel de Incubadoras e Aceleradoras no Desenvolvimento de Ecossistemas de StartUps e ScaleUps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Concorr\u00EAncia e Produtividade das Empresas Portuguesas; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Os Fatores de Sucesso da Ind\u00FAstria Metalomec\u00E2nica em Portugal; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "O Papel da Oferta formativa do Ensino Superior nas Regi\u00F5es de Portugal; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "An\u00E1lise de Concorr\u00EAncia no Sector de Energia e no Sector de Telecomunica\u00E7\u00F5es. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: [".employee[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: var(--color1);\n  border-radius: 50%;\n  margin-bottom: 20px;\n  background-image: url('image-cv-round.png');\n}\n\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 25px;\n  fill: rgb(154, 154, 154);\n  transition: 0.2s ease;\n}\n\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: rgb(14, 118, 168);\n  transition: 0.2s ease;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 1.5;\n  padding: 30px 50px;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nli[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 10px;\n  font-size: 18px;\n  color: var(--color1);\n  font-weight: 900;\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  \n  background-color: white;\n  \n  \n  min-height: 600px;\n  transform: translateY(-8px);box-shadow: 0 5px 10px 0 rgba(50,50,50,.5);\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100px;\n  fill: var(--color1);\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover    > svg[_ngcontent-%COMP%] {\n  \n  transition: 0.5s ease;\n}\n\n.animate-border-bottom[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 100%;\n  position: absolute;\n  background: var(--color1);\n  bottom: 0;\n  left: 0;\n  \n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover    > .animate-border-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  background: var(--color1);\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n}\n\n.title-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkNBQStEO0FBQ2pFOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRDQUE0QztFQUM1QywyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLDJCQUEyQixDQUFDLDBDQUEwQztBQUN4RTs7QUFHQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlLWN2LXJvdW5kLnBuZ1wiKTtcbn1cblxuYSBzdmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMjVweDtcbiAgZmlsbDogcmdiKDE1NCwgMTU0LCAxNTQpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbmEgc3ZnOmhvdmVyIHtcbiAgZmlsbDogcmdiKDE0LCAxMTgsIDE2OCk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxudWwge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxubGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfihpInO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5leHBlcmllbmNpYSAuY29sIHtcbiAgLyogcGFkZGluZzogNDBweDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGJveC1zaGFkb3c6IDRweCA2cHggcmdiKDE1NCwgMTU0LCAxNTQpOyAqL1xuICAvKiB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7ICovXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7Ym94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoNTAsNTAsNTAsLjUpO1xufVxuXG5cbi5leHBlcmllbmNpYSAuY29sIHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmlsbDogdmFyKC0tY29sb3IxKTtcbn1cblxuLmV4cGVyaWVuY2lhIC5jb2w6aG92ZXIgPiBzdmcge1xuICBcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4uYW5pbWF0ZS1ib3JkZXItYm90dG9tIHtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogdHJhbnNpdGlvbjogd2lkdGggMC41czsgKi9cbn1cblxuLmV4cGVyaWVuY2lhIC5jb2w6aG92ZXIgPiAuYW5pbWF0ZS1ib3JkZXItYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZS1pbmZvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi50aXRsZS1pbmZvIGg1IHtcbiAgY29sb3I6ICNGRkY7XG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/title-line/title-line.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/title-line/title-line.component.ts ***!
  \***************************************************************/
/*! exports provided: TitleLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleLineComponent", function() { return TitleLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitleLineComponent {
    constructor() {
        this.sectionName = "";
    }
    ngOnInit() {
    }
}
TitleLineComponent.ɵfac = function TitleLineComponent_Factory(t) { return new (t || TitleLineComponent)(); };
TitleLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleLineComponent, selectors: [["app-title-line"]], inputs: { sectionName: "sectionName" }, decls: 6, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-end", "px-0"], [1, "m-0"]], template: function TitleLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName);
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 20px;\n}\n\nspan[_ngcontent-%COMP%]::after {\n  background-color: var(--colorText);\n  content: \"\";\n  display: inline-block;\n  height: .5px;\n  position: relative;\n  vertical-align: middle;\n  width: 15%;\n  margin-left: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--colorText);\n  font-family: Arial, Helvetica, sans-serif;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1saW5lL3RpdGxlLWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUtbGluZS90aXRsZS1saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5zcGFuOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yVGV4dCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5wIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yVGV4dCk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-line',
                templateUrl: './title-line.component.html',
                styleUrls: ['./title-line.component.css']
            }]
    }], function () { return []; }, { sectionName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hugomarques/Desktop/projetos/reg-econ-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map