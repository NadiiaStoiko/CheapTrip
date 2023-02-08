var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"ua"});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+hqa":
/*!******************************************************************!*\
  !*** ./src/app/currency-selector/currency-selector.component.ts ***!
  \******************************************************************/
/*! exports provided: CurrencySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySelectorComponent", function() { return CurrencySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/global.service */ "Nrpk");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "9NvV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");










class CurrencySelectorComponent {
    constructor(document, globalLocale, router, httpService, globalService) {
        this.document = document;
        this.globalLocale = globalLocale;
        this.router = router;
        this.httpService = httpService;
        this.globalService = globalService;
        this.localesList = [
            { code: 'en-US', label: 'English', flag: 'us' },
        ];
    }
    ngOnInit() {
        this.selectedLocale = this.localesList[0];
        // this.localesList.forEach(element => {
        //   if (element.code==this.globalLocale){
        //     this.selectedLocale=element;
        //   }
        // });
        console.log("code found " + this.selectedLocale.code);
        this.httpService.getCurrencies().subscribe(data => {
            // console.log(data);
            // console.log("received currencies");
            // this.currencies=data.body;
            this.currencies = JSON.parse('[{"code":"EUR", "name":"Euro", "oneEuroRate":"1", "r2rSymbol":"€"}]');
            // this.currencies.sort(function(a, b){
            //   if (a.code=="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="ILS" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="USD" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="RUB" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="INR" && b.code!="EUR"){
            //     return -1;
            //   }
            //   if (a.code=="UAH" && b.code!="EUR"){
            //     return -1;
            //   }
            //   return 0;
            // });
            this.setSelectedCurrency();
            this.setGlobalCurrency();
        });
    }
    setNewLocale() {
        let href = this.router.url;
        // console.log(this.selectedLocale.code);
        // console.log(this.router.url);
        // console.log ("navigate to... "+this.selectedLocale.code+href);
        console.log(document.location);
        window.location.assign(document.location.protocol + '//' + document.location.host + '/' + this.selectedLocale.code + '/#/' + href);
    }
    setSelectedCurrency() {
        //     let savedCurrencyCode = this.globalService.getCurrencyFromLocalStorage();
        this.selectedCurrency = this.currencies[0]; //euro is first
        //  console.log("got from local "+ this.selectedCurrency);
        //     this.currencies.forEach(element => {
        //       if (element.code==savedCurrencyCode){
        //         //found match
        //         this.selectedCurrency=element;
        //         console.log("found match "+this.selectedCurrency.name);
        //         return;
        //       }
        //     });
    }
    setGlobalCurrency() {
        console.log("Set global " + this.selectedCurrency.name);
        this.globalService.setCurrency(this.selectedCurrency);
    }
}
CurrencySelectorComponent.ɵfac = function CurrencySelectorComponent_Factory(t) { return new (t || CurrencySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
CurrencySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencySelectorComponent, selectors: [["app-currency-selector"]], decls: 0, vars: 0, template: function CurrencySelectorComponent_Template(rf, ctx) { }, styles: ["mat-divider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form-currency[_ngcontent-%COMP%] {\n  width: 70px !important;\n  color: white;\n  height: 100%;\n  margin-top: 10%;\n}\n\n.form-locale[_ngcontent-%COMP%] {\n  width: 50px !important;\n  color: white;\n  height: 100%;\n  margin-top: 10%;\n}\n\n.locale-selector[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n  height: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  vertical-align: middle;\n}\n\n.currency-selector[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n  height: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  vertical-align: middle;\n}\n\n.currency-selector[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.locale-selector[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@media screen and (max-width: 359.99px) {\n  .form-currency[_ngcontent-%COMP%] {\n    width: 50px !important;\n  }\n\n  .form-locale[_ngcontent-%COMP%] {\n    width: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVuY3ktc2VsZWN0b3IvY3VycmVuY3ktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtBQUZGOztBQW1CQTtFQUNHLGNBQUE7QUFoQkg7O0FBa0JBO0VBQ0csc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFmSDs7QUFrQkE7RUFDSSxzQkFBQTtFQUNELFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWZIOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7QUFkRjs7QUFnQkE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHNCQUFBO0FBZEo7O0FBMkJDO0VBQ0MsZUFBQTtBQXhCRjs7QUEwQkU7RUFDRSxlQUFBO0FBdkJKOztBQzZGRTtFRDFEQTtJQUNFLHNCQUFBO0VBL0JGOztFQW1DRDtJQUVJLHNCQUFBO0VBakNIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW5jeS1zZWxlY3Rvci9jdXJyZW5jeS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIFxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpwYWxldmlvbGV0cmVkO1xyXG4gIH1cclxufVxyXG4vLyA6Om5nLWRlZXAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7XHJcbi8vICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAgLm1hdC1ib2R5IHAsIC5tYXQtYm9keS0xIHAsIC5tYXQtdHlwb2dyYXBoeSBwe1xyXG4vLyAgICBtYXJnaW46IDAgMCAwIDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG4uc3BhY2VyIHtcclxuICAgZmxleDogMSAxIGF1dG87XHJcbiB9XHJcbi5mb3JtLWN1cnJlbmN5e1xyXG4gICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICBcclxufVxyXG4uZm9ybS1sb2NhbGV7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5sb2NhbGUtc2VsZWN0b3IgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuLmN1cnJlbmN5LXNlbGVjdG9yIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgLy8gY29sb3I6IHJlZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbi8vICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbi8vICAgICAgcGFkZGluZzogMCAwIDAgMDtcclxuLy8gICB9XHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4vLyAgICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDAuOCAhaW1wb3J0YW50XHJcbi8vICB9XHJcbi8vICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbi8vICAgICBwYWRkaW5nOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbi8vICB9XHJcbiAuY3VycmVuY3ktc2VsZWN0b3Ige1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLmxvY2FsZS1zZWxlY3RvcntcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgLy8gICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAvLyAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4vLyAgIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZXtcclxuLy8gICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4vLyAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XHJcbiAgXHJcbiAgLmZvcm0tY3VycmVuY3l7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4vLyAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgICBcclxuIH1cclxuIC5mb3JtLWxvY2FsZXtcclxuICAvLyAgY29sb3I6IHBpbms7XHJcbiAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICBcclxuIH1cclxuXHJcbn1cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gRGVza3RvcCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxufVxyXG4gIFxyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-selector',
                templateUrl: './currency-selector.component.html',
                styleUrls: ['./currency-selector.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Autocomplite\CheapTripAngularClient\cheapTrip\src\main.ts */"zUnb");


/***/ }),

/***/ "5Luu":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _link_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-card */ "e8Bi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function LinksComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_section_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const card_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToLink(card_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", card_r1.icolink, ") ; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 ", card_r1.link, "");
} }
class LinksComponent {
    constructor() {
        this.cards = new Array();
    }
    ngOnInit() {
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("BlaBlaCar", "https://www.blablacar.com/", "Share your journey with BlaBlaCar - Trusted carpooling"));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Skyscanner", "https://www.skyscanner.net/", "Skyscanner: Compare Cheap Flights, Hotels & Car Hire | Last Minute Flights"));
        // this.cards.push (new LinkCard("title","link","desc"));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Пассажирам", "https://www.rzd.ru/#", "Официальный портал ОАО «РЖД». Купить билет на поезд без комиссии. Акции и скидки. Расписание поездов и электричек по всем направлениям. Скоростные поезда «Сапсан», «Ласточка», «Стриж» и «Аллегро»."));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Tutu.ru: Авиа, ЖД, билеты на автобус и туры онлайн.", "https://www.tutu.ru/", "Tutu.ru — это продажа ж/д билетов, авиабилетов, туров и билетов на автобус, бронирование отелей, точное расписание электричек. Также вы найдете у нас обширную справочную информацию для путешественников."));
        this.cards.push(new _link_card__WEBPACK_IMPORTED_MODULE_1__["LinkCard"]("Название", "гиперссылка", "описание"));
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 1, vars: 1, consts: [["class", "cards-space", 4, "ngFor", "ngForOf"], [1, "cards-space"], [1, "link-card"], ["mat-card-avatar", "", 1, "header-image"], ["mat-button", "", 3, "click"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinksComponent_section_0_Template, 13, 6, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".link-card[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  max-width: 16px;\n  max-height: 16px;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0IsWUFBQTtFQUNaLGFBQUE7QUFFSjs7QUFDRTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9saW5rcy9saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWNhcmQgeyAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgIFxyXG4gICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4uY2FyZHMtc3BhY2V7XHJcbiAgICBcclxuICB9Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-links',
                templateUrl: './links.component.html',
                styleUrls: ['./links.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5Zoz":
/*!*******************************************!*\
  !*** ./src/app/service/locale.service.ts ***!
  \*******************************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocaleService {
    constructor() { }
    getUsersLocale(defaultValue) {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return defaultValue;
        }
        const wn = window.navigator;
        let lang = wn.languages ? wn.languages[0] : defaultValue;
        lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
        return lang;
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(); };
LocaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocaleService, factory: LocaleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7Yj5":
/*!*******************************************************************!*\
  !*** ./src/app/trip-direction/select-direction/select.service.ts ***!
  \*******************************************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







class SelectService {
    constructor(http) {
        this.http = http;
        this.server = 'tomcat'; //to be fixed
        // this.server = 'appachi'
    }
    getUrl(name, type) {
        if (this.server === 'tomcat') {
            // const t = type === 'start' ? '1' : '2';
            console.log('tomacat');
            return (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                'getLocations?type=' +
                name +
                '&search_name=' +
                encodeURIComponent(name));
        }
        // console.log('appachi');
        // return (
        //   environment.urlAppachi +
        //   'locations?type=' +
        //   type +
        //   '&search_name=' +
        //   encodeURIComponent(name)
        // );
    }
    getStartPointAutoComplete$(name) {
        if (name == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([]);
        }
        console.log('to server', this.getUrl(name, 'start'));
        return this.http
            .get(this.getUrl(name, 'start'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((arr) => console.log('form server', arr)));
    }
    getEndPointAutoComplete$(name) {
        if (name == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([]);
        }
        return this.http
            .get(this.getUrl(name, 'end'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((arr) => { }));
    }
}
SelectService.ɵfac = function SelectService_Factory(t) { return new (t || SelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SelectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectService, factory: SelectService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8EOA":
/*!**************************************************************!*\
  !*** ./src/app/search-result/store/search-result.actions.ts ***!
  \**************************************************************/
/*! exports provided: SOME_ACTION, SomeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOME_ACTION", function() { return SOME_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeAction", function() { return SomeAction; });
const SOME_ACTION = '[Search Result] Some Action';
class SomeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = SOME_ACTION;
    }
}


/***/ }),

/***/ "9NvV":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");










const URL = 'MY_URL';
const PATHMAP = new Map();
const SKYCODEMAP = new Map([
    ["Tehran", "thra"],
    ["Tashkent", "tas"],
    ["Sanaa", "sah"],
    ["Phnom Penh", "pnh"],
    ["Naypyidaw", "nyt"],
    ["Muscat", "mct"],
    ["Manila", "mnlp"],
    ["Male", "mle"],
    ["Lhasa", "lxa"],
    ["Kuwait City", "kwi"],
    ["Kathmandu", "ktm"],
    ["Kabul", "kbl"],
    ["Islamabad", "isb"],
    ["Dushanbe", "dyu"],
    ["Doha", "doh"],
    ["Dhaka", "dac"],
    ["Colombo", "cmba"],
    ["Bishkek", "fru"],
    ["Beirut", "bey"],
    ["Bandar Seri Begawan", "bwn"],
    ["Baghdad", "bgw"],
    ["Astana Nur-Sultan", "nqz"],
    ["Ashgabat", "asb"],
    ["Amman", "amma"],
    ["Manama", "bah"],
    ["Tbilisi", "tbs"],
    ["Baku", "gyd"],
    ["Yerevan", "evn"],
    ["Honolulu", "hnl"],
    ["San Francisco", "sfo"],
    ["Orlando", "orlb"],
    ["Las Vegas", "lasa"],
    ["Los Angeles", "laxa"],
    ["Miami", "mia"],
    ["New York", "nyca"],
    ["Johannesburg", "jnba"],
    ["Dammam", "dmm"],
    ["Riyadh", "ruh"],
    ["Cancun", "cun"],
    ["Fukuoka", "fuk"],
    ["Chiba", ""],
    ["Kyoto", ""],
    ["Osaka", "osaa"],
    ["Jerusalem", ""],
    ["Batam", "bth"],
    ["Kolkatta", "ccu"],
    ["Jaipur", "jai"],
    ["Chennai", "maa"],
    ["Hurgada", "hrg"],
    ["Beijing", "any"],
    ["Zhuhai", "zuh"],
    ["Guilin", "kwl"],
    ["Vancouver", "yvra"],
    ["Toronto", "ytoa"],
    ["Rio de Janeiro", "rioa"],
    ["Buenos Aires", "buea"],
    ["Bangalore", "blr"],
    ["Krabi", "kbv"],
    ["Jeju", "cju"],
    ["Abu Dhabi", "auha"],
    ["Auckland", "akl"],
    ["Cebu", "ceb"],
    ["Sydney", "syd"],
    ["Melbourne", "mela"],
    ["Marrakech", "rak"],
    ["Penang Island", "pen"],
    ["Jakarta", "cgki"],
    ["Ha Noi", "han"],
    ["Cairo", "cai"],
    ["Johor Bahru", "jhb"],
    ["Denpasar", "dps"],
    ["Ho Chi Minh", "sgn"],
    ["Shanghai", "csha"],
    ["Seoul", "sela"],
    ["Medina", "med"],
    ["Guangzhou", "can"],
    ["Mecca", "jed"],
    ["Taipei", "tpet"],
    ["Pattaya", "utp"],
    ["Tokyo", "tyoa"],
    ["Phuket", "hkt"],
    ["Mumbai", "bom"],
    ["Shenzhen", "szx"],
    ["Delhi", "del"],
    ["Kuala Lumpur", "kulm"],
    ["Dubai", "dzba"],
    ["Singapore", "sins"],
    ["Macau", "mfm"],
    ["Bangkok", "bkkt"],
    ["Hong Kong", "hkga"],
    ["Antwerp", "anr"],
    ["Aberdeen", "abz"],
    ["Augsburg", "agb"],
    ["Alexandroupolis", "axd"],
    ["Athens", "ath"],
    ["Alicante", "alc"],
    ["Almeria", "lei"],
    ["Aalborg", "aal"],
    ["Aarhus", "aar"],
    ["Ancona", "aoi"],
    ["Aosta", ""],
    ["Amsterdam", "ams"],
    ["Alanya", "gzp"],
    ["Ankara", "esb"],
    ["Antalya", "ayt"],
    ["Altenrhein", "ach"],
    ["Brussels", "brus"],
    ["Burgas", "boj"],
    ["Banja Luka", "bnx"],
    ["Belfast", "belf"],
    ["Birmingham", "bhx"],
    ["Bournemouth", "boh"],
    ["Bristol", "brs"],
    ["Budapest", "bud"],
    ["Berlin", "ber"],
    ["Bremen", "bre"],
    ["Billund", "bll"],
    ["Barcelona", "bcn"],
    ["Bilbao", "bio"],
    ["Bologna", "blq"],
    ["Bergen", "bgo"],
    ["Bodo", "boo"],
    ["Bucharest", "otp"],
    ["Belgrade", "beli"],
    ["Bratislava", "bts"],
    ["Bordeaux", "bod"],
    ["Brno", "brq"],
    ["Basel", "bsl"],
    ["Bern", "brn"],
    ["Cardiff", "cwl"],
    ["Cambridge", ""],
    ["Coventry", ""],
    ["Cologne", "cgn"],
    ["Corfu", "cfu"],
    ["Copenhagen", "cope"],
    ["Cork", "ork"],
    ["Cagliari", "cag"],
    ["Catania", "cta"],
    ["Cluj-Napoca", "clj"],
    ["Clermont-Ferrand", "cfe"],
    ["Chambery-Savoie", "cmf"],
    ["Cherbourg", "cfr"],
    ["Doncaster", "dsa"],
    ["Dortmund", "dtm"],
    ["Dresden", "drs"],
    ["Duesseldorf", "duss"],
    ["Dublin", "dub"],
    ["Dalaman", "dlm"],
    ["Dubrovnik", "dbv"],
    ["East Midlands", "ema"],
    ["Edinburgh", "edi"],
    ["Exeter", "ext"],
    ["Esbjerg", "ebj"],
    ["Eilat", "etm"],
    ["Eindhoven", "ein"],
    ["Frankfurt", "fran"],
    ["Friedrichshafen", "fdh"],
    ["Fuerteventura", "fue"],
    ["Florence", "flr"],
    ["Floro", "fro"],
    ["Faro", "fao"],
    ["Funchal", "fnc"],
    ["Graz", "grz"],
    ["Gorna Oryahovitsa", ""],
    ["Guernsey", "gci"],
    ["Glasgow", "glas"],
    ["Gloucestershire", "glo"],
    ["Granada", "grx"],
    ["Girona", "gro"],
    ["Galway", ""],
    ["Genoa", "goa"],
    ["Groningen", "grq"],
    ["Gdansk", "gdn"],
    ["Geneva", "gva"],
    ["Gothenburg", "goth"],
    ["Humberside", "huy"],
    ["Hamburg", "hamb"],
    ["Hannover", "haj"],
    ["Heraklion", "her"],
    ["Helsinki", "hel"],
    ["Innsbruck", "inn"],
    ["Inverness", "inv"],
    ["Debrecen", "deb"],
    ["Ibiza", "ibz"],
    ["Izmir", "izmi"],
    ["Istanbul", "ista"],
    ["Jonkoping", "jkg"],
    ["Klagenfurt", "klu"],
    ["Karlsruhe Baden-Baden", "fkb"],
    ["Kortrijk", "kjk"],
    ["Kaunas", "kun"],
    ["Katowice", "ktw"],
    ["Krakow", "krk"],
    ["Kosice", "ksc"],
    ["Karlovy Vary", "klv"],
    ["Karlstad", "ksd"],
    ["Kuressaare", "ure"],
    ["Linz", "lnz"],
    ["Liege", "lgg"],
    ["Land's End", "leq"],
    ["Liverpool", "lpl"],
    ["Lydd", ""],
    ["Leeds", "lba"],
    ["London", "lond"],
    ["Luebeck", ""],
    ["Lanzarote", "ace"],
    ["Las Palmas de Gran Canaria", "lpa"],
    ["Lamezia Terme", "suf"],
    ["Larnaca", "lca"],
    ["Liepaja", "lpx"],
    ["Luxembourg", "lux"],
    ["Lisbon", "lis"],
    ["Ljubljana", "lju"],
    ["Lappeenranta", "lpp"],
    ["Le Touquet", ""],
    ["Lille", "lil"],
    ["Lyon", "lyon"],
    ["Lugano", "lug"],
    ["Lulea", "lla"],
    ["Manchester", "man"],
    ["Mannheim", "mhg"],
    ["Memmingen", "fmm"],
    ["Muenster", "fmo"],
    ["Munich", "muc"],
    ["Madrid", "mad"],
    ["Malaga", "agp"],
    ["Mahon", "mah"],
    ["Murcia", "rmu"],
    ["Milan", "mila"],
    ["Malta", "mla"],
    ["Monte Carlo", ""],
    ["Maastricht", "mst"],
    ["Milas", "bjv"],
    ["Marseille", "mrs"],
    ["Metz", "etz"],
    ["Montpellier", "mpl"],
    ["Malmo", "mmx"],
    ["Norwich", "nwi"],
    ["Newcastle", "ncl"],
    ["Newquay", "nqy"],
    ["Nuremberg", "nue"],
    ["Naples", "nap"],
    ["Constanta", "cnd"],
    ["Nantes", "nte"],
    ["Nice", "nce"],
    ["Norrkoping", "nrk"],
    ["Ostend", "ost"],
    ["Alderney", "aci"],
    ["Oviedo", "ovd"],
    ["Olbia", "olb"],
    ["Ohrid", "ohd"],
    ["Oslo", "oslo"],
    ["Ostrava", "osr"],
    ["Plovdiv", "pdv"],
    ["Plymouth", "plh"],
    ["Paderborn", "pad"],
    ["Rostock", "rlg"],
    ["Palma Majorca", "pmi"],
    ["Palermo", "pmo"],
    ["Pescara", "psr"],
    ["Pisa", "psa"],
    ["Paphos", "pfo"],
    ["Palanga", "plg"],
    ["Ponta Delgada", "pdl"],
    ["Porto", "opo"],
    ["Poprad", "tat"],
    ["Paris", "pari"],
    ["Pula", "puy"],
    ["Podgorica", "tgd"],
    ["Pardubice", "ped"],
    ["Prague", "prg"],
    ["Parnu", ""],
    ["Rhodes", "rho"],
    ["Reykjavik", "reyk"],
    ["Reus", "reu"],
    ["Rijeka", "rjk"],
    ["Rome", "rome"],
    ["Rimini", "rmi"],
    ["Riga", "rix"],
    ["Rotterdam", "rtm"],
    ["Ronneby", "rnb"],
    ["Salzburg", "szg"],
    ["Sofia", "sof"],
    ["Sarajevo", "sjj"],
    ["Southampton", "sou"],
    ["Swansea", "sws"],
    ["Shoreham", ""],
    ["Poznan", "poz"],
    ["Saarbruecken", "saar"],
    ["Stuttgart", "str"],
    ["Santorini", "jtr"],
    ["Shannon", "snn"],
    ["Salamanca", "slm"],
    ["Santiago de Compostela", "scq"],
    ["Sevilla", "svq"],
    ["Siauliai", ""],
    ["Skopje", "skp"],
    ["Stavanger", "svg"],
    ["Strasbourg", "sxb"],
    ["Split", "spu"],
    ["Sion", ""],
    ["Stockholm", "stoc"],
    ["Tirana", "tia"],
    ["Thessaloniki", "skg"],
    ["Tenerife", "tene"],
    ["Treviso", ""],
    ["Trieste", "trs"],
    ["Turin", "trn"],
    ["Tel-Aviv", "tlv"],
    ["Terceira Island", "ter"],
    ["Timisoara", "tsr"],
    ["Trabzon", "tzx"],
    ["Tampere", "tmp"],
    ["Turku", "tku"],
    ["Toulouse", "tls"],
    ["Tivat", "tiv"],
    ["Trollhattan", ""],
    ["Tallinn", "tll"],
    ["Tartu", "tay"],
    ["Umea", "ume"],
    ["Vienna", "vie"],
    ["Varna", "var"],
    ["Valencia", "vlc"],
    ["Valladolid", "vll"],
    ["Venice", "veni"],
    ["Verona", "vero"],
    ["Ventspils", ""],
    ["Vilnius", "vno"],
    ["Iasi", "ias"],
    ["Vaxjo", "vxo"],
    ["Visby", "vby"],
    ["Weeze", "nrn"],
    ["Westerland", "gwt"],
    ["Wilhelmshaven", ""],
    ["Warsaw", "waw"],
    ["Wroclaw", "wro"],
    ["Zweibruecken", "zqw"],
    ["Zaragoza", "zaz"],
    ["Zagreb", "zag"],
    ["Zadar", "zad"],
    ["Zurich", "zrh"],
    ["Chisinau", "kiv"],
    ["Minsk", "msqa"],
    ["Gomel", "gme"],
    ["Brest", "bqt"],
    ["Vitebsk", "vtb"],
    ["Hrodna", "gna"],
    ["Kiev", "kiev"],
    ["Kherson", "khe"],
    ["Chernivtsi", "cwc"],
    ["Odesa", "ods"],
    ["Zaporizhia", "ozh"],
    ["Vinnytsia", "vin"],
    ["Lviv", "lwo"],
    ["Dnipro", "dnk"],
    ["Kharkiv", "hrk"],
    ["Ivano-Frankivsk", "ifo"],
    ["Moscow", "mosc"],
    ["Saint Petersburg", "led"],
    ["Sochi", "aer"],
    ["Novosibirsk", "ovb"],
    ["Ekaterinburg", "svx"],
    ["Krasnodar", "krr"],
    ["Anapa", "aaq"],
    ["Kaliningrad", "kgd"],
    ["Platov", ""],
    ["Samara", "kuf"],
    ["Irkutsk", "ikt"],
    ["Krasnoyarsk", "kja"],
    ["Ufa", "ufa"],
    ["Kazan", "kzn"],
    ["Mineralnye Vody", "mrv"],
    ["Tyumen", "tjm"],
    ["Khabarovsk", "khv"],
    ["Surgut", "sgc"],
    ["Vladivostok", "vvo"],
    ["Yakutsk", "yaku"],
    ["Perm", "pee"],
    ["Chelyabinsk", "cek"],
    ["Novy Urengoy", "nux"],
    ["Murmansk", "mmk"],
    ["Nizhniy Novgorod", "goj"],
    ["Volgograd", "vog"],
    ["Yuzhno-Sakhalinsk", "uus"],
    ["Arkhangelsk", "arh"],
    ["Omsk", "oms"],
    ["Makhachkala", "mcx"],
    ["Gelendzik", "gdz"],
    ["Petropavlovsk-Kamchatsky", "pkc"],
    ["Naberezhnye Chelny", "nbc"],
    ["Tomsk", "tof"],
    ["Nizhnevartovsk", "njc"],
    ["Orenburg", "ren"],
    ["Voronezh", "voz"],
    ["Syktyvkar", "scw"],
    ["Barnaul", "bax"],
    ["Astrakhan", "asf"],
    ["Norilsk", "nsk"],
    ["Belgorod", "ego"],
    ["Salehard", "sly"],
    ["Chita", "hta"],
    ["Izhevsk", "ijk"],
    ["Khanty-Mansiysk", "hma"],
    ["Saratov", "sarb"],
    ["Stavropol", "stw"],
    ["Kemerovo", "kej"],
    ["Abakan", "aba"],
    ["Grozny", "grv"],
    ["Vladikavkaz", "ogz"],
    ["Ulyanovsk", "ulya"],
    ["Penza", "pez"],
    ["Saransk", "skx"],
    ["Nadym", "nym"],
    ["Magnitogorsk", "mqf"],
    ["Rostov on Don", "rov"],
    ["Cheboksary", "scy"],
    ["Nalchik", "nal"],
    ["Cherepovets", "cee"],
    ["Magas", "igt"],
    ["Kirov", "kvx"],
    ["Naryan-Mar", "nnm"],
    ["Bratsk", "btk"],
    ["Elista", "esl"],
    ["Gorno-Altaysk", "rgk"],
    ["Tambov", "tbw"],
    ["Vorkuta", "vkt"],
    ["Neryungri", "ner"],
    ["Ivanovo", "iwa"],
    ["Anadyr", "dyr"],
    ["Kursk", "urs"],
    ["Kogalym", "kgp"],
    ["Kurgan", "kro"],
    ["Petrozavodsk", "pes"],
    ["Orsk", "osw"],
    ["Kaluga", "klf"],
    ["Okha", "ohh"],
    ["Briansk", "bzk"],
    ["Kyzyl", "kyz"],
    ["Tiksi", "iks"],
    ["Yaroslavl", "iar"],
    ["Pevek", "pwe"],
    ["Velikij Ustyug", "vus"],
    ["Aldan", "adh"],
    ["Beloyarsky", "eyk"],
    ["Bodaybo", "odo"],
    ["Ust-Kut", "ukx"],
    ["Usinsk", "usk"],
    ["Nyagan", "nya"],
    ["Lensk", "ulk"],
    ["Batagay", "bqj"],
    ["Uraj", "urj"],
    ["Nikolaevsk-na-Amure", "nli"],
    ["Berezovo", "ezv"],
    ["Bugulma", "uua"],
    ["Belaya Gora", "bgn"],
    ["Mendeleyevo", ""],
    ["Lipetsk", "lpk"],
    ["Nyurba", "nyr"],
    ["Ust-Maya", "ums"],
    ["Iturup", "itu"],
    ["Keperveyem", "kpw"],
    ["Deputatsky", "dpt"],
    ["Ust-Nera", "usr"],
    ["Terney", "nei"],
    ["Olenyok", "onk"],
    ["Cherskiy", "cyx"],
    ["Kavalerovo", "kvr"],
    ["Igarka", "iaa"],
    ["Igrim", "irm"],
    ["Ust-Kuyga", "ukg"],
    ["Hatanga", "htg"],
    ["Dalnegorsk", "dhg"],
    ["Nogliki", "ngk"],
    ["Chokurdah", "ckh"],
    ["Tynda", "tyd"],
    ["Podkamennaya Tunguska", "tgp"],
    ["Zhigansk", "zix"],
    ["Dikson", "dks"],
    ["Verkhnevilyuysk", "vhv"],
    ["Vilyuysk", "vyi"],
    ["Dalnerechensk", "dlr"],
    ["Svetlaya", "etl"],
    ["Komsomolsk Na Amure", "kxk"],
    ["Plastun", "tly"],
    ["Kotlas", ""],
    ["Gagra", ""],
    ["New Athos", ""],
    ["Sukhumi", ""],
    ["Ukhta", "uct"],
    ["Pristina", "prn"],
    ["Thimphu", ""],
    ["Ulaanbaatar", "uln"],
    ["Agartala", "ixa"],
    ["Agra", "agp"],
    ["Ahmedabad", "amd"],
    ["Aizawl", "ajl"],
    ["Allahabad", "ixd"]
]);
var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
})(Icons || (Icons = {}));
PATHMAP.set('mixed_routes', {
    type: 'Mixed Trip',
    icon: [Icons.BUS, Icons.FLIGHT],
});
PATHMAP.set('flying_routes', {
    type: 'Air Trip',
    icon: [Icons.FLIGHT],
});
PATHMAP.set('ground_routes', {
    type: 'Ground Trip',
    icon: [Icons.TRAIN, Icons.SUBWAY],
});
const PATHS = `{"mixed_routes":
{"direct_paths":
[
  {
    "transportation_type":"Bus",
    "euro_price":19.3951,
    "duration_minutes":3360,
    "from":"Bournemouth",
    "to":"Bucharest"},
    {
    "transportation_type":"Bus",
    "euro_price":12.5216,
    "duration_minutes":509,
    "from":"Bucharest",
    "to":"Budapest"}
],
"euro_price":31.0,
"duration_minutes":3869
},

"flying_routes":{"direct_paths":[{"transportation_type":"Flight","euro_price":76.0,"duration_minutes":347,"from":"Bournemouth","to":"Alicante"},{"transportation_type":"Flight","euro_price":47.8124,"duration_minutes":361,"from":"Alicante","to":"Budapest"}],"euro_price":123.0,"duration_minutes":708},"ground_routes":{"direct_paths":[{"transportation_type":"Bus","euro_price":19.3951,"duration_minutes":3360,"from":"Bournemouth","to":"Bucharest"},{"transportation_type":"Bus","euro_price":12.5216,"duration_minutes":509,"from":"Bucharest","to":"Budapest"}],"euro_price":31.0,"duration_minutes":3869}}`;
// url = http://3.23.159.104:3333
class HttpService {
    constructor(http, router, sanitizer) {
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    getUserCountry() {
        let url = 'https://api.ipgeolocation.io/ipgeo?apiKey=781c831b771b440f9adcf6a6b2e5bb23';
        // let url="https://api.hostip.info/country.php";
        // let url="http://api.ipstack.com/check?access_key=21c2d85bf7168d059b04bb14c15228ac";
        // let url="https://ipgeolocation.abstractapi.com/v1/?api_key=f75c54d6ee64403cbf9c58b1b4e5cdf0"
        // let url="http://ip-api.com/json/";
        // return this.http.get(url ,{responseType: 'text'});
        return this.http.get(url);
    }
    getSkyScannerCode(locationName) {
        let code = "";
        if (SKYCODEMAP.has(locationName)) {
            return SKYCODEMAP.get(locationName);
        }
        return code;
    }
    getCurrencies() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/GetCurrencyRate';
        return this.http.get(url, { observe: "response" });
        // return
    }
    getAutoCompleteData(data, type) {
        const address = URL +
            'getLocations?type=' +
            type +
            '&search_name=' +
            encodeURIComponent(data);
        const DIRECTIONS_FROM = [
            'Moscow',
            'Tel-Aviv',
            'London',
            'Viena',
            'San-Paolo',
            'Krakow',
            'Bansko',
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(DIRECTIONS_FROM);
    }
    getPaths(from, to) {
        this.startPoint = from;
        this.endPoint = to;
        const newPath = JSON.parse(PATHS);
        return this.transformObject(newPath);
    }
    transformObject(obj) {
        const objArr = [];
        for (const i in obj) {
            const transformedDetails = this.transformDetails(obj[i]);
            const testObj = {
                pathType: this.mapSanitazing().get(i),
                details: transformedDetails,
            };
            const newObj = { pathType: PATHMAP.get(i), details: transformedDetails };
            objArr.push(testObj);
        }
        this.currentPaths = objArr;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(objArr);
    }
    transformDetails(obj) {
        const newPaths = obj.direct_paths.map((item) => {
            return Object.assign(Object.assign({}, item), { duration_minutes: this.transformTime(+obj.duration_minutes), euro_price: this.transformPrice(+obj.euro_price) });
        });
        const newObj = {
            direct_paths: newPaths,
            euro_price: this.transformPrice(+obj.euro_price),
            duration_minutes: this.transformTime(+obj.duration_minutes),
        };
        return newObj;
    }
    transformTime(minutes) {
        const days = Math.floor(minutes / 60 / 24);
        const dayStr = days == 0 ? '' : days == 1 ? days + ' day' : days + ' days';
        const hours = Math.floor(minutes / 60 - days * 24);
        const hourStr = hours == 0 ? '' : hours == 1 ? hours + ' hour' : hours + ' hours';
        const min = minutes - days * 24 * 60 - hours * 60;
        const minStr = min == 0 ? '' : min == 1 ? min + ' minute' : min + ' minutes';
        return dayStr + ' ' + hourStr + ' ' + minStr;
    }
    transformPrice(price) {
        const euro = Math.floor(+price);
        const cent = Math.floor(+price - euro) * 10;
        const euroStr = euro == 0 ? '' : euro + ' euro';
        const centStr = cent == 0 ? '' : cent + ' cent';
        return euroStr + '' + centStr;
    }
    mapSanitazing() {
        const newMap = new Map();
        PATHMAP.forEach((value, key, map) => {
            const sanitizedArr = value.icon.map((icon) => this.sanitizer.bypassSecurityTrustHtml(icon));
            const val = Object.assign(Object.assign({}, value), { icon: sanitizedArr });
            newMap.set(key, val);
            return newMap;
        });
        return newMap;
    }
    getAllEnLocationsTomcat() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/getLocations?type=' +
            '0' +
            '&search_name=' +
            '';
        let locations;
        this.http.get(url).subscribe(data => {
            locations = data;
        });
        return locations;
    }
    getAllRuLocationsTomcat() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlTomCat +
            'CheapTrip/getLocations?type=' +
            '0' +
            '&search_name=' +
            '' +
            '&language_name=ru';
        return this.http.get(url, { observe: "response" });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "AvlM":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "M1wl");








function SearchResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-path-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paths", ctx_r0.paths);
} }
// reference information: available resolutions
var VIEWPORTS;
(function (VIEWPORTS) {
    VIEWPORTS[VIEWPORTS["XSmall"] = 0] = "XSmall";
    VIEWPORTS[VIEWPORTS["Small"] = 1] = "Small";
    VIEWPORTS[VIEWPORTS["SmallPortrait"] = 2] = "SmallPortrait";
    VIEWPORTS[VIEWPORTS["Medium"] = 3] = "Medium";
    VIEWPORTS[VIEWPORTS["Large"] = 4] = "Large";
    VIEWPORTS[VIEWPORTS["XLarge"] = 5] = "XLarge";
    VIEWPORTS[VIEWPORTS["WebLandscape"] = 6] = "WebLandscape";
    VIEWPORTS[VIEWPORTS["WebPortrait"] = 7] = "WebPortrait";
    VIEWPORTS[VIEWPORTS["HandsetLandscape"] = 8] = "HandsetLandscape";
    VIEWPORTS[VIEWPORTS["HandsetPortrait"] = 9] = "HandsetPortrait";
    VIEWPORTS[VIEWPORTS["TabletLandscape"] = 10] = "TabletLandscape";
    VIEWPORTS[VIEWPORTS["TabletPortrait"] = 11] = "TabletPortrait";
    VIEWPORTS[VIEWPORTS["Phones"] = 12] = "Phones";
    VIEWPORTS[VIEWPORTS["SmallPhones"] = 13] = "SmallPhones";
})(VIEWPORTS || (VIEWPORTS = {}));
const ROW_HEIGHT = 250;
const iframeSizeMap = new Map();
iframeSizeMap.set(VIEWPORTS.XSmall, { width: 500, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Small, { width: 590, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Medium, { width: 590, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.Large, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.XLarge, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.WebLandscape, { width: 650, height: 1800 }); //
iframeSizeMap.set(VIEWPORTS.WebPortrait, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.HandsetPortrait, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.HandsetLandscape, { width: 400, height: 2000 });
iframeSizeMap.set(VIEWPORTS.TabletLandscape, { width: 590, height: 1300 }); //
iframeSizeMap.set(VIEWPORTS.TabletPortrait, { width: 590, height: 1300 }); //
iframeSizeMap.set(VIEWPORTS.Phones, { width: 390, height: 2000 });
iframeSizeMap.set(VIEWPORTS.SmallPhones, { width: 360, height: 2000 });
class SearchResultComponent {
    // matcher: MediaQueryList;
    constructor(breakpointObserver, store, mediaMatcher) {
        this.store = store;
        this.mediaMatcher = mediaMatcher;
        this.isDesktop = false;
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait,
        ])
            .subscribe((state) => {
            this.getIFrameSize(breakpointObserver);
        });
    }
    ngOnInit() {
        this.getPathsSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.paths = state.paths;
            this.isLoading = state.isLoading;
        });
    }
    ngOnDestroy() {
        this.getPathsSubscription.unsubscribe();
    }
    keyEvent(event) {
        let el = document.getElementById('map').getBoundingClientRect();
    }
    getIFrameSize(obs) {
        if (obs.isMatched('(max-width: 361px)')) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.SmallPhones);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched('(max-width: 412px)')) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Phones);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.XSmall);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Small);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.Medium);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.WebLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.WebPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.HandsetLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.HandsetPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletLandscape)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.TabletLandscape);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
        else if (obs.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait)) {
            const iframeSize = iframeSizeMap.get(VIEWPORTS.TabletPortrait);
            this.iframeWidth = iframeSize.width;
            this.iframeHeight = iframeSize.height;
            this.isDesktop = true;
        }
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], hostBindings: function SearchResultComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchResultComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "mainContainer", 4, "ngIf"], [1, "mainContainer"], [1, "aside"], [3, "paths"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"]], styles: ["div.mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 98%;\n  margin: auto;\n  position: relative;\n  justify-content: center;\n  align-items: flex-start;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n  flex-grow: 0.67;\n}\n@media screen and (min-width: 960px) and (max-width: 1279.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    width: 95%;\n    height: auto;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 95%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: auto;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 599.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 2rem;\n    flex-direction: column;\n    width: 98%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    margin: auto;\n    justify-content: flex-start;\n    align-items: baseline;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.aside[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.map[_ngcontent-%COMP%] {\n    align-self: stretch;\n    height: auto;\n    border: none;\n    display: flex;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBRUUsZUFBQTtBQUhKO0FDMERFO0VEdkNBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQWZGO0VBZ0JFO0lBRUUsWUFBQTtJQUVBLGFBQUE7SUFDQSw2QkFBQTtFQWhCSjtBQUNGO0FDNEVFO0VEdkRBO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFsQkY7RUFtQkU7SUFDRSxtQkFBQTtFQWpCSjtFQW1CRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNGLFlBQUE7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7RUFqQko7QUFDRjtBQzZERTtFRHZDQTtJQUNFLFNBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUFuQkY7RUFxQkU7SUFDRSxtQkFBQTtFQW5CSjtFQXFCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFuQko7QUFDRjtBQzBEQztFRG5DQztJQUNFLFNBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUFwQkY7RUFzQkU7SUFDRSxtQkFBQTtFQXBCSjtFQXNCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFwQko7QUFDRjtBQzJDRTtFRGxCQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7RUF0QkY7RUF1QkU7SUFDRSxtQkFBQTtFQXJCSjtFQXVCRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFyQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRpdi5tYWluQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBkaXYuYXNpZGUge1xyXG4gICAgLy8gZmxleC1iYXNpczogNDklO1xyXG4gICAgZmxleC1ncm93OiAwLjY3O1xyXG4gIH1cclxuICAvLyBkaXYubWFwIHtcclxuICAvLyAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAvLyB9XHJcbn1cclxuQGluY2x1ZGUgTGFyZ2Uge1xyXG4gIC8vIGRpdi5tYXAge1xyXG4gIC8vICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5AaW5jbHVkZSBNZWRpdW0ge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgLy8gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbCB7XHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXYuYXNpZGUge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1hcCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBYU21hbGwge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AaW5jbHVkZSBQaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgIGRpdi5hc2lkZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgICBkaXYubWFwIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgU21hbGxwaG9uZXMge1xyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIHRvcDogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZGl2LmFzaWRlIHtcclxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIH1cclxuICAgIGRpdi5tYXAge1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-result',
                templateUrl: './search-result.component.html',
                styleUrls: ['./search-result.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }]; }, { keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    mainServer: "tomcat",
    url68: 'http://3.18.167.68:8080/',
    url104: 'http://3.18.167.68:8080/',
    // urlTomCat: 'https://test2.lowcoststrip.com:8443/'
    // urlTomCat: 'http://3.64.201.17:8080/',
    // urlTomCat: 'https://test3.lowcoststrip.com:8443/',
    urlTomCat: 'https://cheaptrip.guru:8443/',
    urlGoogleFormEng: 'https://docs.google.com/forms/d/11mnL9hPZHkbixglQNqlN-iChn4-dYidnNnQAPXakYvA/viewform',
    urlGoogleFormRus: 'https://docs.google.com/forms/d/1ypZL2BFqHmlgPrzsbg3BbOK1Ns_FBYuMrsvYoUOskJM/viewForm',
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

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _alertMessage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertMessage.model */ "Mkpf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ErrorComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", btn_r1.buttonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r1.buttonText);
} }
class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.currentClass = {
            error: this.data.type == "error",
            warning: this.data.type == "warning"
        };
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["ng-component"]], decls: 8, vars: 4, consts: [[1, "main", 3, "ngClass"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["mat-button", "", "mat-dialog-close", "", 3, "ngClass"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ErrorComponent_button_7_Template, 2, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["div.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  color: white;\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Back[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Close[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n}\ndiv.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button.Download[_ngcontent-%COMP%] {\n  background-color: var(--color-success);\n}\n.error[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.warning[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBR0k7RUFDRSxxQ0FBQTtBQUROO0FBR0k7RUFDRSxzQ0FBQTtBQUROO0FBT0U7RUFDRSwyQkFBQTtBQUpKO0FBVUU7RUFDRSwwQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubWFpbiB7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5CYWNre1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5DbG9zZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5Eb3dubG9hZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4uZXJyb3Ige1xyXG4gIGgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: _alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["AlertMessage"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");








class LandingComponent {
    constructor(router) {
        this.router = router;
    }
    onScroll(event) {
        let el = document.getElementById('secondScreen').getBoundingClientRect();
        if (el.top < 650) {
            this.isDark = true;
        }
        else {
            this.isDark = false;
        }
    }
    ngOnInit() {
        this.isDark = false;
        let el = document.getElementById('secondScreen');
    }
    toSearchPage() {
        this.router.navigate(['/search']);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], hostBindings: function LandingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LandingComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 59, vars: 3, consts: [[1, "logo"], ["mat-button", ""], [1, "menu"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "material-icons"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", 1, "submenu"], [1, "buttons"], ["mat-button", "", "type", "button", 1, "btn", "login"], ["mat-button", "", "type", "button", 1, "btn", "start", 3, "click"], [1, "screen", "screen_1"], [1, "message"], ["mat-button", "", "type", "button", 1, "start", 3, "click"], [1, "picture"], ["src", "../../assets/images/computer1.png"], ["id", "secondScreen", 1, "screen", "screen_2"], ["src", "../../assets/images/computer4.png"], ["src", "../../assets/images/ball.png", 1, "ball"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CHEAP TRIP. PAY LESS, VISIT MORE! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PRODUCT1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "CUSTOMRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " keyboard_arrow_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_24_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "By combining different types of transport, you can create a route that will be cheaper than you originally thought.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Priceless impressions by less price! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Discover the cheapest way to get anywhere (Currently in Europe) combining plane, train, bus and rideshare. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_35_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "We present you a tool that will revolutionize your travel experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " The direct route is no longer the cheapest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Analyzing the most up-to-date information, we compose a route that will lead you to your destination for less money. The proposed route includes various types of public transport. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "How does it work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Just select the start and end point of your trip from the list in the fields From and To, and click the Start button. Several route options are displayed on the page. By clicking on one of them, you can get acquainted with the details of the proposed route. At the moment the database works with the largest cities in Europe. Always check your travel details with your direct carrier. Ready, then you go there: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_54_listener() { return ctx.toSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dark", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #e0e2e1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton.btn[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  position: fixed;\n  z-index: 100;\n  background-color: #e0e2e1;\n  font-size: 90%;\n  transition: background-color 1s, color 1s;\n  color: var(--color-primary);\n  font-family: \"Lato\", sans-serif;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-style: italic !important;\n  font-size: 12px;\n  color: var(--color-primary);\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n  transition: background-color 1s, color 1s;\n}\n\nmat-toolbar.dark[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   button.start[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background-color: #e0e2e1;\n  transition: background-color 1s, color 1s;\n}\n\nbutton.start[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--color-primary);\n  border-radius: 0%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  outline: white 1px solid;\n  transition: background-color 1s, color 1s;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  background-color: #e0e2e1;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  position: relative;\n  top: 100px;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  width: 65%;\n  height: auto;\n}\n\ndiv.screen_2[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 90%;\n  top: 0;\n  margin: 0;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 0.7rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-top: 0px;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  padding: 1rem inherit;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  left: 5rem;\n}\n\ndiv.screen_2[_ngcontent-%COMP%]   div.picture[_ngcontent-%COMP%]   img.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  top: 18rem;\n  left: 33rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUdGOztBQURJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBR047O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRU47O0FBRE07RUFDRSxpQ0FBQTtBQUdSOztBQURNO0VBQ0UsK0JBQUE7QUFHUjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUNJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFDTjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUVFLHFCQUFBO0FBQ1Y7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI2LCAyMjUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJ1dHRvbi5idG4ge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5idXR0b24uc3RhcnQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBmb250LXNpemU6IDkwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBjb2xvciAxcztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICBkaXYubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXYubWVudSBidXR0b24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbn1cclxuYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWMhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5tYXQtdG9vbGJhci5kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgY29sb3IgMXM7XHJcbiAgZGl2LmJ1dHRvbnMge1xyXG4gICAgYnV0dG9uLnN0YXJ0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjYsIDIyNSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLnN0YXJ0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgb3V0bGluZTogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGNvbG9yIDFzO1xyXG59XHJcblxyXG5kaXYuc2NyZWVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNiwgMjI1KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXYubWVzc2FnZSB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuZGl2LnNjcmVlbl8yIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgc3BhbntcclxuXHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDVyZW07XHJcbiAgICB9XHJcbiAgICBpbWcuYmFsbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDE4cmVtO1xyXG4gICAgICBsZWZ0OiAzM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myInsertRemoveTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "M1wl":
/*!**********************************************************************!*\
  !*** ./src/app/search-result/path-details/path-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: PathDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathDetailsComponent", function() { return PathDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global/global.service */ "Nrpk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function PathDetailsComponent_section_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", icon_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PathDetailsComponent_section_0_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
} }
function PathDetailsComponent_section_0_div_20_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathDetailsComponent_section_0_div_20_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const path_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.openTransport(path_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PathDetailsComponent_section_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PathDetailsComponent_section_0_div_20_button_10_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", path_r7.from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", path_r7.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getTransportName(path_r7.transportation_type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getTransportUrl(path_r7) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r7.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](16, 7, path_r7.euro_price * ctx_r4.getGlobalCurrency().oneEuroRate, ctx_r4.getGlobalCurrency().code, "symbol-narrow", "1.2-2"), " ");
} }
function PathDetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PathDetailsComponent_section_0_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PathDetailsComponent_section_0_li_10_Template, 4, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PathDetailsComponent_section_0_div_20_Template, 17, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rout_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["transport"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details["points"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rout_r1.details.duration_minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 5, rout_r1.details.euro_price * ctx_r0.getGlobalCurrency().oneEuroRate, ctx_r0.getGlobalCurrency().code, "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rout_r1.details.direct_paths);
} }
const TRANSPORT = new Map();
TRANSPORT.set('Bus', "\u0410\u0432\u0442\u043E\u0431\u0443\u0441");
TRANSPORT.set('Flight', "\u041B\u0456\u0442\u0430\u043A");
TRANSPORT.set('Train', "\u041F\u043E\u0442\u044F\u0433");
TRANSPORT.set('Ride Share', "\u041F\u043E\u043F\u0443\u0442\u043A\u0430");
TRANSPORT.set('Car Drive', "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C");
TRANSPORT.set('Walk', "\u041F\u0456\u0448\u043A\u0438");
TRANSPORT.set('Town Car', "\u041B\u0456\u043C\u0443\u0437\u0438\u043D");
TRANSPORT.set('Car Ferry', "\u041F\u043E\u0440\u043E\u043C"); // two variants for ferry
TRANSPORT.set('Ferry', "\u041F\u043E\u0440\u043E\u043C"); //
TRANSPORT.set('Shuttle', "\u0428\u0430\u0442\u0442\u043B");
TRANSPORT.set('Taxi', "\u0422\u0430\u043A\u0441\u0456");
class PathDetailsComponent {
    constructor(httpService, globalService) {
        this.httpService = httpService;
        this.globalService = globalService;
        this.httpService.getUserCountry().subscribe({
            next: (data) => {
                console.log("Got user country:" + data.country_code);
                this.country = data.country_code;
            },
            error: (err) => {
                console.log(err);
                this.country = "undefined";
            }
        });
    }
    ngOnInit() {
        // this.currency = this.globalService.getCurrency();
    }
    getGlobalCurrency() {
        // console.log(this.globalService.getCurrency())
        return this.globalService.getCurrency();
    }
    getTransportName(transport) {
        return TRANSPORT.get(transport);
    }
    getTransportUrl(rout) {
        let url = '';
        switch (rout.transportation_type) {
            case "Flight": {
                //url = "http://Skyscanner.com";
                url = this.getSkyScannerUrl(rout);
                break;
            }
            case "Bus": {
                //url = "http://bus.tickets.ua";
                url = this.getBusUrl(rout);
                break;
            }
            case "Train": {
                //url = "http://gd.tickets.ua";
                url = this.getTrainUrl(rout);
                //url = "https://www.tutu.ru/poezda";
                break;
            }
            case "Car Ferry": {
                url = "http://www.aferry.com";
                break;
            }
            case "Ferry": {
                url = "http://www.aferry.com";
                break;
            }
            case "Ride Share": {
                url = "http://BlaBlaCar.com";
                break;
            }
            default: {
                url = '';
                break;
            }
        }
        return url;
    }
    getBusUrl(rout) {
        // console.log ("bus "+this.country);
        // if((from == 545 OR to == 545) AND (transportation_type == 2))
        // console.log("bus new "+JSON.stringify(rout));
        if (rout.from == "Донецк" || rout.from == "Donetsk" ||
            rout.to == "Донецк" || rout.to == "Donetsk") {
            //right way is to use ID of city, but current server is not build for that
            return "http://bustravel.dn.ua/";
        }
        switch (this.country) {
            case "RU":
            case "BY":
                return "http://bus.tutu.ru";
            case "IN":
                return "https://www.makemytrip.com/bus-tickets/";
            case "UA":
            default:
                return "https://omio.sjv.io/XxEWmb";
        }
    }
    getTrainUrl(rout) {
        console.log("train " + this.country);
        switch (this.country) {
            case "RU":
            case "BY":
                return "https://www.tutu.ru/poezda";
            case "IN":
                return "https://www.makemytrip.com/railways/";
            case "UA":
            default:
                return "https://omio.sjv.io/XxEWmb";
        }
    }
    openTransport(rout) {
        //function for opening site of corresponding transportation type
        let url = this.getTransportUrl(rout);
        if (url != '') {
            window.open(url, "_blank");
        }
    }
    getSkyScannerUrl(rout) {
        // let from=this.httpService.getSkyScannerCode(rout.from);
        // let to = this.httpService.getSkyScannerCode(rout.to);
        // if (from==""||to==""){
        return "https://omio.sjv.io/XxEWmb";
        // }
        // return "https://omio.sjv.io/XxEWmb"+from+"/"+to;
    }
}
PathDetailsComponent.ɵfac = function PathDetailsComponent_Factory(t) { return new (t || PathDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
PathDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathDetailsComponent, selectors: [["app-path-details"]], inputs: { paths: "paths", startPoint: "startPoint", endPoint: "endPoint" }, decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Buy ticket
         */
        const MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1 = goog.getMsg("Buy ticket");
        i18n_0 = MSG_EXTERNAL_BuyTicket$$SRC_APP_SEARCH_RESULT_PATH_DETAILS_PATH_DETAILS_COMPONENT_TS____1;
    }
    else {
        i18n_0 = "\u041A\u0443\u043F\u0438\u0442\u0438 \u043A\u0432\u0438\u0442\u043E\u043A";
    } return [[4, "ngFor", "ngForOf"], ["expandedHeight", "*", "collapsedHeight", "*"], [1, "icons"], [1, "description"], [1, "city"], ["class", "points", 4, "ngFor", "ngForOf"], [1, "time"], [1, "spacer"], ["selected", "true", 1, "price-top"], ["class", "details", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "points"], [3, "inline"], [1, "details"], [1, "rout"], ["class", "buy-ticket-button", "mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "currency"], ["mat-stroked-button", "", "color", "primary", 1, "buy-ticket-button", 3, "click"], i18n_0]; }, template: function PathDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathDetailsComponent_section_0_Template, 21, 10, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".price[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-radius: 5px;\n  color: white;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.transport[_ngcontent-%COMP%] {\n  color: #607D8B;\n}\n\n.time[_ngcontent-%COMP%] {\n  color: #757575;\n}\n\nul.city[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #212121;\n  white-space: normal;\n  line-height: 1.2;\n  padding: 1px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.1rem;\n  margin-left: 5px;\n}\n\nul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\nli.points[_ngcontent-%COMP%] {\n  font-style: oblique;\n}\n\np[_ngcontent-%COMP%]   span.points[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.buy-ticket-button[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  display: inline-flex;\n  height: 20px;\n  line-height: 20px;\n  color: inherit;\n  font-style: initial;\n  border-color: var(--color-primary);\n  position: absolute;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n\np[_ngcontent-%COMP%]   span.currency[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  display: inline-block;\n}\n\n.rout[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bold;\n  color: #212121;\n}\n\n.mat-chip[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding: 4px 4px !important;\n  border-radius: 5px;\n  min-height: 20px !important;\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 0.2rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  min-width: 70px;\n  max-width: 70px;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-accent);\n  width: calc(100% - 24px);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  padding-top: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.spacer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   div.icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding: 0.5rem 0;\n  color: #212121;\n  font-size: 0.9rem;\n  margin: 0;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%] {\n  color: #757575;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 599.99px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-size: 1rem;\n  }\n  section[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBR0csV0FBQTtFQUNBLGNBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUNHO0VBRUUsZUFBQTtBQUFMOztBQUdLO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFIUDs7QUFPSztFQUNFLGFBQUE7QUFMUDs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBa0JBO0VBQ0UsV0FBQTtBQWZGOztBQWlCQTtFQUVFLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFtQkE7RUFDRSw2QkFBQTtBQWhCRjs7QUFpQkU7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FBZko7O0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFoQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7QUExQkY7O0FBNkJBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTNCRjs7QUE2QkU7RUFFRSxXQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUE2Qkk7RUFFRSxVQUFBO0FBNUJOOztBQTZCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTNCUjs7QUE2Qk07RUFFRSxlQUFBO0FBNUJSOztBQThCTTtFQUVFLHlDQUFBO0VBRUEsd0JBQUE7QUE5QlI7O0FBK0JRO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTdCVjs7QUErQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUE3QlY7O0FBOEJVO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQTdCWjs7QUFpQ007RUFDRSx1QkFBQTtBQS9CUjs7QUFpQ1U7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQ3BKVixzQkRxSjZCO0VBQ25CLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQS9CWjs7QUFpQ1k7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0FBL0JkOztBQWdDYztFQUNFLDBCQUFBO0FBOUJoQjs7QUFvQ1U7RUFFRSxXQUFBO0FBbkNaOztBQW9DWTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUFuQ2Q7O0FBcUNZO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsV0FBQTtBQXBDZDs7QUFzQ2M7RUFDRSxjQUFBO0FBcENoQjs7QUMxREU7RURvSEE7SUFDRSxXQUFBO0VBdERGO0FBQ0Y7O0FDekRFO0VEcUhBO0lBQ0UsV0FBQTtFQXpERjtBQUNGOztBQzVDQztFRDBHQztJQUNFLFdBQUE7RUEzREY7RUFpRVk7SUFDRSxlQUFBO0VBL0RkO0VBb0VNO0lBQ0UsZUFBQTtFQWxFUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLWRldGFpbHMvcGF0aC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9zdHlsZXMuc2Nzc1wiO1xyXG4ucHJpY2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4udHJhbnNwb3J0IHtcclxuICBjb2xvcjojNjA3RDhCO1xyXG59IFxyXG4udGltZXtcclxuICBjb2xvcjogICM3NTc1NzU7XHJcbn1cclxudWwuY2l0eSB7XHJcbiAgLy8gZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICB3aWR0aDogMTAwJTtcclxuICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLy8gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgcGFkZGluZzogMXB4O1xyXG4gICBsaSB7XHJcblxyXG4gICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICBcclxuICAgICBtYXQtaWNvbiB7XHJcblxyXG4gICAgICAgLy9wYWRkaW5nOiA4cHggMnB4IDBweDtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIHRvcDogMC4xcmVtO1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICB9XHJcbiAgIH1cclxuICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgbWF0LWljb24ge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB9XHJcbiAgIH1cclxuICAgLy8gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIC8vICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuIH1cclxubGkucG9pbnRzIHtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbi8vIHAgc3Bhbi5wb2ludHM6YWZ0ZXIge1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XHJcbi8vICAgICBjb250ZW50OiBcIlxcZjA1NFwiO1xyXG4gXHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4vLyB9XHJcblxyXG5wIHNwYW4ucG9pbnRzOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmJ1eS10aWNrZXQtYnV0dG9uIHtcclxuICBcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyBcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG4gIFxyXG59XHJcbnAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIHNwYW4uY3VycmVuY3kge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBcclxuICB9XHJcbn1cclxuLnJvdXQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHNwYW57XHJcbiAgLy8gICB3aWR0aDo0MCU7XHJcbiAgLy8gfVxyXG4gIC8vIHNwYW46bGFzdC1jaGlsZHtcclxuICAvLyAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgLy8gIGp1c3RpZnktc2VsZjogZW5kO1xyXG5cclxuICAvLyB9XHJcbiAgXHJcbn1cclxuXHJcbi5tYXQtY2hpcHtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgcGFkZGluZzogNHB4IDRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQgO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgXHJcbiAgbWF0LWFjY29yZGlvbiB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzAlO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5kZXRhaWxzIHtcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBzcGFuLnNwYWNlciB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgZGl2Lmljb25zIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYm94U2l6aW5nKGJvcmRlci1ib3gpO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAgICAgICBzcGFuLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZGl2LmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAudGltZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBMYXJnZSB7XHJcblxyXG59XHJcblxyXG5cclxuQGluY2x1ZGUgTWVkaXVte1xyXG4gIHNlY3Rpb257XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxse1xyXG4gIHNlY3Rpb257XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMzYsIDk4KTtcclxuICAvLyAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBYU21hbGx7XHJcbiAgc2VjdGlvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MiwgNTEpO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXQtYWNjb3JkaW9uIHtcclxuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZGl2LmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmRldGFpbHMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-details',
                templateUrl: './path-details.component.html',
                styleUrls: ['./path-details.component.scss'],
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, { paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Mkpf":
/*!*********************************************!*\
  !*** ./src/app/error/alertMessage.model.ts ***!
  \*********************************************/
/*! exports provided: AlertMessage, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
// type warning = $localize`warning`;
// type MessageType = 'warning' | 'error';
// enum MessageHeader{ oops='Oops!' , ohNo= 'Oh no!' ,unsupported =  'Unsupported!'};
// export type MessageText =
//   | 'Pss! Our server is sleeping now. Please come back later.'
//   | 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.'
//   | 'Sorry, we did not have time to adapt our application for the type of web browser you are using. But we managed to optimize it for Google Chrome ver. 86 or newest. We recommend trying it!';
// type MessageButton = 'Close' | 'Back' | 'Download';
class AlertMessage {
    constructor(type, header, text, buttons) {
        this.type = type;
        this.header = header;
        this.text = text;
        this.buttons = buttons;
    }
}
class Button {
    constructor(buttonType, buttonText) {
        this.buttonType = buttonType;
        this.buttonText = buttonText;
    }
}


/***/ }),

/***/ "Nrpk":
/*!******************************************!*\
  !*** ./src/app/global/global.service.ts ***!
  \******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalService {
    constructor() {
        this.currency = JSON.parse('{"code":"EUR", "name":"Euro", "oneEuroRate":"1", "r2rSymbol":"€"}');
    }
    getCurrency() {
        // console.log(this.currency)
        return this.currency;
    }
    setCurrency(currency) {
        this.currency = currency;
        this.setCurrencyToLocalStorage();
    }
    setCurrencyToLocalStorage() {
        localStorage.setItem('currency', this.currency.code);
    }
    getCurrencyFromLocalStorage() {
        console.log("Local stored currency " + localStorage.getItem('currency'));
        return localStorage.getItem('currency'); //null if none present
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RM3O":
/*!**************************************************************!*\
  !*** ./src/app/search-result/path-map/path-map.component.ts ***!
  \**************************************************************/
/*! exports provided: PathMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathMapComponent", function() { return PathMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PathMapComponent {
    constructor() {
    }
}
PathMapComponent.ɵfac = function PathMapComponent_Factory(t) { return new (t || PathMapComponent)(); };
PathMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathMapComponent, selectors: [["app-path-map"]], inputs: { frameWidth: "frameWidth", frameHeight: "frameHeight", isDeskTop: "isDeskTop" }, decls: 1, vars: 2, consts: [["id", "map"]], template: function PathMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("desktop", ctx.isDeskTop);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  top: 0.6rem;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    position: relative;\n  }\n  div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9jaGVhcFRyaXBTdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUpKOztBQzBHQztFRGpHQztJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFMRjtFQU1FO0lBQ0Usa0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9wYXRoLW1hcC9wYXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL0BleHRlbmQgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbmRpdi5kZXNrdG9wIHtcclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDAuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaWZyYW1lIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYm9yZGVyUmFkaXVzKCR0b3BMZWZ0LCAkdG9wUmlnaHQsICRib3R0b21MZWZ0LCAkYm90dG9tUmlnaHQpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxufVxyXG5cclxuQG1peGluIGJvcmRlclJhZCgkdmFsKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCR2YWwsICR2YWwsICR2YWwsICR2YWwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94U2l6aW5nKCRib3hTaXppbmcpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbiAgYm94LXNpemluZzogJGJveFNpemluZztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnRTaXplLCAkZm9udFdlaWdodCwgJGZvbnRTdHlsZSkge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJveFNoYWRvdygkaExlbmd0aCwgJHZMZW5ndGgsICRibHVyUiwgJHNwcmVhZFIpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbkBtaXhpbiBEZXNrdG9wIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtaXhpbiBYTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTGFyZ2Uge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIE1lZGl1bSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAgKG1heC13aWR0aDogMTI3OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFRhYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBUYWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICBhbmQgIChtYXgtd2lkdGg6IDgzOS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDEyODBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gWFNtYWxsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldFBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTk5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRMYW5kU2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFBob25lcyB7XHJcbiBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuIH1cclxufVxyXG5cclxuQG1peGluIFNtYWxscGhvbmVzIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTkuOTlweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-map',
                templateUrl: './path-map.component.html',
                styleUrls: ['./path-map.component.scss'],
            }]
    }], function () { return []; }, { frameWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frameHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDeskTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "S2wL":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trip-direction/store/trip-direction.actions */ "k/2q");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class HeaderComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.isDarkTheme = false;
    }
    ngOnInit() { }
    toHomePage() {
        this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["GoHome"]());
        this.route.navigate(['/']);
    }
    onChangeTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [["color", "primary", "role", "heading"], [1, "slogan"], [1, "spacer"], ["mat-button", "", 3, "click"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHEAP TRIP. PAY LESS, VISIT MORE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.toHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQ21IQztFRDNHRztJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFKSjtBQUNGOztBQzhHRTtFRHBHRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuZGl2LnNsb2dhbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJBbnRvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYuc2xvZ2FuIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gRGVza3RvcCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxufVxyXG4gIFxyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction/store/trip-direction.reducer */ "sCT4");
/* harmony import */ var _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-result/store/search-result.reducer */ "ggAr");


const appReducer = {
    directions: _trip_direction_store_trip_direction_reducer__WEBPACK_IMPORTED_MODULE_0__["tripDirectionReducer"],
    searchResult: _search_result_store_search_result_reducer__WEBPACK_IMPORTED_MODULE_1__["searchResultReducer"]
};


/***/ }),

/***/ "SAvh":
/*!********************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.model.ts ***!
  \********************************************************/
/*! exports provided: Modes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
var PointType;
(function (PointType) {
    PointType["START"] = "startPoint";
    PointType["END"] = "endPoint";
})(PointType || (PointType = {}));
var Modes;
(function (Modes) {
    Modes[Modes["SEARCH"] = 0] = "SEARCH";
    Modes[Modes["DELIVERY"] = 1] = "DELIVERY";
})(Modes || (Modes = {}));


/***/ }),

