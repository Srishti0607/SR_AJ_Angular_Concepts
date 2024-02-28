import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showallusersusingcards',
  templateUrl: './showallusersusingcards.component.html',
  styleUrls: ['./showallusersusingcards.component.css']
})
export class ShowallusersusingcardsComponent implements OnInit {
  users!: any[];
  image: string = 'https://i.pravatar.cc';
  
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
