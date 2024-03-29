import { createAction, props } from '@ngrx/store';
import { TProvider } from 'src/app/shared/types';

export const providerListAction = createAction(
    '[Provider List Action] Get all Providers.',
    props<{companyId: number}>()
);

export const providerListActionSuccess = createAction(
    '[Provider List Action Success] Get all Providers success.',
    props<{providerList: TProvider[]}>()
);

export const providerEditAction = createAction(
    '[Provider Edit Action] Edit Provider.',
    props<{provider: TProvider}>()
);

export const providerEditActionSuccess = createAction(
    '[Provider Edit Action] Edit Provider Success.'
);