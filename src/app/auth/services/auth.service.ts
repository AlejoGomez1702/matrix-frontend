import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDataDto, RegisterDataDto } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/v1/auth';

  constructor(
    private http: HttpClient
  ) { }

  register(dataRegistro: RegisterDataDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, dataRegistro);
  }

  login(request: LoginDataDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, request);
  }
}
