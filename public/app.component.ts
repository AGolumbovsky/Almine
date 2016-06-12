import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { SignalsComponent } from './signals/signals.component';
import { SignalsService } from './signals/signals.service';
import { Signal } from './signals/signal';
// RxJS Observable operators
import './rxjs-operators';




@Component({
    
  selector: 'almine-app',
  template: `
  
  <h1> App component template </h1>

  <signals></signals>

  `,

  directives: [SignalsComponent],
  providers: [HTTP_PROVIDERS, SignalsService]

})

export class AppComponent {

    title: "What what";

    signals: Signal[];

    constructor(private signalsService: SignalsService) { }

	// getSignals() {

	// 	this.signalsService.getSignals()
	// 		.subscribe(
	// 		signals => this.signals = signals,
	// 		error => this.errorMessage = <any>error);
	// }

    // ngOninit() {
		// this.getSignals();
    // }
 }


