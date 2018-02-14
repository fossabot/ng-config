import { ConfigState } from './config-state';
import { ConfigActions, ConfigActionTypes } from './config.actions';

export const initialState: ConfigState = {
    data: {},
    source: '',
    loaded: false,
};

export function configReducer(state: ConfigState = initialState, action: ConfigActions): ConfigState {
    switch (action.type) {
        case ConfigActionTypes.Load:
            {
                return {
                    ...state,
                    data: action.payload.data,
                    source: action.payload.source,
                    loaded: true
                };
            }
        case ConfigActionTypes.Reload:
            {
                return {
                    ...state,
                    data: action.payload.data,
                    source: action.payload.source,
                    loaded: true
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
