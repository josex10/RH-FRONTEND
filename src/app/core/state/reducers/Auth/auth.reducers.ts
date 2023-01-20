import { createReducer, on } from '@ngrx/store';
import { IAuthLoginState } from 'src/app/shared/interfaces/Auth/IAuth-login-state.interface';
import { authSystemUserLoginAction, authSystemUserLoginSuccessAction, authSystemUserLogoutSuccessAction, authSystemUserReloadSuccess } from '../../actions/Auth/auth.actions';

export const initialState: IAuthLoginState = {
    systemUser: undefined
};

export const authReducer = createReducer(
    initialState, 
    on(authSystemUserLoginSuccessAction, (state, systemUser) => {
        return systemUser
    }),
    on(authSystemUserLogoutSuccessAction, (state) => {
        return state
    }),
    on(authSystemUserReloadSuccess, (state, systemUser) => {
        return systemUser
    }),
)