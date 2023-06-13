import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProviderService } from 'src/app/core/services';
import { TProvider, TUpdateResult } from 'src/app/shared/types';
import * as fromActions from '../../actions';
 
@Injectable()
export class ProviderEffects {
 
  providerList$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.providerListAction),
    mergeMap(({companyId}) => this.providerService.fnFindAllSystemSuppliers(companyId)
      .pipe(
        map((providerList: TProvider[]) => {
            return fromActions.providerListActionSuccess({providerList});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  providerEdit$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.providerEditAction),
    mergeMap(({provider}) => this.providerService.fnEditProvider(provider)
      .pipe(
        map((result: TUpdateResult) => {
            return fromActions.providerListAction({companyId: provider.clm_id_system_company});
        }),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private providerService: ProviderService
  ) {}
}