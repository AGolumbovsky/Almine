import { Component } from '@angular/core';

import { SignalListComponent } from './signal-list.component';

@Component({

	selector: 'signals',

	template: 
	`
		<h4> Signals component template </h4>

		<signal-list></signal-list>
	`,

	directives: [SignalListComponent]

})

export class SignalsComponent {

}