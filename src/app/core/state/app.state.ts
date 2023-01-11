import { ISystemUserState } from "src/app/shared/interfaces/ISystem-user/ISystem-user-state.interface";
import { ActionReducerMap } from '@ngrx/store';
import { IAuthLoginState } from "src/app/shared/interfaces/Auth/IAuth-login-state.interface";
import { authReducer } from "./reducers/Auth/auth.reducers";

export interface AppState {
    authLoginState: IAuthLoginState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
        authLoginState: authReducer
}