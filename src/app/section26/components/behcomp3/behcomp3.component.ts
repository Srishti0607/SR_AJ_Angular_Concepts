import { Component } from '@angular/core';
import { CustomsharedService } from '../../../services/customshared.service';

@Component({
  selector: 'app-behcomp3',
  templateUrl: './behcomp3.component.html',
  styleUrls: ['./behcomp3.component.css']
})
export class Behcomp3Component {
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
