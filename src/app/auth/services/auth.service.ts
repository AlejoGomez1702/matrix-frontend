import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register( registerUserDto: any ) {
    return this.http.post('http://localhost:3000/api/v1/auth/register', registerUserDto );
  }
}
