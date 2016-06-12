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
var signals_service_1 = require('./signals.service');
var SignalListComponent = (function () {
    function SignalListComponent(signalsService) {
        this.signalsService = signalsService;
        this.mode = 'Observable';
    }
    SignalListComponent.prototype.ngOnInit = function () { this.getMockSignals(); };
    SignalListComponent.prototype.getSignals = function () {
        var _this = this;
        this.signalsService.getSignals()
            .subscribe(function (signals) { return _this.signals = signals; }, function (error) { return _this.errorMessage = error; });
    };
    // for testing synchronously loading from exported arr
    SignalListComponent.prototype.getMockSignals = function () {
        this.signals = this.signalsService.getMockSignals();
        console.log(this.signals);
    };
    SignalListComponent = __decorate([
        core_1.Component({
            selector: 'signal-list',
            template: "\n\t\t<h3>  signal-list componenet  </h3>\n\n\t\t<ul>\n\t\t\t<li *ngFor=\"let signal of signals\">\n\t\t\t\t{{ signal.category }} : {{ signal.intensity }}\n\t\t\t</li>\n\t\t</ul>\n\n\t",
            directives: [],
            providers: [signals_service_1.SignalsService]
        }), 
        __metadata('design:paramtypes', [signals_service_1.SignalsService])
    ], SignalListComponent);
    return SignalListComponent;
}());
exports.SignalListComponent = SignalListComponent;
//# sourceMappingURL=signal-list.component.js.map