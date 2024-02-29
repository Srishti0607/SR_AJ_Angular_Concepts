import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookiesdemo',
  templateUrl: './cookiesdemo.component.html',
  styleUrls: ['./cookiesdemo.component.css']
})
export class CookiesdemoComponent {

  userName: string = '';
  getAllCookies: any = [];


  constructor(public cookieService: CookieService) {
    this.cookieService.set('Name', "Conor Anthony McGregor");
    this.cookieService.set('Age', '35');
    this.cookieService.set('Place', 'Ireland');
    this.userName = this.cookieService.get('Name');
  }

  ngOnInit(): void {
    this.getAllCookies = JSON.stringify(this.cookieService.getAll());

  }

  deleteCookie(){
    this.cookieService.delete('Age'); 
    this.getAllCookies = JSON.stringify(this.cookieService.getAll());
  }
  deleteAllCookies(){
    this.cookieService.deleteAll();
    this.getAllCookies = JSON.stringify(this.cookieService.getAll());
  }

  resetCookies(){  
    this.cookieService.set('Name', "Conor Anthony McGregor");
    this.cookieService.set('Age', '35');
    this.cookieService.set('Place', 'Ireland');
    this.getAllCookies = JSON.stringify(this.cookieService.getAll());
  }

  addWeightCookie(){
    const myDate: Date = new Date();
    myDate.setHours( myDate.getHours() + 1 );

    this.cookieService.set('weight', '71',myDate);
    this.getAllCookies = JSON.stringify(this.cookieService.getAll());
  }


}
