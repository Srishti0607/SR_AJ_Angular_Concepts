import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getuserdetails',
  templateUrl: './getuserdetails.component.html',
  styleUrls: ['./getuserdetails.component.css']
})
export class GetuserdetailsComponent implements OnInit {

  userId:number = 1;
  user:any = {};
  image: string = 'https://i.pravatar.cc';

  isVisible:boolean = false;
  buttonText:string = 'Show Address Details';

  constructor() { }

  ngOnInit(): void {
    this.LoadUserDetails();
  }

  LoadUserDetails(){
    fetch(`http://fakestoreapi.com/users/${this.userId}`)
    .then(response => response.json())
    .then(data => {
       this.user = data;
    })
 }

 NextUser(){
  this.userId++;
  this.LoadUserDetails();
}
PreviousUser(){
 this.userId--;
 this.LoadUserDetails();
}

ToggleDisplay(){
  this.isVisible = (this.isVisible==false)?true:false;
  this.buttonText = (this.buttonText=='Show Address Details')?'Hide Address Details':'Show Address Details';
}


}
