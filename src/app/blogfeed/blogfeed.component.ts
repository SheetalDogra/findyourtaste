import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.scss']
})
export class BlogfeedComponent implements OnInit {
  longText = `Food is the substance we eat every day for energy and strength. There are many different types of food, such as fruits, vegetables, rice, and pasta. We need to eat a variety of foods to get all the essential nutrients the body needs. Not eating a healthy and balanced diet leads to weakness and deficiency diseases..`;


  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/signup']);
  }
  

}
