import { ActionReducerMap } from '@ngrx/store';
import { IAuthLoginState } from "src/app/shared/interfaces/Auth/IAuth-login-state.interface";
import { authReducer } from "./reducers/Auth/auth.reducers";
import { TMasterState, TProvider, TSystemCompanyState } from "src/app/shared/types";
import { providerListReducer } from "./reducers/providers/provider.reducers";
import { masterStateListReducer } from "./reducers/master-state/master-state.reducers";
import { systemCompanyReducer } from './reducers';

export interface AppState {
    authLoginState: IAuthLoginState,
    providerListState: TProvider[],
    masterStateState: TMasterState[],
    systemCompanyState: TSystemCompanyState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
        authLoginState: authReducer,
        providerListState: providerListReducer,
        masterStateState: masterStateListReducer,
        systemCompanyState: systemCompanyReducer
}