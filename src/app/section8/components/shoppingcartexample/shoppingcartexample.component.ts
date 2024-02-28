import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcartexample',
  templateUrl: './shoppingcartexample.component.html',
  styleUrls: ['./shoppingcartexample.component.css']
})
export class ShoppingcartexampleComponent implements OnInit {

  Categories: string[] = [];

  Products: any[] = [];

  CartItems: any[] = [];
  CartCount: number = 0;
  ShowCart: boolean = false;



  LoadAllCategories() {
    fetch('http://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        data.unshift("All Categories");
        this.Categories = data;
      })
  }

  LoadAllProductsCategoryWise(url: string) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.Products = data;
      })
  }

  onCategoryChanged(e: any) {
    if (e.target.value == "All Categories") {
      this.LoadAllProductsCategoryWise('http://fakestoreapi.com/products');
    } else {
      this.LoadAllProductsCategoryWise(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.LoadAllCategories();
    this.LoadAllProductsCategoryWise('http://fakestoreapi.com/products');
    this.GetShoppingCartCount();
  }

  GetShoppingCartCount() {
    this.CartCount = this.CartItems.length;
  }

  AddToShoppingCart(id: number) {
    fetch(`http://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.CartItems.push(data);
        alert(`${data.title}\n has been Added to Shopping Cart`);
        this.GetShoppingCartCount();
      })
  }

  ShowShoppingCart() {
    this.ShowCart = (this.ShowCart == true) ? false : true;
  }


  DeleteShoppingCartItem(index: number) {
    let flag = confirm("Are you sure of deleting the item from Shopping Cart?");
    if (flag == true) {
      this.CartItems.splice(index, 1);
      this.GetShoppingCartCount();
    }
  }
}
