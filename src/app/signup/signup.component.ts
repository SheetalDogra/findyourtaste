import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;

  registerForm: any;
  username: any;
  password: any;
  mail: any;
  contact: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/Login']);
    } else {
      alert('Invalid credentials');
    }

    // Cancel()() {
    //   this.submitted = false;
    //   this.registerForm.reset();
    // }
  }
}
