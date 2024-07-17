import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginResponseDto } from '../../interfaces/auth.interfaces';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

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
    private sweetAlert: SweetAlertService,
    private authService: AuthService
  )
  {}

  ngOnInit(): void {
    // this.checkToken();
  }

  private checkDashboardToRedirect( data: LoginResponseDto ){
    
    this.authService.setToken( data.token );
    const { roles = [] } = data;
    const isAdmin = roles.includes('admin');

    if( isAdmin )
      return this.router.navigate(['/dashboard']);

    return this.sweetAlert.presentError('No tienes permisos para acceder al dashboard');
  }

  login(){
    this.authService.login( this.loginForm.value ).subscribe(
      response => {
        this.checkDashboardToRedirect( response );
      },
      errorResponse => {
        const errorDetail = errorResponse.error?.message || 'Error';
        this.sweetAlert.presentError( errorDetail );
      }
    );
  }

}
