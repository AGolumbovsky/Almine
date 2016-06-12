import { Component, OnInit } from '@angular/core';

import { Signal } from './signal';
import { SignalsComponent } from './signals.component';
import { SignalsService } from './signals.service';


@Component({

	selector: 'signal-list', 

	template: 
	`
		<h3>  signal-list componenet  </h3>

		<ul>
			<li *ngFor="let signal of signals">
				{{ signal.category }} : {{ signal.intensity }}
			</li>
		</ul>

	`,

	directives: [],
	providers: [SignalsService]

})

export class SignalListComponent implements OnInit{

	title: 'signal list component';

	constructor (private signalsService: SignalsService) {}

	errorMessage: string;
 	signals: Signal[];
 	mode = 'Observable';

 	ngOnInit() { this.getMockSignals(); }

	
	getSignals() {

		this.signalsService.getSignals()
			.subscribe(
			signals => this.signals = signals,
			error => this.errorMessage = <any>error);
	}

	// for testing synchronously loading from exported arr
	getMockSignals() {
		this.signals = this.signalsService.getMockSignals();
		console.log(this.signals)
	}
  }


	



