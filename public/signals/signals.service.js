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
var Observable_1 = require('rxjs/Observable');
var mock_signals_1 = require('./mock-signals');
var SignalsService = (function () {
    function SignalsService(http) {
        this.http = http;
        // private signalsUrl = './app/signals/mock-signals';  // URL to web API
        this.signalsUrl = './app/signals/mock-signals.json'; // URL to JSON file; doesn't exist
    }
    SignalsService.prototype.getMockSignals = function () {
        return mock_signals_1.SIGNALS;
    };
    SignalsService.prototype.getSignals = function () {
        console.log("getSignals in signalsService worked but it don't have shit yet");
        return this.http.get(this.signalsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SignalsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SignalsService.prototype.handleError = function (error) {
        // use a remote logging infrastructure
        // dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SignalsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SignalsService);
    return SignalsService;
}());
exports.SignalsService = SignalsService;
//# sourceMappingURL=signals.service.js.map