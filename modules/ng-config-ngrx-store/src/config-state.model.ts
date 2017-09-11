export interface ConfigState {
    data: {[key: string]: any} | null;
    loaded: boolean;
    source: string;
}
