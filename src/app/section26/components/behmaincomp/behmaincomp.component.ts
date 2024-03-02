import { Component } from '@angular/core';
import { CustomsharedService } from '../../../services/customshared.service';

@Component({
  selector: 'app-behmaincomp',
  templateUrl: './behmaincomp.component.html',
  styleUrls: ['./behmaincomp.component.css']
})
export class BehmaincompComponent {
  userName: any;
  constructor(private _sharedservice: CustomsharedService) {
    this._sharedservice.userName.subscribe((uname) => {
      this.userName = uname;
    });


  }
}
