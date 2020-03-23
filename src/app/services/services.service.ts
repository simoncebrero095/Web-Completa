import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// APP connection 

export class ServicesService {
  URL = "https://apirest.glitch.me/api/products/";

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.URL);
  }
  getProduct(id) {
    return this.http.post(this.URL + id, {});
  }
  createProduct(product) {
    return this.http.post(this.URL, product);
  }
  editProduct(product: any) {
    let { name, description, precio, imgURL } = product;

    return this.http.put(this.URL + product._id, {
      name,
      description,
      precio,
      imgURL

    });
}
deleteProduct(id) {
  return this.http.delete(this.URL + id);
}
}
