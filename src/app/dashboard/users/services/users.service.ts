import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseGetAllUsers } from '../interfaces/users.module.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<ResponseGetAllUsers> {
    return this.http.get<ResponseGetAllUsers>(`${environment.apiUrl}/users`);
  }

  getRegistersTotal( state: string ): Observable<number>
  {
    return this.http.get<number>(`${environment.apiUrl}/users/total?state=${state}`);
  }

  changeUserState( userId: number, stateId: number )
  {
    return this.http.put(`${environment.apiUrl}/users/change-state/${userId}`, { stateId });
  }

}
