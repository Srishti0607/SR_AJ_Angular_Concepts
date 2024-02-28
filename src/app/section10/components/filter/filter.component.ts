import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() AllProductsCount:number = 0;
  @Input() ElectronicsProductsCount:number = 0;
  @Input() JeweleryProductsCount:number = 0;
  @Input() MensProductsCount:number = 0;
  @Input() WomensProductsCount:number = 0;

  CategoryName:string = '';

  @Output() FilterClick:EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(e:any){
    this.CategoryName = e.target.name;
    this.FilterClick.emit(this.CategoryName);
 }
 
  constructor() { }

  ngOnInit(): void {
  }

}
