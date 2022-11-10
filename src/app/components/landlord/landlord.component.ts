import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../services/propertyService/property-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { UpdatePropertyComponent } from '../update-property/update-property.component';


@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss']
})
export class LandlordComponent implements OnInit {

  PropertyList:any;
  UserId:any;


  constructor(private getproperty:PropertyServiceService,private snackbar:MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.UserId=localStorage.getItem('UserId');

    this.getallproperty();
  }

  getallproperty(){
    console.log("get all property")

    this.getproperty.getallproperty(this.UserId).subscribe((response: any) => {
      console.log(response)

      this.PropertyList = response.Data;
      console.log(this.PropertyList)
    })
  }

  deleteproperty(data:any){
    console.log("delete property")
    console.log(data)

    this.getproperty.deleteproprty(data.PropertyId).subscribe((responce:any)=>{
      console.log(responce)

      this.snackbar.open("Property Remove Successfully","" ,{
        duration: 2000,
      });
      this.getallproperty();
    })
  }

  //


  openDialog(data:any):void {
    this.dialog.open(UpdatePropertyComponent,{
      width: '100%',
      data:{data}
    });
  }

}
