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
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/signup']);
  }
  

}
