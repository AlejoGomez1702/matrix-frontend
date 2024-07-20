import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseGetAllStates } from '../interfaces/users.module.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStates(): Observable<ResponseGetAllStates> {
    return this.http.get<ResponseGetAllStates>(`${environment.apiUrl}/states`);
  }
}
