import { IApiResponse } from "../IApiResponse";
import { ISystemUser } from "./ISystem-user";

export interface ISystemUserLoginResponse extends IApiResponse{
    data: ISystemUserLoginData;
}

interface ISystemUserLoginData{
    systemUser: ISystemUser;
    token: string;
}