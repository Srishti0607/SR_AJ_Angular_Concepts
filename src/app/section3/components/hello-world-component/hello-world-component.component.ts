import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-component',
  templateUrl: './hello-world-component.component.html',
  styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponent implements OnInit {

  Message: string = "Hey! I am from HelloWorld Component";
  constructor() { }

  ngOnInit(): void {
  }

}
