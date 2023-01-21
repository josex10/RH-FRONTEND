import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { providerListSelector } from '../../../core/state/selectors';
import { TProvider, TTableColumn } from 'src/app/shared/types';
import { providerListAction } from '../../../core/state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  providerList$ = new Observable<any[]>;
  providersTableColumns: TTableColumn[] = [];


  constructor(private store: Store<any>, private router: Router){
    this.store.dispatch(providerListAction({companyId:3}));
  }

  ngOnInit(): void {
    this.providerList$ = this.store.select(providerListSelector).pipe(map(provider => {
      const providerFinalList = provider.map( tmpProvider => {
        return  {
          ...tmpProvider,
          state_name: tmpProvider.state.clm_name,
        }
      })
      
      
      return providerFinalList
    }));
    this.initializeColumns();
  }

  initializeColumns(): void {
    this.providersTableColumns = [
      {
        name: 'Nombre',
        dataKey: 'clm_name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Identificación',
        dataKey: 'clm_tax_number',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Correo',
        dataKey: 'clm_email',
        position: 'left',
        isSortable: false
      },
      {
        name: 'Telefono',
        dataKey: 'clm_phone',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Estado',
        dataKey: 'state_name',
        position: 'left',
        isSortable: false
      },
      {
        name: 'Descripción',
        dataKey: 'clm_description',
        position: 'left',
        isSortable: false
      },
      
    ];
  }

  selectedRow(row: any){
    this.router.navigate([`/system-restaurant/v1/providers/edit/${row.clm_id}`]);
  }

}
