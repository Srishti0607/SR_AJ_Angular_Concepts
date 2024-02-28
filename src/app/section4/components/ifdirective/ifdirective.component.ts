import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  data: any={};
  tableHeight: number = 500;

  products: any=[{}];

  constructor() { }

  ngOnInit(): void {
    this.data={name:'James Anderson', isVisible: true, loggedIn: true, countryCode: 'US',workExperience:36};

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

  Processors:any[] = [
    {Category: 'AMD', Products: ['Ryzen 3990', 'Ryzen 3970','Ryzen 3960','Ryzen 3950']},
    {Category: 'Intel', Products:['Xeon 8362', 'Xeon 8358','Xeon 8380']}
  ];

  getClassDynamically()
  {
    if(this.products.length == 8)
    {
      return("bg-success");
    }
    else{
      return("bg-warning");
    }
  }


  getClassMap(id: number) : Object{
    let product=this.products[id];
    return{
      "text-center bg-danger": product.productName == "AMD Ryzen 3950",
      "bg-warning": product.cost <= 7000
    };
  }

  getStylesDynamically(id: number){
    let product=this.products[id];

    return{
      fontSize: "30px",
      "margin.px":100,
      color: product.cost >= 7000 ? "red" : "green"
    }
  }

}
