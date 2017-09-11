import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import { configReducer, ConfigState } from '@bizappframework/ng-config-ngrx-store';


export interface State {
    config: ConfigState;
}

export const reducers: ActionReducerMap<State> = {
    config: configReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];
