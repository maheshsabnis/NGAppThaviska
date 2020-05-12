import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
  private products: Array<Product>;
  private prds = Products;
  constructor() {
    this.products = new Array<Product>();
    this.prds.forEach((p, i) => {
      this.products.push(
        new Product(p.ProductId, p.ProductName, p.Price, p.Catgory)
      );
    });
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  saveProducts(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
  sortAlphabetical(value: number): Array<Product> {
    if (value == 1) {
      return this.products.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    }
    else {
      return this.products.sort((b, a) => a.ProductName.localeCompare(b.ProductName));
    }
  }
  searchProduct(text: string): Array<Product> {
    let tempArray = this.products;
    if (text) {
      tempArray = tempArray.filter((a) => {
        const prdname = a.ProductName.toLowerCase();
        const prdcat = a.Category.toLowerCase();
        return prdname.includes(text) || prdcat.includes(text);
      });
    }
    return tempArray;
  }

  updateProduct(prd: Product, index: number): Array<Product> {
    if (index > -1) {
      this.products.splice(index, 1, prd);
    }
    return this.products;
  }
  deleteProduct(prd: Product): Array<Product> {
    const index = this.products.indexOf(prd, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    return this.products;
  }
}

