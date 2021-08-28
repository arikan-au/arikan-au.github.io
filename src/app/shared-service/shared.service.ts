import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url: string = "https://visitsqr.byteproducts.com/api/analytics/6079/organization/real-time-checkin";

  constructor(private http: HttpClient) { }

  
  getData(){
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   return this.http.get(this.url, { headers: headers });
  }

}
