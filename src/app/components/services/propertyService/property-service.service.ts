import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../httService/http-service.service';



@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  constructor(private httpService:HttpServiceService ) { }

  addproperty(reqdata:any){
    console.log(reqdata)

    let header = {
      Headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    // console.log("cool");
    console.log(reqdata);
    return this.httpService.postService('/addProperty', reqdata, false, header)
  }

getallproperty(UserId:any){

  let header = {
    Headers: new HttpHeaders({

      'Content-type': 'application/json',
    })
  }
  return this.httpService.GetService(`/getall?UserId=${UserId}`, false, header)
}

deleteproprty(PropertyId:any){
  let header = {
    Headers: new HttpHeaders({

      'Content-type': 'application/json',
    })
  }
  return this.httpService.deleteservices(`/Delete?PropertyId=${PropertyId}`, false, header)
}

updateproperty(reqdata:any){

  console.log(reqdata)

  let header = {
    Headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  return this.httpService.putservices('/updateProperty', reqdata, false, header)
  
}

getallotherproperty(UserId:any){
  let header = {
    Headers: new HttpHeaders({

      'Content-type': 'application/json',
    })
  }
  return this.httpService.GetService(`/getallotherProperty?UserId=${UserId}`, false, header)

}

getpropertybyid(PropertyId:any){
  let header = {
    Headers:new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  return this.httpService.GetService(`/getpropertybyid?PropertyId=${PropertyId}`, false,header)
}

requestproperty(reqdata:any){
  console.log(reqdata);

  let header = {
    Headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }
  console.log(reqdata);
  return this.httpService.postService("/sendRequest", reqdata,false,header)

}

getresponseProperty(PropertyId:any){
  console.log(PropertyId);

  let header = {
    Headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }
  console.log(PropertyId);
  return this.httpService.GetService(`/getrequest?PropertyId=${PropertyId}`, false, header)

}



getallrequest(){

  let header = {
    Headers: new HttpHeaders({

      'Content-type': 'application/json',
    })
  }
  return this.httpService.GetService(`/getallrequest`, false, header)

}


deleteRequest(RequestId:any){
  let header = {
    Headers: new HttpHeaders({

      'Content-type': 'application/json',
    })
  }
  return this.httpService.deleteservices(`/DeleteRequest?RequestId=${RequestId}`, false, header)
}



}
