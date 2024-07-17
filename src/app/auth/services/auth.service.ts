import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDataDto, LoginResponseDto, RegisterDataDto } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(dataRegistro: RegisterDataDto): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, dataRegistro);
  }

  login(request: LoginDataDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(`${environment.apiUrl}/auth/login`, request);
  }

  getToken(): string {
    return localStorage.getItem('X-TOKEN') || '';
  }

  setToken(token: string): void {
    localStorage.setItem('X-TOKEN', token);
  }
}