/***/ "SJn0":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction/store/trip-direction.actions */ "k/2q");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/alertMessage.model */ "Mkpf");













//import { ErrorComponent } from "./error/error.component";
//ngimport { ErrorService } from "./error/error.service";
class ErrorInterceptor {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((evt) => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (evt.body.length == 0) {
                    const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "O \u043D\u0456!", "\u0412\u0438\u0431\u0430\u0447\u0442\u0435. \u0423 \u043D\u0430\u0441 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u043E \u0446\u044C\u043E\u043C\u0443 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0443. \u041C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u043D\u0430\u0434 \u0457\u0457 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F\u043C.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
                    this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
                        data: alertMessage,
                    });
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorData;
            // console.log ("--==unknown error==-- "+error)
            switch (true) {
                case error.status === 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', "\u0423\u043F\u0441!", "\u0422\u0441\u0441! \u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u0454. \u0417\u0430\u0445\u043E\u0434\u0456\u0442\u044C \u043F\u0456\u0437\u043D\u0456\u0448\u0435.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
                    break;
                case error.status >= 500:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', "\u0423\u043F\u0441!", "\u0422\u0441\u0441! \u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u0454. \u0417\u0430\u0445\u043E\u0434\u0456\u0442\u044C \u043F\u0456\u0437\u043D\u0456\u0448\u0435.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
                    break;
                case error.status >= 400:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('warning', "O \u043D\u0456!", "\u0412\u0438\u0431\u0430\u0447\u0442\u0435. \u0423 \u043D\u0430\u0441 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u043E \u0446\u044C\u043E\u043C\u0443 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0443. \u041C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u043D\u0430\u0434 \u0457\u0457 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F\u043C.", [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
                    break;
                default:
                    errorData = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', error.name, 'Unknown error', [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
                    break;
            }
            this.store.dispatch(new _trip_direction_store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["AutocompleteFail"]('errorMessage'));
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: errorData });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    showError(title, message) {
        const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"]('error', title, message, [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_8__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
        this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: alertMessage });
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "SqVX":
/*!*****************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TripDirectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionRoutingModule", function() { return TripDirectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../no-page/no-page.component */ "krUe");
/* harmony import */ var _search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.guard */ "Szjs");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-direction.component */ "jEWW");







