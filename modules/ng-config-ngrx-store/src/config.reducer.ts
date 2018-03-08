import { ConfigState } from './config-state';
import { ConfigActions, ConfigActionTypes } from './config.actions';

export const initialState: ConfigState = {
    data: {},
    source: '',
    loading: false,
    loaded: false,
};

export function configReducer(state: ConfigState = initialState, action: ConfigActions): ConfigState {
    switch (action.type) {
        case ConfigActionTypes.Load:
            {
                return {
                    ...state,
                    source: action.source,
                    loading: true
                };
            }
        case ConfigActionTypes.LoadSuccess:
            {
                return {
                    ...state,
                    data: { ...action.payload },
                    loading: false,
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
