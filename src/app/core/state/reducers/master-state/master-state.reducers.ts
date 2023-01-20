import { createReducer, on } from "@ngrx/store";
import { TMasterState } from "src/app/shared/types";
import { masterStateListActionSuccess } from "../../actions/master-state/master-state.actions";


const initialState: TMasterState[] = [];

export const masterStateListReducer = createReducer(
    initialState, 
    on(masterStateListActionSuccess, (state, list) => {
        return list.masterStateList
    })
)