import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  presentSuccess(message: string, text?: string) {
    Swal.fire({
      icon: 'success',
      title: message,
      text,
      showConfirmButton: false,
      timer: 2500
    });
  }

  presentError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }

}
