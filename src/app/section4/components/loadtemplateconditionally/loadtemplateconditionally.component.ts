import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-loadtemplateconditionally',
  templateUrl: './loadtemplateconditionally.component.html',
  styleUrls: ['./loadtemplateconditionally.component.css']
})
export class LoadtemplateconditionallyComponent implements OnInit {

  countryCode: string="";

  // thenBlock:TemplateRef<any>|null = null;

  // @ViewChild('IND', {static: true}) IND:TemplateRef<any>|null = null;
  // @ViewChild('USA', {static: true}) USA:TemplateRef<any>|null = null;
  // @ViewChild('UK', {static: true}) UK:TemplateRef<any>|null = null;
  // @ViewChild('INVALID', {static: true}) INVALID:TemplateRef<any>|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  // getCurrencyDetails()
  // {
  //   if(this.countryCode == "IND")
  //   {
  //     this.thenBlock=this.IND;
  //   }
  //   else if(this.countryCode == "USA")
  //   {
  //     this.thenBlock=this.USA;
  //   }
  //   else if(this.countryCode == "UK")
  //   {
  //     this.thenBlock=this.UK;
  //   }
  //   else
  //   {
  //     this.thenBlock=this.INVALID;
  //   }
  // }

}
