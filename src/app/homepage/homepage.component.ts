import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { BlogfeedComponent } from '../blogfeed/blogfeed.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @Input()
  requiredFileType: any;

  fileName: any;
  uploadProgress: any;
  uploadSub: any;
  http: any;
  blogdata: any;
  blogtext: any;
  textUpload: any;
  imagefile: any;
  showMsg: Boolean;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}
  onFileSelected(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.fileName = reader.result;
    };
  }

  postbutton() {
    this.uploadSub = {
      title: 'User',
      description: this.blogdata,
      img: this.fileName,
    };
    this.dataService.setNewUserInfo({
      title: 'User',
      description: this.blogdata,
      img: this.fileName,
    });
    this.showMsg = true;
  }

  cancelUpload() {
    //this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

  logout() {
    this.router.navigate(['/signup']);
  }
  readfeed() {
    this.router.navigate(['/blogfeed']);
  }

  // images: Image[] = [];

  // handleFileInput(event: any) {
  //   const files = event.target.files;
  //   if (files) {
  //     for (let file of files) {
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         this.images.push({ url: e.target.result, title: '' });
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   }

  // uploadImages() {
  //   // Perform image upload logic here
  //   console.log('Uploaded Images:');
  //   console.log(this.images);

  //   // You can add your API calls or any other logic to handle image upload
  // }

  
}
