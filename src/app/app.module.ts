import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayHomeComponent } from './components/display-home/display-home.component';
import { LandlordComponent } from './components/landlord/landlord.component';
import { AddLandlordpropertyComponent } from './components/add-landlordproperty/add-landlordproperty.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { GetAllPropertyComponent } from './components/get-all-property/get-all-property.component';
import { SeeDetailPropertyComponent } from './components/see-detail-property/see-detail-property.component';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { SeeRequestComponent } from './components/see-request/see-request.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatRadioModule} from '@angular/material/radio';
import { PracticeComponent } from './components/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    DisplayHomeComponent,
    LandlordComponent,
    AddLandlordpropertyComponent,
    UpdatePropertyComponent,
    GetAllPropertyComponent,
    SeeDetailPropertyComponent,
    RequestPageComponent,
    SeeRequestComponent,
    PracticeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
