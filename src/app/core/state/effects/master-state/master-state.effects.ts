import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MasterStateService, ProviderService } from 'src/app/core/services';
import { TMasterState, TProvider } from 'src/app/shared/types';
import * as fromActions from '../../actions';
 
@Injectable()
export class MasterStateEffects {
 
  masterStateList$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.masterStateListAction),
    mergeMap(({countryId}) => this.masterStateService.fnFindAllMasterStatesByCountryId(countryId)
      .pipe(
        map((masterStateList: TMasterState[]) => {
            return fromActions.masterStateListActionSuccess({masterStateList});
        }),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private masterStateService: MasterStateService
  ) {}
}