const routes = [
    // {path: 'landing', component: LandingComponent},
    {
        path: '',
        component: _trip_direction_component__WEBPACK_IMPORTED_MODULE_4__["TripDirectionComponent"],
        children: [
            {
                path: 'myPath',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../search-result/search-result.module */ "vrIs")).then((m) => m.SearchResultModule),
            },
            { path: 'noPage', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_2__["NoPageComponent"] }
            // {path: 'myPath1', component: SearchResultComponent}
        ],
    },
];
class TripDirectionRoutingModule {
}
TripDirectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TripDirectionRoutingModule });
TripDirectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TripDirectionRoutingModule_Factory(t) { return new (t || TripDirectionRoutingModule)(); }, providers: [_search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__["SearchResultGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripDirectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_search_result_search_result_guard__WEBPACK_IMPORTED_MODULE_3__["SearchResultGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/alertMessage.model */ "Mkpf");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log(this.myBrowser());
        console.log(this.getBrowserVersion());
        if (this.getBrowserVersion() == 'Opera 72') {
            const alertMessage = new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["AlertMessage"]('warning', 'Unsupported!', 'Sorry, we did not have time to adapt our application for the type of web browser you are using. But we managed to optimize it for Google Chrome ver. 86 or newest. We recommend trying it!', [new _error_alertMessage_model__WEBPACK_IMPORTED_MODULE_2__["Button"]("Close", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")]);
            /*  this.dialog.open(ErrorComponent, {
               data: alertMessage,
             }); */
        }
    }
    myBrowser() {
        if ((navigator.userAgent.indexOf('Opera') ||
            navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf('Chrome') != -1) {
            return 'Chrome';
        }
        else if (navigator.userAgent.indexOf('Safari') != -1) {
            return 'Safari';
        }
        else if (navigator.userAgent.indexOf('Firefox') != -1) {
            return 'Firefox';
        }
        else if (navigator.userAgent.indexOf('MSIE') != -1 ||
            !!document.DOCUMENT_NODE == true) {
            return 'IE';
        }
        else {
            return 'unknown';
        }
    }
    getBrowserVersion() {
        var userAgent = navigator.userAgent, tem, matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(matchTest[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (matchTest[1] === 'Chrome') {
            tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        matchTest = matchTest[2]
            ? [matchTest[1], matchTest[2]]
            : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = userAgent.match(/version\/(\d+)/i)) != null)
            matchTest.splice(1, 1, tem[1]);
        return matchTest.join(' ');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg(" CheapTrip ");
        i18n_0 = MSG_EXTERNAL_Cheaptrip$$SRC_APP_APP_COMPONENT_TS_1;
    }
    else {
        i18n_0 = " CheapTrip ";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg(" Pay less, ");
        i18n_2 = MSG_EXTERNAL_PayLess$$SRC_APP_APP_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u041F\u043B\u0430\u0442\u0438 \u043C\u0435\u043D\u0448\u0435,";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg(" visit more! ");
        i18n_4 = MSG_EXTERNAL_VisitMore$$SRC_APP_APP_COMPONENT_TS_5;
    }
    else {
        i18n_4 = " \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0439 \u0431\u0456\u043B\u044C\u0448\u0435!";
    } return [["color", "primary", "role", "heading", 2, "padding", "0 0 0 0"], [1, "cheaptrip"], i18n_0, [1, "words"], [1, "wordsUp"], i18n_2, [1, "wordsDown"], i18n_4, [1, "spacer"], [1, "selector"]]; }, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.selector[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n}\n\ndiv.cheaptrip[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-style: italic;\n  font-size: 1.8em;\n  color: white;\n  line-height: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n}\n\n.words[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-style: italic;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n  display: flex;\n  align-items: baseline;\n  margin-left: 15%;\n}\n\n.wordsUp[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1rem;\n  margin-bottom: 0;\n}\n\n.wordsDown[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: bolder;\n  margin-left: 5px;\n  font-size: 1.2em;\n  line-height: 0.5rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media screen and (min-width: 960px) {\n  .mat-toolbar[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n\n  div.cheaptrip[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    width: auto;\n    font-size: 2.8em;\n    line-height: 3rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n    font-size: 1.63em;\n    line-height: 1.63rem;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    font-size: 1.63em;\n    line-height: 1.63rem;\n    margin: 0 0 0 0;\n    display: inline-flex;\n    margin-left: 8px;\n  }\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.cheaptrip[_ngcontent-%COMP%] {\n    width: auto;\n    font-size: 1.3em;\n    line-height: 1.3rem;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n    line-height: 1rem;\n    margin-left: 12%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-bottom: 0;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    display: flex;\n    height: auto;\n  }\n\n  div.cheaptrip[_ngcontent-%COMP%] {\n    width: auto;\n    font-size: 1em;\n    line-height: 1.2rem;\n    font-weight: lighter;\n    padding: 10px 0;\n  }\n\n  .words[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    width: auto;\n    font-size: 0.5em;\n    line-height: 0.5rem;\n    margin-bottom: 0;\n    margin-left: 10%;\n  }\n\n  .wordsUp[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .wordsDown[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-bottom: 0;\n  }\n\n  .selector[_ngcontent-%COMP%] {\n    font-size: 0.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLFVBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDRSxnQkFBQTtBQVJKOztBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNGLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0UsWUFBQTtBQVZGOztBQ0lFO0VEMEJBO0lBQ0Usa0JBQUE7RUExQkY7O0VBNEJBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBRUEsZ0JBQUE7SUFDQSxpQkFBQTtFQTFCRjs7RUE4QkE7SUFLRSxnQkFBQTtFQS9CRjs7RUFvQ0E7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQWpDRjs7RUFxQ0E7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7RUFsQ0Y7QUFDRjs7QUMrQ0M7RURQQztJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBckNGOztFQXlDQTtJQUdFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXhDRjs7RUEyQ0M7SUFDQyxnQkFBQTtFQXhDRjs7RUEyQ0E7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBeENGO0FBQ0Y7O0FDK0JFO0VEZUE7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUEzQ0Y7O0VBOENBO0lBQ0UsV0FBQTtJQUVBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtFQTVDRjs7RUFnREE7SUFDRSxvQkFBQTtJQUNBLFdBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQTlDRjs7RUFpREE7SUFDRSxnQkFBQTtFQTlDRjs7RUFpREE7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBOUNGOztFQWdEQTtJQUNFLGdCQUFBO0VBN0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCAnLi4vY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzJztcclxuXHJcbioge1xyXG4gIFxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnNlbGVjdG9ye1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgLy8gbWFyZ2luOiAwIDAgMCAwO1xyXG4gIC8vIHBhZGRpbmc6IDAgMCAwIDA7XHJcbn1cclxuXHJcbmRpdi5jaGVhcHRyaXAge1xyXG4gIG1hcmdpbjowIDAgMCAxNXB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLndvcmRze1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gbWFyZ2luOjEwJTtcclxuICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcblxyXG59XHJcbi53b3Jkc1VwIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG59XHJcblxyXG4ud29yZHNEb3duIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICBmb250LXNpemU6ICAxLjJlbTtcclxuICBsaW5lLWhlaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uaWNvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIGRpdi5zbG9nYW4ge1xyXG4vLyAgIHAge1xyXG4gICAgXHJcbi8vICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgbWFyZ2luOiAwJTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbi8vICAgICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuLy8gICAgIC8vIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgICAvL2ZvbnQtZmFtaWx5OiBcIkFyaWFsIE5hcnJvd1wiLCBzYW5zLXNlcmlmXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5AaW5jbHVkZSBEZXNrdG9wICB7XHJcbiAgLm1hdC10b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgZm9udC1zaXplOiAyLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLndvcmRze1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLndvcmRzVXB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBmb250LXNpemU6IDEuNjNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjYzcmVtO1xyXG4gICAgXHJcbiAgfVxyXG4gXHJcbiAgLndvcmRzRG93biB7XHJcbiAgICBmb250LXNpemU6IDEuNjNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjYzcmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcblxyXG4gIH1cclxuICBcclxuICAud29yZHN7XHJcbiBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgfVxyXG5cclxuICAgLndvcmRzVXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuIFxyXG4gIC53b3Jkc0Rvd24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgZGl2LmNoZWFwdHJpcCB7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gIH1cclxuICBcclxuICAud29yZHN7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbiBcclxuICAud29yZHNVcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAud29yZHNEb3duIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNlbGVjdG9ye1xyXG4gICAgZm9udC1zaXplOiAwLjRlbTtcclxuICAgIC8vIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiQG1peGluIGJvcmRlclJhZGl1cygkdG9wTGVmdCwgJHRvcFJpZ2h0LCAkYm90dG9tTGVmdCwgJGJvdHRvbVJpZ2h0KSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXJSYWQoJHZhbCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlclJhZGl1cygkdmFsLCAkdmFsLCAkdmFsLCAkdmFsKTtcclxufVxyXG5cclxuQG1peGluIGJveFNpemluZygkYm94U2l6aW5nKSB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG4gIGJveC1zaXppbmc6ICRib3hTaXppbmc7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250U2l6ZSwgJGZvbnRXZWlnaHQsICRmb250U3R5bGUpIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCBicm93c2VycyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaGFkb3coJGhMZW5ndGgsICR2TGVuZ3RoLCAkYmx1clIsICRzcHJlYWRSKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6ICRoTGVuZ3RoICR2TGVuZ3RoICRibHVyUiAkc3ByZWFkUiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5AbWl4aW4gRGVza3RvcCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxufVxyXG4gIFxyXG59XHJcblxyXG5AbWl4aW4gWExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIExhcmdlIHtcclxuICBAbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBNZWRpdW0ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgIChtYXgtd2lkdGg6IDEyNzkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBUYWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gVGFiUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAgYW5kICAobWF4LXdpZHRoOiA4MzkuOTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gV2ViUG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYkxhbmRzY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgICAobWluLXdpZHRoOiAxMjgwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1peGluIFhTbWFsbCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIEhhbmRTZXRQb3J0cmFpdCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDU5OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0TGFuZFNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogOTU5Ljk5cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBQaG9uZXMge1xyXG4gQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiB9XHJcbn1cclxuXHJcbkBtaXhpbiBTbWFsbHBob25lcyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5Ljk5cHgpIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Szjs":
/*!******************************************************!*\
  !*** ./src/app/search-result/search-result.guard.ts ***!
  \******************************************************/
/*! exports provided: SearchResultGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultGuard", function() { return SearchResultGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class SearchResultGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select('directions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('guard', res);
            console.log('guard', !res.startPoint);
            console.log('guard', !!res.startPoint);
            return true;
        }));
    }
}
SearchResultGuard.ɵfac = function SearchResultGuard_Factory(t) { return new (t || SearchResultGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SearchResultGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchResultGuard, factory: SearchResultGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header/header.component */ "S2wL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trip-direction/trip-direction.module */ "dZhj");
/* harmony import */ var _trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trip-direction/store/trip-direction.effects */ "a6s2");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-result/search-result.module */ "vrIs");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./no-page/no-page.component */ "krUe");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-interceptor */ "SJn0");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authors/data-table/data-table.component */ "btlR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/locales/ru */ "wq8c");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/locales/uk */ "dp1V");
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");
/* harmony import */ var _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./currency-selector/currency-selector.component */ "+hqa");
































// the second parameter 'fr-FR' is optional
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_24___default.a, 'ru');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_26__["registerLocaleData"])(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_25___default.a, 'ua');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
            _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]]),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__["CurrencySelectorComponent"],
        _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"],
        _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
        _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_28__["CurrencySelectorComponent"],
                    _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_15__["NoPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"], _authors_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_19__["DataTableComponent"],
                    _links_links_component__WEBPACK_IMPORTED_MODULE_23__["LinksComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_27__["LogoComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _trip_direction_trip_direction_module__WEBPACK_IMPORTED_MODULE_11__["TripDirectionModule"],
                    _search_result_search_result_module__WEBPACK_IMPORTED_MODULE_14__["SearchResultModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_trip_direction_store_trip_direction_effects__WEBPACK_IMPORTED_MODULE_12__["TripDirectionEffects"]]),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a6s2":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.effects.ts ***!
  \****************************************************************/
/*! exports provided: TripDirectionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionEffects", function() { return TripDirectionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _service_locale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/locale.service */ "5Zoz");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction.actions */ "k/2q");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../select-direction/select.service */ "7Yj5");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../error-interceptor */ "SJn0");
























