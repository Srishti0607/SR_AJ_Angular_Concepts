import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchilddemo',
  templateUrl: './viewchilddemo.component.html',
  styleUrls: ['./viewchilddemo.component.css']
})
export class ViewchilddemoComponent implements OnInit {

  userId:number = 1;
  user:any = {};
  image: string = 'https://i.pravatar.cc';

  // thenBlock:TemplateRef<any>|null = null;
  thenBlock:string = 'accountdetails';

  // @ViewChild("accountdetails",{static:true}) accountdetails:TemplateRef<any>|null = null;
  // @ViewChild("namedetails",{static:true}) namedetails:TemplateRef<any>|null = null;
  // @ViewChild("addressdetails",{static:true}) addressdetails:TemplateRef<any>|null = null;
  // @ViewChild("geolocationdetails",{static:true}) geolocationdetails:TemplateRef<any>|null = null;

  constructor() { }

  ngOnInit(): void {
    this.LoadUserDetails();
    // this.thenBlock=this.accountdetails;
    this.thenBlock = 'accountdetails';
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

// DisplayView(e:any){
//   switch(e.target.name)
//   {
//     case "accountdetails":
//     this.thenBlock = this.accountdetails;
//     break;
//     case "namedetails":
//     this.thenBlock = this.namedetails;
//     break;
//     case "addressdetails":
//     this.thenBlock = this.addressdetails;
//     break;
//     case "geolocationdetails":
//     this.thenBlock = this.geolocationdetails;
//     break;
//   }
// }

DisplayView(e:any){
  this.thenBlock = e.target.name;
  console.log(this.thenBlock);
  // switch(e.target.name)
  // {
  //   case "accountdetails":
  //   this.thenBlock = this.accountdetails;
  //   break;
  //   case "namedetails":
  //   this.thenBlock = this.namedetails;
  //   break;
  //   case "addressdetails":
  //   this.thenBlock = this.addressdetails;
  //   break;
  //   case "geolocationdetails":
  //   this.thenBlock = this.geolocationdetails;
  //   break;
  // }
}



}
