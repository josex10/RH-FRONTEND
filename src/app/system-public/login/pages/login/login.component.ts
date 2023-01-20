import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { Store } from '@ngrx/store';
import { authSystemUserLoginAction } from 'src/app/core/state/actions/Auth/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  private anyUserLoginAuth!: AnyUserLoginAuth;

  public loginForm = new  FormGroup({
    frmCtrlUsername: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    frmCtrlPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private store: Store) { }

  fnLogin(){
    if(this.loginForm.valid){
      this.anyUserLoginAuth = {
        clm_username: this.loginForm.get('frmCtrlUsername')?.value!, 
        clm_password: this.loginForm.get('frmCtrlPassword')?.value!
      }
      this.store.dispatch(authSystemUserLoginAction({userLogingAuth:this.anyUserLoginAuth}));
    }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }



}
