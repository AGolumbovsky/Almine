import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Signal } from './signal';
import { SIGNALS } from './mock-signals';

@Injectable()
export class SignalsService {

	constructor (private http: Http) {}

	// private signalsUrl = './app/signals/mock-signals';  // URL to web API
	private signalsUrl = './app/signals/mock-signals.json'; // URL to JSON file; doesn't exist

	getMockSignals() {
		return SIGNALS;
	}

	getSignals (): Observable<Signal[]> {

	console.log("getSignals in signalsService worked but it don't have shit yet")
    return this.http.get(this.signalsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  	}

	 private extractData(res: Response) {
    	let body = res.json();
    	return body.data || {};
  	}

    private handleError (error: any) {
    // use a remote logging infrastructure
    // dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  
	}
}

