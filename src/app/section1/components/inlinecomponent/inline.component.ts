
import   { Component } from  '@angular/core';


@Component({
selector:'app-inline',
template:`
    <h1>Welcome To Angular 17 Development</h1>
    <h1>Hello World! This is my first Inline Angular Component </h1>
    <h3>{{Message}}</h3>
    <app-codebehind></app-codebehind>
`,
styles:[
    'h1{font-weight:bold;font-style:italic;text-decoration:underline;color:blue}',
    'h3{color:red}'
]
})
export class InLineComponent 
{
    Message: string = "Hello World! This is my first Inline Angular Component.";
    constructor(){
        console.log('In Inline');
        
    }
}