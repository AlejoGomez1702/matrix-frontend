import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register() {
    // TODO: Implement register method
  }

  login(){
    // TODO: Implement login method
  }

}
