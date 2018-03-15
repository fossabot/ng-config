import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
    Load = '[Config] Load',
    LoaderLoaded = '[Config] Loader Loaded',
    LoadSuccess = '[Config] Load Success'
}

export class Load implements Action {
    // tslint:disable-next-line:no-reserved-keywords
    readonly type = ConfigActionTypes.Load;

    // tslint:disable-next-line:no-any
    constructor(public source: string) { }
}

export class LoaderLoaded implements Action {
    // tslint:disable-next-line:no-reserved-keywords
    readonly type = ConfigActionTypes.LoaderLoaded;

    // tslint:disable-next-line:no-any
    constructor(public payload: {
        // tslint:disable-next-line:no-any
        data: { [key: string]: any };
        source: string;
    }) { }
}

export class LoadSuccess implements Action {
    // tslint:disable-next-line:no-reserved-keywords
    readonly type = ConfigActionTypes.LoadSuccess;

    // tslint:disable-next-line:no-any
    constructor(public payload: {
        // tslint:disable-next-line:no-any
        data: { [key: string]: any };
        source: string;
    }) { }
}

export type ConfigActions =
    | Load
    | LoaderLoaded
    | LoadSuccess;
