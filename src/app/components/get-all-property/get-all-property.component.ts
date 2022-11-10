import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../services/propertyService/property-service.service';
@Component({
  selector: 'app-get-all-property',
  templateUrl: './get-all-property.component.html',
  styleUrls: ['./get-all-property.component.scss']
})
export class GetAllPropertyComponent implements OnInit {

  PropertyList:any;
  UserId:any;


  constructor(private property: PropertyServiceService) { }

  
  ngOnInit(): void {
    this.UserId=localStorage.getItem('UserId');
    this.Getallotherproperty(this.UserId);
  }

  Getallotherproperty(data:any){
    console.log("get all property of others")

    this.property.getallotherproperty(this.UserId).subscribe((response:any) => {
      console.log(response)

      this.PropertyList = response.Data;
      console.log(this.PropertyList)

    })
  }

}
