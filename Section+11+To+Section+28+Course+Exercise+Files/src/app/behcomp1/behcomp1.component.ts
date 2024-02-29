import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';
@Component({
  selector: 'app-behcomp1',
  templateUrl: './behcomp1.component.html',
  styleUrls: ['./behcomp1.component.css']
})
export class Behcomp1Component {

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
