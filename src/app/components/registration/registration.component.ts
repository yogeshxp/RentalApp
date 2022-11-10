import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/userService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  registerForm !: FormGroup;
  submitted = false;

  //

  

  constructor(private formBuilder: FormBuilder, private user: UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword:['', Validators.nullValidator],
      MobileNumber:['',Validators.required],
      Place:['',Validators.required]
    }
    // , {
    // //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      let reqdata ={
        FullName: this.registerForm.value.FullName,
        Email: this.registerForm.value.Email,
        Password: this.registerForm.value.Password,
        ConfirmPassword: this.registerForm.value.ConfirmPassword,
        MobileNumber: this.registerForm.value.MobileNumber,
        Place: this.registerForm.value.Place,



      }
      this.user.registration(reqdata).subscribe((response:any) => {
        console.log(response)
        this.router.navigateByUrl('/login') 

      }, error => {
        console.log(error)
      }
      )
    }
  }
}
