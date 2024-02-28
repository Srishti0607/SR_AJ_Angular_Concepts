import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  Categories:string[] = [];
  Products:any[] = []

  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    this.data.GetCategories().subscribe(category => this.Categories = category);
    this.data.GetProducts().subscribe(product=> this.Products=product);
  }

}
