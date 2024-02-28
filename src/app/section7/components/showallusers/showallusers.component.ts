import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showallusers',
  templateUrl: './showallusers.component.html',
  styleUrls: ['./showallusers.component.css']
})
export class ShowallusersComponent implements OnInit {

  users!: any[];

  constructor() { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(){
    fetch(`http://fakestoreapi.com/users`)
    .then(response => response.json())
    .then(data => {
       this.users = data;
    })
 }

}
