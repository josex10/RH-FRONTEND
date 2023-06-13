import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { masterStateListAction, providerEditAction, providerListAction } from 'src/app/core/state/actions';
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

  public systemCountryId?: number;
  public systemStateSelectData: TSharedSelect[] = [];
  public systemProvider?: TProvider;
  public systemCompanyId?: number;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {    
  }

  fnSaveChanges(){
    if(!this.frmGroupProvider.valid) return;

    let newChanges: number = 0;

    const tmpProvider: TProvider = {
      clm_id: this.systemProvider?.clm_id!,
      clm_id_system_company: this.systemCompanyId!,
      clm_id_master_state: Number(this.getFrmGroupProviderControls['frmCtrlIdMasterState'].value),
      clm_name: this.getFrmGroupProviderControls['frmCtrlName'].value!,
      clm_is_active: (Number(this.getFrmGroupProviderControls['frmCtrlIsActive'].value) === 1)?true:false,
    }

    if(tmpProvider.clm_is_active !== this.systemProvider?.clm_is_active) newChanges++;

    if(this.fnCheckValidDataAndNewChanges(tmpProvider.clm_name, this.systemProvider?.clm_name)) newChanges++;

    if(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlEmail'].value!, this.systemProvider?.clm_email)){
      newChanges++;
      tmpProvider.clm_email = this.getFrmGroupProviderControls['frmCtrlEmail'].value!;
    }

    if(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlPhone'].value!, this.systemProvider?.clm_phone)){
      newChanges++;
      tmpProvider.clm_phone = this.getFrmGroupProviderControls['frmCtrlPhone'].value!;
    }

    if(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlAddress'].value!, this.systemProvider?.clm_address)){
      newChanges++;
      tmpProvider.clm_address = this.getFrmGroupProviderControls['frmCtrlAddress'].value!;
    }

    if(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlTaxNumber'].value!, this.systemProvider?.clm_tax_number)){
      newChanges++;
      tmpProvider.clm_tax_number = this.getFrmGroupProviderControls['frmCtrlTaxNumber'].value!;
    }
    console.log(typeof (this.getFrmGroupProviderControls['frmCtrlTaxNumber'].value!))
    console.log(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlTaxNumber'].value!, this.systemProvider?.clm_tax_number))

    if(this.fnCheckValidDataAndNewChanges(this.getFrmGroupProviderControls['frmCtrlDescription'].value!, this.systemProvider?.clm_description)){
      newChanges++;
      tmpProvider.clm_description = this.getFrmGroupProviderControls['frmCtrlDescription'].value!;
    }
    if(newChanges > 0 && this.inputFrmAction === EGeneralFormAction.EDIT){
      this.store.dispatch(providerEditAction({provider:tmpProvider}));
    }
    
  }

  fnCheckValidDataAndNewChanges(providerFormData: string, providerActualData: string | null = null): boolean {
    let response = false;

    if( providerFormData && typeof providerFormData === 'string')response = true;
    if(this.inputFrmAction === EGeneralFormAction.EDIT && typeof providerActualData === 'string' && providerFormData !== providerActualData) response = true;
    
    return response;
  }

  get getFrmGroupProviderControls() {
    return this.frmGroupProvider.controls;
  }

  sliderChange($event:boolean){
    this.frmGroupProvider.controls['frmCtrlIsActive'].setValue($event);
  }

  ngOnChanges(): void {

    this.store.select(systemCompanyInformationSelector).subscribe(systemCompany => {
      this.systemCountryId = systemCompany?.clm_id_master_country;
      this.systemCompanyId = systemCompany?.clm_id;
      if(this.systemCountryId){
        this.store.dispatch(masterStateListAction({countryId:this.systemCountryId!}));
      }
    });

    this.store.select(masterStateListSelector).subscribe(systemStateArr => {
      this.systemStateSelectData = systemStateArr.map(data => {
        return {id: data.clm_id, value: data.clm_name}
      })
    });

    if(this.inputFrmAction === EGeneralFormAction.EDIT){
      this.store.select(providerListSelector).subscribe(systemProviders => {
        systemProviders.forEach(provider => {
          if(provider.clm_id === Number(this.inputProviderId)){
            this.systemProvider = provider;
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
