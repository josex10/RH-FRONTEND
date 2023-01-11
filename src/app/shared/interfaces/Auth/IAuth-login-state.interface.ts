import { ISystemUser } from "../ISystem-user/ISystem-user";

export interface IAuthLoginState {
    systemUser: ISystemUser | undefined;
}