import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginState = false;


  constructor(private http: HttpClient,
                      private currentUser:User
                      ) 
                      {  }


  public add(user: User) {
    return this.http.post(`${environment.apiURL}/users`, user);
  }


  login(payload) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
  };


    return this.http.post(`${environment.apiURL}/users/Authenticate/`, JSON.stringify(payload), httpOptions);
  }
}


