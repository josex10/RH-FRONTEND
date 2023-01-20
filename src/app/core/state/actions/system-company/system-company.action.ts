import { createAction, props } from '@ngrx/store';
import { TSystemCompany } from 'src/app/shared/types';

export const systemCompanyAction = createAction(
    '[System Company Action] Get System Company Information.',
    props<{userId: number}>()
);

export const systemCompanyActionSuccess = createAction(
    '[System Company Action] Get System Company Information Success.',
    props<{systemCompany: TSystemCompany}>()
);