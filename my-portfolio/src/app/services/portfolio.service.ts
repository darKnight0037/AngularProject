import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Portfolio } from './portfolio.module';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) {
    this.httpClient=httpClient;
   }
   get():Observable<Portfolio[]>{
     return this.httpClient.get<Portfolio[]>(environment.apiUrl);
   }
}
