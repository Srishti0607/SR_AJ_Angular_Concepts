import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';

@Component({
  selector: 'app-behcomp2',
  templateUrl: './behcomp2.component.html',
  styleUrls: ['./behcomp2.component.css']
})
export class Behcomp2Component {
  userName: any;
  constructor(private _sharedservice: CustomsharedService) {
    this._sharedservice.userName.subscribe((uname) => {
      this.userName = uname;
    });


  }

  
 updateUserName(uname: any) {
  this._sharedservice.userName.next(uname.value);
}
}
