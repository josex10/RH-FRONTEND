import { createAction, props } from '@ngrx/store';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { ISystemUser } from 'src/app/shared/interfaces/ISystem-user/ISystem-user';

export const authSystemUserLoginAction = createAction(
    '[Auth System User Login] Login the system user.',
    props<{userLogingAuth: AnyUserLoginAuth}>()
);

export const authSystemUserLoginSuccessAction = createAction(
    '[Auth System User Login] Login Success.',
    props<{systemUser: ISystemUser}>()
);

export const authSystemUserLogoutAction = createAction(
    '[Auth System User Logut] Logout.'
);

export const authSystemUserLogoutSuccessAction = createAction(
    '[Auth System User Logout] Logout Success.'
);

export const authSystemUserReload = createAction(
    '[Auth System User Reload] Reload.'
);

export const authSystemUserReloadSuccess = createAction(
    '[Auth System User Reload] Reload Success.',
    props<{systemUser: ISystemUser}>()
);