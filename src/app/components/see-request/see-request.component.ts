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

  ngOnInit(): void {
    this.PropertyId=this.activeroute.snapshot.paramMap.get('PropertyId');
    this.getresponseReq(this.PropertyId);
    console.log("Yogesh"+this.PropertyId);

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
}
