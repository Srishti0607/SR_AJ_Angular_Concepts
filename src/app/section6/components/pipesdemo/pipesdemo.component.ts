import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  customDate = "Thu Sep 20 2021 08:50:22 GMT+0530";
  products: any=[{}];


  deliveryStatus:any = {
    'Hyderabad': 'Same Day Delivery',
    'Mumbai': 'One Day Delivery',
    'Delhi': 'Delivery in 2 Days',
    'Chennai': 'Delivery in 3 Days',
    'other': 'Maximum delivery time is 7 days..'
 }

 shoppingCartItems:string[] = ['AMD Ryzen 3970','AMD Ryzen 3990','AMD Ryzen 3950'];

 shoppingCartNotification:any = {
   '=0' : 'Shopping Cart is Empty!',
   '=1' : 'One product found in Shopping Cart.',
   '=2' : 'Two products found in Shopping Cart.',
   '=3' : 'Three products found in Shopping Cart.',
   'other': '# products found in Shopping Cart.'
 }




  constructor() { }

  ngOnInit(): void {
    this.products=[
      {productID:1,productName:"AMD Ryzen 3990",quantity:100,unitsInStock:0.50,disContinued:false,cost:3000,launchDate:'2020-5-20',City:"Hyderabad"},
      {productID:2,productName:"AMD Ryzen 3970",quantity:100,unitsInStock:0.60,disContinued:false,cost:4000,launchDate:'2020-5-20',City:"Delhi"},
      {productID:3,productName:"AMD Ryzen 3960",quantity:100,unitsInStock:0.70,disContinued:false,cost:5000,launchDate:'2020-5-20',City:"Hyderabad"},
      {productID:4,productName:"AMD Ryzen 3950",quantity:100,unitsInStock:0.80,disContinued:false,cost:6000,launchDate:'2020-5-20',City:"Mumbai"},
      {productID:5,productName:"AMD Ryzen 3940",quantity:100,unitsInStock:0.90,disContinued:false,cost:7000,launchDate:'2020-5-20',City:"Chennai"},
      {productID:6,productName:"AMD Ryzen 3930",quantity:100,unitsInStock:0.15,disContinued:false,cost:8000,launchDate:'2020-5-20',City:"Hyderabad"},
      {productID:7,productName:"AMD Ryzen 3920",quantity:100,unitsInStock:0.25,disContinued:false,cost:9000,launchDate:'2020-5-20',City:"Delhi"},
      {productID:8,productName:"AMD Ryzen 3910",quantity:100,unitsInStock:0.35,disContinued:false,cost:10000,launchDate:'2020-5-20',City:"Mumbai"},          
    ];
  }

}
