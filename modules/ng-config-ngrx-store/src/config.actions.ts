import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
    Load = '[Config] Load',
    LoadSuccess = '[Config] Load Success',
}

export class Load implements Action {
    // tslint:disable-next-line:no-reserved-keywords
    readonly type = ConfigActionTypes.Load;

    constructor(public source: string) { }
}

export class LoadSuccess implements Action {
    // tslint:disable-next-line:no-reserved-keywords
    readonly type = ConfigActionTypes.LoadSuccess;

    // tslint:disable-next-line:no-any
    constructor(public payload: { [key: string]: any }) { }
}

export type ConfigActions =
    | Load
    | LoadSuccess;
