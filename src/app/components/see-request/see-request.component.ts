import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyServiceService } from '../services/propertyService/property-service.service';



@Component({
  selector: 'app-see-request',
  templateUrl: './see-request.component.html',
  styleUrls: ['./see-request.component.scss']
})
export class SeeRequestComponent implements OnInit {


  constructor(private property: PropertyServiceService,private activeroute:ActivatedRoute) { }

  PropertyId:any;
  RequestArray:any;
  RequestList:any;
  RequestId:any;

  ngOnInit(): void {
    this.PropertyId=this.activeroute.snapshot.paramMap.get('PropertyId');
    this.RequestId=this.activeroute.snapshot.paramMap.get('RequestId');

    this.getresponseReq(this.PropertyId);
    console.log("Yogesh"+this.PropertyId);
    this.getallrequest();

  }

  counter(i: number) {
    return new Array(i);
}

  getresponseReq(PropertyId:any){
    console.log("get property response")
    this.property.getresponseProperty(PropertyId).subscribe((response:any)=> {
      console.log(response)
      this.RequestArray = response.Data;
    })
  }

  getallrequest(){
    console.log("get all requestid")
    this.property.getallrequest().subscribe((response:any) => {
      console.log(response)
      this.RequestList = response.Data;
      console.log(this.RequestList);

    })
  }

  deleteRequest(Data:any){
    console.log(Data);
    console.log("delete request =====>" + Data)
    this.property.deleteRequest(Data.RequestId).subscribe((response:any)=> {
      console.log(response)
      
    })
  }


}
