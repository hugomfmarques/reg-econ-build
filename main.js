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




const routes = [
/*   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'subscription-form',
    component: FormSubscriptionComponent
  },
  {
    path: 'home',
    component: HomeComponent
  } */
];
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
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/banner-home/banner-home.component */ "./src/app/components/banner-home/banner-home.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "./src/app/components/subscription/subscription.component.ts");
/* harmony import */ var _components_region_region_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/region/region.component */ "./src/app/components/region/region.component.ts");
/* harmony import */ var _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/case-studies/case-studies.component */ "./src/app/components/case-studies/case-studies.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/scroll-top/scroll-top.component */ "./src/app/components/scroll-top/scroll-top.component.ts");













function AppComponent_app_scroll_top_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-scroll-top", 9);
} }
class AppComponent {
    constructor(scrollService, scroller) {
        this.scrollService = scrollService;
        this.scroller = scroller;
        this.currentID = "";
        this.scrollY = 0;
        this.height = 0;
        scrollService.currentSection.subscribe((res) => {
            this.currentID = res;
        });
        document.addEventListener('scroll', () => {
            this.scrollY = scroller.getScrollPosition()[1];
        });
        this.height = window.innerHeight;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 2, consts: [[3, "active"], ["id", "home"], ["id", "about-us"], ["id", "subscription"], ["id", "region"], ["id", "case-studies"], ["id", "team"], ["id", "footer"], ["class", "scroll-top", 4, "ngIf"], [1, "scroll-top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-home", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-us", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subscription", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-region", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-case-studies", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-team", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_scroll_top_8_Template, 1, 0, "app-scroll-top", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.currentID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollY > ctx.height);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_4__["BannerHomeComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_6__["SubscriptionComponent"], _components_region_region_component__WEBPACK_IMPORTED_MODULE_7__["RegionComponent"], _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_8__["CaseStudiesComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_11__["ScrollTopComponent"]], styles: [".scroll-top[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_form_subscription_form_subscription_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-subscription/form-subscription.component */ "./src/app/components/form-subscription/form-subscription.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/scroll-top/scroll-top.component */ "./src/app/components/scroll-top/scroll-top.component.ts");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
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
        _components_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_12__["TitleLineComponent"],
        _components_form_subscription_form_subscription_component__WEBPACK_IMPORTED_MODULE_16__["FormSubscriptionComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__["ScrollTopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();
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
                    _components_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_12__["TitleLineComponent"],
                    _components_form_subscription_form_subscription_component__WEBPACK_IMPORTED_MODULE_16__["FormSubscriptionComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__["ScrollTopComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
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
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 139, vars: 0, consts: [["sectionName", "quem somos"], [1, "section-odd", "d-flex", "flex-column", "align-items-center"], [1, "container", "mt-5"], [1, "px-3", "px-md-0"], [1, "text-left", "my-5", "px-3", "px-md-0"], [1, "text-left", "px-3", "px-md-0"], [1, "container", "p-0", "my-5"], [1, "row", "text-center", "pt-4"], [1, "col-12", "col-md"], ["viewBox", "0 0 512 512", "fill", "#29889d", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m474.414062 122.4375 24.832032-24.828125c4.125-4.128906 5.484375-10.277344 3.480468-15.757813-2.003906-5.484374-7.007812-9.304687-12.828124-9.796874l-46.066407-3.886719-3.886719-46.066407c-.488281-5.816406-4.3125-10.820312-9.792968-12.824218-5.480469-2.007813-11.628906-.648438-15.757813 3.480468l-24.832031 24.828126c-40.15625-24.621094-86.070312-37.585938-133.5625-37.585938-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-47.492188-12.964844-93.402344-37.585938-133.5625zm-59.414062-39.125c.617188 7.289062 6.398438 13.070312 13.6875 13.6875l26.503906 2.234375-35.875 35.875-39.125-3.300781-3.300781-39.125 35.875-35.875zm-108 172.6875c0 28.121094-22.878906 51-51 51s-51-22.878906-51-51 22.878906-51 51-51c8.613281 0 16.726562 2.152344 23.847656 5.9375l-34.453125 34.457031c-5.859375 5.855469-5.859375 15.351563 0 21.210938 2.925781 2.929687 6.765625 4.394531 10.605469 4.394531s7.679688-1.464844 10.605469-4.394531l34.457031-34.453125c3.785156 7.121094 5.9375 15.234375 5.9375 23.847656zm-5.347656-66.867188c-13.007813-8.90625-28.730469-14.132812-45.652344-14.132812-44.664062 0-81 36.335938-81 81s36.335938 81 81 81 81-36.335938 81-81c0-16.921875-5.226562-32.644531-14.132812-45.652344l42.828124-42.828125c19.566407 24.210938 31.304688 55 31.304688 88.480469 0 77.746094-63.253906 141-141 141s-141-63.253906-141-141 63.253906-141 141-141c33.480469 0 64.269531 11.738281 88.480469 31.304688zm114.152344 226.671876c-42.683594 42.6875-99.4375 66.195312-159.804688 66.195312s-117.121094-23.507812-159.804688-66.195312c-42.6875-42.683594-66.195312-99.4375-66.195312-159.804688s23.507812-117.121094 66.195312-159.804688c42.683594-42.6875 99.4375-66.195312 159.804688-66.195312 39.492188 0 77.746094 10.144531 111.671875 29.476562l-16.917969 16.917969c-2.734375 2.734375-4.292968 6.398438-4.390625 10.222657-.011719.546874.003907 1.09375.046875 1.644531l2.019532 23.933593c-26.667969-17.203124-58.402344-27.195312-92.429688-27.195312-94.289062 0-171 76.710938-171 171s76.710938 171 171 171 171-76.710938 171-171c0-34.027344-9.992188-65.761719-27.195312-92.429688l23.933593 2.019532c.421875.03125.84375.050781 1.261719.050781.070312 0 .144531-.007813.214844-.011719.199218 0 .394531-.015625.59375-.027344.324218-.019531.652344-.039062.972656-.078124.199219-.027344.398438-.058594.597656-.089844.316406-.050782.628906-.109375.941406-.179688.199219-.046875.394532-.097656.589844-.148437.304688-.082031.605469-.175781.90625-.277344.195313-.066406.386719-.132813.578125-.207031.292969-.113282.582031-.238282.871094-.375.183594-.082032.367187-.164063.550781-.257813.289063-.148437.570313-.3125.847656-.476562.167969-.101563.335938-.195313.5-.296875.296876-.195313.582032-.40625.867188-.621094.132812-.101562.269531-.191406.398438-.296875.40625-.328125.800781-.675781 1.175781-1.050781l16.917969-16.917969c19.332031 33.925781 29.476562 72.179687 29.476562 111.671875 0 60.367188-23.507812 117.121094-66.195312 159.804688zm0 0"], [1, "mt-2", "icon-label"], ["fill", "#29889d", "viewBox", "-36 0 512 512.0008", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m247.96875 0c-105.804688 0-191.878906 86.074219-191.878906 191.878906v6.121094l-55.214844 102.539062c-2.0625 3.832032-.335938 8.757813 3.65625 10.46875l51.558594 22.09375v107.269532c0 4.152344 3.363281 7.515625 7.515625 7.515625h105.8125l15.164062 58.496093c1.058594 4.082032 5.40625 6.511719 9.4375 5.3125 3.820313-1.136718 6.109375-5.234374 5.113281-9.082031l-16.625-64.128906c-.859374-3.3125-3.851562-5.628906-7.277343-5.628906h-104.113281v-104.707031c0-3.003907-1.789063-5.722657-4.554688-6.90625l-48.558594-20.8125 52.214844-96.972657c.589844-1.09375.898438-2.320312.898438-3.5625v-8.015625c0-97.515625 79.335937-176.851562 176.851562-176.851562 97.511719 0 176.847656 79.335937 176.847656 176.851562 0 55.839844-25.566406 107.242188-70.140625 141.019532-2.492187 1.890624-3.554687 5.125-2.667969 8.125l13.816407 46.625c1.179687 3.980468 5.359375 6.25 9.339843 5.074218 3.980469-1.179687 6.25-5.363281 5.074219-9.34375l-12.363281-41.714844c21.277344-17.066406 38.933594-38.75 51.253906-62.988281 13.746094-27.046875 20.71875-56.25 20.71875-86.796875 0-105.804687-86.078125-191.878906-191.878906-191.878906zm0 0"], ["d", "m389.851562 415.828125c-1.179687-3.976563-5.359374-6.242187-9.339843-5.070313-3.980469 1.179688-6.25 5.363282-5.070313 9.339844l25.636719 86.535156c1.214844 4.085938 5.726563 6.363282 9.742187 4.9375 3.710938-1.316406 5.785157-5.441406 4.671876-9.207031zm0 0"], ["d", "m327.625 191.878906c0-43.921875-35.734375-79.65625-79.65625-79.65625-43.925781 0-79.65625 35.734375-79.65625 79.65625 0 28.863282 15.234375 54.9375 40.078125 69.128906v3.515626h-.5c-4.152344 0-7.515625 3.363281-7.515625 7.515624v16.53125h-.503906c-4.148438 0-7.511719 3.363282-7.511719 7.515626 0 4.152343 3.363281 7.515624 7.511719 7.515624h.503906v8.015626h-.503906c-4.148438 0-7.511719 3.363281-7.511719 7.511718 0 4.152344 3.363281 7.515625 7.511719 7.515625h1.046875c3.117187 18.734375 19.429687 33.066407 39.035156 33.066407h16.03125c19.605469 0 35.917969-14.332032 39.03125-33.066407h1.046875c4.152344 0 7.515625-3.363281 7.515625-7.515625 0-4.148437-3.363281-7.511718-7.515625-7.511718h-.5v-8.015626h.5c4.152344 0 7.515625-3.363281 7.515625-7.515624 0-4.152344-3.363281-7.515626-7.515625-7.515626h-.5v-16.53125c0-4.152343-3.363281-7.515624-7.515625-7.515624h-.5v-3.515626c24.839844-14.191406 40.078125-40.265624 40.078125-69.128906zm-71.640625 152.800782h-16.03125c-11.28125 0-20.804687-7.648438-23.664063-18.035157h63.359376c-2.859376 10.386719-12.382813 18.035157-23.664063 18.035157zm24.546875-33.0625h-65.128906v-8.015626h65.128906zm-65.128906-23.046876v-9.019531h65.128906v9.019531zm40.082031-24.046874v-49.097657h16.53125c4.152344 0 7.515625-3.363281 7.515625-7.515625v-24.046875c0-4.152343-3.363281-7.515625-7.515625-7.515625s-7.515625 3.363282-7.515625 7.515625v16.53125h-33.066406v-16.53125c0-4.152343-3.363282-7.515625-7.511719-7.515625-4.152344 0-7.515625 3.363282-7.515625 7.515625v24.046875c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.53125v49.097657h-17.035156v-8.019532c0-2.851562-1.613281-5.457031-4.167969-6.726562-22.148438-11.011719-35.910156-33.195313-35.910156-57.898438 0-35.636718 28.992187-64.628906 64.628906-64.628906s64.628906 28.992188 64.628906 64.628906c0 24.703125-13.761718 46.886719-35.910156 57.898438-2.554688 1.269531-4.171875 3.875-4.171875 6.726562v8.019532zm0 0"], ["d", "m255.484375 95.6875v-16.03125c0-4.148438-3.363281-7.511719-7.515625-7.511719s-7.515625 3.363281-7.515625 7.511719v16.03125c0 4.152344 3.363281 7.515625 7.515625 7.515625s7.515625-3.363281 7.515625-7.515625zm0 0"], ["d", "m199.878906 116.089844c5.699219 0 9.335938-6.367188 6.503906-11.273438l-8.019531-13.882812c-2.074219-3.59375-6.671875-4.824219-10.261719-2.75-3.597656 2.074218-4.828124 6.671875-2.753906 10.265625 2.652344 4.59375 5.246094 9.230469 7.960938 13.785156 1.394531 2.339844 3.808594 3.855469 6.570312 3.855469zm0 0"], ["d", "m160.90625 150.292969c3.835938 2.210937 8.871094.546875 10.644531-3.5 1.519531-3.460938.140625-7.628907-3.128906-9.519531l-13.882813-8.015626c-3.597656-2.074218-8.191406-.84375-10.265624 2.753907-2.074219 3.59375-.84375 8.1875 2.75 10.261719zm0 0"], ["d", "m128.230469 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.152344 0 7.515625-3.363281 7.515625-7.515625s-3.363281-7.515625-7.515625-7.515625h-16.03125c-4.148438 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m150.789062 255.507812c1.273438 0 2.566407-.328124 3.75-1.011718l13.882813-8.015625c3.59375-2.074219 4.824219-6.667969 2.75-10.261719-2.074219-3.597656-6.671875-4.828125-10.265625-2.753906l-13.882812 8.015625c-2.796876 1.617187-4.269532 4.941406-3.589844 8.097656.742187 3.421875 3.855468 5.929687 7.355468 5.929687zm0 0"], ["d", "m348.914062 241.480469-13.886718-8.015625c-3.59375-2.074219-8.1875-.84375-10.261719 2.753906-2.078125 3.59375-.84375 8.1875 2.75 10.261719l13.882813 8.015625c3.832031 2.214844 8.871093.546875 10.644531-3.496094 1.515625-3.460938.140625-7.628906-3.128907-9.519531zm0 0"], ["d", "m336.644531 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.148438 0 7.511719-3.363281 7.511719-7.515625s-3.363281-7.515625-7.511719-7.515625h-16.03125c-4.152344 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m341.398438 129.261719c-3.34375 1.929687-6.683594 3.859375-10.027344 5.789062-1.28125.738281-2.578125 1.457031-3.847656 2.21875-2.902344 1.742188-4.40625 5.191407-3.503907 8.496094 1.28125 4.675781 6.800781 6.957031 11.007813 4.527344l13.886718-8.015625c3.59375-2.074219 4.824219-6.671875 2.75-10.265625-2.074218-3.59375-6.675781-4.824219-10.265624-2.75zm0 0"], ["d", "m296.054688 116.089844c2.597656 0 5.125-1.347656 6.515624-3.757813l8.015626-13.882812c2.074218-3.59375.84375-8.191407-2.75-10.265625-3.59375-2.074219-8.191407-.84375-10.265626 2.75l-8.015624 13.882812c-2.832032 4.90625.804687 11.273438 6.5 11.273438zm0 0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#29889d", "id", "outline", "viewBox", "0 0 512 512", 1, "icon"], ["d", "M488,248H424a8,8,0,0,0-8,8v72H360a8,8,0,0,0-8,8v56H296a8,8,0,0,0-8,8v72H272V392c0-4.498-2.17529-12.91406-16.74463-18.74121C246.77783,369.86719,235.67773,368,224,368s-22.77783,1.86719-31.25537,5.25879c-.25494.10205-.49725.20654-.74463.31006V352c0-4.498-2.17529-12.91406-16.74463-18.74121C166.77783,329.86719,155.67773,328,144,328s-22.77783,1.86719-31.25537,5.25879c-.25494.10205-.49725.20654-.74463.31006V272c0-4.498-2.17529-12.91406-16.74463-18.74121C86.77783,249.86719,75.67773,248,64,248s-22.77783,1.86719-31.25537,5.25879C18.17529,259.08594,16,267.502,16,272V472c0,4.498,2.17529,12.91406,16.74463,18.74121C41.22217,494.13281,52.32227,496,64,496s22.77783-1.86719,31.25537-5.25879A38.53428,38.53428,0,0,0,104,486a38.53428,38.53428,0,0,0,8.74463,4.74121C121.22217,494.13281,132.32227,496,144,496s22.77783-1.86719,31.25537-5.25879A38.53428,38.53428,0,0,0,184,486a38.53428,38.53428,0,0,0,8.74463,4.74121C201.22217,494.13281,212.32227,496,224,496s22.77783-1.86719,31.25537-5.25879A43.5138,43.5138,0,0,0,260.94366,488H488a8,8,0,0,0,8-8V256A8,8,0,0,0,488,248ZM32,410.43115c.24738.10352.48969.208.74463.31006C41.22217,414.13281,52.32227,416,64,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,434.17432,83.54132,440,64,440s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,374.13281,52.32227,376,64,376s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,394.17432,83.54132,400,64,400s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,334.13281,52.32227,336,64,336s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,354.17432,83.54132,360,64,360s-30.61029-5.82568-32-8.30273Zm0-40c.24738.10352.48969.208.74463.31006C41.22217,294.13281,52.32227,296,64,296s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C94.61029,314.17432,83.54132,320,64,320s-30.61029-5.82568-32-8.30273ZM144,400c-19.54132,0-30.61029-5.82568-32-8.30273V370.43115c.24738.10352.48969.208.74463.31006C121.22217,374.13281,132.32227,376,144,376s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C174.61029,394.17432,163.54132,400,144,400Zm-32,10.43115c.24738.10352.48969.208.74463.31006C121.22217,414.13281,132.32227,416,144,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C174.61029,434.17432,163.54132,440,144,440s-30.61029-5.82568-32-8.30273Zm80,0c.24738.10352.48969.208.74463.31006C201.22217,414.13281,212.32227,416,224,416s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006v21.26612C254.61029,434.17432,243.54132,440,224,440s-30.61029-5.82568-32-8.30273ZM224,384c18.82532,0,29.76691,5.40039,31.788,8.01123C253.70776,394.63281,242.75488,400,224,400s-29.70776-5.36719-31.788-7.98877C194.23309,389.40039,205.17468,384,224,384Zm-80-40c18.82532,0,29.76691,5.40039,31.788,8.01123C173.70776,354.63281,162.75488,360,144,360c-18.7818,0-29.73859-5.38232-31.79614-8C114.26141,349.38232,125.2182,344,144,344ZM64,264c18.82532,0,29.76691,5.40039,31.788,8.01123C93.70776,274.63281,82.75488,280,64,280s-29.70776-5.36719-31.788-7.98877C34.23309,269.40039,45.17468,264,64,264Zm0,216c-19.50684,0-30.57861-5.80762-32-8.292V450.43115c.24738.10352.48969.208.74463.31006C41.22217,454.13281,52.32227,456,64,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C94.57861,474.19238,83.50684,480,64,480Zm80,0c-19.54132,0-30.61029-5.82568-32-8.30273V450.43115c.24738.10352.48969.208.74463.31006C121.22217,454.13281,132.32227,456,144,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C174.57861,474.19238,163.50684,480,144,480Zm80,0c-19.50684,0-30.57861-5.80762-32-8.292V450.43115c.24738.10352.48969.208.74463.31006C201.22217,454.13281,212.32227,456,224,456s22.77783-1.86719,31.25537-5.25879c.25494-.10205.49725-.20654.74463-.31006V471.708C254.57861,474.19238,243.50684,480,224,480Zm80-72h48v64H304Zm64-64h48V472H368Zm64,128V264h48V472Z"], ["x", "224", "y", "336", "width", "16", "height", "16"], ["d", "M256,336v16h40a8.00035,8.00035,0,0,0,5.65674-2.34277L464,187.314V200h16V168a8.00008,8.00008,0,0,0-8-8H440v16h12.686l-160,160Z"], ["d", "M362.126,66.82031A191.42794,191.42794,0,0,0,232,16C126.13086,16,40,102.13086,40,208a194.4809,194.4809,0,0,0,1.61816,25.0332l15.86622-2.0664A178.42561,178.42561,0,0,1,56,208c0-2.68164.07031-5.34717.18964-8H92l21.6001,28.7998A7.99927,7.99927,0,0,0,120,232h59.4707l17.957,29.92871-26.22753,19.6709A8.0009,8.0009,0,0,0,168,288v24h16V292l28.7998-21.59961a8.0005,8.0005,0,0,0,2.06006-10.5166l-24-40A8.00072,8.00072,0,0,0,184,216H124l-21.6001-28.7998A7.99927,7.99927,0,0,0,96,184H57.64325A175.16422,175.16422,0,0,1,92.916,100.2793L120,116.5293V144a8.00008,8.00008,0,0,0,8,8h36.686l29.65722,29.65723a7.99989,7.99989,0,0,0,10.09423.999l48-32A7.99941,7.99941,0,0,0,256,144V99.31348l50.7074-50.707a175.59533,175.59533,0,0,1,34.873,21.66308l-42.702,35.585a7.99927,7.99927,0,0,0-2.30615,9.11621l14.33007,35.82618L292,176H256a8.00222,8.00222,0,0,0-4.7998,1.59961l-32,24a8,8,0,0,0-1.85645,10.83789l32,48A7.99943,7.99943,0,0,0,256,264h24v48h16V256a8.00008,8.00008,0,0,0-8-8H260.28125l-25.42676-38.14062L258.6665,192H296a7.99927,7.99927,0,0,0,6.3999-3.2002l24-32a7.99806,7.99806,0,0,0,1.02783-7.7705l-13.8413-34.6045,40.18634-33.48852a175.349,175.349,0,0,1,53.57049,111.75024l15.94141-1.373A191.3713,191.3713,0,0,0,362.126,66.82031ZM242.34326,90.34277A8.00076,8.00076,0,0,0,240,96v43.71875l-38.98047,25.9873-27.36279-27.36328A8.00035,8.00035,0,0,0,168,136H136V112a8.00091,8.00091,0,0,0-3.88428-6.86035L103.441,87.93481A175.9247,175.9247,0,0,1,290.654,42.032Z"], [1, "col"], ["fill", "#29889d", "viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", 1, "icon"], ["d", "m296.484 112a6 6 0 0 0 0-12h-6.325a16.153 16.153 0 0 1 -11.289-5h13.851a6 6 0 0 0 0-12h-19.683a2.74 2.74 0 0 1 0-1h19.683a6 6 0 0 0 0-12h-13.85a16.149 16.149 0 0 1 11.288-5h6.325a6 6 0 0 0 0-12h-6.325c-11.452 0-21.38 7-26.149 17h-5.593a6 6 0 1 0 0 12h2.6a5.446 5.446 0 0 0 0 1h-2.6a6 6 0 1 0 0 12h5.593c4.769 10 14.7 17 26.149 17z"], ["d", "m453.15 389.28-3.636 1.177c-8.066-15.127-25.7-23.736-41.11-19.164-.049.015-.1.029-.144.045l-8.154 2.645a49.968 49.968 0 0 0 -35.265-17.919l-28.519-26.752a214.336 214.336 0 0 0 -39.086-29.069 151.418 151.418 0 0 0 -26.136-11.987 105.991 105.991 0 0 0 -15.8-4.144c.344-1.142.712-2.288 1.125-3.442a68.958 68.958 0 0 1 10.432-19.037l5.566.347a76.9 76.9 0 0 0 10.232.7 62.793 62.793 0 0 0 41.071-14.593c18.626-15.563 30.092-42.847 31.459-74.855a6 6 0 0 0 -7.989-5.914l-50.874 17.932c-16.322 5.75-29.002 20.65-33.915 39.842a207.869 207.869 0 0 0 -4.948 29.057q-1.85 2.375-3.528 4.9c-7.092-23.1-4.5-46.081 7.79-68.471a118.712 118.712 0 0 1 24.987-31.21 76.973 76.973 0 1 0 -16.078-1.155 131.57 131.57 0 0 0 -19.212 26.2c-11.318 20.434-15.418 41.959-12.262 63.399-.792-1.965-1.605-3.919-2.46-5.849l.35-11.659c1.548-51.57-32.362-95.067-75.592-96.963a6 6 0 0 0 -6.216 6.743l5.18 41.2c2.117 19.444 10.9 36.03 25.4 47.966 10.92 8.988 25.042 15.28 40.044 17.884a179.55 179.55 0 0 1 11.329 35.248c-.333 0-.664-.02-1-.02a106.434 106.434 0 0 0 -26.828 3.436l-1.982.517c-.127.033-.253.071-.378.112-23.4 7.773-33.483 22.358-42.334 39.461a108.142 108.142 0 0 0 -45.7 11.483c-.147.074-.291.153-.431.239l-17.51 10.662-93.193 57.868a6 6 0 0 0 -2.608 6.731 170.474 170.474 0 0 0 60.417 88.671l1.814 1.381a6 6 0 0 0 6.559.464l69.848-39a28.173 28.173 0 0 1 20.362 1.176c.116.053.234.1.355.147l87.662 33.254a118.171 118.171 0 0 0 15.045 4.536 109.423 109.423 0 0 0 24.518 2.751 117.223 117.223 0 0 0 47.767-10.288l163.879-73.424a6 6 0 0 0 3.159-7.6 42.9 42.9 0 0 0 -53.462-25.659zm-179.118-161.212c3.918-15.306 13.743-27.084 26.282-31.5l42.2-14.876c-2.715 24.676-12.147 45.209-26.483 57.188-10.665 8.913-23.568 12.8-38.388 11.59l34.509-31.555a6.166 6.166 0 0 0 .689-8.5 6 6 0 0 0 -8.6-.519l-32.688 29.889c.738-4.22 1.563-8.138 2.479-11.717zm-31.408-95.688.953-.908a5.984 5.984 0 1 0 -8.44-8.485l-.908.694a63.552 63.552 0 0 1 -14.714-35.681h1.307a6 6 0 0 0 0-12h-1.307a65.278 65.278 0 0 1 14.714-35.253l.908 1.014a6.037 6.037 0 0 0 4.242 1.811 5.967 5.967 0 0 0 4.243-10.2l-1-.9a65.652 65.652 0 0 1 35.378-14.711v1.307a6 6 0 0 0 12 0v-1.307a63.173 63.173 0 0 1 35.558 14.714l-.862.908a6.014 6.014 0 0 0 8.524 8.485l.911-1.122a65.287 65.287 0 0 1 14.716 35.254h-1.306a6 6 0 0 0 0 12h1.306a63.552 63.552 0 0 1 -14.713 35.68l-.907-.8a6.029 6.029 0 0 0 -8.487 8.565l.818.922a63.189 63.189 0 0 1 -35.558 14.727v-1.307a6 6 0 0 0 -12 0v1.307a65.661 65.661 0 0 1 -35.376-14.714zm-22.584 79.871-19.171-27.551a6 6 0 1 0 -9.849 6.854l19.17 27.549a163.09 163.09 0 0 1 8.769 14.128c-22.027-6.443-43.312-22.93-46.623-53.342l-4.246-33.775c30.431 5.375 53.957 35.954 56.72 73.395q-2.31-3.697-4.77-7.258zm191.846 170.526c9.233-2.7 20.155 2.462 25.947 11.462l-71.341 23.092a51.587 51.587 0 0 0 -6-17.877zm-201.281-84.9 1.788-.465a94.406 94.406 0 0 1 23.8-3.049c1.064 0 2.124.03 3.185.066q.766 4.856 1.353 9.58l.295 2.474c.184 1.618.363 3.232.512 4.817a6 6 0 0 0 5.966 5.44c.187 0 .377-.009.567-.026a6 6 0 0 0 5.414-6.533c-.221-2.358-.49-4.759-.785-7.183a52.181 52.181 0 0 1 .234-7.128 94.006 94.006 0 0 1 14.22 3.716 139.4 139.4 0 0 1 24.062 11.034 202.38 202.38 0 0 1 36.9 27.439l46.954 44.045-21.988 7.135a51.333 51.333 0 0 0 -28.443-15.57l-60.343-11.009a67.318 67.318 0 0 1 -27.468-11.8l-5.674-4.145a107.926 107.926 0 0 0 -53.1-20.336c8.261-14.649 16.546-23.136 32.551-28.498zm124.062 187.13c-20.61 9.235-43.584 11.648-64.689 6.794a106.17 106.17 0 0 1 -13.494-4.068l-87.474-33.178a40.115 40.115 0 0 0 -29.517-1.361 5.972 5.972 0 0 0 -.984.438l-66.9 37.357a158.531 158.531 0 0 1 -53.543-77.075l89.25-55.415 17.247-10.499a95.7 95.7 0 0 1 99.508 8.416l5.675 4.145a79.386 79.386 0 0 0 32.393 13.913l60.342 11.009a39.673 39.673 0 0 1 32.5 39.605c0 .06-.007.12-.008.18l-44.438-10.2a265.219 265.219 0 0 0 -47.845-6.468 6 6 0 0 0 -.515 11.989 253.173 253.173 0 0 1 45.672 6.171l51.053 11.717a6 6 0 0 0 7.246-4.771q.349-1.917.552-3.828l90.16-29.184a30.915 30.915 0 0 1 36.071 13.411z"], ["d", "m218.734 310h-11.277a6 6 0 0 0 0 12h11.277a6 6 0 1 0 0-12z"], ["d", "m241.657 337a6 6 0 1 0 0-12h-8.984a6 6 0 0 0 0 12z"], ["d", "m298.139 340h9.084a6 6 0 0 0 0-12h-9.084a6 6 0 0 0 0 12z"], ["d", "m266.073 330h8.877a6 6 0 1 0 0-12h-8.877a6 6 0 0 0 0 12z"], ["d", "m108.585 371.834-55.231 34.293a6 6 0 1 0 6.33 10.194l55.232-34.293a6 6 0 1 0 -6.331-10.194z"], ["d", "m128.041 359.927-4.292 2.614a6 6 0 1 0 6.241 10.249l4.292-2.614a6 6 0 0 0 -6.241-10.249z"], ["d", "m340.686 82.428a56.5 56.5 0 1 0 -56.5 56.5 56.569 56.569 0 0 0 56.5-56.5zm-101.009 0a44.5 44.5 0 1 1 44.505 44.5 44.556 44.556 0 0 1 -44.505-44.5z"], ["fill", "#29889d", "viewBox", "0 0 74 74", "xmlns", "http://www.w3.org/2000/svg", "data-name", "line Icons", 1, "icon"], ["d", "m51.087 64.082a1 1 0 0 1 -1-1v-53.122l-12.674-5.317-10.643 4.187v54.252a1 1 0 0 1 -2 0v-54.934a1 1 0 0 1 .634-.931l11.655-4.585a1 1 0 0 1 .753.008l13.662 5.733a1 1 0 0 1 .613.922v53.787a1 1 0 0 1 -1 1z"], ["d", "m37.425 64.082a1 1 0 0 1 -1-1v-59.519a1 1 0 0 1 2 0v59.519a1 1 0 0 1 -1 1z"], ["d", "m67.232 64.082a1 1 0 0 1 -1-1v-31.43l-9.778-5.689h-5.367a1 1 0 0 1 0-2h5.637a1 1 0 0 1 .5.136l10.509 6.114a1 1 0 0 1 .5.864v32a1 1 0 0 1 -1.001 1.005z"], ["d", "m56.724 64.082a1 1 0 0 1 -1-1v-38.119a1 1 0 0 1 2 0v38.119a1 1 0 0 1 -1 1z"], ["d", "m5.229 64.082a1 1 0 0 1 -1-1v-31.145a1 1 0 0 1 1-1h20.541a1 1 0 0 1 0 2h-19.541v30.145a1 1 0 0 1 -1 1z"], ["d", "m10.734 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 36.778h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 41.471h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 41.471h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 41.471h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 46.163h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 50.856h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 55.549h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m16.563 55.549h-2.126a1 1 0 1 1 0-2h2.126a1 1 0 1 1 0 2z"], ["d", "m22.39 55.549h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 60.242h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m33.9 13.352a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 14.515a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 20.874a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 22.037a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 28.4a1 1 0 0 1 -1-1v-1.891a1 1 0 1 1 2 0v1.891a1 1 0 0 1 -1 1z"], ["d", "m29.34 29.559a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 35.917a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 37.08a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 43.439a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 44.6a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m33.9 50.961a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 52.124a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 58.482a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m29.34 59.646a1 1 0 0 1 -1-1v-1.888a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1.001z"], ["d", "m40.8 12.4a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m44.177 13.675a1 1 0 0 1 -1-1v-1.886a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m47.552 14.949a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 19.9a1 1 0 0 1 -1-1v-1.89a1 1 0 0 1 2 0v1.89a1 1 0 0 1 -1 1z"], ["d", "m44.177 21.17a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.886a1 1 0 0 1 -1 1z"], ["d", "m47.552 22.444a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 27.392a1 1 0 0 1 -1-1v-1.892a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1.005z"], ["d", "m44.177 28.666a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 29.939a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 34.887a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 36.161a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 37.435a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 42.382a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m44.177 43.656a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 44.93a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 49.877a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 51.151a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 52.425a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 57.372a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 58.646a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 59.92a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m60.2 33.65a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 35.768a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 38.588a1 1 0 0 1 -1-1v-1.01a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .999z"], ["d", "m63.57 40.706a1 1 0 0 1 -1-1v-1.006a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .995z"], ["d", "m60.2 43.527a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 45.645a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 48.466a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 50.583a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 53.4a1 1 0 0 1 -1-1v-1.007a1 1 0 0 1 2 0v1.007a1 1 0 0 1 -1 1z"], ["d", "m63.57 55.522a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 58.343a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 60.46a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m70.231 64.066h-68a1 1 0 1 1 0-2h68a1 1 0 0 1 0 2z"], [1, "row", "my-5", "border", "aboutus-info", "mx-2", "mx-md-0"], [1, "title-info", "p-0"], [1, "text-uppercase", "m-0", "ms-5"], [1, "px-4", "px-md-0", "ps-md-5", "py-3"], [1, "mb-4", "mb-md-0"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Regional Economics surge para dar a conhecer a realidade econ\u00F3mica regional, atrav\u00E9s da divulga\u00E7\u00E3o de informa\u00E7\u00E3o econ\u00F3mica sistematizada, intuitiva e acess\u00EDvel. Ao conhecerem de forma aprofundada o ecossistema, os agentes econ\u00F3micos tomar\u00E3o decis\u00F5es mais conscientes, maximizando assim as suas hip\u00F3teses de sucesso. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " As empresas, e os seus stakeholders, dedicam tempo a conhecer as especificidades da economia do pa\u00EDs, mas tendem a negligenciar a economia da sua regi\u00E3o (\u201Cparadoxo da informa\u00E7\u00E3o econ\u00F3mica\u201D). Este \u201Cgap\u201D ocorre porque a informa\u00E7\u00E3o econ\u00F3mica da regi\u00E3o e do munic\u00EDpio se encontra dispersa e de dificil interpreta\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Os servi\u00E7os da Regional Economics permitem ultrapassar o \u201Cparadoxo da informa\u00E7\u00E3o econ\u00F3mica\u201D, fornecendo explica\u00E7\u00F5es factuais e l\u00F3gicas sobre os desenvolvimentos econ\u00F3micos das regi\u00F5es e dos munic\u00EDpios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Objetivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Intuitivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Macroeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Microeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 41);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "proposta de valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Disponibiliza\u00E7\u00E3o de conhecimento econ\u00F3mico regional objetivo;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Transforma\u00E7\u00E3o de informa\u00E7\u00E3o econ\u00F3mica complexa em analises intuitivas e acess\u00EDveis;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Liga\u00E7\u00E3o das v\u00E1rias dimens\u00F5es da atividade econ\u00F3mica regional: da macroeconomia \u00E0s empresas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: [".bgBlue[_ngcontent-%COMP%] {\n  background-color: var(--color1);\n}\n\nli[_ngcontent-%COMP%] {\n  color: white;\n}\n\nul[_ngcontent-%COMP%] {\n  line-height: 2.5;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 2;\n  text-align: justify;\n  margin-top: 60px;\n  color: var(--color1)\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 2;\n  text-align: justify;\n  color: var(--color1)\n}\n\nspan[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color3);\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.icon-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  margin-top: 5px;\n  color: var(--color1);\n  text-transform: uppercase;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  background: var(--color1);\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.title-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 1.5;\n  padding: 10px 0px;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  line-height: 2.5;\n  color: black;\n  font-size: 18px;\n}\n\nli[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 10px;\n  font-size: 18px;\n  color: var(--color1);\n  font-weight: 900;\n}\n\n.aboutus-info[_ngcontent-%COMP%] {\n  background: #FFF;\n  transform: translateY(-8px);box-shadow: 0 5px 10px 0 rgba(50,50,50,.5);\n}\n\n\n\n@media (max-width: 576px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 30px;\n    line-height: 1.7;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.7;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  li[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 2.2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQixDQUFDLDBDQUEwQztBQUN4RTs7QUFFQSxlQUFlOztBQUNmO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdCbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxubGkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnVsIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpXG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSlcbn1cblxuc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHZhcigtLWNvbG9yMyk7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5pY29uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0bGUtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS1pbmZvIGg1IHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbnVsIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmxpOjpiZWZvcmUge1xuICBjb250ZW50OiAn4oaSJztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uYWJvdXR1cy1pbmZvIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO2JveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDUwLDUwLDUwLC41KTtcbn1cblxuLyogc21hcnRwaG9uZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICB9XG5cbiAgdWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBsaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjI7XG4gIH1cbn1cbiJdfQ== */"] });
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
BannerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerHomeComponent, selectors: [["app-banner-home"]], decls: 17, vars: 0, consts: [[1, "container-fluid", "bg1", "d-flex", "align-items-center"], [1, "container", "position-relative", "d-none", "d-md-flex", "justify-content-end"], ["src", "assets/img/portugalmap2.png", "alt", "portugal-map"], [1, "info", "position-absolute", "d-none", "d-md-block"], [1, "text-light", "text-uppercase"], [1, "row", "justify-content-between"], [1, "col", "text-light", "text-uppercase", "text-center", "bg3"], [1, "col", "mx-4", "text-light", "text-uppercase", "text-center", "bg3"], [1, "container-fluid", "bg2", "p-0", "d-none", "d-md-block"], [2, "height", "140px", "overflow", "hidden"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M0.00,49.98 C188.76,178.13 302.76,-15.28 500.00,49.98 L500.00,0.00 L0.00,0.00 Z", 2, "stroke", "none", "fill", "#1B485B"]], template: function BannerHomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".bg1[_ngcontent-%COMP%] {\n    height: 90vh;\n    background-color: var(--color1);\n    padding-top: 65px;\n    font-family: serif;\n}\n\n.bg1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 550px;\n}\n\n.bg2[_ngcontent-%COMP%] {\n    height: 10vh;\n    background-color: #F6F6F6;\n}\n\n.info[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 0%;\n    transform: translateY(-50%);\n}\n\n.goals[_ngcontent-%COMP%] {\n    background-color: var(--color3);\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 11px 9px 10px 9px rgb(50 50 50 / 50%);\n}\n\n.bg3[_ngcontent-%COMP%] {\n    background: var(--color3);\n    \n    padding: 15px;\n    font-size: 20px;\n    box-shadow: 11px 9px 10px 9px rgb(50 50 50 / 50%);\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 35px;\n}\n\n\n\n@media (max-width: 576px) {\n    .bg1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 370px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItaG9tZS9iYW5uZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLGVBQWU7SUFDZixpREFBaUQ7QUFDckQ7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUdBLGVBQWU7O0FBQ2Y7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyLWhvbWUvYmFubmVyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZzEge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbn1cblxuLmJnMSAuY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDU1MHB4O1xufVxuXG4uYmcyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbn1cblxuLmluZm8ge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmdvYWxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxMXB4IDlweCAxMHB4IDlweCByZ2IoNTAgNTAgNTAgLyA1MCUpO1xufVxuXG4uYmczIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjMpO1xuICAgIFxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDExcHggOXB4IDEwcHggOXB4IHJnYig1MCA1MCA1MCAvIDUwJSk7XG59XG5cblxucCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5cbi8qIHNtYXJ0cGhvbmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5iZzEgLmNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMzcwcHg7XG4gICAgfVxufSJdfQ== */"] });
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
CaseStudiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaseStudiesComponent, selectors: [["app-case-studies"]], decls: 31, vars: 0, consts: [["sectionName", "case studies"], [1, "section-even", "d-flex", "align-items-center"], [1, "container", "d-flex", "justify-content-between", "align-items-center", "mt-5", "mt-md-0"], [1, "row", "my-5", "my-md-0"], [1, "col-12", "col-md-4"], [1, "card", "mb-4", "mb-md-0"], [1, "card-title", "text-uppercase", "p-3"], [1, "card-body", "d-flex", "flex-column", "align-items-center", "justify-content-start", "justify-content-md-between"], [1, "card-text", "p-1"], ["href", "assets/files/pergunta-1.pdf", "target", "_blank", 1, "card-button", "text-uppercase", "mb-3"], ["href", "assets/files/pergunta-2.pdf", "target", "_blank", 1, "card-button", "text-uppercase", "mb-3"], ["href", "assets/files/pergunta-3.pdf", "target", "_blank", 1, "card-button", "text-uppercase", "mb-3"]], template: function CaseStudiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "munic\u00EDpio de viseu na \u00FAltima d\u00E9cada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Como foi o Crescimento do Mercado de Trabalho no Munic\u00EDpio de Viseu (2008-2019)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "atividades econ\u00F3micas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quais foram as Atividade Econ\u00F3micas que mais cresceram no Munic\u00EDpio de Viseu (2008-2019)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "covid-19 no munic\u00EDpio de viseu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Qual o Impacto da COVID-19 no Munic\u00EDpio de Viseu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: [".card[_ngcontent-%COMP%] {\n    height: 300px;\n    box-shadow: 0 5px 10px 0 rgb(50 50 50 / 50%);\n}\n\n.card-title[_ngcontent-%COMP%] {\n    background: var(--color1);\n    color: white;\n    font-size: 18px;\n    text-align: left;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px 10px;\n    text-align: left;\n    font-weight: 600;\n}\n\n.card-button[_ngcontent-%COMP%] {\n    background: var(--color1);\n    color: white;\n    outline: 0;\n    width: 90%;\n    padding: 10px;\n    border: 0;\n    transition: 0.2s ease-in;\n    font-size: 15px;\n}\n\n.card-button[_ngcontent-%COMP%]:hover {\n    background: var(--color3);\n    transition: 0.2s ease-out;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    text-align: center;\n}\n\n\n\n@media (max-width: 576px) {\n    .card[_ngcontent-%COMP%] {\n        height: auto;\n    }\n\n    .card-button[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .card-button[_ngcontent-%COMP%]:hover {\n       background: var(--color1);\n       transition: none;\n    }\n\n    .card-text[_ngcontent-%COMP%] {\n        font-size: 15px;\n        padding: 10px 10px;\n        text-align: left;\n        font-weight: 500;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXNlLXN0dWRpZXMvY2FzZS1zdHVkaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFHQSxlQUFlOztBQUNmO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO09BQ0cseUJBQXlCO09BQ3pCLGdCQUFnQjtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FzZS1zdHVkaWVzL2Nhc2Utc3R1ZGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYig1MCA1MCA1MCAvIDUwJSk7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jYXJkLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IzKTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIHNtYXJ0cGhvbmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5jYXJkLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jYXJkLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5jYXJkLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgXG59Il19 */"] });
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer", "container-fluid", "p-0"], [1, "footer-body", "d-flex", "align-items-center"], [1, "container", "d-flex", "justify-content-between"], ["src", "assets/img/logo-oficial-white.png", "alt", "logo-footer", 1, "img-size"], [1, "credits", "d-flex", "align-items-center"], [1, "container"], [1, "m-0", "text-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Copyright \u00A9 2021 Regional Economics. Todos os direitos reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 200px;\n  border-top: 5px solid var(--color1);\n}\n\n.footer-body[_ngcontent-%COMP%] {\n  height: 140px;\n  background: var(--color1);\n}\n\n.credits[_ngcontent-%COMP%] {\n  height: 60px;\n  background: var(--color1);\n}\n\n.img-size[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XG59XG5cbi5mb290ZXItYm9keSB7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG59XG5cbi5jcmVkaXRzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xufVxuXG4uaW1nLXNpemUge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/form-subscription/form-subscription.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/form-subscription/form-subscription.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubscriptionComponent", function() { return FormSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FormSubscriptionComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pay_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pay_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pay_r2.name);
} }
function FormSubscriptionComponent_h4_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Valor a pagar: ", ctx_r1.currentValue, " euros");
} }
class FormSubscriptionComponent {
    constructor() {
        this.currentValue = 0;
        this.payment = [
            { name: 'Mensal', value: 20 },
            { name: 'Anual', value: 240 }
        ];
    }
    ngOnInit() {
    }
    getValue(value) {
        this.currentValue = value.value;
    }
    submitSubscription() {
        console.log('subscriç\ao');
    }
}
FormSubscriptionComponent.ɵfac = function FormSubscriptionComponent_Factory(t) { return new (t || FormSubscriptionComponent)(); };
FormSubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormSubscriptionComponent, selectors: [["app-form-subscription"]], decls: 42, vars: 3, consts: [[1, "container-fluid"], [1, "container"], [1, "h2"], [1, "row"], [1, "col-12"], [1, "form-label"], ["type", "email", 1, "form-control"], [1, "form-select", 3, "change"], ["default", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function FormSubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Formul\u00E1rio de Subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dados Pessoais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirmar email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "M\u00E9todo de Pagamento - D\u00E9bito Direto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Periodicidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormSubscriptionComponent_Template_select_change_29_listener($event) { return ctx.getValue($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Selecione a periodicidade da subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FormSubscriptionComponent_option_32_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Titular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IBAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FormSubscriptionComponent_h4_39_Template, 2, 1, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormSubscriptionComponent_Template_button_click_40_listener() { return ctx.submitSubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirmar Subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentValue == 20 || ctx.currentValue == 240);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXN1YnNjcmlwdGlvbi9mb3JtLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1zdWJzY3JpcHRpb24vZm9ybS1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormSubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-subscription',
                templateUrl: './form-subscription.component.html',
                styleUrls: ['./form-subscription.component.css']
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "activeTitle": a0 }; };
class HeaderComponent {
    constructor(router, scroller) {
        this.router = router;
        this.scroller = scroller;
        this.active = "";
        scroller.setOffset([0, 70]);
    }
    ngOnInit() {
    }
    goDown(value) {
        this.scroller.scrollToAnchor(value);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { active: "active" }, decls: 16, vars: 15, consts: [[1, "container-fluid", "header-border", "d-none", "d-md-block"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-6"], ["src", "assets/img/logo-header.png", "alt", "logo-header", "routerLink", "", 1, "cursor"], [1, "col-6", "d-none", "d-md-flex", "justify-content-between", "align-items-center"], [1, "text-uppercase", "my-0", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h6_click_6_listener() { return ctx.goDown("about-us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h6_click_8_listener() { return ctx.goDown("subscription"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h6_click_10_listener() { return ctx.goDown("region"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "a regi\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h6_click_12_listener() { return ctx.goDown("case-studies"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "case studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h6_click_14_listener() { return ctx.goDown("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "a equipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.active == "about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.active == "subscription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.active == "region"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.active == "case-studies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.active == "team"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".header-border[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--color1);\n  position: fixed;\n  background: #FFF;\n  z-index: 1;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 65px;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--colorText);\n  cursor: pointer;\n  transition: 0.2s ease;\n  font-weight: 500;\n  font-family: sans-serif;\n  font-size: 17px;\n}\n\nh6[_ngcontent-%COMP%]:hover {\n  color: var(--color1);\n}\n\n.activeTitle[_ngcontent-%COMP%] {\n  color: var(--color1);\n  font-weight: 600;\n}\n\n@media (max-width: 1366px) {\n  h6[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWNvbG9yMSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgei1pbmRleDogMTtcbn1cblxuLnJvdyB7XG4gIGhlaWdodDogNjVweDtcbn1cblxuaDYge1xuICBjb2xvcjogdmFyKC0tY29sb3JUZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmg2OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG5cbi5hY3RpdmVUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIGg2IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbiAgXG4gICJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "active-circle": a0 }; };
const _c1 = function (a0) { return { "active-title": a0 }; };
function RegionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionComponent_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const info_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.currentId = info_r2.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, info_r2.id == ctx_r0.currentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, info_r2.id == ctx_r0.currentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r2.title);
} }
function RegionComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](desc_r5);
} }
class RegionComponent {
    constructor() {
        this.infoRegion = [
            {
                id: 1,
                title: "Dinâmica da atividade económica e das empresas",
                smallText: "A evolução da atividade económica tem um impacto não apenas nos principais rácios financeiros das empresas, mas também no nível de vida da população. Um município que apresenta de forma consistente um crescimento do Mercado de Trabalho, do Volume de Negócios, das Exportações e do Valor Acrescentado gerado pelas suas empresas, será um município mais próximo de alcançar os seus objetivos económicos.",
                description: ['Número de empresas', 'Valor acrescentado das empresas', 'Exportações/ importações', 'Pessoal ao serviço', 'Volume de negócios', 'Empreendedorismo']
            },
            {
                id: 2,
                title: "Caraterização do tecido empresarial",
                smallText: "Cada região tem um sistema empresarial com características muito próprias, que dependem dos recursos afetados a cada Setor de Atividade Económica. Conhecer a especialização produtiva da região e as alterações verificadas no tecido empresarial ao longo da última década revela-se essencial para o conhecimento da economia da região.",
                description: ['Composição tecido empresarial', 'Produtividade', 'Especialização produtiva', 'Efeitos intersetoriais']
            },
            {
                id: 3,
                title: "Fatores de atratividade de empresas e pessoas",
                smallText: "As Atividade Económica e a Atratividade dos municípios estão extremamente relacionadas. Regiões com maiores oportunidades de emprego e com remunerações mais elevados tendem a atrair não só mais habitantes, que por sua vez levam à constituição de novas empresas, criando muitas vezes uma espiral virtuosa.",
                description: ['Dinâmica demográfica', 'Oportunidades de emprego', 'Habilitações', 'Remunerações']
            },
            {
                id: 4,
                title: "Dinâmicas económicas recentes",
                smallText: "As dinâmicas económicas mais recentes dão indicações extremamente relevantes para perspetivar a evolução do município. Fenómenos tais como a pandemia da COVID-19, a digitalização e descarbonização da economia, bem como as novas empresas a atuar no município podem esculpir a realidade económica da região nos próximos anos.",
                description: ['COVID-19', 'Empresas da região', 'Digitalização', 'Descarbonização da economia']
            }
        ];
        this.currentId = 1;
        this.previousId = 0;
    }
    ngOnInit() {
    }
}
RegionComponent.ɵfac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(); };
RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionComponent, selectors: [["app-region"]], decls: 80, vars: 3, consts: [["sectionName", "a regi\u00E3o"], [1, "section-odd", "pb-5"], [1, "container"], [1, "row", "d-none", "d-md-flex", "mb-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "container", "d-none", "current-info", "mt-3", "d-md-flex", "align-items-center", "p-5"], [1, "top-divider"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "w-100"], [1, "col-7", "small-text", "lh-lg"], [1, "col-5"], [1, "m-0"], [4, "ngFor", "ngForOf"], [1, "row", "pt-4", "text-center"], [1, "col-12", "col-md-4"], ["fill", "var(--color3)", 0, "xmlns", "x", "http://ns.adobe.com/Extensibility/1.0/", 0, "xmlns", "i", "http://ns.adobe.com/AdobeIllustrator/10.0/", 0, "xmlns", "graph", "http://ns.adobe.com/Graphs/1.0/", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", 0, "xml", "space", "preserve", 1, "icon", 2, "enable-background", "new 0 0 100 100"], ["requiredExtensions", "http://ns.adobe.com/AdobeIllustrator/10.0/", "x", "0", "y", "0", "width", "1", "height", "1"], [0, "i", "extraneous", "self"], ["d", "M50,54.9c0.9,0,1.7-0.8,1.7-1.7V41.7l1.7,1.7c0.7,0.7,1.7,0.7,2.4,0c0.7-0.7,0.7-1.7,0-2.4l-4.6-4.6      c-0.7-0.7-1.7-0.7-2.4,0l-4.6,4.6c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2c0.7,0.7,1.7,0.7,2.4,0l1.7-1.7v11.5      C48.3,54.2,49.1,54.9,50,54.9z"], ["d", "M39.5,59.2c0.7-0.7,0.7-1.7,0-2.4l-8.2-8.2h2.3c0.9,0,1.7-0.8,1.7-1.7c0-0.9-0.8-1.7-1.7-1.7h-6.4      c-0.9,0-1.7,0.8-1.7,1.7v6.4c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5c0.9,0,1.7-0.8,1.7-1.7v-2.3l8.2,8.2      C37.8,59.9,38.9,59.9,39.5,59.2z"], ["d", "M57.2,77.6c-2,1.4-4.5,2.2-7.2,2.2c-2.7,0-5.2-0.8-7.2-2.2c-3.7,1.3-6.3,4.7-6.3,8.8v4.5c0,0.5,0.4,0.9,0.9,0.9h25.3      c0.5,0,0.9-0.4,0.9-0.9v-4.5C63.5,82.4,60.9,78.9,57.2,77.6z"], ["cx", "50", "cy", "67.6", "r", "8.2"], ["d", "M50,32.1c6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12s-12,5.4-12,12C38.1,26.8,43.4,32.1,50,32.1z M44.3,19.3      c0.7-0.7,1.7-0.7,2.4,0l1.7,1.7l4.6-4.6c0.7-0.7,1.7-0.7,2.4,0c0.7,0.7,0.7,1.7,0,2.4l-5.8,5.8c-0.3,0.3-0.8,0.5-1.2,0.5      c-0.4,0-0.9-0.2-1.2-0.5l-2.9-2.9C43.6,21,43.6,19.9,44.3,19.3z"], ["d", "M14.5,22.2c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C26.4,27.6,21.1,22.2,14.5,22.2z M19.2,36.5      c0.7,0.7,0.7,1.7,0,2.4c-0.3,0.3-0.8,0.5-1.2,0.5c-0.4,0-0.9-0.2-1.2-0.5l-2.4-2.4l-2.4,2.4c-0.3,0.3-0.8,0.5-1.2,0.5      c-0.4,0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.7,0-2.4l2.4-2.4l-2.4-2.4c-0.7-0.7-0.7-1.7,0-2.4c0.7-0.7,1.7-0.7,2.4,0l2.4,2.4      l2.4-2.4c0.7-0.7,1.7-0.7,2.4,0s0.7,1.7,0,2.4l-2.4,2.4L19.2,36.5z"], ["d", "M72.7,45.3h-6.4c-0.9,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7h2.3l-8.2,8.2c-0.7,0.7-0.7,1.7,0,2.4      c0.7,0.7,1.7,0.7,2.4,0l8.2-8.2v2.3c0,0.9,0.8,1.7,1.7,1.7c0.5,0,0.9-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2V47      C74.4,46,73.7,45.3,72.7,45.3z"], ["d", "M85.5,22.2c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C97.5,27.6,92.1,22.2,85.5,22.2z M90.3,36.5      c0.7,0.7,0.7,1.7,0,2.4c-0.3,0.3-0.8,0.5-1.2,0.5c-0.4,0-0.9-0.2-1.2-0.5l-2.4-2.4l-2.4,2.4c-0.3,0.3-0.8,0.5-1.2,0.5      c-0.4,0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.7,0-2.4l2.4-2.4l-2.4-2.4c-0.7-0.7-0.7-1.7,0-2.4s1.7-0.7,2.4,0l2.4,2.4l2.4-2.4      c0.7-0.7,1.7-0.7,2.4,0s0.7,1.7,0,2.4L88,34.2L90.3,36.5z"], [1, "icon-label"], ["fill", "var(--color3)", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 90 112.5", "enable-background", "new 0 0 90 90", 0, "xml", "space", "preserve", 1, "icon"], ["d", "M44.97,45.363c1.193,0,2.386,0.301,3.453,0.905c2.136,1.214,3.438,3.438,3.438,5.85c0.005,0.016,0.005,0.036,0.005,0.052  c-1.203,2.328-1.9,4.958-1.9,7.75c0,2.817,0.708,5.462,1.932,7.807H38.059c1.224-2.344,1.927-4.989,1.927-7.807  c0-2.792-0.692-5.422-1.902-7.75c0-0.016,0.005-0.037,0.005-0.052c0-2.412,1.297-4.636,3.434-5.85  C42.59,45.664,43.783,45.363,44.97,45.363z M67.313,44.888c8.454,0,15.262,6.729,15.262,15.032c0,8.302-6.808,15.031-15.262,15.031  c-8.453,0-15.265-6.729-15.265-15.031C52.049,51.617,58.86,44.888,67.313,44.888z M22.637,44.888  c8.453,0,15.267,6.729,15.267,15.032c0,8.302-6.814,15.031-15.267,15.031c-8.447,0-15.266-6.729-15.266-15.031  C7.371,51.617,14.19,44.888,22.637,44.888z M39.923,25.424h10.104l1.267,20.428c-0.543-0.532-1.161-1.005-1.844-1.391  c-1.385-0.786-2.926-1.182-4.475-1.182c-1.546,0-3.093,0.396-4.479,1.182c-0.683,0.386-1.297,0.854-1.844,1.391L39.923,25.424z   M61.45,15.087c1.38-0.043,2.766,0.162,3.99,0.604c1.958,0.719,3.469,2.006,4.109,3.88l9.532,27.812  c-3.1-2.833-7.224-4.572-11.767-4.572c-5.577,0-10.536,2.613-13.713,6.667c0-0.005,0-0.011,0-0.021L52.064,24.71  c0.068-0.213,0.068-0.443,0-0.656c0.14-4.052,2.938-7.557,6.963-8.62C59.803,15.232,60.627,15.112,61.45,15.087z M28.497,15.087  c0.828,0.025,1.646,0.145,2.427,0.348c4.12,1.089,6.964,4.735,6.98,8.912l-1.558,25.109c0,0.005,0,0.01,0,0.016  c-3.178-4.048-8.136-6.662-13.709-6.662c-4.541,0-8.667,1.738-11.76,4.572l9.527-27.812c0.64-1.874,2.15-3.161,4.109-3.88  C25.737,15.249,27.123,15.044,28.497,15.087z M28.564,13.008c-1.625-0.058-3.265,0.188-4.765,0.74  c-2.401,0.874-4.491,2.593-5.365,5.15L6.69,53.18c-0.01,0.025-0.021,0.052-0.026,0.083c0,0.005-0.005,0.011-0.005,0.016  c-0.875,2.041-1.359,4.287-1.359,6.641c0,9.443,7.781,17.104,17.337,17.104c5.83,0,10.991-2.859,14.136-7.224H53.18  c3.15,4.364,8.307,7.224,14.134,7.224c9.558,0,17.339-7.661,17.339-17.104c0-2.365-0.484-4.614-1.365-6.663  c-0.01-0.025-0.021-0.052-0.026-0.078l-11.75-34.281c-0.876-2.557-2.954-4.276-5.354-5.15c-2.407-0.882-5.162-0.98-7.656-0.324  c-4.683,1.24-8.046,5.229-8.484,9.922H39.934c-0.432-4.693-3.801-8.682-8.479-9.922C30.518,13.18,29.543,13.039,28.564,13.008z"], ["d", "M22.637,50.653c5.229,0,9.428,4.146,9.428,9.267c0,5.119-4.199,9.265-9.428,9.265c-5.223,0-9.426-4.146-9.426-9.265  C13.21,54.8,17.414,50.653,22.637,50.653z M22.637,48.57c-6.333,0-11.5,5.088-11.5,11.35c0,6.26,5.167,11.337,11.5,11.337  s11.51-5.078,11.51-11.337C34.147,53.658,28.97,48.57,22.637,48.57z"], ["d", "M67.313,50.653c5.225,0,9.423,4.146,9.423,9.267c0,5.119-4.199,9.265-9.423,9.265c-5.224,0-9.426-4.146-9.426-9.265  C57.887,54.8,62.09,50.653,67.313,50.653z M67.313,48.57c-6.333,0-11.51,5.088-11.51,11.35c0,6.26,5.177,11.337,11.51,11.337  c6.333,0,11.5-5.078,11.5-11.337C78.813,53.658,73.647,48.57,67.313,48.57z"], ["d", "M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"], ["d", "M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"], ["d", "M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"], ["d", "M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"], ["d", "M92,9c0-0.5-0.3-1.1-0.8-1.3C63-3.4,47.8,18,20.8,9.8V5c0-1.4-1.1-2.5-2.5-2.5S15.8,3.6,15.8,5v86.1h-2.7    c-2.8,0-5.1,2.3-5.1,5.1c0,0.7,0.6,1.3,1.3,1.3h18c0.7,0,1.3-0.6,1.3-1.3c0-2.8-2.3-5.1-5.1-5.1h-2.7V62.4    c26.8,8.2,41.9-12.7,69.5-2.4c0.8,0.3,1.7-0.3,1.7-1.2C92,39.4,92,28.9,92,9z M67.5,20.7c0-0.1,0.1-0.2,0.2-0.2    c0.1,0,0.2,0,0.2,0.1c0.5,0.6,0.7,0.9,1.1,1.5c0.8-0.2,1.2-0.3,2-0.4c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2,0,0.2    c-0.5,0.7-0.7,1-1.2,1.7c0.3,0.7,0.5,1,0.9,1.7c0,0.1,0,0.2,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.8-0.2-1.1-0.3-1.9-0.5    c-0.6,0.6-0.9,0.9-1.4,1.5c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2c0-0.8,0-1.2,0-2c-0.7-0.3-1-0.4-1.7-0.7    c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.2,0.1-0.2c0.8-0.3,1.1-0.5,1.9-0.8C67.3,21.9,67.3,21.5,67.5,20.7z M59.3,20.2    c0.5-0.7,0.8-1,1.4-1.7c-0.3-0.7-0.4-1-0.7-1.7c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.2-0.1c0.7,0.2,1.1,0.3,1.8,0.5    c0.6-0.6,0.9-0.9,1.6-1.5c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c-0.1,0.8-0.2,1.2-0.3,2c0.7,0.3,1,0.5,1.6,0.9    c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.2-0.2,0.2c-0.8,0.3-1.2,0.4-2,0.7c-0.2,0.8-0.3,1.2-0.6,2c0,0.1-0.1,0.2-0.2,0.2c0,0,0,0,0,0    c-0.1,0-0.1,0-0.2-0.1c-0.4-0.6-0.6-0.9-1-1.6c-0.8,0.2-1.2,0.3-2,0.4c0,0,0,0,0,0c-0.1,0-0.2,0-0.2-0.1    C59.3,20.4,59.3,20.3,59.3,20.2z M37.1,27.2c0.8,0,1.2,0,2,0.1c0.5-0.7,0.7-1.1,1.1-1.8c0-0.1,0.1-0.1,0.2-0.1    c0.1,0,0.1,0.1,0.2,0.1c0.1,0.8,0.2,1.1,0.4,1.9c0.8,0.1,1.1,0.2,1.9,0.3c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.2    c-0.7,0.5-1,0.7-1.7,1.2c0,0.8,0,1.2,0,2c0,0.1,0,0.2-0.1,0.2c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c-0.6-0.5-0.9-0.7-1.4-1.2    c-0.7,0.3-1.1,0.5-1.9,0.9c-0.1,0-0.2,0-0.2,0c-0.1-0.1-0.1-0.1,0-0.2c0.3-0.7,0.5-1.1,0.8-1.9c-0.5-0.6-0.7-0.9-1.2-1.5    c-0.1-0.1-0.1-0.2,0-0.2C36.9,27.3,37,27.2,37.1,27.2z M36.6,40.4C36.6,40.4,36.5,40.4,36.6,40.4c-0.1,0-0.2-0.1-0.2-0.2    c-0.1-0.8-0.1-1.2-0.2-2c-0.7-0.3-1.1-0.4-1.8-0.7c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.2,0.1-0.2c0.7-0.3,1.1-0.5,1.8-0.9    c0.1-0.8,0.1-1.2,0.2-2c0-0.1,0.1-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0c0.5,0.6,0.8,0.8,1.3,1.4c0.8-0.3,1.2-0.4,1.9-0.7    c0.1,0,0.2,0,0.2,0.1c0,0.1,0.1,0.2,0,0.2c-0.4,0.7-0.6,1.1-1,1.8c0.4,0.6,0.6,0.9,1,1.6c0,0.1,0,0.2,0,0.2c0,0.1-0.1,0.1-0.2,0.1    c-0.8-0.1-1.2-0.1-1.9-0.2c-0.5,0.7-0.8,1-1.3,1.6C36.7,40.4,36.6,40.4,36.6,40.4z M40.6,48.2c0,0.1-0.1,0.2-0.2,0.2c0,0,0,0,0,0    c-0.1,0-0.1,0-0.2-0.1c-0.5-0.6-0.7-0.9-1.1-1.5c-0.8,0.2-1.2,0.3-2,0.4c-0.1,0-0.2,0-0.2-0.1c0-0.1,0-0.2,0-0.2    c0.5-0.7,0.7-1,1.2-1.7c-0.3-0.7-0.5-1-0.8-1.7c0-0.1,0-0.2,0-0.2c0.1-0.1,0.1-0.1,0.2-0.1c0.8,0.2,1.1,0.3,1.9,0.5    c0.6-0.6,0.9-0.9,1.4-1.5c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.8,0,1.2,0,2c0.7,0.3,1,0.4,1.7,0.7    c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.2-0.1,0.2c-0.8,0.3-1.1,0.5-1.9,0.8C40.8,47,40.7,47.4,40.6,48.2z M48.7,48.7    c-0.5,0.7-0.8,1-1.4,1.7c0.3,0.7,0.4,1.1,0.7,1.7c0,0.1,0,0.2-0.1,0.2s-0.2,0.1-0.2,0.1c-0.7-0.2-1.1-0.3-1.8-0.5    c-0.6,0.6-0.9,0.9-1.6,1.5c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2c0.1-0.8,0.2-1.2,0.3-2    c-0.7-0.3-1-0.5-1.6-0.9c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.2,0.2-0.2c0.8-0.3,1.2-0.4,1.9-0.7c0.2-0.8,0.3-1.2,0.6-2    c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0,0.2,0.1c0.4,0.6,0.6,0.9,1,1.6c0.8-0.2,1.2-0.3,2-0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0.1    C48.8,48.5,48.8,48.6,48.7,48.7z M48.6,22.7C48.6,22.7,48.6,22.7,48.6,22.7c-0.8,0.1-1.2,0.2-2,0.3c-0.4,0.8-0.6,1.2-1,1.9    c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.2-0.1c-0.2-0.7-0.3-1.1-0.6-1.8c-0.8,0-1.2,0-2,0c-0.1,0-0.1-0.1-0.2-0.1    c0-0.1,0-0.2,0.1-0.2c0.7-0.6,1-0.8,1.6-1.4c-0.1-0.8-0.2-1.2-0.3-1.9c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.2,0    c0.6,0.4,0.9,0.6,1.6,0.9c0.7-0.5,1.1-0.7,1.8-1.2c0.1-0.1,0.2-0.1,0.2,0c0.1,0,0.1,0.1,0.1,0.2c-0.3,0.8-0.4,1.2-0.7,2    c0.5,0.5,0.8,0.7,1.4,1.2c0.1,0,0.1,0.1,0,0.2C48.8,22.6,48.7,22.7,48.6,22.7z M56.9,51.5c-0.8,0.2-1.2,0.3-2,0.6    c-0.3,0.8-0.5,1.2-0.8,2c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2,0-0.2-0.1c-0.3-0.7-0.5-1-0.8-1.7c-0.8,0.1-1.2,0.1-2,0.2    c-0.1,0-0.2,0-0.2-0.1c0-0.1,0-0.2,0.1-0.2c0.6-0.6,0.9-1,1.5-1.6c-0.2-0.7-0.3-1.1-0.5-1.8c0-0.1,0-0.2,0.1-0.2    c0.1-0.1,0.2-0.1,0.2-0.1c0.7,0.3,1,0.4,1.7,0.7c0.7-0.6,1-0.8,1.7-1.4c0.1-0.1,0.2-0.1,0.2,0c0.1,0,0.1,0.1,0.1,0.2    c-0.2,0.8-0.3,1.2-0.5,2c0.6,0.4,0.9,0.6,1.5,1c0.1,0,0.1,0.1,0.1,0.2C57.1,51.4,57,51.5,56.9,51.5z M57.1,16.5    c-0.6,0.6-0.9,1-1.5,1.6c0.2,0.7,0.3,1.1,0.5,1.8c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.2,0.1-0.2,0.1c-0.7-0.3-1-0.4-1.7-0.7    c-0.7,0.6-1,0.8-1.7,1.4c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2c0.2-0.8,0.3-1.2,0.5-2c-0.6-0.4-0.9-0.6-1.5-1    c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.2,0.2-0.2c0.8-0.2,1.2-0.3,2-0.6c0.3-0.8,0.5-1.2,0.8-2c0-0.1,0.1-0.2,0.2-0.2c0,0,0,0,0,0    c0.1,0,0.2,0,0.2,0.1c0.3,0.7,0.5,1,0.8,1.7c0.8-0.1,1.2-0.1,2-0.2c0.1,0,0.2,0,0.2,0.1C57.2,16.4,57.2,16.5,57.1,16.5z     M65.4,46.1c-0.7,0.6-1,0.8-1.6,1.4c0.1,0.8,0.2,1.2,0.3,1.9c0,0.1,0,0.2-0.1,0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0    c-0.6-0.4-0.9-0.6-1.6-0.9c-0.7,0.5-1.1,0.7-1.8,1.2c-0.1,0.1-0.2,0.1-0.2,0c-0.1,0-0.1-0.1-0.1-0.2c0.3-0.8,0.4-1.2,0.7-2    c-0.5-0.5-0.8-0.7-1.4-1.2c-0.1-0.1-0.1-0.1,0-0.2c0-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0,0c0.8-0.1,1.2-0.2,2-0.3    c0.4-0.8,0.6-1.2,1-1.9c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1c0.2,0.7,0.3,1.1,0.6,1.8c0.8,0,1.2,0,2,0    c0.1,0,0.1,0.1,0.2,0.1C65.5,46,65.4,46.1,65.4,46.1z M70.9,41.7c-0.8,0-1.2,0-2-0.1c-0.5,0.7-0.7,1.1-1.1,1.8    c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.8-0.2-1.1-0.4-1.9c-0.8-0.1-1.1-0.2-1.9-0.3    c-0.1,0-0.1-0.1-0.1-0.2s0-0.2,0.1-0.2c0.7-0.5,1-0.7,1.7-1.2c0-0.8,0-1.2,0-2c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0    c0.6,0.5,0.9,0.7,1.4,1.2c0.8-0.4,1.1-0.5,1.9-0.9c0.1,0,0.2,0,0.2,0c0.1,0.1,0.1,0.1,0,0.2c-0.3,0.7-0.5,1.1-0.8,1.9    c0.5,0.6,0.7,0.9,1.2,1.5c0.1,0.1,0.1,0.2,0,0.2C71.1,41.6,71,41.7,70.9,41.7z M73.7,31.7c-0.7,0.3-1.1,0.5-1.8,0.9    c-0.1,0.8-0.1,1.2-0.2,2c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2-0.1c-0.5-0.6-0.8-0.8-1.3-1.4    c-0.8,0.3-1.2,0.4-1.9,0.7c-0.1,0-0.2,0-0.2-0.1c0-0.1-0.1-0.2,0-0.2c0.4-0.7,0.6-1.1,1-1.8c-0.4-0.6-0.6-0.9-1-1.6    c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.1c0.8,0.1,1.2,0.1,1.9,0.2c0.5-0.7,0.8-1,1.3-1.6c0.1-0.1,0.1-0.1,0.2-0.1    c0.1,0,0.1,0.1,0.1,0.2c0.1,0.8,0.1,1.2,0.2,2c0.7,0.3,1.1,0.4,1.8,0.7c0.1,0,0.1,0.1,0.1,0.2C73.8,31.6,73.8,31.7,73.7,31.7z"], ["fill", "var(--color3)", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "icon"], ["d", "M93.549,81.336h-6.863V74.08c0-0.803-0.649-1.451-1.451-1.451h-1.522v-24.25h1.521c0.803,0,1.453-0.649,1.453-1.451v-7.261  h6.862c0.802,0,1.451-0.65,1.451-1.452v-8.378c0-0.535-0.294-1.026-0.765-1.278L50.688,5.173c-0.43-0.23-0.944-0.23-1.375,0  L5.765,28.559C5.294,28.811,5,29.302,5,29.837v8.378c0,0.802,0.65,1.452,1.451,1.452h6.861v7.261c0,0.802,0.65,1.451,1.452,1.451  h1.523v24.25h-1.523c-0.802,0-1.452,0.648-1.452,1.451v7.256H6.451C5.65,81.336,5,81.986,5,82.788v10.761C5,94.35,5.65,95,6.451,95  h87.098C94.35,95,95,94.35,95,93.549V82.788C95,81.986,94.35,81.336,93.549,81.336z M83.782,45.476H82.26  c-0.802,0-1.451,0.65-1.451,1.452V74.08c0,0.802,0.649,1.452,1.451,1.452h1.522v5.804H70.788v-5.804h1.522  c0.801,0,1.451-0.65,1.451-1.452V46.928c0-0.802-0.65-1.452-1.451-1.452h-1.522v-5.809h12.994V45.476z M57.948,72.629h-1.521v-24.25  h1.521c0.801,0,1.45-0.649,1.45-1.451v-7.094h8.488v7.094c0,0.802,0.648,1.451,1.45,1.451h1.522v24.25h-1.522  c-0.802,0-1.45,0.648-1.45,1.451v7.256h-8.488V74.08C59.398,73.277,58.749,72.629,57.948,72.629z M30.664,72.464h-1.522V48.212  h1.522c0.801,0,1.45-0.65,1.45-1.451v-7.094h8.484v7.094c0,0.801,0.65,1.451,1.451,1.451h1.522v24.252H42.05  c-0.801,0-1.451,0.65-1.451,1.452v7.256h-8.484v-7.256C32.115,73.114,31.466,72.464,30.664,72.464z M43.502,75.367h1.522  c0.801,0,1.451-0.65,1.451-1.451V46.761c0-0.802-0.65-1.452-1.451-1.452h-1.522v-5.642h12.993v5.809h-1.521  c-0.801,0-1.451,0.65-1.451,1.452V74.08c0,0.802,0.65,1.452,1.451,1.452h1.521v5.804H43.502V75.367z M7.903,36.764v-6.058L50,8.099  l42.098,22.607v6.058h-6.863H42.05H30.663H14.765H7.903z M16.216,75.532h1.523c0.802,0,1.452-0.65,1.452-1.452V46.928  c0-0.802-0.65-1.452-1.452-1.452h-1.523v-5.809h12.996v5.642H27.69c-0.802,0-1.452,0.65-1.452,1.452v27.155  c0,0.801,0.65,1.451,1.452,1.451h1.522v5.969H16.216V75.532z M7.903,92.098V84.24h6.861h43.183h11.39h15.896h6.863v7.857H7.903z"], ["d", "M50,31.413c4.332,0,7.857-3.523,7.857-7.855S54.332,15.702,50,15.702s-7.857,3.523-7.857,7.855S45.668,31.413,50,31.413z   M50,18.605c2.73,0,4.954,2.222,4.954,4.952S52.73,28.511,50,28.511c-2.731,0-4.954-2.223-4.954-4.953S47.269,18.605,50,18.605z"], ["fill", "var(--color3)", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", 0, "xml", "space", "preserve", 1, "icon", 2, "enable-background", "new 0 0 100 100"], ["d", "M22.311,41.903c-1.817-0.946-4.063-0.237-5.008,1.576L8.39,60.58c-0.459,0.879-0.547,1.885-0.25,2.83  c0.298,0.946,0.947,1.719,1.826,2.178l9.145,4.766c0.316,2.03,1.218,3.942,2.594,5.461c0.319,0.347,0.662,0.671,1.005,0.994  l-1.02,0.532c-1.269,0.656-2.203,1.769-2.631,3.132c-0.427,1.362-0.296,2.805,0.364,4.057c0.659,1.266,1.77,2.198,3.139,2.628  c0.52,0.159,1.052,0.238,1.582,0.238c0.66,0,1.316-0.126,1.941-0.369c0.007,0.812,0.176,1.632,0.574,2.401  c0.661,1.258,1.773,2.188,3.132,2.618c0.537,0.17,1.086,0.255,1.629,0.255c0.845,0,1.677-0.204,2.435-0.605l3.739-1.949  c0.024,0.805,0.209,1.607,0.594,2.354c0.651,1.249,1.739,2.181,3.062,2.625C41.799,94.909,42.359,95,42.915,95  c0.806,0,1.601-0.193,2.329-0.574l4.755-2.475l4.748,2.475C55.494,94.815,56.295,95,57.09,95c1.907,0,3.772-1.063,4.736-2.909  c0.38-0.739,0.562-1.538,0.583-2.343l3.723,1.945c0.766,0.402,1.602,0.605,2.451,0.605c0.546,0,1.097-0.084,1.638-0.254  c1.356-0.434,2.493-1.396,3.111-2.62c0.401-0.767,0.572-1.586,0.581-2.397c0.621,0.243,1.275,0.37,1.937,0.37  c0.535,0,1.074-0.081,1.604-0.244c1.343-0.426,2.451-1.351,3.126-2.616c0.66-1.259,0.788-2.702,0.36-4.062  c-0.171-0.545-0.443-1.035-0.764-1.487c0.881-0.499,1.611-1.233,2.102-2.153c0.66-1.257,0.789-2.699,0.362-4.059  c-0.308-0.982-0.886-1.827-1.654-2.475l9.047-4.714c0.879-0.459,1.527-1.232,1.826-2.178c0.297-0.946,0.209-1.951-0.25-2.83  l-8.913-17.102c-0.945-1.813-3.188-2.521-5.008-1.576l-7.535,3.927c-4.631-4.352-15.616-2.418-19.061-1.672  c-0.01,0.002-0.02,0.007-0.03,0.01c-0.012,0.003-0.025,0.003-0.037,0.006l-1.018,0.27l-1.034-0.27  c-0.019-0.005-0.038-0.005-0.057-0.009c-0.002,0-0.003-0.001-0.005-0.002c-3.454-0.749-14.467-2.692-19.079,1.66L22.311,41.903z   M59.187,90.724c-0.605,1.155-1.978,1.632-3.065,1.066l-2.904-1.514l5.107-2.658c0.625,0.338,0.901,0.865,1.023,1.258  C59.54,89.49,59.481,90.15,59.187,90.724z M70.688,88.067c-0.271,0.536-0.771,0.953-1.365,1.143  c-0.613,0.195-1.256,0.139-1.811-0.15l-5.972-3.12c1.171-0.605,2.807-1.458,5.106-2.656l0.156,0.081l2.893,1.508  C70.847,85.474,71.298,86.899,70.688,88.067z M77.952,83.147c-0.302,0.566-0.799,0.983-1.385,1.169  c-0.606,0.185-1.248,0.13-1.806-0.161l-4.897-2.549l2.52-1.314c0.837-0.443,1.594-0.92,2.306-1.41l0.37,0.191  c0.21,0.115,0.451,0.201,0.692,0.286l1.19,0.621c0.558,0.29,0.971,0.783,1.161,1.387C78.293,81.968,78.237,82.604,77.952,83.147z   M79.651,75.444c-0.295,0.553-0.806,0.978-1.392,1.162c-0.269,0.083-0.546,0.102-0.825,0.088c0.293-0.281,0.583-0.571,0.871-0.882  c0.588-0.646,1.089-1.373,1.495-2.152c0.001,0.003,0.002,0.005,0.003,0.007C79.992,74.267,79.936,74.901,79.651,75.444z   M68.624,48.58c0.059,0.078,0.105,0.163,0.159,0.268l1.618,3.135c0.264,0.512,0.784,0.805,1.322,0.805  c0.229,0,0.463-0.053,0.68-0.166c0.73-0.377,1.016-1.273,0.64-2.003l-1.197-2.319l7.216-3.761c0.358-0.186,0.809-0.048,0.997,0.314  l8.913,17.102c0.123,0.236,0.084,0.454,0.049,0.563c-0.034,0.109-0.127,0.311-0.363,0.434l-7.794,4.062  c-0.18-1.143-0.518-2.252-1.052-3.275l-4.434-8.592c-0.377-0.73-1.275-1.015-2.003-0.64c-0.73,0.377-1.016,1.274-0.64,2.003  l4.437,8.598c0.662,1.271,0.957,2.718,0.852,4.181c-0.031,0.426-0.099,0.836-0.214,1.277c-0.297,1.224-0.888,2.347-1.697,3.238  c-0.753,0.813-1.521,1.5-2.346,2.099c-0.008,0.006-0.016,0.013-0.024,0.018c-0.023,0.015-0.046,0.033-0.07,0.05  c-0.774,0.592-1.677,1.163-2.673,1.69l-5.042,2.628c0,0-0.015,0.008-0.018,0.009c-0.002,0.001-0.004,0.002-0.007,0.003  c-0.261,0.136-7.891,4.114-8.269,4.306c-0.01,0.005-0.02,0.011-0.03,0.015L43.868,91.79c-0.508,0.266-1.103,0.307-1.671,0.115  c-0.591-0.198-1.079-0.618-1.371-1.174c-0.303-0.589-0.365-1.249-0.176-1.849c0.125-0.39,0.407-0.922,1.018-1.261l8.913-4.647  c0.036-0.015,0.072-0.031,0.106-0.049l3.02-1.575c0.017-0.009,0.031-0.022,0.048-0.032l1.466-0.763  c0.727-0.381,1.007-1.281,0.625-2.008c-0.383-0.728-1.282-1.009-2.008-0.625l-4.523,2.354c-0.011,0.006-0.021,0.012-0.032,0.017  c-0.382,0.203-8.293,4.318-8.301,4.323l-0.675,0.356c-0.012,0.006-0.021,0.015-0.033,0.022l-7.804,4.069  c-0.543,0.286-1.176,0.339-1.782,0.148c-0.608-0.193-1.104-0.607-1.394-1.159c-0.595-1.152-0.143-2.579,1.008-3.18l19.876-10.362  l1.426-0.737c0.73-0.378,1.015-1.274,0.639-2.004c-0.378-0.73-1.277-1.014-2.004-0.639l-1.383,0.721  c-0.016,0.007-0.032,0.011-0.048,0.019l-23.565,12.28c-0.563,0.289-1.206,0.348-1.801,0.165c-0.6-0.188-1.09-0.599-1.386-1.167  c-0.291-0.553-0.348-1.188-0.161-1.787c0.189-0.601,0.601-1.092,1.165-1.383l7.03-3.667l6.935-3.617  c0.003-0.002,0.006-0.004,0.009-0.006l5.481-2.859c0.006-0.003,0.013-0.004,0.019-0.007l6.379-3.321l-0.004-0.007l0.005-0.003  c0.729-0.38,1.011-1.278,0.631-2.006c-0.379-0.73-1.282-1.008-2.006-0.631l-20.455,10.67c-1.236,0.619-2.621,0.091-3.188-0.996  c-0.602-1.159-0.155-2.587,1.005-3.19l15.306-8.071c0.077-0.041,0.147-0.09,0.214-0.142c0.065-0.023,0.132-0.041,0.194-0.074  l10.891-5.741l5.279,0.736c0.248,0.034,0.501,0.05,0.757,0.05c2.571,0,5.384-1.697,5.769-4.49l0.113-0.693  c0.017-0.109,0.039-0.225,0.061-0.344c0.15-0.803,0.378-2.017-0.369-3.055c-0.472-0.656-1.218-1.068-2.216-1.223l-4.03-1.054  C62.686,45.648,67.155,46.464,68.624,48.58z M31.398,48.531c1.844-2.666,8.627-3.254,16.883-1.463  c0.005,0.001,0.01,0.001,0.015,0.002l1.221,0.319c0.006,0.002,0.013,0.003,0.019,0.005l10.695,2.796  c0.056,0.015,0.114,0.026,0.171,0.034c0.124,0.017,0.211,0.039,0.269,0.056c-0.004,0.196-0.066,0.529-0.106,0.744  c-0.028,0.151-0.055,0.297-0.075,0.424l-0.117,0.716c-0.159,1.155-1.769,2.126-3.178,1.938l-5.717-0.797l-3.328-0.541  c-0.816-0.14-1.575,0.418-1.706,1.228c-0.086,0.53,0.122,1.037,0.501,1.363l-7.714,4.066c-0.07,0.037-0.132,0.083-0.194,0.129  c-0.073,0.025-0.146,0.05-0.217,0.087l-15.296,8.067c-0.608,0.316-1.121,0.742-1.546,1.23c-0.021-0.671,0.026-1.342,0.177-1.998  c0.184-0.801-0.316-1.598-1.116-1.782c-0.801-0.185-1.598,0.316-1.782,1.116c-0.056,0.243-0.101,0.488-0.14,0.733l-7.778-4.053  c-0.236-0.123-0.329-0.324-0.363-0.434c-0.035-0.109-0.074-0.327,0.049-0.563l8.913-17.102c0.189-0.362,0.637-0.499,0.997-0.314  l7.21,3.758l-7.037,13.649c-0.377,0.73-0.09,1.626,0.64,2.003c0.218,0.112,0.451,0.166,0.68,0.166c0.538,0,1.059-0.293,1.322-0.805  l7.437-14.424C31.252,48.768,31.314,48.651,31.398,48.531z"], ["d", "M57.505,30.27c0.439-0.703,0.227-1.628-0.476-2.067c-0.703-0.44-1.628-0.227-2.067,0.476  c-1.163,1.858-2.793,2.924-4.472,2.924c-1.685,0-3.314-1.065-4.472-2.925c-0.451-0.719-0.795-1.538-1.063-2.403h2.988  c0.829,0,1.5-0.671,1.5-1.5s-0.671-1.5-1.5-1.5h-3.508c-0.011-0.219-0.042-0.434-0.042-0.656c0-0.064-0.001-0.129,0.006-0.262  c0.006-0.288,0.022-0.573,0.046-0.856h3.638c0.829,0,1.5-0.671,1.5-1.5s-0.671-1.5-1.5-1.5H45.09  c0.319-0.895,0.737-1.721,1.258-2.437c1.142-1.566,2.613-2.429,4.143-2.429c1.529,0,3,0.862,4.142,2.429  c0.487,0.669,1.426,0.816,2.096,0.328s0.816-1.426,0.328-2.096c-1.721-2.361-4.053-3.661-6.566-3.661  c-2.514,0-4.846,1.3-6.567,3.662c-0.886,1.216-1.548,2.656-1.975,4.204H40.65c-0.829,0-1.5,0.671-1.5,1.5s0.671,1.5,1.5,1.5h0.792  c-0.016,0.243-0.035,0.485-0.04,0.729c-0.009,0.13-0.01,0.259-0.01,0.389c0,0.22,0.013,0.437,0.022,0.656h-0.838  c-0.829,0-1.5,0.671-1.5,1.5s0.671,1.5,1.5,1.5h1.256c0.35,1.45,0.9,2.811,1.641,3.993c1.716,2.755,4.273,4.335,7.017,4.335  C53.225,34.603,55.782,33.023,57.505,30.27z"], ["d", "M67.619,22.619C67.619,12.904,59.715,5,50,5s-17.619,7.904-17.619,17.619c0,9.715,7.904,17.619,17.619,17.619  S67.619,32.334,67.619,22.619z M35.381,22.619C35.381,14.558,41.939,8,50,8s14.619,6.558,14.619,14.619  c0,8.061-6.558,14.619-14.619,14.619S35.381,30.68,35.381,22.619z"], ["fill", "var(--color3)", 0, "xmlns", "dc", "http://purl.org/dc/elements/1.1/", 0, "xmlns", "cc", "http://creativecommons.org/ns#", 0, "xmlns", "rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#", 0, "xmlns", "svg", "http://www.w3.org/2000/svg", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd", 0, "xmlns", "inkscape", "http://www.inkscape.org/namespaces/inkscape", "viewBox", "0 0 25.399999 31.749998750000003", "version", "1.1", "x", "0px", "y", "0px", 1, "icon"], ["d", "M 64.001953 6.0019531 A 2.0004923 2.0004923 0 1 0 64.001953 10.001953 L 67.167969 10.001953 L 47.996094 29.173828 L 45.414062 26.582031 C 44.633103 25.801868 43.366897 25.801868 42.585938 26.582031 L 30.583984 38.585938 C 28.698691 40.4757 31.532675 43.301873 33.417969 41.412109 L 43.996094 30.826172 L 46.587891 33.417969 C 47.368851 34.198132 48.633103 34.198132 49.414062 33.417969 L 70.001953 12.824219 L 70.001953 15.996094 A 2.0009765 2.0009765 0 0 0 74.003906 15.996094 L 74.003906 8.0019531 A 2.0002 2.0002 0 0 0 72.003906 6.0019531 L 64.001953 6.0019531 z M 38.011719 6.0136719 C 20.360941 6.0037695 6.0097652 20.364246 6.0097656 38.013672 C 6.0097652 55.663091 20.359834 70.017387 38.009766 70.013672 C 44.970194 70.012205 51.561896 67.736515 56.945312 63.777344 L 59.183594 66.013672 L 58.361328 66.835938 A 2.0002 2.0002 0 0 0 58.361328 69.662109 L 76.34375 87.652344 C 79.453005 90.761595 84.550905 90.761595 87.660156 87.652344 C 90.769411 84.543089 90.769415 79.453001 87.660156 76.34375 L 69.669922 58.353516 A 2.0002 2.0002 0 0 0 68.230469 57.771484 A 2.0002 2.0002 0 0 0 66.84375 58.353516 L 66.011719 59.185547 L 63.78125 56.958984 C 65.171172 55.067713 66.366995 53.008526 67.330078 50.798828 A 2.0004079 2.0004079 0 1 0 63.662109 49.201172 C 59.211659 59.412288 49.14769 66.011325 38.009766 66.013672 C 22.522611 66.01693 10.009765 53.501334 10.009766 38.013672 C 10.009765 22.526007 22.52151 10.00497 38.007812 10.013672 C 44.051878 10.017068 49.933191 11.995065 54.769531 15.628906 A 2.0003907 2.0003907 0 1 0 57.171875 12.429688 C 51.64774 8.2790623 44.926716 6.0175572 38.011719 6.0136719 z M 38.009766 14.013672 C 24.778184 14.011276 14.009766 24.782526 14.009766 38.013672 C 14.009766 51.244816 24.777697 62.018744 38.009766 62.013672 C 46.125311 62.010561 53.692795 57.893356 58.113281 51.089844 A 2.0006389 2.0006389 0 1 0 54.757812 48.910156 C 51.071148 54.584252 44.774293 58.011079 38.009766 58.013672 C 26.941308 58.017829 18.009766 49.083054 18.009766 38.013672 C 18.009766 26.944286 26.940819 18.011668 38.009766 18.013672 C 41.973239 18.014403 45.846027 19.196527 49.138672 21.40625 A 2.0002 2.0002 0 1 0 51.369141 18.085938 C 47.419341 15.435196 42.768508 14.01455 38.009766 14.013672 z M 71.972656 19.974609 A 2.0002 2.0002 0 0 0 70.001953 21.998047 L 70.001953 44.003906 A 2.0004927 2.0004927 0 1 0 74.003906 44.003906 L 74.003906 21.998047 A 2.0002 2.0002 0 0 0 71.972656 19.974609 z M 63.970703 23.96875 A 2.0002 2.0002 0 0 0 62 25.998047 L 62 44.003906 A 2.0004927 2.0004927 0 0 0 66.001953 44.003906 L 66.001953 25.998047 A 2.0002 2.0002 0 0 0 63.970703 23.96875 z M 55.96875 29.970703 A 2.0002 2.0002 0 0 0 53.998047 32 L 53.998047 44.003906 A 2.0004927 2.0004927 0 0 0 58 44.003906 L 58 32 A 2.0002 2.0002 0 0 0 55.96875 29.970703 z M 47.966797 35.972656 A 2.0002 2.0002 0 0 0 45.996094 38.001953 L 45.996094 44.003906 A 2.0004927 2.0004927 0 1 0 49.998047 44.003906 L 49.998047 38.001953 A 2.0002 2.0002 0 0 0 47.966797 35.972656 z M 39.972656 39.972656 A 2.0002 2.0002 0 0 0 38.001953 42.003906 L 38.001953 44.003906 A 2.0004908 2.0004908 0 0 0 42.003906 44.003906 L 42.003906 42.003906 A 2.0002 2.0002 0 0 0 39.972656 39.972656 z M 28 42 A 2 2.0000009 0 0 0 26 44 A 2 2.0000009 0 0 0 28 46 A 2 2.0000009 0 0 0 30 44 A 2 2.0000009 0 0 0 28 42 z M 61.197266 60.029297 L 63.183594 62.013672 L 62.011719 63.185547 L 60.023438 61.197266 C 60.423506 60.817352 60.816501 60.430347 61.197266 60.029297 z M 68.253906 62.597656 L 70.425781 64.769531 L 64.771484 70.427734 L 62.597656 68.253906 L 68.253906 62.597656 z M 73.253906 67.597656 L 84.826172 79.169922 C 86.417765 80.761511 86.417769 83.234579 84.826172 84.826172 C 83.234579 86.417765 80.763468 86.417765 79.171875 84.826172 L 67.599609 73.253906 L 73.253906 67.597656 z ", "transform", "scale(0.26458332)"], [1, "col"], [1, "cursor", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "circle", "me-3", 3, "ngClass"], [1, "title", 3, "ngClass"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Realidade econ\u00F3mica no munic\u00EDpio e na Regi\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegionComponent_div_6_Template, 6, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegionComponent_li_14_Template, 2, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "foreignObject", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tomada de decis\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Prospe\u00E7\u00E3o de Mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "foreignObject", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Fundos Europeus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Obten\u00E7\u00E3o de financiamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Capta\u00E7\u00E3o de investimento privado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Tend\u00EAncias econ\u00F3micas da regi\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.infoRegion[ctx.currentId - 1].smallText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoRegion[ctx.currentId - 1].description);
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding-top: 60px;\n    color: var(--color1);\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: 50px;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding-top: 40px;\n    color: var(--color1);\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.circle[_ngcontent-%COMP%] {\n    min-width: 50px;\n    min-height: 50px;\n    background-color: rgb(170, 170, 170);\n    color: white;\n    border-radius: 25px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 600;\n    transition: 0.2s ease;\n}\n\n.title[_ngcontent-%COMP%] {\n    color: rgb(170, 170, 170);\n    transition: 0.2s ease;\n    width: 60%;\n    font-size: 14px;\n}\n\n.active-title[_ngcontent-%COMP%] {\n    transition: 0.2s ease;\n    color: black;\n    font-size: 14px;\n    \n}\n\n.active-circle[_ngcontent-%COMP%] {\n    transition: 0.2s ease;\n    background-color: var(--color3);\n}\n\n.current-info[_ngcontent-%COMP%] {\n    background: white;\n    height: 350px;\n    box-shadow: 0 5px 10px 0 rgb(50 50 50 / 50%);\n    position: relative;\n}\n\n.top-divider[_ngcontent-%COMP%] {\n    height: 5px;\n    width: 100%;\n    position: absolute;\n    background: var(--color1);\n    top: 0;\n    left: 0;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  background: var(--color1);\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.title-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 1.5;\n  padding: 10px 40px;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  line-height: 2.5;\n  color: black;\n  font-size: 16px;\n}\n\nli[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 10px;\n  font-size: 16px;\n  color: var(--color1);\n  font-weight: 900;\n}\n\n.region[_ngcontent-%COMP%] {\n  background: #FFF;\n  transform: translateY(-8px);box-shadow: 0 5px 10px 0 rgba(50,50,50,.5);\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n\n.current-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .small-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.icon-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  margin-top: 5px;\n  color: var(--color1);\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQixDQUFDLDBDQUEwQztBQUN4RTs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNpcmNsZSB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hY3RpdmUtdGl0bGUge1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuXG4uYWN0aXZlLWNpcmNsZSB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XG59XG5cbi5jdXJyZW50LWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYig1MCA1MCA1MCAvIDUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wLWRpdmlkZXIge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4udGl0bGUtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS1pbmZvIGg1IHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbnVsIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5saSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5saTo6YmVmb3JlIHtcbiAgY29udGVudDogJ+KGkic7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnJlZ2lvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSg1MCw1MCw1MCwuNSk7XG59XG5cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmN1cnJlbnQtaW5mbyBsaSwgLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5pY29uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-region',
                templateUrl: './region.component.html',
                styleUrls: ['./region.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/scroll-top/scroll-top.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-top/scroll-top.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ScrollTopComponent {
    constructor(scroller) {
        this.scroller = scroller;
    }
    ngOnInit() {
    }
    goTop() {
        this.scroller.scrollToPosition([0, 0]);
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], decls: 3, vars: 0, consts: [[1, "cursor", "d-none", "d-md-block", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "var(--color1)", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up-circle-fill", "scroll-btn"], ["d", "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_div_click_0_listener() { return ctx.goTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".scroll-btn[_ngcontent-%COMP%] {\n    background: white;\n    border: 3px solid white;\n    border-radius: 25px;\n    transition: 0.2s ease-in-out;\n}\n\n.scroll-btn[_ngcontent-%COMP%]:hover {\n    fill: var(--color3) !important;\n    transition: 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Njcm9sbC10b3Avc2Nyb2xsLXRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1idG4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNjcm9sbC1idG46aG92ZXIge1xuICAgIGZpbGw6IHZhcigtLWNvbG9yMykgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(); };
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 59, vars: 0, consts: [["sectionName", "subscri\u00E7\u00E3o"], [1, "section-even", "bg-color2", "d-flex", "align-items-center"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "position-relative"], [1, "row", "w-100", "my-5", "my-md-0"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center"], [1, "imagem-formulario"], ["src", "../../../assets/img/imagem-sub.png", "alt", "subs", 1, "img-fluid", "img-border"], [1, "col-12", "col-md-6", "d-flex", "flex-column", "justify-content-center", "mt-4", "mt-md-0"], [1, "text-center", "text-md-start"], [1, "d-flex", "align-items-center"], ["type", "button", "routerLink", "/subscription-form", 1, "card-button", "text-center"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white"], [1, "modal-body"], [1, "form-label"], ["type", "email", 1, "form-control"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-form"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Servi\u00E7o de subscri\u00E7\u00E3o que inclui:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Disponibiliza\u00E7\u00E3o bimestral de um Boletim, com divulga\u00E7\u00E3o de informa\u00E7\u00E3o econ\u00F3mica regional;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Presta\u00E7\u00E3o de esclarecimentos customizados por parte dos nossos especialistas acerca das tem\u00E1ticas abordadas nos Boletins;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Possibilidade de acesso a uma rede de network.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " subscrever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Formul\u00E1rio de Subscri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirmar email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Periodicidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Limpar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"]], styles: ["h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: var(--color1);\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\nul[_ngcontent-%COMP%] {\n    text-align: justify;\n    line-height: 1.5;\n    padding: 10px 40px;\n    list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n    line-height: 2.5;\n    color: black;\n    font-size: 16px;\n}\n\nli[_ngcontent-%COMP%]::before {\n    content: '\u2192';\n    margin-right: 10px;\n    font-size: 16px;\n    color: var(--color1);\n    font-weight: 900;\n}\n\n.card-button[_ngcontent-%COMP%] {\n    background: var(--color1);\n    color: white;\n    outline: 0;\n    width: 100%;\n    padding: 10px;\n    border: 0;\n    transition: 0.2s ease-in;\n    font-size: 15px;\n    text-transform: uppercase;\n}\n\n.card-button[_ngcontent-%COMP%]:hover {\n    background: var(--color3);\n    transition: 0.2s ease-out;\n}\n\n.btn-form[_ngcontent-%COMP%] {\n    background: var(--color1);\n    color: white;\n    font-size: 14px;\n}\n\n.btn-form[_ngcontent-%COMP%]:hover {\n    background: var(--color3);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    background: var(--color1);\n    color: white;\n    font-weight: 400;\n}\n\n.imagem-formulario[_ngcontent-%COMP%] {\n    width: 75%;\n    height: 75%;\n    margin: 60px 0px;\n}\n\n.img-border[_ngcontent-%COMP%] {\n    border: 2px solid var(--color1)\n}\n\n.bg-color2[_ngcontent-%COMP%] {\n    background: #9dcfe363;\n}\n\n\n\n@media (max-width: 576px) {\n    ul[_ngcontent-%COMP%] {\n        padding: 10px 0px;\n        list-style: none;\n    }\n\n    li[_ngcontent-%COMP%] {\n        margin-bottom: 30px;\n        line-height: 1.8;\n        font-weight: 500;\n    }\n\n    h3[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    .imagem-formulario[_ngcontent-%COMP%] {\n        width: 90%;\n        height: 90%;\n        margin: 30px 0px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxlQUFlOztBQUNmO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnVsIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIHtcbiAgICBsaW5lLWhlaWdodDogMi41O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmxpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfihpInO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjMpO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5idG4tZm9ybSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuLWZvcm06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMyk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbWFnZW0tZm9ybXVsYXJpbyB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBtYXJnaW46IDYwcHggMHB4O1xufVxuXG4uaW1nLWJvcmRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IxKVxufVxuXG4uYmctY29sb3IyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWRjZmUzNjM7XG59XG5cbi8qIHNtYXJ0cGhvbmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5pbWFnZW0tZm9ybXVsYXJpbyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"] });
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
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 189, vars: 0, consts: [["sectionName", "a equipa"], [1, "section-odd", "d-flex", "flex-column", "justify-content-center", "align-items-center", "py-5"], [1, "container", "py-5"], [1, "row"], [1, "col-12", "col-md", "mb-4", "mb-md-0", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "employee"], ["src", "../../../assets/img/carvalho.webp", "alt", "carvalho", 1, "img-fluid"], [1, "name"], [1, "curriculum", "text-center"], [1, "m-0"], ["href", "https://www.linkedin.com/in/pedro93carvalho/", "target", "_blank"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "linkedin", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-linkedin", "fa-w-14"], ["fill", "0000", "d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"], ["src", "../../../assets/img/rafael.webp", "alt", "rafael", 1, "img-fluid"], ["href", "https://www.linkedin.com/in/carlosrafaelvm/", "target", "_blank"], ["src", "../../../assets/img/tiago.webp", "alt", "tiago", 1, "img-fluid"], ["href", "https://www.linkedin.com/in/tiago-marques-9b7244ba/", "target", "_blank"], ["src", "../../../assets/img/john.webp", "alt", "png", 1, "img-fluid"], ["href", "https://www.linkedin.com/in/john-loureiro-96b230149/", "target", "_blank"], [1, "container", "experiencia"], [1, "text-center"], [1, "row", "justify-content-between"], [1, "col", "p-0", "d-flex", "flex-column", "justify-content-start", "align-items-center", "m-3", "m-md-0"], [1, "title-info"], [1, "text-uppercase", "m-0"], ["viewBox", "-36 0 512 512.0008", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m247.96875 0c-105.804688 0-191.878906 86.074219-191.878906 191.878906v6.121094l-55.214844 102.539062c-2.0625 3.832032-.335938 8.757813 3.65625 10.46875l51.558594 22.09375v107.269532c0 4.152344 3.363281 7.515625 7.515625 7.515625h105.8125l15.164062 58.496093c1.058594 4.082032 5.40625 6.511719 9.4375 5.3125 3.820313-1.136718 6.109375-5.234374 5.113281-9.082031l-16.625-64.128906c-.859374-3.3125-3.851562-5.628906-7.277343-5.628906h-104.113281v-104.707031c0-3.003907-1.789063-5.722657-4.554688-6.90625l-48.558594-20.8125 52.214844-96.972657c.589844-1.09375.898438-2.320312.898438-3.5625v-8.015625c0-97.515625 79.335937-176.851562 176.851562-176.851562 97.511719 0 176.847656 79.335937 176.847656 176.851562 0 55.839844-25.566406 107.242188-70.140625 141.019532-2.492187 1.890624-3.554687 5.125-2.667969 8.125l13.816407 46.625c1.179687 3.980468 5.359375 6.25 9.339843 5.074218 3.980469-1.179687 6.25-5.363281 5.074219-9.34375l-12.363281-41.714844c21.277344-17.066406 38.933594-38.75 51.253906-62.988281 13.746094-27.046875 20.71875-56.25 20.71875-86.796875 0-105.804687-86.078125-191.878906-191.878906-191.878906zm0 0"], ["d", "m389.851562 415.828125c-1.179687-3.976563-5.359374-6.242187-9.339843-5.070313-3.980469 1.179688-6.25 5.363282-5.070313 9.339844l25.636719 86.535156c1.214844 4.085938 5.726563 6.363282 9.742187 4.9375 3.710938-1.316406 5.785157-5.441406 4.671876-9.207031zm0 0"], ["d", "m327.625 191.878906c0-43.921875-35.734375-79.65625-79.65625-79.65625-43.925781 0-79.65625 35.734375-79.65625 79.65625 0 28.863282 15.234375 54.9375 40.078125 69.128906v3.515626h-.5c-4.152344 0-7.515625 3.363281-7.515625 7.515624v16.53125h-.503906c-4.148438 0-7.511719 3.363282-7.511719 7.515626 0 4.152343 3.363281 7.515624 7.511719 7.515624h.503906v8.015626h-.503906c-4.148438 0-7.511719 3.363281-7.511719 7.511718 0 4.152344 3.363281 7.515625 7.511719 7.515625h1.046875c3.117187 18.734375 19.429687 33.066407 39.035156 33.066407h16.03125c19.605469 0 35.917969-14.332032 39.03125-33.066407h1.046875c4.152344 0 7.515625-3.363281 7.515625-7.515625 0-4.148437-3.363281-7.511718-7.515625-7.511718h-.5v-8.015626h.5c4.152344 0 7.515625-3.363281 7.515625-7.515624 0-4.152344-3.363281-7.515626-7.515625-7.515626h-.5v-16.53125c0-4.152343-3.363281-7.515624-7.515625-7.515624h-.5v-3.515626c24.839844-14.191406 40.078125-40.265624 40.078125-69.128906zm-71.640625 152.800782h-16.03125c-11.28125 0-20.804687-7.648438-23.664063-18.035157h63.359376c-2.859376 10.386719-12.382813 18.035157-23.664063 18.035157zm24.546875-33.0625h-65.128906v-8.015626h65.128906zm-65.128906-23.046876v-9.019531h65.128906v9.019531zm40.082031-24.046874v-49.097657h16.53125c4.152344 0 7.515625-3.363281 7.515625-7.515625v-24.046875c0-4.152343-3.363281-7.515625-7.515625-7.515625s-7.515625 3.363282-7.515625 7.515625v16.53125h-33.066406v-16.53125c0-4.152343-3.363282-7.515625-7.511719-7.515625-4.152344 0-7.515625 3.363282-7.515625 7.515625v24.046875c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.53125v49.097657h-17.035156v-8.019532c0-2.851562-1.613281-5.457031-4.167969-6.726562-22.148438-11.011719-35.910156-33.195313-35.910156-57.898438 0-35.636718 28.992187-64.628906 64.628906-64.628906s64.628906 28.992188 64.628906 64.628906c0 24.703125-13.761718 46.886719-35.910156 57.898438-2.554688 1.269531-4.171875 3.875-4.171875 6.726562v8.019532zm0 0"], ["d", "m255.484375 95.6875v-16.03125c0-4.148438-3.363281-7.511719-7.515625-7.511719s-7.515625 3.363281-7.515625 7.511719v16.03125c0 4.152344 3.363281 7.515625 7.515625 7.515625s7.515625-3.363281 7.515625-7.515625zm0 0"], ["d", "m199.878906 116.089844c5.699219 0 9.335938-6.367188 6.503906-11.273438l-8.019531-13.882812c-2.074219-3.59375-6.671875-4.824219-10.261719-2.75-3.597656 2.074218-4.828124 6.671875-2.753906 10.265625 2.652344 4.59375 5.246094 9.230469 7.960938 13.785156 1.394531 2.339844 3.808594 3.855469 6.570312 3.855469zm0 0"], ["d", "m160.90625 150.292969c3.835938 2.210937 8.871094.546875 10.644531-3.5 1.519531-3.460938.140625-7.628907-3.128906-9.519531l-13.882813-8.015626c-3.597656-2.074218-8.191406-.84375-10.265624 2.753907-2.074219 3.59375-.84375 8.1875 2.75 10.261719zm0 0"], ["d", "m128.230469 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.152344 0 7.515625-3.363281 7.515625-7.515625s-3.363281-7.515625-7.515625-7.515625h-16.03125c-4.148438 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m150.789062 255.507812c1.273438 0 2.566407-.328124 3.75-1.011718l13.882813-8.015625c3.59375-2.074219 4.824219-6.667969 2.75-10.261719-2.074219-3.597656-6.671875-4.828125-10.265625-2.753906l-13.882812 8.015625c-2.796876 1.617187-4.269532 4.941406-3.589844 8.097656.742187 3.421875 3.855468 5.929687 7.355468 5.929687zm0 0"], ["d", "m348.914062 241.480469-13.886718-8.015625c-3.59375-2.074219-8.1875-.84375-10.261719 2.753906-2.078125 3.59375-.84375 8.1875 2.75 10.261719l13.882813 8.015625c3.832031 2.214844 8.871093.546875 10.644531-3.496094 1.515625-3.460938.140625-7.628906-3.128907-9.519531zm0 0"], ["d", "m336.644531 191.878906c0 4.152344 3.363281 7.515625 7.515625 7.515625h16.03125c4.148438 0 7.511719-3.363281 7.511719-7.515625s-3.363281-7.515625-7.511719-7.515625h-16.03125c-4.152344 0-7.515625 3.363281-7.515625 7.515625zm0 0"], ["d", "m341.398438 129.261719c-3.34375 1.929687-6.683594 3.859375-10.027344 5.789062-1.28125.738281-2.578125 1.457031-3.847656 2.21875-2.902344 1.742188-4.40625 5.191407-3.503907 8.496094 1.28125 4.675781 6.800781 6.957031 11.007813 4.527344l13.886718-8.015625c3.59375-2.074219 4.824219-6.671875 2.75-10.265625-2.074218-3.59375-6.675781-4.824219-10.265624-2.75zm0 0"], ["d", "m296.054688 116.089844c2.597656 0 5.125-1.347656 6.515624-3.757813l8.015626-13.882812c2.074218-3.59375.84375-8.191407-2.75-10.265625-3.59375-2.074219-8.191407-.84375-10.265626 2.75l-8.015624 13.882812c-2.832032 4.90625.804687 11.273438 6.5 11.273438zm0 0"], [1, "animate-border-bottom"], [1, "col", "p-0", "d-flex", "flex-column", "justify-content-start", "align-items-center", "m-3", "m-md-0", "mx-md-4"], ["viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", 1, "icon"], ["d", "m296.484 112a6 6 0 0 0 0-12h-6.325a16.153 16.153 0 0 1 -11.289-5h13.851a6 6 0 0 0 0-12h-19.683a2.74 2.74 0 0 1 0-1h19.683a6 6 0 0 0 0-12h-13.85a16.149 16.149 0 0 1 11.288-5h6.325a6 6 0 0 0 0-12h-6.325c-11.452 0-21.38 7-26.149 17h-5.593a6 6 0 1 0 0 12h2.6a5.446 5.446 0 0 0 0 1h-2.6a6 6 0 1 0 0 12h5.593c4.769 10 14.7 17 26.149 17z"], ["d", "m453.15 389.28-3.636 1.177c-8.066-15.127-25.7-23.736-41.11-19.164-.049.015-.1.029-.144.045l-8.154 2.645a49.968 49.968 0 0 0 -35.265-17.919l-28.519-26.752a214.336 214.336 0 0 0 -39.086-29.069 151.418 151.418 0 0 0 -26.136-11.987 105.991 105.991 0 0 0 -15.8-4.144c.344-1.142.712-2.288 1.125-3.442a68.958 68.958 0 0 1 10.432-19.037l5.566.347a76.9 76.9 0 0 0 10.232.7 62.793 62.793 0 0 0 41.071-14.593c18.626-15.563 30.092-42.847 31.459-74.855a6 6 0 0 0 -7.989-5.914l-50.874 17.932c-16.322 5.75-29.002 20.65-33.915 39.842a207.869 207.869 0 0 0 -4.948 29.057q-1.85 2.375-3.528 4.9c-7.092-23.1-4.5-46.081 7.79-68.471a118.712 118.712 0 0 1 24.987-31.21 76.973 76.973 0 1 0 -16.078-1.155 131.57 131.57 0 0 0 -19.212 26.2c-11.318 20.434-15.418 41.959-12.262 63.399-.792-1.965-1.605-3.919-2.46-5.849l.35-11.659c1.548-51.57-32.362-95.067-75.592-96.963a6 6 0 0 0 -6.216 6.743l5.18 41.2c2.117 19.444 10.9 36.03 25.4 47.966 10.92 8.988 25.042 15.28 40.044 17.884a179.55 179.55 0 0 1 11.329 35.248c-.333 0-.664-.02-1-.02a106.434 106.434 0 0 0 -26.828 3.436l-1.982.517c-.127.033-.253.071-.378.112-23.4 7.773-33.483 22.358-42.334 39.461a108.142 108.142 0 0 0 -45.7 11.483c-.147.074-.291.153-.431.239l-17.51 10.662-93.193 57.868a6 6 0 0 0 -2.608 6.731 170.474 170.474 0 0 0 60.417 88.671l1.814 1.381a6 6 0 0 0 6.559.464l69.848-39a28.173 28.173 0 0 1 20.362 1.176c.116.053.234.1.355.147l87.662 33.254a118.171 118.171 0 0 0 15.045 4.536 109.423 109.423 0 0 0 24.518 2.751 117.223 117.223 0 0 0 47.767-10.288l163.879-73.424a6 6 0 0 0 3.159-7.6 42.9 42.9 0 0 0 -53.462-25.659zm-179.118-161.212c3.918-15.306 13.743-27.084 26.282-31.5l42.2-14.876c-2.715 24.676-12.147 45.209-26.483 57.188-10.665 8.913-23.568 12.8-38.388 11.59l34.509-31.555a6.166 6.166 0 0 0 .689-8.5 6 6 0 0 0 -8.6-.519l-32.688 29.889c.738-4.22 1.563-8.138 2.479-11.717zm-31.408-95.688.953-.908a5.984 5.984 0 1 0 -8.44-8.485l-.908.694a63.552 63.552 0 0 1 -14.714-35.681h1.307a6 6 0 0 0 0-12h-1.307a65.278 65.278 0 0 1 14.714-35.253l.908 1.014a6.037 6.037 0 0 0 4.242 1.811 5.967 5.967 0 0 0 4.243-10.2l-1-.9a65.652 65.652 0 0 1 35.378-14.711v1.307a6 6 0 0 0 12 0v-1.307a63.173 63.173 0 0 1 35.558 14.714l-.862.908a6.014 6.014 0 0 0 8.524 8.485l.911-1.122a65.287 65.287 0 0 1 14.716 35.254h-1.306a6 6 0 0 0 0 12h1.306a63.552 63.552 0 0 1 -14.713 35.68l-.907-.8a6.029 6.029 0 0 0 -8.487 8.565l.818.922a63.189 63.189 0 0 1 -35.558 14.727v-1.307a6 6 0 0 0 -12 0v1.307a65.661 65.661 0 0 1 -35.376-14.714zm-22.584 79.871-19.171-27.551a6 6 0 1 0 -9.849 6.854l19.17 27.549a163.09 163.09 0 0 1 8.769 14.128c-22.027-6.443-43.312-22.93-46.623-53.342l-4.246-33.775c30.431 5.375 53.957 35.954 56.72 73.395q-2.31-3.697-4.77-7.258zm191.846 170.526c9.233-2.7 20.155 2.462 25.947 11.462l-71.341 23.092a51.587 51.587 0 0 0 -6-17.877zm-201.281-84.9 1.788-.465a94.406 94.406 0 0 1 23.8-3.049c1.064 0 2.124.03 3.185.066q.766 4.856 1.353 9.58l.295 2.474c.184 1.618.363 3.232.512 4.817a6 6 0 0 0 5.966 5.44c.187 0 .377-.009.567-.026a6 6 0 0 0 5.414-6.533c-.221-2.358-.49-4.759-.785-7.183a52.181 52.181 0 0 1 .234-7.128 94.006 94.006 0 0 1 14.22 3.716 139.4 139.4 0 0 1 24.062 11.034 202.38 202.38 0 0 1 36.9 27.439l46.954 44.045-21.988 7.135a51.333 51.333 0 0 0 -28.443-15.57l-60.343-11.009a67.318 67.318 0 0 1 -27.468-11.8l-5.674-4.145a107.926 107.926 0 0 0 -53.1-20.336c8.261-14.649 16.546-23.136 32.551-28.498zm124.062 187.13c-20.61 9.235-43.584 11.648-64.689 6.794a106.17 106.17 0 0 1 -13.494-4.068l-87.474-33.178a40.115 40.115 0 0 0 -29.517-1.361 5.972 5.972 0 0 0 -.984.438l-66.9 37.357a158.531 158.531 0 0 1 -53.543-77.075l89.25-55.415 17.247-10.499a95.7 95.7 0 0 1 99.508 8.416l5.675 4.145a79.386 79.386 0 0 0 32.393 13.913l60.342 11.009a39.673 39.673 0 0 1 32.5 39.605c0 .06-.007.12-.008.18l-44.438-10.2a265.219 265.219 0 0 0 -47.845-6.468 6 6 0 0 0 -.515 11.989 253.173 253.173 0 0 1 45.672 6.171l51.053 11.717a6 6 0 0 0 7.246-4.771q.349-1.917.552-3.828l90.16-29.184a30.915 30.915 0 0 1 36.071 13.411z"], ["d", "m218.734 310h-11.277a6 6 0 0 0 0 12h11.277a6 6 0 1 0 0-12z"], ["d", "m241.657 337a6 6 0 1 0 0-12h-8.984a6 6 0 0 0 0 12z"], ["d", "m298.139 340h9.084a6 6 0 0 0 0-12h-9.084a6 6 0 0 0 0 12z"], ["d", "m266.073 330h8.877a6 6 0 1 0 0-12h-8.877a6 6 0 0 0 0 12z"], ["d", "m108.585 371.834-55.231 34.293a6 6 0 1 0 6.33 10.194l55.232-34.293a6 6 0 1 0 -6.331-10.194z"], ["d", "m128.041 359.927-4.292 2.614a6 6 0 1 0 6.241 10.249l4.292-2.614a6 6 0 0 0 -6.241-10.249z"], ["d", "m340.686 82.428a56.5 56.5 0 1 0 -56.5 56.5 56.569 56.569 0 0 0 56.5-56.5zm-101.009 0a44.5 44.5 0 1 1 44.505 44.5 44.556 44.556 0 0 1 -44.505-44.5z"], ["viewBox", "0 0 74 74", "xmlns", "http://www.w3.org/2000/svg", "data-name", "line Icons", 1, "icon"], ["d", "m51.087 64.082a1 1 0 0 1 -1-1v-53.122l-12.674-5.317-10.643 4.187v54.252a1 1 0 0 1 -2 0v-54.934a1 1 0 0 1 .634-.931l11.655-4.585a1 1 0 0 1 .753.008l13.662 5.733a1 1 0 0 1 .613.922v53.787a1 1 0 0 1 -1 1z"], ["d", "m37.425 64.082a1 1 0 0 1 -1-1v-59.519a1 1 0 0 1 2 0v59.519a1 1 0 0 1 -1 1z"], ["d", "m67.232 64.082a1 1 0 0 1 -1-1v-31.43l-9.778-5.689h-5.367a1 1 0 0 1 0-2h5.637a1 1 0 0 1 .5.136l10.509 6.114a1 1 0 0 1 .5.864v32a1 1 0 0 1 -1.001 1.005z"], ["d", "m56.724 64.082a1 1 0 0 1 -1-1v-38.119a1 1 0 0 1 2 0v38.119a1 1 0 0 1 -1 1z"], ["d", "m5.229 64.082a1 1 0 0 1 -1-1v-31.145a1 1 0 0 1 1-1h20.541a1 1 0 0 1 0 2h-19.541v30.145a1 1 0 0 1 -1 1z"], ["d", "m10.734 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 36.778h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 36.778h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 41.471h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 41.471h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 41.471h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 46.163h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 46.163h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 50.856h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 50.856h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m10.734 55.549h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m16.563 55.549h-2.126a1 1 0 1 1 0-2h2.126a1 1 0 1 1 0 2z"], ["d", "m22.39 55.549h-2.125a1 1 0 1 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m10.734 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 0 1 0 2z"], ["d", "m16.563 60.242h-2.126a1 1 0 0 1 0-2h2.126a1 1 0 0 1 0 2z"], ["d", "m22.39 60.242h-2.125a1 1 0 0 1 0-2h2.125a1 1 0 1 1 0 2z"], ["d", "m33.9 13.352a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 14.515a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 20.874a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 22.037a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 28.4a1 1 0 0 1 -1-1v-1.891a1 1 0 1 1 2 0v1.891a1 1 0 0 1 -1 1z"], ["d", "m29.34 29.559a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 35.917a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 37.08a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 43.439a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 44.6a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m33.9 50.961a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m29.34 52.124a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m33.9 58.482a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m29.34 59.646a1 1 0 0 1 -1-1v-1.888a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1.001z"], ["d", "m40.8 12.4a1 1 0 0 1 -1-1v-1.885a1 1 0 0 1 2 0v1.885a1 1 0 0 1 -1 1z"], ["d", "m44.177 13.675a1 1 0 0 1 -1-1v-1.886a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m47.552 14.949a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 19.9a1 1 0 0 1 -1-1v-1.89a1 1 0 0 1 2 0v1.89a1 1 0 0 1 -1 1z"], ["d", "m44.177 21.17a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.886a1 1 0 0 1 -1 1z"], ["d", "m47.552 22.444a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 27.392a1 1 0 0 1 -1-1v-1.892a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1.005z"], ["d", "m44.177 28.666a1 1 0 0 1 -1-1v-1.887a1 1 0 1 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 29.939a1 1 0 0 1 -1-1v-1.886a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .999z"], ["d", "m40.8 34.887a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 36.161a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 37.435a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 42.382a1 1 0 0 1 -1-1v-1.882a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 .995z"], ["d", "m44.177 43.656a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 44.93a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 49.877a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 51.151a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 52.425a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m40.8 57.372a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m44.177 58.646a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m47.552 59.92a1 1 0 0 1 -1-1v-1.887a1 1 0 0 1 2 0v1.887a1 1 0 0 1 -1 1z"], ["d", "m60.2 33.65a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 35.768a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 38.588a1 1 0 0 1 -1-1v-1.01a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .999z"], ["d", "m63.57 40.706a1 1 0 0 1 -1-1v-1.006a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 .995z"], ["d", "m60.2 43.527a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 45.645a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 48.466a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 50.583a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 53.4a1 1 0 0 1 -1-1v-1.007a1 1 0 0 1 2 0v1.007a1 1 0 0 1 -1 1z"], ["d", "m63.57 55.522a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m60.2 58.343a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m63.57 60.46a1 1 0 0 1 -1-1v-1.011a1 1 0 0 1 2 0v1.011a1 1 0 0 1 -1 1z"], ["d", "m70.231 64.066h-68a1 1 0 1 1 0-2h68a1 1 0 0 1 0 2z"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pedro Rodrigues Carvalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Microeconomia & Estrat\u00E9gia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Carlos Monteiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Empreendorismo & Contabilidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tiago Marques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Macroeconomia & Finan\u00E7as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "John Loureiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Direito & Fiscalidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Experi\u00EAncia Profissional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Macroeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Comiss\u00E3o Europeia: Impacto Econ\u00F3mico de Legisla\u00E7\u00E3o Europeia; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "As Consequ\u00EAncias do Brexit no Tecido Econ\u00F3mico Portugu\u00EAs; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "An\u00E1lise Macroecon\u00F3mica de Pa\u00EDses e Regi\u00F5es; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Avalia\u00E7\u00E3o de Candidaturas a Fundos Europeus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Microeconomia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Diagn\u00F3stico Econ\u00F3mico e Plano Estrat\u00E9gico de v\u00E1rios Munic\u00EDpios;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Estudo de Impacto do Papel de Incubadoras e Aceleradoras no Desenvolvimento de Ecossistemas de StartUps e ScaleUps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "svg", 50);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Concorr\u00EAncia e Produtividade das Empresas Portuguesas; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Os Fatores de Sucesso da Ind\u00FAstria Metalomec\u00E2nica em Portugal; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "O Papel da Oferta formativa do Ensino Superior nas Regi\u00F5es de Portugal; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "An\u00E1lise de Concorr\u00EAncia no Sector de Energia e no Sector de Telecomunica\u00E7\u00F5es. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_line_title_line_component__WEBPACK_IMPORTED_MODULE_1__["TitleLineComponent"]], styles: [".employee[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  background: var(--color1);\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 25px;\n  fill: rgb(154, 154, 154);\n  transition: 0.2s ease;\n}\n\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: rgb(14, 118, 168);\n  transition: 0.2s ease;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: justify;\n  line-height: 1.5;\n  padding: 30px 50px;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nli[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 10px;\n  font-size: 18px;\n  color: var(--color1);\n  font-weight: 900;\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  \n  background-color: white;\n  \n  \n  min-height: 600px;\n  transform: translateY(-8px);box-shadow: 0 5px 10px 0 rgba(50,50,50,.5);\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100px;\n  fill: var(--color1);\n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover    > svg[_ngcontent-%COMP%] {\n  \n  transition: 0.5s ease;\n}\n\n.animate-border-bottom[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 100%;\n  position: absolute;\n  background: var(--color1);\n  bottom: 0;\n  left: 0;\n  \n}\n\n.experiencia[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover    > .animate-border-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  background: var(--color1);\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n}\n\n.title-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--color1);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 50px;\n}\n\n\n\n@media (max-width: 576px) {\n  ul[_ngcontent-%COMP%] {\n    padding: 30px 30px;\n    text-align: left;\n  }\n\n  li[_ngcontent-%COMP%] {\n    line-height: 1.8;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7RUFDRSxDQUFDOztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRDQUE0QztFQUM1QywyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLDJCQUEyQixDQUFDLDBDQUEwQztBQUN4RTs7QUFHQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlOztBQUNmO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8qICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZS1jdi1yb3VuZC5wbmdcIik7IFxuICovfVxuXG5hIHN2ZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBmaWxsOiByZ2IoMTU0LCAxNTQsIDE1NCk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuYSBzdmc6aG92ZXIge1xuICBmaWxsOiByZ2IoMTQsIDExOCwgMTY4KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG51bCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGkge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5saTo6YmVmb3JlIHtcbiAgY29udGVudDogJ+KGkic7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmV4cGVyaWVuY2lhIC5jb2wge1xuICAvKiBwYWRkaW5nOiA0MHB4OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogYm94LXNoYWRvdzogNHB4IDZweCByZ2IoMTU0LCAxNTQsIDE1NCk7ICovXG4gIC8qIHRyYW5zaXRpb246IDAuNXMgZWFzZTsgKi9cbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSg1MCw1MCw1MCwuNSk7XG59XG5cblxuLmV4cGVyaWVuY2lhIC5jb2wgc3ZnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmaWxsOiB2YXIoLS1jb2xvcjEpO1xufVxuXG4uZXhwZXJpZW5jaWEgLmNvbDpob3ZlciA+IHN2ZyB7XG4gIFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi5hbmltYXRlLWJvcmRlci1ib3R0b20ge1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzOyAqL1xufVxuXG4uZXhwZXJpZW5jaWEgLmNvbDpob3ZlciA+IC5hbmltYXRlLWJvcmRlci1ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcjEpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRpdGxlLWluZm8gaDUge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4vKiBzbWFydHBob25lICovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgdWwge1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIH1cblxuICBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIFxufSJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "blueText": a0 }; };
const _c1 = function (a0) { return { "blueLine": a0 }; };
class TitleLineComponent {
    constructor() {
        this.sectionName = "";
    }
    ngOnInit() {
    }
}
TitleLineComponent.ɵfac = function TitleLineComponent_Factory(t) { return new (t || TitleLineComponent)(); };
TitleLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleLineComponent, selectors: [["app-title-line"]], inputs: { sectionName: "sectionName" }, decls: 6, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-end", "px-0"], [1, "m-0", 3, "ngClass"], [3, "ngClass"]], template: function TitleLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.sectionName == "subscri\u00E7\u00E3o"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.sectionName == "subscri\u00E7\u00E3o"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 20px;\n}\n\nspan[_ngcontent-%COMP%]::after {\n  background-color: var(--colorText);\n  content: \"\";\n  display: inline-block;\n  height: .5px;\n  position: relative;\n  vertical-align: middle;\n  width: 15%;\n  margin-left: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--colorText);\n  font-family: Arial, Helvetica, sans-serif;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n\n.blueText[_ngcontent-%COMP%] {\n  color: var(--color1);\n  font-weight: 600;\n}\n\n.blueLine[_ngcontent-%COMP%]::after {\n  background-color: var(--color1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1saW5lL3RpdGxlLWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpdGxlLWxpbmUvdGl0bGUtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuc3Bhbjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclRleHQpO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogLjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvclRleHQpO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsdWVMaW5lOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG59Il19 */"] });
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

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ScrollService {
    constructor() {
        this.currentSection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('home');
        this.sections = ['home', 'about-us', 'subscription', 'region', 'case-studies', 'team', 'footer'];
        document.addEventListener('scroll', () => {
            this.keepTrack();
        });
    }
    keepTrack() {
        const viewHeight = window.innerHeight;
        for (var section of this.sections) {
            const element = document.getElementById(section);
            if (element != null) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < viewHeight / 2) {
                    this.currentSection.next(section);
                }
            }
            else {
            }
        }
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(); };
ScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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