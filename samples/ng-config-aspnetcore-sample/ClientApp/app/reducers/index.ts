/* tslint:disable:no-console */

import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'environments/environment';

// tslint:disable-next-line:no-empty-interface
export interface State { }

export const reducers: ActionReducerMap<State> = {};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    // tslint:disable-next-line:no-any
    return (state: State, action: any): State => {
        try {
            console.group(action.type);
        } catch (e) {
            console.log(action.type);
        }

        const nextState = reducer(state, action);

        console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', state);
        console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
        console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

        try {
            console.groupEnd();
        } catch (e) {
            console.log('—— log end ——');
        }

        return nextState;
    };
}

export const metaReducers: MetaReducer<State>[] = environment.production
    ? [] : [logger];
