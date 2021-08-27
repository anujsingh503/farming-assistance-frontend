import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendfarmerService {

  private baseUrl:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  sendRecord(data:any)
  {
    return this.http.post(`${this.baseUrl}/record`,data,{responseType:'text' as 'json'})
  }
}
