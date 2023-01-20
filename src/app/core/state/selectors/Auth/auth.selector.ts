import { createSelector } from '@ngrx/store';
import { IAuthLoginState } from 'src/app/shared/interfaces/Auth/IAuth-login-state.interface';
import { AppState } from '../../app.state';

export const selectAuthFeature = (state: AppState ) => state.authLoginState;

export const selectAuthLoginUserInformation = createSelector (
    selectAuthFeature,
    (state:IAuthLoginState) => state.systemUser
)