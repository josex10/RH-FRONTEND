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