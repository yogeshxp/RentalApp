import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/userService/user-service.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  hide = true;
  loginForm !: FormGroup;
  submitted = false;
  UserId:any;


  constructor(private formBuilder: FormBuilder,private user:UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({   
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  })

  
}
get f() { return this.loginForm.controls; }


onSubmit() {
  this.submitted = true;
  console.log(this.loginForm.value.Email)


  // stop here if form is invalid
  if (this.loginForm.valid) {
    let reqdata ={
      Email: this.loginForm.value.Email,
      Password: this.loginForm.value.Password
    }
    this.user.login(reqdata).subscribe((response:any) => {
      console.log(response.Data)
      console.log(response.Data.UserId)
      localStorage.setItem('UserId', response.Data.UserId);
      localStorage.setItem('FullName',response.Data.FullName);

      this.router.navigateByUrl("dashboard/display");

    }, error => {
      console.log(error)
    }
    )
  }
}
}
