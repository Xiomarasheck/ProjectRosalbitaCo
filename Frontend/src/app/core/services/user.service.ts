import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(payload) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
  };


    return this.http.post(`${environment.apiURL}/users/Authenticate`, JSON.stringify(payload), httpOptions);
  }
}
