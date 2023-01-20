import { createSelector } from '@ngrx/store';
import { TSystemCompanyState } from 'src/app/shared/types';
import { AppState } from '../../app.state';

export const selectCompanyFeature = (state: AppState ) => state.systemCompanyState;

export const systemCompanyInformationSelector = createSelector (
    selectCompanyFeature,
    (state: TSystemCompanyState) => state.systemCompany
);