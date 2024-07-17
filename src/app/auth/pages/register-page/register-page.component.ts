import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { RegisterDataDto } from '../../interfaces/auth.interfaces';
import { VideoPlayerDialogComponent } from '../../../shared/components/video-player-dialog/video-player-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  public showVideos = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private sweetAlert: SweetAlertService,
    public dialog: MatDialog
  ) { }

  onSubmit() {

    if (this.registerForm.valid && this.passwordsMatch())
    {
      const {
        fullName,
        email,
        password,
        document,
        country,
        phoneNumber,
        phoneNumber2,
        sponsor
      } = this.registerForm.value;
      const registerData: RegisterDataDto = {
        fullName,
        email,
        password,
        document,
        country,
        phoneNumber,
        phoneNumber2,
        sponsor
      };
      this.authService.register(registerData).subscribe(
        response => {
          // this.showVideos = true;
          const dialogRef = this.dialog.open(VideoPlayerDialogComponent, {
            width: '80%',
            disableClose: true,
            data: { videoId: '0Bmhjf0rKe8' }
            });

            dialogRef.afterClosed().subscribe(() => {
              this.sweetAlert.presentSuccess("Registro exitoso.");
              console.log('El modal del video ha sido cerrado');
          });
        },
        error => {
          this.sweetAlert.presentError("No se pudó registrar, vuelva a intentarlo.");
          this.showVideos = false;
        }
      );
    }
    else{
      this.sweetAlert.presentError("Formulario contiene errores, o datos vacios. " + this.registerForm.errors);
    }
  }

  passwordsMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

}
