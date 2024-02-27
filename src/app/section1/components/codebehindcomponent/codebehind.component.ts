import   { Component } from  '@angular/core';


@Component({
selector:'app-codebehind',
templateUrl:'./codebehind.component.html',  
styleUrls: ['./codebehind.component.css' ]

})
export class CodeBehindComponent
{
    Message: string = "Hello World! This is my first Codebehind Angular Component.";
}