var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    // FLIGHT = `<img src="assets/Icons/plane-h24.svg" height="24">`,
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    // BUS =  `<img src="assets/Icons/Bus-h24.svg" height="24">`,
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    // TRAIN =  `<img src="assets/Icons/train-h24.svg" height="24">`,
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
    Icons["CAR"] = "<span class=\"material-icons\">\n  directions_car\n  </span>";
    Icons["TAXI"] = "<span class=\"material-icons\">\n  local_taxi\n  </span>";
    Icons["SHUTTLE"] = "<span class=\"material-icons\">\n  shuttle\n  </span>";
    Icons["FERRY"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["RIDESHARE"] = "<img src=\"assets/Icons/rideshare_h24_30.svg\" width=\"18\">";
    // RIDESHARE = `<span class="material-icons">
    // directions_car
    // </span>`
    // FERRY =  `<img src="assets/old Icons/ferryboat.png" height="24">`,
    // RIDESHARE =  `<img src="assets/old Icons/auto_bla.png" height="24">`,
})(Icons || (Icons = {}));
const PATHMAP = new Map();
PATHMAP.set('mixed_routes', {
    type: 'Mixed Trip',
});
PATHMAP.set('flying_routes', {
    type: 'Air Trip',
});
PATHMAP.set('ground_routes', {
    type: 'Ground Trip',
});
PATHMAP.set('fixed_routes_without_ride_share', {
    type: 'Fixed trip without ride share'
});
PATHMAP.set('routes_without_ride_share', {
    type: 'Trip without ride share'
});
const PATHMAPDETAILED = new Map();
PATHMAPDETAILED.set('Bus', Icons.BUS);
PATHMAPDETAILED.set('Flight', Icons.FLIGHT);
PATHMAPDETAILED.set('Train', Icons.TRAIN);
PATHMAPDETAILED.set('Ride Share', Icons.RIDESHARE);
PATHMAPDETAILED.set('Car Drive', Icons.CAR);
PATHMAPDETAILED.set('Walk', Icons.ONFOOT);
PATHMAPDETAILED.set('Town Car', Icons.CAR);
PATHMAPDETAILED.set('Car Ferry', Icons.FERRY); // two variants for ferry
PATHMAPDETAILED.set('Ferry', Icons.FERRY); //
PATHMAPDETAILED.set('Shuttle', Icons.SHUTTLE);
PATHMAPDETAILED.set('Taxi', Icons.TAXI);
class TripDirectionEffects {
    constructor(errorInterceptor, localeService, selectService, actions$, sanitizer, http, router, store$, httpService) {
        this.errorInterceptor = errorInterceptor;
        this.localeService = localeService;
        this.selectService = selectService;
        this.actions$ = actions$;
        this.sanitizer = sanitizer;
        this.http = http;
        this.router = router;
        this.store$ = store$;
        this.httpService = httpService;
        /*  @Effect()
        newEffect = this.actions$.pipe(
          ofType(TripDirectionActions.GET_AUTOCOMPLETE),
           withLatestFrom(this.store$.select('directions')),
           tap(state => {console.log('new effect, ', state)}),
           mergeMap(req =>{
             console.log('new effect,', req);
             return of('1')
           })
        ) */
        // 'http://52.14.161.122:8080/locations?type=from&search_name=6',
        // http://3.23.159.104:3333/CheapTrip/getLocations?type=1
        this.getAutocomplete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_AUTOCOMPLETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            let url = '/assets/locations.json';
            // //this is url for spring server
            //       if (request[1].currentServer === 'server68') {
            //         url =
            //           environment.url68 +
            //           'locations?type=' +
            //           'from' +
            //           // request[0].payload.type +
            //           '&search_name=' +
            //           encodeURIComponent(request[0].payload.name);
            //       } else {
            //         url =
            //           environment.url104 +
            //           'locations?type=' +
            //           'from' +
            //           // request[0].payload.type +
            //           '&search_name=' +
            //           encodeURIComponent(request[0].payload.name);
            //       }
            //         //here is url for a Tomcat server
            //        // url = this.selectService.getUrl('from',request[0].payload.name);
            //       // if (!this.checkLanguageValidity(request[0].payload.name[0])) {
            //       //   return;
            //       // }
            //       this.language= this.getLanguage(request[0].payload.name[0]);
            //       //actual query
            //        if (environment.mainServer=="tomcat"){
            //         url=  environment.urlTomCat +
            //         'CheapTrip/getLocations?type=' +
            //         '0' +
            //         '&search_name=' +
            //        encodeURIComponent(request[0].payload.name);
            //         '';
            //         if (this.language=='ru'){
            //           url+='&language_name=ru';
            //         }
            //       }
            //       let locations = this.LocationsEN;
            //       if (this.getLanguage(request[0].payload.name[0])=="ru"){
            //         locations = this.LocationsRU;
            //       }
            //         //local locations array
            //       // return locations.pipe(
            //       //   map((res) => {
            //       //     console.log(res.body);
            //       //     let resArray:IPathPoint[]= res.body;
            //       //     // let result = resArray.filter(s => s.includes(request[0].payload.name));
            //       //     let result = resArray.filter((element) => {
            //       //       return element.name.includes(request[0].payload.name);
            //       //     });
            //       //     const newAction =
            //       //       request[0].payload.type === 'from'
            //       //         // ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
            //       //         // : new TripDirectionActions.SetEndPointAutocomplete(res.body);
            //       //            ? new TripDirectionActions.SetStartPointAutocomplete(result)
            //       //         : new TripDirectionActions.SetEndPointAutocomplete(result);
            //       //     return newAction;
            //       //   })
            //actual http
            return this.http
                .get(url, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                console.log(res);
                let resBody = this.utilForCitiesArray(res.body, request[0].payload.name);
                const newAction = request[0].payload.type === 'from'
                    ? new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetStartPointAutocomplete"](resBody)
                    : new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetEndPointAutocomplete"](resBody);
                return newAction;
            })
            /*  catchError((error) => {
            console.log('error', error);
            this.handleError(error);
  
            return of(new TripDirectionActions.AutoCompleteFail(error));
          }) */
            );
        }));
        //   @Effect()
        //   getAutocomplete$ = this.actions$.pipe(
        //     ofType(TripDirectionActions.GET_AUTOCOMPLETE),
        //     withLatestFrom(this.store$.select('directions')),
        //     switchMap((request: Array<any>) => {
        //       let url = '';
        // //this is url for spring server
        //       if (request[1].currentServer === 'server68') {
        //         url =
        //           environment.url68 +
        //           'locations?type=' +
        //           'from' +
        //           // request[0].payload.type +
        //           '&search_name=' +
        //           encodeURIComponent(request[0].payload.name);
        //       } else {
        //         url =
        //           environment.url104 +
        //           'locations?type=' +
        //           'from' +
        //           // request[0].payload.type +
        //           '&search_name=' +
        //           encodeURIComponent(request[0].payload.name);
        //       }
        //         //here is url for a Tomcat server
        //        // url = this.selectService.getUrl('from',request[0].payload.name);
        //       // if (!this.checkLanguageValidity(request[0].payload.name[0])) {
        //       //   return;
        //       // }
        //       this.language= this.getLanguage(request[0].payload.name[0]);
        //       //actual query
        //        if (environment.mainServer=="tomcat"){
        //         url=  environment.urlTomCat +
        //         'CheapTrip/getLocations?type=' +
        //         '0' +
        //         '&search_name=' +
        //        encodeURIComponent(request[0].payload.name);
        //         '';
        //         if (this.language=='ru'){
        //           url+='&language_name=ru';
        //         }
        //       }
        //       let locations = this.LocationsEN;
        //       if (this.getLanguage(request[0].payload.name[0])=="ru"){
        //         locations = this.LocationsRU;
        //       }
        //         //local locations array
        //       // return locations.pipe(
        //       //   map((res) => {
        //       //     console.log(res.body);
        //       //     let resArray:IPathPoint[]= res.body;
        //       //     // let result = resArray.filter(s => s.includes(request[0].payload.name));
        //       //     let result = resArray.filter((element) => {
        //       //       return element.name.includes(request[0].payload.name);
        //       //     });
        //       //     const newAction =
        //       //       request[0].payload.type === 'from'
        //       //         // ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
        //       //         // : new TripDirectionActions.SetEndPointAutocomplete(res.body);
        //       //            ? new TripDirectionActions.SetStartPointAutocomplete(result)
        //       //         : new TripDirectionActions.SetEndPointAutocomplete(result);
        //       //     return newAction;
        //       //   })
        //       //actual http
        //       return this.http
        //         .get<any>(url, { observe: 'response' })
        //         .pipe(
        //           map((res) => {
        //             console.log("resgetAutocompleteEff",res);
        //             const newAction =
        //               request[0].payload.type === 'from'
        //                 ? new TripDirectionActions.SetStartPointAutocomplete(res.body)
        //                 : new TripDirectionActions.SetEndPointAutocomplete(res.body);
        //                 console.log('newAction', newAction);
        //             return newAction;
        //           })
        //           /*  catchError((error) => {
        //           console.log('error', error);
        //           this.handleError(error);
        //           return of(new TripDirectionActions.AutoCompleteFail(error));
        //         }) */
        //         );
        //     })
        //   );
        this.getRouts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ROUTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.select('directions')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((request) => {
            this.checkPoints = new Array;
            this.checkPointsStrings = new Array;
            let url = '';
            // lower is url for a spring server
            // if (request[1].currentServer === 'server68') {
            //   url =
            //     environment.url68 +
            //     'routes?from=' +
            //     request[1].startPoint.id +
            //     '&to=' +
            //     request[1].endPoint.id;
            // } else {
            //   url =
            //     environment.url104 +
            //     'routes?from=' +
            //     request[1].startPoint.id +
            //     '&to=' +
            //     request[1].endPoint.id;
            // }
            //here is url for a Tomcat server to be fixed
            // url = this.selectService.getUrl('from','to')
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainServer == "tomcat") {
                url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlTomCat +
                    'CheapTrip/getRoute?from=' +
                    request[1].startPoint.id +
                    '&to=' +
                    request[1].endPoint.id;
            }
            //  this.checkPoints.push(Date.now());
            //  this.checkPointsStrings.push("Before request");
            if (this.language == 'ru') {
                url += '&language_name=ru';
            }
            return this.http.get(url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("received request");
                console.log(res);
                let resultPathArr = null;
                resultPathArr = this.transformObject(res.body);
                resultPathArr.sort((a, b) => (a.details.euro_price > b.details.euro_price) ? 1 : -1);
                const endPoints = {
                    from: request[1].startPoint,
                    to: request[1].endPoint,
                };
                const queryParams = {
                    from: request[1].startPoint.name,
                    fromID: request[1].startPoint.id,
                    to: request[1].endPoint.name,
                    toID: request[1].endPoint.id,
                };
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("Before navigation to mypath");
                this.router.navigate(['/search/myPath'], {
                    queryParams,
                });
                // next is for timing... obsolete
                // this.checkPoints.push(Date.now());
                // this.checkPointsStrings.push("after nav, before return");
                //can be used to determine user locale
                // console.log('User locale -------'+this.localeService.getUsersLocale('en'));
                // next is for timing... obsolete
                // for (let index = 1; index < this.checkPoints.length; index++) {
                //   console.log (this.checkPointsStrings[index-1]+" -> "+this.checkPointsStrings[index]
                //   +" elapsed "+(this.checkPoints[index]-this.checkPoints[index-1])+" ms");
                // }
                return new _trip_direction_actions__WEBPACK_IMPORTED_MODULE_6__["SetRouts"]({
                    paths: resultPathArr,
                    endPoints: endPoints,
                });
            })
            /* atchError((error) => {
                const errorMessage = 'An unknown error occured!';
                this.handleError(error);
                return of(new TripDirectionActions.AutoCompleteFail(error));
              }) */
            );
        }));
        //   this.server = 'tomcat'; //to be fixed
        // this.server = Server.SERVER104;
        console.log("constructor inoked");
        // this.LocationsEN = httpService.getAllEnLocationsTomcat();
        // this.LocationsRU = httpService.getAllRuLocationsTomcat();
        // console.log (this.LocationsRU);
        // console.log ("en loc "+this.LocationsEN);
        //console.log ("init country "+this.country)
        //"wake up" servlet
        // this.http.get(environment.urlTomCat+'CheapTrip/getRoute?from='+10+'&to='+20).subscribe(data => {
        //   console.log("received routes");
        //   console.log (this.LocationsRU);
        // })
    }
    utilForCitiesArray(obj, filterValue) {
        let arr = Object.values(obj);
        let arrRedused = arr.reduce((acc, val) => {
            acc.push({ id: val.id, name: val.name });
            return acc;
        }, []);
        if (filterValue.length > 0) {
            arrRedused = arrRedused.filter(option => option.name.toLowerCase().includes(filterValue.toLocaleLowerCase()));
            this.sortingByString(arrRedused, filterValue);
        }
        return arrRedused;
    }
    sortingByString(array, query) {
        const keyword = query.toLocaleLowerCase();
        const sortedArray = array.sort((first, second) => {
            if (first.name.toLocaleLowerCase().startsWith(keyword) &&
                second.name.toLocaleLowerCase().startsWith(keyword)) {
                return 0;
            }
            if (first.name.toLocaleLowerCase().startsWith(keyword)) {
                return -1;
            }
            return 1;
        });
        return sortedArray;
    }
    ;
    /*   private transformObjectTomCat(obj: object): IPath[] {
      const objArr: IPath[] = [];
      for (const i in obj) {
        const transformedDetails = this.transformDetails(obj[i]);
        const testObj: IPath = {
          pathType: PATHMAP.get(i).type,
          details: transformedDetails,
        };
        objArr.push(testObj);
      }
      return this.reducedPaths(objArr);
    } */
    transformObject(routs) {
        const objArr = [];
        routs.forEach((rout) => {
            const details = {
                euro_price: rout.euro_price,
                duration_minutes: rout.duration_minutes,
                direct_paths: rout.direct_paths,
            };
            const transformedRout = {
                pathType: rout.routeType,
                details: this.transformDetails(details),
            };
            if (transformedRout.details['duration_minutes'] != '  0min') {
                objArr.push(transformedRout);
            }
        });
        return this.reducedPaths(objArr);
    }
    transformDetails(obj) {
        const transport = this.getTransport(obj.direct_paths);
        const points = this.getPoints(obj.direct_paths);
        const newPaths = obj.direct_paths.map((item) => {
            return Object.assign(Object.assign({}, item), { duration_minutes: this.transformTime(+item.duration_minutes), euro_price: this.transformPrice(+item.euro_price) });
        });
        const newObj = {
            direct_paths: newPaths,
            euro_price: this.transformPrice(+obj.euro_price),
            duration_minutes: this.transformTime(+obj.duration_minutes),
            points: points,
            transport: transport,
        };
        return newObj;
    }
    transformTime(minutes) {
        //to be translated or fixed
        const days = Math.floor(minutes / 60 / 24);
        const dayStr = days < 1 ? '' : days + "\u0434";
        const hours = Math.floor(minutes / 60 - days * 24);
        const hourStr = hours < 1 ? '' : hours + "\u0433";
        const min = minutes - days * 24 * 60 - hours * 60;
        const minStr = min + "\u0445\u0432";
        return dayStr + ' ' + hourStr + ' ' + minStr;
    }
    transformPrice(price) {
        const euro = Math.floor(+price);
        const cent = Math.floor(+price - euro) * 10;
        return price;
    }
    mapSanitazingDetaled() {
        const newSanitisedMap = new Map();
        PATHMAPDETAILED.forEach((value, key, _map) => {
            newSanitisedMap.set(key, this.sanitizer.bypassSecurityTrustHtml(value));
        });
        return newSanitisedMap;
    }
    getTransport(paths) {
        const sanitisedMap = this.mapSanitazingDetaled();
        const result = [];
        paths.map((item) => {
            const smth = sanitisedMap.get(item.transportation_type);
            result.push(smth);
        });
        return result;
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side error
            //  errorMessage = `Error: ${err.error.message}`;
        }
        else {
            // server-side error
            //   errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        //  window.alert(errorMessage);
    }
    getPoints(paths) {
        const transformedArr = paths.map((item) => [item.from, item.to]);
        const result = new Set(transformedArr.reduce((a, b) => a.concat(b), []));
        return result;
    }
    reducedPaths(paths) {
        // console.log("-=Paths=- "+paths.length);
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push("Before filter");
        let stringifyArr;
        let duplicateIndex;
        do {
            stringifyArr = paths.map((p) => JSON.stringify(p.details));
            duplicateIndex = -1; //means no duplicate
            for (let j = 0; j < paths.length; j++) {
                for (let i = 0; i < paths.length; i++) {
                    if ((stringifyArr[j] == stringifyArr[i]) && (i != j)) {
                        duplicateIndex = i;
                    }
                }
            }
            paths = paths.filter((_path, index) => {
                return index != duplicateIndex;
            });
        } while (duplicateIndex != -1); //do... while there is duplicates
        this.checkPoints.push(Date.now());
        this.checkPointsStrings.push("after filter");
        return paths;
    }
    checkLanguageValidity(char) {
        if ((/[а-яА-Я]/).test(char)) {
            return true;
        }
        if ((/[a-zA-Z]/).test(char)) {
            return true;
        }
        //error only rus eng allowed
        this.errorInterceptor.showError("\u0423\u043F\u0441!", "\u0412\u0438\u0431\u0430\u0447\u0442\u0435!\n         \u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F. \u0410\u043B\u0435 \u043E\u0431\u0456\u0446\u044F\u0454\u043C\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C.");
        return false;
    }
    getLanguage(char) {
        // if ((/[a-zA-Z]/).test(char) ){
        //   return 'en';
        // }
        if ((/[а-яА-Я]/).test(char)) {
            return 'ru';
        }
        if ((/[a-zA-Z]/).test(char)) {
            return 'en';
        }
        return 'undefined';
    }
}
TripDirectionEffects.ɵfac = function TripDirectionEffects_Factory(t) { return new (t || TripDirectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"])); };
TripDirectionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TripDirectionEffects, factory: TripDirectionEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getAutocomplete$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TripDirectionEffects.prototype, "getRouts$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TripDirectionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"] }, { type: _service_locale_service__WEBPACK_IMPORTED_MODULE_5__["LocaleService"] }, { type: _select_direction_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] }]; }, { getAutocomplete$: [], getRouts$: [] }); })();


