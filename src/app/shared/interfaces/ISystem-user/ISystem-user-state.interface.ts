import { ISystemUser } from "./ISystem-user";

export interface ISystemUserState {
    loading: boolean;
    systemUsers: ReadonlyArray<ISystemUser>
}