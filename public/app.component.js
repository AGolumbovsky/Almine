"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var signals_component_1 = require('./signals/signals.component');
var signals_service_1 = require('./signals/signals.service');
// RxJS Observable operators
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(signalsService) {
        this.signalsService = signalsService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'almine-app',
            template: "\n  \n  <h1> App component template </h1>\n\n  <signals></signals>\n\n  ",
            directives: [signals_component_1.SignalsComponent],
            providers: [http_1.HTTP_PROVIDERS, signals_service_1.SignalsService]
        }), 
        __metadata('design:paramtypes', [signals_service_1.SignalsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map