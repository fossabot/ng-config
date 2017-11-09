import { ConfigState } from './config-state.model';
import { CONFIG_INITIALIZE } from './config.actions';

export const initialState: ConfigState = {
    data: {},
    loaded: false,
    source: ''
};

export function configReducer(state: ConfigState = initialState, action: any): ConfigState {
    switch (action.type) {
        case CONFIG_INITIALIZE:
            {
                return {
                    ...state,
                    data: action.payload.data,
                    loaded: action.payload.loaded,
                    source: action.payload.source
                };
            }
        default:
            {
                return state;
            }
    }
}

export const getConfigData = (state: ConfigState) => state.data;
export const getConfigLoaded = (state: ConfigState) => state.loaded;
