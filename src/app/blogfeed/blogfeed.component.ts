import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.scss'],
})
export class BlogfeedComponent implements OnInit {
  longText = ``;
  updateUserInfo: any;
  images: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe((info) => {
      this.updateUserInfo = info;
      
      this.longText = info.description;
      this.images = info.img;
      // var reader = new FileReader();
      // reader.readAsDataURL(info);

      //   reader.onload = (_event) => {

      //     this.updateUserInfo = reader.result;
      //     console.log(this.updateUserInfo);
      //   }
    });
  }
  logout() {
    this.router.navigate(['/signup']);
  }
}
