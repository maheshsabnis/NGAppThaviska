import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html',
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  selectedIndex: number;
  serachText:string;
  constructor() {
    this.product = new Product(0, '', 0, '');
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.headers = new Array<string>();
    this.selectedIndex = -1;
    this.serachText="";
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
    this.products = this.logic.getProducts();
    // read product Scehma from Product class
    for (let p in this.product) {
      this.headers.push(p);
    }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product, indx: number): void {
    this.product = Object.assign({}, p);
    this.selectedIndex = indx;
    console.log(this.products);
  }
  sortAlphabetical(value: number): void {
    this.products = this.logic.sortAlphabetical(value);
    console.log(JSON.stringify(this.products));
  }
  searchProduct(){
    this.products=this.logic.searchProduct(this.serachText);
    console.log(JSON.stringify(this.products));
  }
  update(): void {
    console.log(this.product);
    this.products = this.logic.updateProduct(this.product, this.selectedIndex);
    console.log(JSON.stringify(this.products));
  }
  delete(prd: Product) {
    this.products = this.logic.deleteProduct(prd);
    console.log(JSON.stringify(this.products));
  }
}