/***/ }),

/***/ "btlR":
/*!************************************************************!*\
  !*** ./src/app/authors/data-table/data-table.component.ts ***!
  \************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-table-datasource */ "gX/U");









function DataTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.id);
} }
function DataTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.name);
} }
function DataTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function DataTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function () { return [25, 50, 100, 250]; };
class DataTableComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__["DataTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 12, vars: 7, consts: [[1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataTableComponent_tr_8_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataTableComponent_tr_9_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 50)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.scss']
            }]
    }], null, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "dUNL":
/*!*******************************************************************************!*\
  !*** ./src/app/trip-direction/select-direction/select-direction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirectionComponent", function() { return SelectDirectionComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/trip-direction.actions */ "k/2q");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trip-direction.model */ "SAvh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error-interceptor */ "SJn0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _select_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select.service */ "7Yj5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


























const _c0 = ["startPointInput"];
const _c1 = ["endPointInput"];
const _c2 = ["nameText"];
function SelectDirectionComponent_mat_option_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](",", start_r9.country, "");
} }
function SelectDirectionComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectDirectionComponent_mat_option_13_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", start_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", start_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", start_r9.country !== undefined);
} }
function SelectDirectionComponent_div_16_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.directionForm.get("startPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_16_p_1_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.directionForm.get("startPointControl").errors.invalidMsg);
} }
function SelectDirectionComponent_mat_option_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](",", end_r13.country, "");
} }
function SelectDirectionComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectDirectionComponent_mat_option_26_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const end_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", end_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", end_r13.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", end_r13.country !== undefined);
} }
function SelectDirectionComponent_div_29_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.directionForm.get("endPointControl").errors.invalidMsg, "");
} }
function SelectDirectionComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectDirectionComponent_div_29_p_1_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.directionForm.get("endPointControl").errors.invalidMsg);
} }
const _c13 = function (a0, a1) { return { "searchMode": a0, "deliveryMode": a1 }; };
class SelectDirectionComponent {
    constructor(http, httpService, selectService, errorInterceptor, store, route, router) {
        this.http = http;
        this.httpService = httpService;
        this.selectService = selectService;
        this.errorInterceptor = errorInterceptor;
        this.store = store;
        this.route = route;
        this.router = router;
        this.modes = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"];
        this.startSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.endSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnDestroy() { }
    ngOnInit() {
        console.log("NG ON init start!");
        this.mode = _trip_direction_model__WEBPACK_IMPORTED_MODULE_6__["Modes"].SEARCH;
        this.startPointAutoComplete = [];
        this.endPointAutoComplete = [];
        this.setForm();
        this.startPoint = { id: 0, name: '' };
        this.endPoint = { id: 0, name: '' };
        this.defineRouterParams();
        this.stateSubscription = this.store
            .select('directions')
            .subscribe((state) => {
            this.startPointAutoComplete = state.startPointAutoComplete;
            this.endPointAutoComplete = state.endPointAutoComplete;
            this.mode = state.mode;
        });
        this.pointsSubscription();
        this.router.events.subscribe((res) => console.log('rout'));
        console.log("NG oninit end!");
    }
    // autocomplete is invoked
    onInput(str, type) {
        const point = { name: str, type: type };
        if (type === 'from' &&
            this.directionForm.get('startPointControl').valid &&
            str.length > 0) {
            this.startPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
        }
        else if (type === 'to' &&
            this.directionForm.get('endPointControl').valid &&
            str.length > 0) {
            this.endPoint = { id: 0, name: '' };
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetAutocomplete"](point));
        }
    }
    onSubmit() {
        console.log("SUBMITTED!");
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetRouts"]());
    }
    optionSelected(point, type) {
        if (type == 'from') {
            this.startSubj.next(point);
            //  this.selectedStartPoint = point;
            //  this.findCitiesFrom(this.selectedStartPoint);
        }
        else if (type === 'to') {
            this.endSubj.next(point);
        }
    }
    cleanForm() {
        this.directionForm.reset();
        this.startPoint = { id: 0, name: '' };
        this.endPoint = { id: 0, name: '' };
        this.startPointAutoComplete = [];
        this.endPointAutoComplete = [];
        this.directionForm.markAsUntouched();
        this.directionForm.markAsPristine();
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["CleanData"](false));
    }
    onCleanInput(point) {
        if (point === 'start') {
            this.startPoint = { id: 0, name: '' };
            this.startPointAutoComplete = [];
            this.directionForm.patchValue({
                startPointControl: '',
            });
            this.directionForm.get('startPointControl').markAsUntouched();
            this.directionForm.get('startPointControl').markAsPristine();
            this.directionForm.get('startPointControl').valid;
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPointAutocomplete"]([]));
            this.startPointInputEl.nativeElement.focus();
        }
        else {
            this.endPoint = { id: 0, name: '' };
            this.endPointAutoComplete = [];
            this.directionForm.patchValue({
                endPointControl: '',
            });
            this.directionForm.get('endPointControl').markAsUntouched();
            this.directionForm.get('endPointControl').markAsPristine();
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPointAutocomplete"]([]));
            this.directionForm.get('endPointControl').valid;
            this.endPointInputEl.nativeElement.focus();
        }
    }
    /*  notInStartListValidator(control: FormControl): { [s: string]: boolean } {
     if (this.startPointAutoComplete.length > 0) {
        const arr = this.startPointAutoComplete.map((point) =>
          point.name.toLocaleLowerCase()
        );
        if (arr.indexOf(control.value.toLowerCase()) == -1) {
          return { notInList: true };
        }
      }
  
      return null;
    } */
    /*   notInStartListValidatorAsync(
      control: FormControl
    ): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reset) => {
        if (this.startPointAutoComplete.length > 0) {
          const arr = this.startPointAutoComplete.map((point) =>
            point.name.toLocaleLowerCase()
          );
          if (arr.indexOf(control.value.toLowerCase()) == -1) {
            resolve({ notInList: true });
          }
        } else {
          resolve(null);
        }
      });
      return promise;
    } */
    notInEndListValidator(control) {
        return null;
    }
    onFocusOut(event) {
        if (event.target.attributes.formControlName.value === 'startPointControl') {
            if (this.startPoint.name === '') {
                if (this.startPointAutoComplete.length === 0) {
                    this.directionForm.patchValue({
                        startPointControl: '',
                    });
                    this.directionForm.get('startPointControl').markAsUntouched();
                    return;
                }
                this.startSubj.next(this.startPointAutoComplete[0]);
            }
        }
        else if (event.target.attributes.formControlName.value === 'endPointControl') {
            if (this.endPoint.name === '') {
                if (this.endPointAutoComplete.length === 0) {
                    this.directionForm.patchValue({
                        endPointControl: '',
                    });
                    this.directionForm.get('endPointControl').markAsUntouched();
                    return;
                }
                this.endSubj.next(this.endPointAutoComplete[0]);
            }
        }
    }
    setForm() {
        this.directionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            startPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Z0-9\-\s]/,
                    msg: "\u0412\u0438\u0431\u0430\u0447\u0442\u0435!\n         \u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F. \u0410\u043B\u0435 \u043E\u0431\u0456\u0446\u044F\u0454\u043C\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C.",
                }),
            ]),
            endPointControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                this.patternValid({
                    pattern: /[a-zA-Z0-9\-\s]/,
                    msg: "\u0412\u0438\u0431\u0430\u0447\u0442\u0435!\n         \u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F. \u0410\u043B\u0435 \u043E\u0431\u0456\u0446\u044F\u0454\u043C\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C.",
                }),
            ]),
        });
    }
    patternValid(config) {
        return (control) => {
            let urlRegEx = config.pattern;
            if (control.value) {
            }
            if (control.value && !control.value.match(urlRegEx)) {
                this.errorInterceptor.showError("\u0423\u043F\u0441!", "\u0412\u0438\u0431\u0430\u0447\u0442\u0435!\n         \u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F. \u0410\u043B\u0435 \u043E\u0431\u0456\u0446\u044F\u0454\u043C\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C.");
                return {
                    invalidMsg: config.msg,
                };
            }
            else {
                return null;
            }
        };
    }
    defineRouterParams() {
        this.route.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length === 0 &&
                queryParams.constructor === Object &&
                this.directionForm) {
                this.cleanForm();
            }
            else {
                this.startPoint = {
                    id: queryParams.fromID,
                    name: queryParams.from,
                };
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPoint"](Object.assign({}, this.startPoint)));
                this.endPoint = {
                    id: queryParams.toID,
                    name: queryParams.to,
                };
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPoint"](Object.assign({}, this.endPoint)));
                this.setForm();
                this.directionForm.setValue({
                    startPointControl: this.startPoint.name,
                    endPointControl: this.endPoint.name,
                });
                this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["GetRouts"]());
            }
        });
    }
    pointsSubscription() {
        console.log("Points!");
        this.startSubj.subscribe((res) => {
            if (typeof res == 'string') {
                this.startPoint = this.startPointAutoComplete.filter((p) => p.name === res)[0];
            }
            else {
                this.startPoint = res;
                this.directionForm.patchValue({
                    startPointControl: this.startPoint.name,
                });
            }
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetStartPoint"](Object.assign({}, this.startPoint)));
        });
        this.endSubj.subscribe((res) => {
            if (typeof res == 'string') {
                this.endPoint = this.endPointAutoComplete.filter((p) => p.name === res)[0];
            }
            else {
                this.endPoint = res;
                this.directionForm.patchValue({
                    endPointControl: this.endPoint.name,
                });
            }
            this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_4__["SetEndPoint"](Object.assign({}, this.endPoint)));
        });
    }
}
SelectDirectionComponent.ɵfac = function SelectDirectionComponent_Factory(t) { return new (t || SelectDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
SelectDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectDirectionComponent, selectors: [["app-select-direction"]], viewQuery: function SelectDirectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.startPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.endPointInputEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameParagraph = _t.first);
    } }, decls: 36, vars: 21, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Long slogan
         */
        const MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4 = goog.getMsg("Find most beneficial and unusual routes between cities with airports, combining flight, train, bus, ferry and rideshare.");
        i18n_3 = MSG_EXTERNAL_longslogan$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_4;
    }
    else {
        i18n_3 = "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0437 \u043C\u0456\u0441\u0442\u0430 \u0432 \u043C\u0456\u0441\u0442\u043E, \u043F\u043E\u0454\u0434\u043D\u0443\u044E\u0447\u0438 \u043B\u0456\u0442\u0430\u043A, \u043F\u043E\u0442\u044F\u0433, \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0456 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u043F\u043E\u0457\u0437\u0434\u043A\u0438 \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6 = goog.getMsg("From");
        i18n_5 = MSG_EXTERNAL_5203279511751768967$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "\u0417\u0432\u0456\u0434\u043A\u0438";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8 = goog.getMsg("To");
        i18n_7 = MSG_EXTERNAL_1640609344969975994$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_8;
    }
    else {
        i18n_7 = "\u041A\u0443\u0434\u0438";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Clear form
         */
        const MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10 = goog.getMsg("Clear form");
        i18n_9 = MSG_EXTERNAL_clearform$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_10;
    }
    else {
        i18n_9 = "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438";
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc letsgo
         */
        const MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12 = goog.getMsg("Let's go");
        i18n_11 = MSG_EXTERNAL_letsgo$$SRC_APP_TRIP_DIRECTION_SELECT_DIRECTION_SELECT_DIRECTION_COMPONENT_TS_12;
    }
    else {
        i18n_11 = "\u041F\u043E\u0457\u0445\u0430\u043B\u0438!";
    } return [[1, "mainContainer", 3, "ngClass"], [1, "message"], [1, "LongSlogan"], i18n_3, ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "formInfo"], [1, "input"], [1, "startPoint"], ["type", "text", "placeholder", i18n_5, "aria-label", "Number", "matInput", "", "formControlName", "startPointControl", 3, "matAutocomplete", "focusout", "input"], ["startPointInput", ""], [1, "single-autocomplete", 3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "material-icons", 3, "click"], ["class", "error", 4, "ngIf"], [1, "material-icons", "arrows"], [1, "endPoint"], ["type", "text", "placeholder", i18n_7, "aria-label", "Number", "matInput", "", "formControlName", "endPointControl", 3, "matAutocomplete", "focusout", "input"], ["endPointInput", ""], ["auto2", "matAutocomplete"], [1, "actions"], ["mat-flat-button", "", "color", "accent", "type", "reset", 3, "click"], i18n_9, ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "color", "white", 3, "disabled"], ["sBtn", ""], i18n_11, [3, "value"], [4, "ngIf"], [1, "error"]]; }, template: function SelectDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SelectDirectionComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_9_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_9_listener($event) { return ctx.onInput($event.target.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_11_listener($event) { return ctx.optionSelected($event.option.value, "from"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SelectDirectionComponent_mat_option_13_Template, 3, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_14_listener() { return ctx.onCleanInput("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectDirectionComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " double_arrow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function SelectDirectionComponent_Template_input_focusout_22_listener($event) { return ctx.onFocusOut($event); })("input", function SelectDirectionComponent_Template_input_input_22_listener($event) { return ctx.onInput($event.target.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-autocomplete", 10, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SelectDirectionComponent_Template_mat_autocomplete_optionSelected_24_listener($event) { return ctx.optionSelected($event.option.value, "to"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SelectDirectionComponent_mat_option_26_Template, 3, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_span_click_27_listener() { return ctx.onCleanInput("end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SelectDirectionComponent_div_29_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectDirectionComponent_Template_button_click_31_listener() { return ctx.cleanForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c13, ctx.mode === ctx.modes.SEARCH, ctx.mode === ctx.modes.DELIVERY));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@insertRemoveTrigger1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.directionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("valid", ctx.directionForm.get("startPointControl").valid && ctx.directionForm.get("startPointControl").touched)("invalid", ctx.directionForm.get("startPointControl").invalid && ctx.directionForm.get("startPointControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.startPointAutoComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.directionForm.get("startPointControl").valid && (ctx.directionForm.get("startPointControl").pristine || ctx.directionForm.get("startPointControl").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("valid", ctx.directionForm.get("endPointControl").valid && ctx.directionForm.get("endPointControl").touched)("invalid", ctx.directionForm.get("endPointControl").invalid && ctx.directionForm.get("endPointControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.endPointAutoComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.directionForm.get("endPointControl").valid && (ctx.directionForm.get("endPointControl").pristine || ctx.directionForm.get("endPointControl").untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.endPoint.name.length < 1 || ctx.startPoint.name.length < 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\nmat-option[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  height: 40px;\n}\ndiv.mainContainer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  height: auto;\n  box-sizing: border-box;\n  position: relative;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0.5rem;\n  padding: 0;\n  color: #607D8B;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  margin: 1rem auto;\n  font-size: 0.9rem;\n  line-height: 2rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem auto 0.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 45%;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-warn);\n  font-style: italic;\n  padding-left: 3rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  cursor: pointer;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding-left: 0.5rem;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: cursive;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.valid[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.invalid[_ngcontent-%COMP%] {\n  border-color: var(--color-warn);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\ndiv.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  margin: 0 2rem;\n}\ndiv.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  height: 2.5rem;\n}\n@media screen and (min-width: 960px) {\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   .LongSlogan[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919.99px) {\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n\n  div.searchMode[_ngcontent-%COMP%]   .mat-autocomplete[_ngcontent-%COMP%]   .autocomplete[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n}\n@media screen and (max-width: 359.99px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    align-self: center;\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border-left: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.mainContainer[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 98%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: relative;\n    top: 1rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: block;\n    width: 90%;\n    margin: auto;\n    line-height: 1.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    position: relative;\n    top: -0.5rem;\n    width: 100%;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    flex-direction: column;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    margin: auto;\n    position: relative;\n    padding-left: 0.4rem;\n    border: none;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field.startPoint[_ngcontent-%COMP%] {\n    top: 0.5rem;\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n    text-align: center;\n    transform: rotate(90deg);\n  }\n  div.mainContainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    height: auto;\n    align-items: flex-start;\n  }\n\n  div.deliveryMode[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px auto;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   div.message[_ngcontent-%COMP%] {\n    display: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.actions[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0.5rem auto 0;\n    position: relative;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    position: relative;\n    border: none;\n  }\n  div.deliveryMode[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.formInfo[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    left: -1rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi9zZWxlY3QtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSwyRUFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUZKO0FBR0k7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBRE47QUFFTTtFQUNFLFVBQUE7QUFBUjtBQUVVO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFJUTtFQUNFLFdBQUE7RUFFQSxhQUFBO0FBSFY7QUFJVTtFQUVFLFdBQUE7RUFDQSxlQUFBO0FBSFo7QUFNVTtFQUNFLFdBQUE7RUM3RFYsc0JEOEQ2QjtFQUVuQixvQkFBQTtBQUpaO0FDeERFO0VBQ0Usb0JBQUE7RUFDQSwyQkQ2RCtCO0VDNUQvQixlRDREcUQ7RUMzRHJELG1CRDJEMkQ7RUMxRDNELG1CRDBEbUU7QUFBdkU7QUN4REU7RUFDRSw0QkFBQTtFQUNBLDJCRHNEK0I7RUNyRC9CLGVEcURxRDtFQ3BEckQsbUJEb0QyRDtFQ25EM0QsbUJEbURtRTtBQU92RTtBQ3hERTtFQUNFLHdCQUFBO0VBQ0EsMkJEK0MrQjtFQzlDL0IsZUQ4Q3FEO0VDN0NyRCxtQkQ2QzJEO0VDNUMzRCxtQkQ0Q21FO0FBY3ZFO0FDeERFO0VBQ0UsMEJBQUE7RUFDQSwyQkR3QytCO0VDdkMvQixlRHVDcUQ7RUN0Q3JELG1CRHNDMkQ7RUNyQzNELG1CRHFDbUU7QUFxQnZFO0FBbEJVO0VBQ0UsaUNBQUE7QUFvQlo7QUFqQlU7RUFDRSwrQkFBQTtBQW1CWjtBQWZNO0VBQ0UsMkJBQUE7QUFpQlI7QUFiSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBZU47QUFkTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBZ0JSO0FBUkk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFXTjtBQ3hFRTtFRHdFQTtJQUNFLGlCQUFBO0VBSUY7QUFDRjtBQ2xFRTtFRHVFSTtJQUNFLGdCQUFBO0VBRk47O0VBU0k7SUFDRSxpQkFBQTtFQU5OO0FBQ0Y7QUN0Q0U7RURpREE7SUFDRSxVQUFBO0VBUkY7RUFVSTtJQUNFLGlCQUFBO0VBUk47O0VBY0U7SUFDRSxzQkFBQTtFQVhKO0FBQ0Y7QUNuQkU7RURtQ0E7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQWJGO0VBY0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFaSjtFQWFJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBWE47RUFjRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQVpKO0VBYUk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQVhOO0VBWU07SUFDRSxXQUFBO0VBVlI7RUFZVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtFQVZaO0VBWVU7SUFDRSxXQUFBO0VBVlo7RUFjTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUFiUjtFQWdCSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQWROOztFQW1CQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWhCRjtFQWlCRTtJQUNFLGFBQUE7RUFmSjtFQW9CTTtJQUNFLGtCQUFBO0VBbEJSO0VBb0JVO0lBQ0UsWUFBQTtFQWxCWjtFQXdCSTtJQUNFLFNBQUE7RUF0Qk47RUF3Qkk7SUFDRSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQXRCTjtFQXdCTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUF0QlI7RUF3Qk07SUFDRSxpQkFBQTtFQXRCUjtBQUNGO0FDeEdDO0VEeUlDO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUE5QkY7RUErQkU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBN0JKO0VBOEJJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBRUEsbUJBQUE7RUE3Qk47RUFnQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7RUE5Qko7RUErQkk7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQTdCTjtFQThCTTtJQUNFLFdBQUE7RUE1QlI7RUE4QlU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUE1Qlo7RUE4QlU7SUFDRSxXQUFBO0VBNUJaO0VBZ0NNO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtFQTlCUjtFQWlDSTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtFQS9CTjs7RUFvQ0E7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFqQ0Y7RUFrQ0U7SUFDRSxhQUFBO0VBaENKO0VBb0NJO0lBQ0UsU0FBQTtFQWxDTjtFQW9DSTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VBbENOO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBbkNaO0VBcUNVO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFuQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3NlbGVjdC1kaXJlY3Rpb24vc2VsZWN0LWRpcmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jaGVhcFRyaXBTdHlsZXMvc3R5bGVzLnNjc3NcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbm1hdC1vcHRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5kaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpdi5tZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcblxyXG4gICAgLkxvbmdTbG9nYW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICBzZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGRpdi5lcnJvciB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdhcm4pO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveFNpemluZyhib3JkZXItYm94KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKHZhcigtLWNvbG9yLXByaW1hcnkpLCAycmVtLCBub3JtYWwsIGN1cnNpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZC52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtZm9ybS1maWVsZC5pbnZhbGlkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci13YXJuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuZGVsaXZlcnlNb2RlIHtcclxuICBmb3JtIHtcclxuICAgIGRpdi5hY3Rpb25zIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgRGVza3RvcCB7XHJcbiAgZGl2Lm1haW5Db250YWluZXJ7XHJcbiAgICBcclxuICBkaXYubWVzc2FnZXtcclxuICAgIFxyXG4gXHJcbiAgLkxvbmdTbG9nYW57XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbn1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIExhcmdlIHtcclxuIFxyXG4gIGRpdi5tYWluQ29udGFpbmVyIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBpbmNsdWRlIFNtYWxsIHtcclxuICBkaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkaXYuc2VhcmNoTW9kZSB7XHJcbiAgICAubWF0LWF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlIHtcclxuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFNtYWxscGhvbmVzIHtcclxuICBkaXYubWFpbkNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGl2Lm1lc3NhZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMXJlbTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0wLjVyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZC5zdGFydFBvaW50IHtcclxuICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmFycm93cyB7XHJcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmRlbGl2ZXJ5TW9kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBkaXYubWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5mb3JtSW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQGluY2x1ZGUgUGhvbmVzIHtcclxuXHJcbiAgXHJcbiAgZGl2Lm1haW5Db250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAvLyBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMC41cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZGl2LmZvcm1JbmZvIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXYuaW5wdXQge1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQuc3RhcnRQb2ludCB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYuYWN0aW9ucyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuZGVsaXZlcnlNb2RlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGRpdi5tZXNzYWdlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBkaXYuZm9ybUluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIGRpdi5pbnB1dCB7XHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAvLyAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms 1300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-select-direction',
                templateUrl: './select-direction.component.html',
                styleUrls: ['./select-direction.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('insertRemoveTrigger2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms 1300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] }, { type: _select_service__WEBPACK_IMPORTED_MODULE_11__["SelectService"] }, { type: _error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { startPointInputEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['startPointInput', { static: false }]
        }], endPointInputEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['endPointInput', { static: false }]
        }], nameParagraph: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nameText', { static: false }]
        }] }); })();


/***/ }),

