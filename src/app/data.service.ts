import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';



@Injectable()
export class DataService {

  constructor() { }

  public blogdata = new BehaviorSubject<any>({
    title: ' User',
    description: ' Hi There .... FOOD LOVERS',
    img: ''
  });

  setNewUserInfo(data: any) {
    this.blogdata.next(data);
  }

  getNewUserInfo() {
    return this.blogdata.asObservable();
  }




}