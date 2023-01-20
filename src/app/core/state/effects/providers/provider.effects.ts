import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProviderService } from 'src/app/core/services';
import { TProvider } from 'src/app/shared/types';
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
 
  constructor(
    private actions$: Actions,
    private providerService: ProviderService
  ) {}
}