/***/ "dZhj":
/*!*********************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.module.ts ***!
  \*********************************************************/
/*! exports provided: TripDirectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionModule", function() { return TripDirectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "dUNL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-direction.component */ "jEWW");
/* harmony import */ var _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-direction-routing.module */ "SqVX");








// import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
class TripDirectionModule {
}
TripDirectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TripDirectionModule });
TripDirectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TripDirectionModule_Factory(t) { return new (t || TripDirectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TripDirectionModule, { declarations: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__["SelectDirectionComponent"], _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__["TripDirectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_2__["SelectDirectionComponent"], _trip_direction_component__WEBPACK_IMPORTED_MODULE_5__["TripDirectionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _trip_direction_routing_module__WEBPACK_IMPORTED_MODULE_6__["TripDirectionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "e8Bi":
/*!************************************!*\
  !*** ./src/app/links/link-card.ts ***!
  \************************************/
/*! exports provided: LinkCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCard", function() { return LinkCard; });
class LinkCard {
    constructor(title, link, description) {
        this.title = title;
        this.link = link;
        this.description = description;
        this.icolink = 'https://www.google.com/s2/favicons?domain=' + link;
    }
}


/***/ }),

/***/ "gX/U":
/*!*************************************************************!*\
  !*** ./src/app/authors/data-table/data-table-datasource.ts ***!
  \*************************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DataTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "ggAr":
/*!**************************************************************!*\
  !*** ./src/app/search-result/store/search-result.reducer.ts ***!
  \**************************************************************/
/*! exports provided: searchResultReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResultReducer", function() { return searchResultReducer; });
/* harmony import */ var _search_result_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-result.actions */ "8EOA");

const initialState = {
    someVal: 'some attribute'
};
function searchResultReducer(state = initialState, action) {
    switch (action.type) {
        case _search_result_actions__WEBPACK_IMPORTED_MODULE_0__["SOME_ACTION"]:
            // do smth
            return Object.assign({}, state);
        default:
            return state;
    }
}


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");

























class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jEWW":
/*!************************************************************!*\
  !*** ./src/app/trip-direction/trip-direction.component.ts ***!
  \************************************************************/
/*! exports provided: TripDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDirectionComponent", function() { return TripDirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/trip-direction.actions */ "k/2q");
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip-direction.model */ "SAvh");
/* harmony import */ var _select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-direction/select-direction.component */ "dUNL");










class TripDirectionComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    onPopState(event) {
        this.store.dispatch(new _store_trip_direction_actions__WEBPACK_IMPORTED_MODULE_3__["SetMode"](_trip_direction_model__WEBPACK_IMPORTED_MODULE_4__["Modes"].SEARCH));
    }
    ngOnInit() { }
    toHomePage() {
        this.router.navigate(['/search']);
    }
}
TripDirectionComponent.ɵfac = function TripDirectionComponent_Factory(t) { return new (t || TripDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TripDirectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripDirectionComponent, selectors: [["app-trip-direction"]], hostBindings: function TripDirectionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function TripDirectionComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, template: function TripDirectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-select-direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_select_direction_select_direction_component__WEBPACK_IMPORTED_MODULE_5__["SelectDirectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ndiv.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9em;\n  color: white;\n  margin: 0%;\n  line-height: 1.5rem;\n  font-family: \"Anton\", sans-serif;\n  font-style: italic;\n  font-weight: lighter;\n  letter-spacing: 4px;\n}\n\n@media screen and (min-width: 360px) and (max-width: 500px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 359.99px) {\n  div.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 0.7em;\n    color: white;\n    margin: 0%;\n    line-height: 1.5rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kaXJlY3Rpb24vdHJpcC1kaXJlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY2hlYXBUcmlwU3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUM4R0M7RURyR0c7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBTEo7QUFDRjs7QUN5R0U7RUQ5RkU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBUko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlyZWN0aW9uL3RyaXAtZGlyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgJy4uLy4uL2NoZWFwVHJpcFN0eWxlcy9taXhpbnMuc2Nzcyc7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmRpdi5zbG9nYW4ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIFBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBTbWFsbHBob25lcyB7XHJcbiAgZGl2LnNsb2dhbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBib3JkZXJSYWRpdXMoJHRvcExlZnQsICR0b3BSaWdodCwgJGJvdHRvbUxlZnQsICRib3R0b21SaWdodCkge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICR0b3BMZWZ0ICR0b3BSaWdodCAkYm90dG9tTGVmdCAkYm90dG9tUmlnaHQ7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHRvcExlZnQgJHRvcFJpZ2h0ICRib3R0b21MZWZ0ICRib3R0b21SaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAkdG9wTGVmdCAkdG9wUmlnaHQgJGJvdHRvbUxlZnQgJGJvdHRvbVJpZ2h0O1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyUmFkKCR2YWwpIHtcclxuICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoJHZhbCwgJHZhbCwgJHZhbCwgJHZhbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3hTaXppbmcoJGJveFNpemluZykge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveFNpemluZztcclxuICBib3gtc2l6aW5nOiAkYm94U2l6aW5nO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udFNpemUsICRmb250V2VpZ2h0LCAkZm9udFN0eWxlKSB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogJGZvbnRTdHlsZTtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiAkZm9udFN0eWxlO1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcclxuICAgIGZvbnQtc3R5bGU6ICRmb250U3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94U2hhZG93KCRoTGVuZ3RoLCAkdkxlbmd0aCwgJGJsdXJSLCAkc3ByZWFkUikge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGhMZW5ndGggJHZMZW5ndGggJGJsdXJSICRzcHJlYWRSIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAkaExlbmd0aCAkdkxlbmd0aCAkYmx1clIgJHNwcmVhZFIgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuQG1peGluIERlc2t0b3Age1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuQG1peGluIFhMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBMYXJnZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gTWVkaXVtIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kICAobWF4LXdpZHRoOiAxMjc5Ljk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gVGFiTGFuZHNjYXBlIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAgIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OS45OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIFRhYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIGFuZCAgKG1heC13aWR0aDogODM5Ljk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIFdlYlBvcnRyYWl0IHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBXZWJMYW5kc2NhcGUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAgKG1pbi13aWR0aDogMTI4MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kICAobWF4LXdpZHRoOiA5NTkuOTlweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBYU21hbGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBIYW5kU2V0UG9ydHJhaXQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1OTkuOTlweCkgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gSGFuZFNldExhbmRTY2FwZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDk1OS45OXB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gUGhvbmVzIHtcclxuIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gfVxyXG59XHJcblxyXG5AbWl4aW4gU21hbGxwaG9uZXMge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OS45OXB4KSB7XHJcbiAgICAgICBAY29udGVudDtcclxuICB9XHJcbiB9XHJcblxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TripDirectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trip-direction',
                templateUrl: './trip-direction.component.html',
                styleUrls: ['./trip-direction.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:popstate', ['$event']]
        }] }); })();


/***/ }),

/***/ "k/2q":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.actions.ts ***!
  \****************************************************************/
/*! exports provided: SET_START_POINT, SET_END_POINT, GET_START_POINT, GET_END_POINT, GET_AUTOCOMPLETE, SET_START_POINT_AUTOCOMPLETE, SET_END_POINT_AUTOCOMPLETE, GET_ROUTS, SET_ROUTS, AUTOCOMPLETE_FAIL, CLEAN_DATA, SET_MODE, GO_HOME, SetStartPoint, SetEndPoint, GetStartPoint, GetEndPoint, GetAutocomplete, SetStartPointAutocomplete, SetEndPointAutocomplete, GetRouts, SetRouts, AutocompleteFail, CleanData, SetMode, GoHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_START_POINT", function() { return SET_START_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_END_POINT", function() { return SET_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_START_POINT", function() { return GET_START_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_END_POINT", function() { return GET_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTOCOMPLETE", function() { return GET_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_START_POINT_AUTOCOMPLETE", function() { return SET_START_POINT_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_END_POINT_AUTOCOMPLETE", function() { return SET_END_POINT_AUTOCOMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ROUTS", function() { return GET_ROUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ROUTS", function() { return SET_ROUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_FAIL", function() { return AUTOCOMPLETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_DATA", function() { return CLEAN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODE", function() { return SET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO_HOME", function() { return GO_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPoint", function() { return SetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPoint", function() { return SetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartPoint", function() { return GetStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEndPoint", function() { return GetEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutocomplete", function() { return GetAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStartPointAutocomplete", function() { return SetStartPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEndPointAutocomplete", function() { return SetEndPointAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRouts", function() { return GetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRouts", function() { return SetRouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFail", function() { return AutocompleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanData", function() { return CleanData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMode", function() { return SetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoHome", function() { return GoHome; });
const SET_START_POINT = '[TripDirection] Set startPoint';
const SET_END_POINT = '[TripDirection] Set endPoint';
const GET_START_POINT = '[TripDirection] Get startPoint';
const GET_END_POINT = '[TripDirection] Get endPoint';
const GET_AUTOCOMPLETE = '[TripDirection] Get Autocomplete';
const SET_START_POINT_AUTOCOMPLETE = '[TripDirection] Set startPointAutocomplete';
const SET_END_POINT_AUTOCOMPLETE = '[TripDirection] Set endPointAutocomplete';
const GET_ROUTS = '[TripDirection] Get Routs';
const SET_ROUTS = '[TripDirection] Set Routs';
const AUTOCOMPLETE_FAIL = '[TripDirection] Autocomplete Fail';
const CLEAN_DATA = '[TripDirection] Clean Data';
const SET_MODE = '[TripDirection] Set Mode';
const GO_HOME = '[TripDirection] Go Home';
class SetStartPoint {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_START_POINT;
    }
}
class SetEndPoint {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_END_POINT;
    }
}
class GetStartPoint {
    constructor() {
        this.type = GET_START_POINT;
    }
}
class GetEndPoint {
    constructor() {
        this.type = GET_END_POINT;
    }
}
class GetAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_AUTOCOMPLETE;
    }
}
class SetStartPointAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_START_POINT_AUTOCOMPLETE;
    }
}
class SetEndPointAutocomplete {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_END_POINT_AUTOCOMPLETE;
    }
}
class GetRouts {
    constructor() {
        this.type = GET_ROUTS;
        console.log("GEt ROUTS Constructor");
    }
}
class SetRouts {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ROUTS;
    }
}
class AutocompleteFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTOCOMPLETE_FAIL;
    }
}
class CleanData {
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAN_DATA;
    }
}
class SetMode {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_MODE;
    }
}
class GoHome {
    constructor() {
        this.type = GO_HOME;
    }
}


/***/ }),

/***/ "krUe":
/*!**********************************************!*\
  !*** ./src/app/no-page/no-page.component.ts ***!
  \**********************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoPageComponent.ɵfac = function NoPageComponent_Factory(t) { return new (t || NoPageComponent)(); };
NoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPageComponent, selectors: [["app-no-page"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc no page
         */
        const MSG_EXTERNAL_nopage$$SRC_APP_NO_PAGE_NO_PAGE_COMPONENT_TS_1 = goog.getMsg("Sorry, no such page");
        i18n_0 = MSG_EXTERNAL_nopage$$SRC_APP_NO_PAGE_NO_PAGE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u041D\u0430 \u0436\u0430\u043B\u044C, \u0442\u0430\u043A\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435\u043C\u0430\u0454";
    } return [[1, "mat-typography"], i18n_0]; }, template: function NoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLXBhZ2Uvbm8tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-page',
                templateUrl: './no-page.component.html',
                styleUrls: ['./no-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rFQM":
/*!***************************************************************!*\
  !*** ./src/app/search-result/search-result-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchResultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultRoutingModule", function() { return SearchResultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "ySb0");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.component */ "AvlM");






const routes = [
    {
        path: '', component: _search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
    },
    {
        path: 'logo', component: _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"],
    }
];
class SearchResultRoutingModule {
}
SearchResultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchResultRoutingModule });
SearchResultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchResultRoutingModule_Factory(t) { return new (t || SearchResultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "sCT4":
/*!****************************************************************!*\
  !*** ./src/app/trip-direction/store/trip-direction.reducer.ts ***!
  \****************************************************************/
/*! exports provided: tripDirectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripDirectionReducer", function() { return tripDirectionReducer; });
/* harmony import */ var _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-direction.model */ "SAvh");
/* harmony import */ var _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-direction.actions */ "k/2q");


const initialState = {
    startPoint: { id: 0, name: '' },
    endPoint: { id: 0, name: '' },
    startPointAutoComplete: [],
    endPointAutoComplete: [],
    paths: [],
    mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH,
    errorMessage: '',
    pathsAmount: 0,
    isLoading: false,
    reset: false,
    currentServer: 'server104',
    serverChanged: false
};
function tripDirectionReducer(state = initialState, action) {
    switch (action.type) {
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT"]:
            return Object.assign(Object.assign({}, state), { startPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT"]:
            return Object.assign(Object.assign({}, state), { endPoint: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_START_POINT_AUTOCOMPLETE"]:
            let newStartAutocompleteList = [];
            if (action.payload.length === 0) {
                newStartAutocompleteList = [...state.startPointAutoComplete];
            }
            else {
                newStartAutocompleteList = action.payload;
            }
            return Object.assign(Object.assign({}, state), { startPointAutoComplete: newStartAutocompleteList });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_END_POINT_AUTOCOMPLETE"]:
            let newEndAutocompleteList = [];
            if (action.payload.length === 0) {
                newEndAutocompleteList = [...state.endPointAutoComplete];
            }
            else {
                newEndAutocompleteList = action.payload;
            }
            return Object.assign(Object.assign({}, state), { endPointAutoComplete: newEndAutocompleteList });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_START_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_END_POINT"]:
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_AUTOCOMPLETE"]:
            if (state.reset) {
                return Object.assign(Object.assign({}, state), { reset: false });
            }
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ROUTS"]:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_ROUTS"]:
            const pathsAmount = action.payload.paths.length;
            const length1 = action.payload.paths.reduce((sum, current) => {
                return sum + current.details.direct_paths.length;
            }, 0);
            const res = length1 + pathsAmount;
            return Object.assign(Object.assign({}, state), { paths: [...action.payload.paths], startPoint: action.payload.endPoints.from, endPoint: action.payload.endPoints.to, mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].DELIVERY, pathsAmount: res, isLoading: false });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_FAIL"]:
            let server = 'server68';
            if (state.currentServer == 'server104') {
                //  server = Server.SERVER104;
            }
            return Object.assign({}, state);
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAN_DATA"]:
            const empty = { id: 0, name: '' };
            return Object.assign(Object.assign({}, state), { startPoint: empty, endPoint: empty, startPointAutoComplete: [], endPointAutoComplete: [], errorMessage: '' });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["SET_MODE"]:
            return Object.assign(Object.assign({}, state), { mode: action.payload });
        case _trip_direction_actions__WEBPACK_IMPORTED_MODULE_1__["GO_HOME"]:
            return Object.assign(Object.assign({}, state), { startPoint: { id: 0, name: '' }, endPoint: { id: 0, name: '' }, startPointAutoComplete: [], endPointAutoComplete: [], paths: [], mode: _trip_direction_model__WEBPACK_IMPORTED_MODULE_0__["Modes"].SEARCH, errorMessage: '', pathsAmount: 0, isLoading: false, reset: true });
        default:
            return state;
    }
}


/***/ }),

/***/ "ti1q":
/*!***********************************************************************!*\
  !*** ./src/app/search-result/path-details/capitalFirstLetter.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: CapitalFirstLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalFirstLetterPipe", function() { return CapitalFirstLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CapitalFirstLetterPipe {
    transform(value) {
        return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }
}
CapitalFirstLetterPipe.ɵfac = function CapitalFirstLetterPipe_Factory(t) { return new (t || CapitalFirstLetterPipe)(); };
CapitalFirstLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalFirstLetter", type: CapitalFirstLetterPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalFirstLetterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'capitalFirstLetter' }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-page/no-page.component */ "krUe");







const routes = [
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    //  { path: 'main',component: HeaderComponent},
    { path: '', redirectTo: '/search/myPath/logo', pathMatch: 'full' },
    {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./trip-direction/trip-direction.module */ "dZhj")).then((m) => m.TripDirectionModule),
    },
    {
        path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"]
    },
    /*  {
      path: '',
      component: HeaderComponent,
      children: [
        {
          path: 'search',
          //   canActivate: [SearchResultGuard],
          loadChildren: () =>
            import('./trip-direction/trip-direction.module').then(
              (m) => m.TripDirectionModule
            ),
        },
      ],
    }, */
    { path: '**', component: _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_4__["NoPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vrIs":
/*!*******************************************************!*\
  !*** ./src/app/search-result/search-result.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultModule", function() { return SearchResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.component */ "AvlM");
/* harmony import */ var _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-details/path-details.component */ "M1wl");
/* harmony import */ var _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-map/path-map.component */ "RM3O");
/* harmony import */ var _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path-details/capitalFirstLetter.pipe */ "ti1q");
/* harmony import */ var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result-routing.module */ "rFQM");









class SearchResultModule {
}
SearchResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchResultModule });
SearchResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchResultModule_Factory(t) { return new (t || SearchResultModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultModule, { declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
        _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"],
        _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalFirstLetterPipe"],
        _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"],
                    _path_details_path_details_component__WEBPACK_IMPORTED_MODULE_4__["PathDetailsComponent"],
                    _path_details_capitalFirstLetter_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalFirstLetterPipe"],
                    _path_map_path_map_component__WEBPACK_IMPORTED_MODULE_5__["PathMapComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ySb0":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 1, vars: 0, consts: [["src", "assets\\images\\Logo_ChT_2.png", "alt", "logo", 1, "center"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: [".center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map