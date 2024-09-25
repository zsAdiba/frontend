import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  loginUrl = environment.BACKEND_LOGIN_URL; // TODO add backend connection
  registerUrl = environment.BACKEND_REGISTER_URL;
  
  constructor() { }
 
  signup = (data: any) => {
    return this.httpClient.post(`${this.registerUrl}/register`, data);
  }

  // TODO login logout isloggedin
  
  login = (data: any) => {
    return this.httpClient.post(`${this.loginUrl}/login`, data)
  }
}
