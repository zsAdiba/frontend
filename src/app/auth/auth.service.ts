import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  baseUrl = environment.BACKEND_URL; // TODO add backend connection
  
  constructor() { }
 
  signup = (data: any) => {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  // TODO login logout isloggedin
  
  login = (data: any) => {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
  }
}
