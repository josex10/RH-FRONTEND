import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  fnLogin(){
    if(this.loginForm.valid){
      console.log("Correct form");
      this.anyUserLoginAuth = {
        clm_username: this.loginForm.get('frmCtrlUsername')?.value, 
        clm_password: this.loginForm.get('frmCtrlPassword')?.value
      }
      this.authService.systemUserLogin(this.anyUserLoginAuth).subscribe(res => {
        this.authService.setToken(res.data.token);
        this.router.navigate(["/system-restaurant"]);
      });
    } else {
      console.log("inCorrect info");
    }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }



}
