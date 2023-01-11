import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authSystemUserLoginAction } from 'src/app/core/state/actions/Auth/auth.actions';
import { ISystemUser } from 'src/app/shared/interfaces/ISystem-user/ISystem-user';
import { selectAuthLoginUserInformation } from 'src/app/core/state/selectors/Auth/auth.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private anyUserLoginAuth!: AnyUserLoginAuth;

  public loginForm = new  UntypedFormGroup({
    frmCtrlUsername: new UntypedFormControl("", [
      Validators.required,
      Validators.email
    ]),
    frmCtrlPassword: new UntypedFormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  fnLogin(){
    if(this.loginForm.valid){
      this.anyUserLoginAuth = {
        clm_username: this.loginForm.get('frmCtrlUsername')?.value, 
        clm_password: this.loginForm.get('frmCtrlPassword')?.value
      }
      this.store.dispatch(authSystemUserLoginAction({userLogingAuth:this.anyUserLoginAuth}));
      /*
      this.authService.systemUserLogin(this.anyUserLoginAuth).subscribe(res => {
        const systemUser: ISystemUser = res.data.systemUser;
        
        this.authService.setToken(res.data.token);
        this.router.navigate(["/system-restaurant"]);
      });
      */
    } else {
      console.log("inCorrect info");
    }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }



}
