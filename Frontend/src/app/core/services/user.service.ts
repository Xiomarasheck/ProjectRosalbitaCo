import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginState = false;
  private headers: HttpHeaders;


  constructor(private http: HttpClient,
                      private currentUser:User
                      ) 
                      {  
                        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
                      }


  public add(user: User) {
    return this.http.post(`${environment.apiURL}/users`, user);
  }


  login(payload) {
<<<<<<< Updated upstream
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
  };


    return this.http.post(`${environment.apiURL}/users/Authenticate/`, JSON.stringify(payload), httpOptions);
=======
  
    return this.http.post(`${environment.apiURL}/users/Authenticate`, JSON.stringify(payload), {headers: this.headers});
>>>>>>> Stashed changes
  }
}


