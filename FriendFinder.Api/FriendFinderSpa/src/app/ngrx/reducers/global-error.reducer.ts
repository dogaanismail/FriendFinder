import { GlobalErrorActions, GlobalErrorActionTypes } from '../actions/global-error.actions';

export interface ErrorState {
    error: any
}

const initialState: ErrorState = {
    error: null
};

export function globalErrorReducer(state = initialState, action: GlobalErrorActions): ErrorState {
    switch (action.type) {

        case GlobalErrorActionTypes.CreateGlobalError: {
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
}
