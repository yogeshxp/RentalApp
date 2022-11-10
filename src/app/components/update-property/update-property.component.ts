import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PropertyServiceService } from '../services/propertyService/property-service.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})
export class UpdatePropertyComponent implements OnInit {

  PropertyId:any;
  PropertyName:any;
  SquareFts:any;
  RentCost:any;
  City:any;
  Location:any;
  Type:any;
  LandLordName:any;
  PropertyImage:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private property: PropertyServiceService,private dialogRef: MatDialogRef<UpdatePropertyComponent>) { }

  ngOnInit(): void {
    console.log(this.data['data'])
    this.PropertyName=this.data['data'].PropertyName,
    this.SquareFts = this.data['data'].SquareFts,
    this.RentCost = this.data['data'].RentCost,
    this.City = this.data['data'].City,
    this.Location = this.data['data'].Location,
    this.Type = this.data['data'].Type,
    this.LandLordName = this.data['data'].LandLordName,
    this.PropertyImage = this.data['data'].PropertyImage
    console.log("Property_Id=====>"+ this.PropertyName)

  }

  onSubmit(){
    let updateData = {
      PropertyId:this.PropertyId,
      PropertyName:this.PropertyName,
      SquareFts:this.SquareFts,
      RentCost:this.RentCost,
      City:this.City,
      Location:this.Location,
      Type:this.Type,
      LandLordName:this.LandLordName,
      PropertyImage:this.PropertyImage
    }
    console.log(updateData)
    this.property.updateproperty(updateData).subscribe((response:any) => {
      console.log("update response", response)
    }, (error:any)=>{
      console.log(error)
    }
    )
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
