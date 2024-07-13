import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public canShowPassword: boolean = false;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private sweetAlert: SweetAlertService,
    private authService: AuthService
  )
  {}

  ngOnInit(): void {
    // this.checkToken();
  }

  private checkDashboardToRedirect(){
    
    // this.authService.setToken( data.token );
    // const { roles = [] } = data;
    // const isSuperAdmin = roles.includes('ceo') || roles.includes('generalDirector') || roles.includes('director');

    // if( isSuperAdmin )
    //   return this.router.navigate(['/super-dashboard']);

    return this.router.navigate(['/dashboard']);
  }

  // private refreshToken( checkTokenResponse: CheckTokenResponse ) {
  //   const { token = '' } = checkTokenResponse;
  //   if(!token) return;

  //   this.authService.setToken( token );
  // }

  login(){
    this.checkDashboardToRedirect();
    // this.authService.login( this.loginForm.value ).subscribe(
    //   response => {
    //     this.checkDashboardToRedirect();
    //   },
    //   errorResponse => {
    //     const errorDetail = errorResponse.error?.message || 'Error';
    //     console.log( errorDetail );
    //     // this.sweetAlert.presentError( errorDetail );
    //   }
    // );
  }

  // checkToken(){
  //   if( !this.authService.getToken() ) return; 

  //   this.authService.checkToken().subscribe(
  //     response => {
  //       this.refreshToken( response );
  //       this.checkDashboardToRedirect( response );
  //     },
  //     () => {
  //       localStorage.clear();
  //     }
  //   );
  // }

}
