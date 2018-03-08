 export interface ConfigState {
    // tslint:disable-next-line:no-any
    data: {[key: string]: any};
    source: string;
    loading: boolean;
    loaded: boolean;
}
