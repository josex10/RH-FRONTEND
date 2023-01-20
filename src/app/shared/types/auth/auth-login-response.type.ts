import { ISystemUser, TSystemCompany } from "..";

export type AuthLoginResponse  = {
    access_token: string;
    refresh_token: string;
    systemUser: ISystemUser
    systemCompany: TSystemCompany
}