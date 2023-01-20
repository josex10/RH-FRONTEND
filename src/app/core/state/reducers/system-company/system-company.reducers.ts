import { createReducer, on } from '@ngrx/store';
import { TSystemCompanyState } from 'src/app/shared/types';
import { systemCompanyActionSuccess } from '../../actions';

const initialState: TSystemCompanyState ={ systemCompany: undefined } ;

export const systemCompanyReducer = createReducer(
    initialState, 
    on(systemCompanyActionSuccess, (state, systemCompany) => {
        return systemCompany
    })
)