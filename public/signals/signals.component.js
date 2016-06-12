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
var signal_list_component_1 = require('./signal-list.component');
var SignalsComponent = (function () {
    function SignalsComponent() {
    }
    SignalsComponent = __decorate([
        core_1.Component({
            selector: 'signals',
            template: "\n\t\t<h4> Signals component template </h4>\n\n\t\t<signal-list></signal-list>\n\t",
            directives: [signal_list_component_1.SignalListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SignalsComponent);
    return SignalsComponent;
}());
exports.SignalsComponent = SignalsComponent;
//# sourceMappingURL=signals.component.js.map