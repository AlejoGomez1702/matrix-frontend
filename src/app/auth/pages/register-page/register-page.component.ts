import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required], // Agregado
    document: ['', Validators.required], // Agregado
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required], // Agregado
    country: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    alternatePhoneNumber: [''], // Opcional, no requerido
    sponsor: [''],
    termsAndConditions: [false, Validators.requiredTrue],
    dataUsageConsent: [false, Validators.requiredTrue]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  onSubmit() {

    const { confirmPassword, ...data } = this.registerForm.value;

    const registerUserDto = data;
    this.authService.register(registerUserDto).subscribe(
      response => {
        console.log(response);
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

}
