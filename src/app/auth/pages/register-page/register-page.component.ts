import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    document: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required], 
    country: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    phoneNumber2: [''], 
    sponsor: ['', Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
    dataUsageConsent: [false, Validators.requiredTrue]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private sweetAlert: SweetAlertService
  ) { }

  onSubmit() {
    // TODO: Implement onSubmit method
  }

}
