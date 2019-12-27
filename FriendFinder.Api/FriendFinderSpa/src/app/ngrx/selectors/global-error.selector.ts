import * as fromRoot from '../state/app.state';
import * as fromGlobalError from '../reducers/global-error.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    errors: fromGlobalError.ErrorState;
}

const getErrorFeatureState = createFeatureSelector<fromGlobalError.ErrorState>('errors');

export const getError = createSelector(
    getErrorFeatureState,
    state => state.error
);