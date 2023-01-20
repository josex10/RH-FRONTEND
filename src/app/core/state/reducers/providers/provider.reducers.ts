import { createReducer, on } from '@ngrx/store';
import { TProvider } from 'src/app/shared/types';
import { providerListActionSuccess } from '../../actions';

const initialState: TProvider[] = [];

export const providerListReducer = createReducer(
    initialState, 
    on(providerListActionSuccess, (state, list) => {
        return list.providerList
    })
)