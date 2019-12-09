import { createFeatureSelector, createSelector } from '@ngrx/store';
const getErrorFeatureState = createFeatureSelector('errors');
export const getError = createSelector(getErrorFeatureState, state => state.error);
//# sourceMappingURL=global-error.selector.js.map