
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLandlordpropertyComponent } from './components/add-landlordproperty/add-landlordproperty.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayHomeComponent } from './components/display-home/display-home.component';
import { GetAllPropertyComponent } from './components/get-all-property/get-all-property.component';
import { LandlordComponent } from './components/landlord/landlord.component';
import { LoginComponent } from './components/login/login.component';
import { PracticeComponent } from './components/practice/practice.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SeeDetailPropertyComponent } from './components/see-detail-property/see-detail-property.component';
import { SeeRequestComponent } from './components/see-request/see-request.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent, 
    children:[
      {path:'display', component:DisplayHomeComponent},
      {path:'landlord', component:LandlordComponent},
      {path:'addproperty', component:AddLandlordpropertyComponent},
      {path:'getall', component:GetAllPropertyComponent},
      {path:'propertydetail/:PropertyId', component:SeeDetailPropertyComponent},
      {path:'seerequest/:PropertyId', component:SeeRequestComponent}
    ]},
  {path:'practice', component:PracticeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
