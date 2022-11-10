import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl= environment.baseurl;

  constructor(private httpClient: HttpClient) { }


  GetService(url:string, token: boolean=false, httpOptions:any)
  {
      return this.httpClient.get(this.baseUrl+url,token && httpOptions);
  }

  postService(url: string, reqdata: any, token: boolean =false, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqdata, token && httpOptions)
  }

  putservices(url: string, data: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseUrl + url, data, token && httpOptions);
  }

  deleteservices(url:string, token:boolean=false, httpOptions:any){
    return this.httpClient.delete(this.baseUrl+url, token && httpOptions)
  }
}
