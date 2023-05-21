import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }
  username: any;
  password: any;
  ngOnInit(): void {
  }
  
  

  login() : void {
    if(this.username == 'admin' && this.password == 'admin')
    {
     this.router.navigate(['/home']);
    }else {
      alert("Invalid credentials");
    }
  }
  }


