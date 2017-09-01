import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import { configReducer, ConfigState } from '@bizappframework/ng-config-ngrx-store';
import { environment } from '../../environments/environment';

export interface State {
    configReducer: ConfigState;
}

export const reducers: ActionReducerMap<State> = {
    configReducer: configReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
