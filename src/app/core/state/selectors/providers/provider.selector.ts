import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';

export const selecProviderList = (state: AppState ) => state.providerListState;

export const providerListSelector = createSelector (
    selecProviderList,
    (state) => state
)