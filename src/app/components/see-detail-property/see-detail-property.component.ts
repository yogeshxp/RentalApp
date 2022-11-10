import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RequestPageComponent } from '../request-page/request-page.component';
import { PropertyServiceService } from '../services/propertyService/property-service.service';

@Component({
  selector: 'app-see-detail-property',
  templateUrl: './see-detail-property.component.html',
  styleUrls: ['./see-detail-property.component.scss']
})
export class SeeDetailPropertyComponent implements OnInit {



  constructor(public dialog: MatDialog,private activeRoute:ActivatedRoute, private property: PropertyServiceService) { }
  PropertyArray:any
  PropertyId:any;

  ngOnInit(): void {

    this.PropertyId=this.activeRoute.snapshot.paramMap.get('PropertyId');

    console.log(this.PropertyId);

    this.getpropertybyid(this.PropertyId);

  }


  getpropertybyid(PropertyId:any){
    console.log("get property by id")

    this.property.getpropertybyid(PropertyId).subscribe((response:any)=>{
      console.log(response)
      this.PropertyArray=response.Data;
    })

    
  }

  //

  openDialog(data:any):void {
    this.dialog.open(RequestPageComponent,{
      width: '30%',
      data:{data}
    });
  }

}
