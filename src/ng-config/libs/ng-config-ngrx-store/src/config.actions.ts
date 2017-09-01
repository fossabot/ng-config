import { Action } from '@ngrx/store';

import { ConfigState } from './config-state.model';

// ReSharper disable once InconsistentNaming
export const CONFIG_INITIALIZE = '[Config] Initialize';

export class ConfigInitialize implements Action {
    readonly type = CONFIG_INITIALIZE;

    constructor(public payload: ConfigState) { }
}

export type ConfigActions = | ConfigInitialize;
