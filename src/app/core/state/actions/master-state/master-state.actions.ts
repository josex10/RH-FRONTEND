import { createAction, props } from '@ngrx/store';
import { TMasterState } from 'src/app/shared/types';

export const masterStateListAction = createAction(
    '[Master State List Action] Get all Master States.',
    props<{countryId: number}>()
);

export const masterStateListActionSuccess = createAction(
    '[Master State List Action] Get all Master States Success.',
    props<{masterStateList: TMasterState[]}>()
);