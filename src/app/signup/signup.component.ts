import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  
  submitted = false;
  
  registerForm: any;

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      
      },
  
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.submitted = false;
    alert ("submit all details");
    }
    else  {
      this.submitted = true;
      this.router.navigate(['/home']);
      alert(
        'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
      );
    }

    
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  

}
