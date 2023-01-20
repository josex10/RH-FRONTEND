import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { masterStateListAction } from 'src/app/core/state/actions';
import { AppState } from 'src/app/core/state/app.state';
import { masterStateListSelector, systemCompanyInformationSelector } from 'src/app/core/state/selectors';
import { EGeneralFormAction } from 'src/app/shared/enums';
import { TProvider, TSharedSelect } from 'src/app/shared/types';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.scss']
})
export class ProviderFormComponent implements OnInit {

  @Input('input-provider') inputProvider?: TProvider;
  @Input('input-frm-action') inputFrmAction: EGeneralFormAction = EGeneralFormAction.NEW;

  public title: string = 'Agregar un nuevo Provedor';

  public frmGroupProvider = new  FormGroup({
    frmCtrlIdMasterState: new FormControl("", [Validators.required]),
    frmCtrlName: new FormControl("", [Validators.required, Validators.maxLength(60)]),
    frmCtrlEmail: new FormControl("", [Validators.email, Validators.maxLength(60)]),
    frmCtrlPhone: new FormControl("", [Validators.maxLength(15)]),
    frmCtrlAddress: new FormControl("", [Validators.maxLength(120)]),
    frmCtrlTaxNumber: new FormControl("", [Validators.maxLength(25)]),
    frmCtrlDescription: new FormControl("", [Validators.maxLength(120)]),
    frmCtrlIsActive: new FormControl("")
  });

  // systemCountryId$ = new Observable<number>;
  systemCountryId?: number;
  systemStateSelectData: TSharedSelect[] = [];

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    //TODO: GET THE STATE DATE 
    // this.systemCountryId$ = this.store.select(systemCompanyInformationSelector).pipe(map(company => company?.clm_id_master_country!));
    this.store.select(systemCompanyInformationSelector).subscribe(systemCompany => {
      this.systemCountryId = systemCompany?.clm_id_master_country;
      if(this.systemCountryId){
        this.store.dispatch(masterStateListAction({countryId:this.systemCountryId!}));
      }
    });

    this.store.select(masterStateListSelector).subscribe(systemStateArr => {
      this.systemStateSelectData = systemStateArr.map(data => {
        return {id: data.clm_id, value: data.clm_name}
      })
    });

    //TODO: CHECK IF THE FORM ACTION IS NEW O EDIT
    //TODO: SET THE TPROVIDER DATA TO THE FORM
    
  }

  fnSaveChanges(){
    console.log(this.frmGroupProvider.value)
    if(this.frmGroupProvider.valid){
      // this.store.dispatch(authSystemUserLoginAction({userLogingAuth:this.anyUserLoginAuth}));
    }
  }

  get getFrmGroupProviderControls() {
    return this.frmGroupProvider.controls;
  }

  sliderChange($event:any){
    console.log($event);
  }

}
