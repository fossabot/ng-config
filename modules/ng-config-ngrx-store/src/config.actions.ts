import { Action } from '@ngrx/store';

import { ConfigState } from './config-state';

export enum ConfigActionTypes {
    Load = '[Config] Load',
    Reload = '[Config] Reload'
}

export class Load implements Action {
    readonly type = ConfigActionTypes.Load;

    constructor(public payload: ConfigState) { }
}

export class Reload implements Action {
    readonly type = ConfigActionTypes.Reload;

    constructor(public payload: ConfigState) { }
}

export type ConfigActions = Load | Reload;
