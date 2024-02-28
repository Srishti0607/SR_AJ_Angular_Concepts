import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-productbilling',
  templateUrl: './productbilling.component.html',
  styleUrls: ['./productbilling.component.css']
})
export class ProductbillingComponent implements OnInit {
  
product: Product;

  constructor() {

    this.product=new Product();
    this.product.productID = 0;
    this.product.productName = "";
    this.product.cost = 0;
    this.product.quantity = 0;
    this.product.billAmount = 0;
    this.product.discount = 0;
    this.product.netBillAmount = 0;
   }

  ngOnInit(): void {
  }

  doCalculations(product: Product)
  {
      product.billAmount=product.cost * product.quantity;
      if(product.billAmount > 10000)
      {
        product.discount=product.billAmount * 10/100;
      }
      else
      {
        product.discount=product.billAmount * 5/100;
      }

      product.netBillAmount=product.billAmount - product.discount;
  }

  get jsonProduct(){
    return JSON.stringify(this.product);
  }

}
