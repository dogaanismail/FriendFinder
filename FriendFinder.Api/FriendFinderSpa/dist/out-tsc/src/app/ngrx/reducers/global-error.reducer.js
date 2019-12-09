import { GlobalErrorActionTypes } from '../actions/global-error.actions';
const initialState = {
    error: null
};
export function globalErrorReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalErrorActionTypes.CreateGlobalError: {
            return Object.assign({}, state, { error: action.payload });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=global-error.reducer.js.map