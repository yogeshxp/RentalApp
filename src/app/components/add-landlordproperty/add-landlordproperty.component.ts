import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyServiceService } from '../services/propertyService/property-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-landlordproperty',
  templateUrl: './add-landlordproperty.component.html',
  styleUrls: ['./add-landlordproperty.component.scss']
})
export class AddLandlordpropertyComponent implements OnInit {
  AddPropertyForm !: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private property: PropertyServiceService,private router:Router) { }

  ngOnInit(): void {
    this.AddPropertyForm = this.formBuilder.group({
      PropertyImage:['', Validators.required],
      PropertyName: ['', Validators.required],
      SquareFts: ['', Validators.required],
      RentCost: ['', Validators.required],
      City: ['', Validators.required],
      Location: ['', Validators.required],
      Type: ['1'],
      LandLordName: ['', Validators.required]
    })
  }

  get f() { return this.AddPropertyForm.controls; }



  onSubmit(){
    this.submitted = true;
    // const formData = new FormData();
    // formData.append('PropertyIma );

    if (this.AddPropertyForm.valid) {
      let reqdata ={
        PropertyImage: this.AddPropertyForm.value.PropertyImage,
        PropertyName: this.AddPropertyForm.value.PropertyName,
        SquareFts: this.AddPropertyForm.value.SquareFts,
        RentCost: this.AddPropertyForm.value.RentCost,
        City:this.AddPropertyForm.value.City,
        Location: this.AddPropertyForm.value.Location,
        Type: this.AddPropertyForm.value.Type,
        LandLordName:this.AddPropertyForm.value.LandLordName,
        UserId:8,
      }
//
      this.property.addproperty(reqdata).subscribe((response:any) => {
        console.log(response)
      }, error=>{
        console.log(error)
      });
    
    }
  }

}
