import { Injectable } from '@angular/core';
import { TValidationMessage } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {

  constructor() { }

  public getValidationMsg(validationId: string ): string{
    let obj = this.errorMessages.find(obj => obj.id === validationId);
    if(obj) return obj.value
    return 'Error del Sistema...';
  }

  private errorMessages: TValidationMessage[] = [
    {id: 'required-msg', value: 'El campo es requerido.'},
    {id: 'input-email', value: 'El campo es requerido.'}
  ]
}
