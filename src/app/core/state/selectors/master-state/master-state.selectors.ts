import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';

export const selectMasterStateList = (state: AppState ) => state.masterStateState;

export const masterStateListSelector = createSelector (
    selectMasterStateList,
    (state) => state
)