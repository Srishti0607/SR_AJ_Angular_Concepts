import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usingngforwithformelements',
  templateUrl: './usingngforwithformelements.component.html',
  styleUrls: ['./usingngforwithformelements.component.css']
})
export class UsingngforwithformelementsComponent implements OnInit {

  products: any=[{}];

  Processors:any[] = [
    {Category: 'AMD', Products: ['Ryzen 3990', 'Ryzen 3970','Ryzen 3960','Ryzen 3950']},
    {Category: 'Intel', Products:['Xeon 8362', 'Xeon 8358','Xeon 8380']}
  ];

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {productID:1,productName:"AMD Ryzen 3990",quantity:100,unitsInStock:50,disContinued:false,cost:3000},
      {productID:2,productName:"AMD Ryzen 3970",quantity:100,unitsInStock:60,disContinued:false,cost:4000},
      {productID:3,productName:"AMD Ryzen 3960",quantity:100,unitsInStock:70,disContinued:false,cost:5000},
      {productID:4,productName:"AMD Ryzen 3950",quantity:100,unitsInStock:80,disContinued:false,cost:6000},
      {productID:5,productName:"AMD Ryzen 3940",quantity:100,unitsInStock:90,disContinued:false,cost:7000},
      {productID:6,productName:"AMD Ryzen 3930",quantity:100,unitsInStock:15,disContinued:false,cost:8000},
      {productID:7,productName:"AMD Ryzen 3920",quantity:100,unitsInStock:25,disContinued:false,cost:9000},
      {productID:8,productName:"AMD Ryzen 3910",quantity:100,unitsInStock:35,disContinued:false,cost:10000},          
    ];
  }

}
