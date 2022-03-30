import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SCAService {
  constructor(private http: HttpClient){}
  getEmployees(){
    return this.http.get('https://localhost:7115/api/employee')
  }
}
