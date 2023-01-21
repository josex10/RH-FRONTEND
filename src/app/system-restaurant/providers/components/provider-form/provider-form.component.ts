import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { masterStateListAction } from 'src/app/core/state/actions';
import { AppState } from 'src/app/core/state/app.state';
import { masterStateListSelector, providerListSelector, systemCompanyInformationSelector } from 'src/app/core/state/selectors';
import { EGeneralFormAction } from 'src/app/shared/enums';
import { TProvider, TSharedSelect } from 'src/app/shared/types';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.scss']
})
export class ProviderFormComponent implements OnInit {

  @Input('input-provider-id') inputProviderId?: string;
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
    frmCtrlIsActive: new FormControl(false)
  });

  // systemCountryId$ = new Observable<number>;
  public systemCountryId?: number;
  public systemStateSelectData: TSharedSelect[] = [];
  public systemProvider?: TProvider;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    
    
    
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

  ngOnChanges(changes: any) {
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
    if(this.inputFrmAction === EGeneralFormAction.EDIT){
      this.store.select(providerListSelector).subscribe(systemProviders => {
        systemProviders.forEach(provider => {
          
          if(provider.clm_id === Number(this.inputProviderId)){
            this.frmGroupProvider.patchValue({
              frmCtrlIdMasterState: String(provider.clm_id_master_state),
              frmCtrlName: provider.clm_name,
              frmCtrlEmail: provider.clm_email,
              frmCtrlPhone: provider.clm_phone,
              frmCtrlAddress: provider.clm_address,
              frmCtrlTaxNumber: provider.clm_tax_number,
              frmCtrlDescription: provider.clm_description,
              frmCtrlIsActive: provider.clm_is_active
            });
          }
        })
      });
    }
  }

}
