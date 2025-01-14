import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Traverser } from 'angular-traversal';
import { GrangeCore } from 'grange-core';
import { GrangeState } from './state';

@Injectable({
    providedIn: 'root'
})
export class Grange {

    constructor(
        public traverser: Traverser,
        public core: GrangeCore,
        public store: Store<GrangeState>,
    ) {
        this.store.dispatch({ type: '[Traversing] Watch'});
        this.core.auth.isAuthenticated.subscribe(auth => {
            if (!auth.state) {
                this.traverser.traverse('./@@login');
            }
        });
    }
}
