
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PropertyServiceService } from '../services/propertyService/property-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss']
})
export class RequestPageComponent implements OnInit {

  LandLordName:any;
  PropertyId:any;
  UserId:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<RequestPageComponent>, private property: PropertyServiceService,private snackbar:MatSnackBar ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.LandLordName = this.data.data.LandLordName
    console.log(this.LandLordName)

    this.PropertyId=this.data.data.PropertyId;
    this.UserId=this.data.data.UserId;
    console.log(this.PropertyId);
    console.log(this.UserId);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  

  onclickrequest(){
    let reqdata = {
      PropertyId: this.PropertyId,
      UserId:this.UserId  
    }

    this.property.requestproperty(reqdata).subscribe((response:any)=> {
      console.log(response);
      this.dialogRef.close();
      this.snackbar.open("Property Request send Successfully","" ,{
        duration: 2000,
      });
    }, error => {
      console.log(error)
    });

    

  }

}
