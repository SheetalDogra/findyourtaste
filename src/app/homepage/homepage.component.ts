import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // @Input()
  // requiredFileType:any;

  // fileName = '';
  // uploadProgress:any;
  // uploadSub: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
//   onFileSelected(event: { target: { files: File[]; }; }) {
//     const file:File = event.target.files[0];
  
//     if (file) {
//         this.fileName = file.name;
//         const formData = new FormData();
//         formData.append("thumbnail", file);

//         const upload$ = this.http.post("/api/thumbnail-upload", formData, {
//             reportProgress: true,
//             observe: 'events'
//         })
//         .pipe(
//             finalize(() => this.reset())
//         );
      
//         this.uploadSub = upload$.subscribe(event => {
//           if (event.type == HttpEventType.UploadProgress) {
//             this.uploadProgress = Math.round(100 * (event.loaded / event.total));
//           }
//         })
//     }
// }

// cancelUpload() {
// this.uploadSub.unsubscribe();
// this.reset();
// }

// reset() {
// this.uploadProgress = null;
// this.uploadSub = null;
// }
  
  logout(){
    this.router.navigate(['/signup']);
  }
  readfeed() {
    this.router.navigate(['/blogfeed']);
  }

}
