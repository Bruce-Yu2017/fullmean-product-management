import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductService {
    
  products=[];
  
  constructor(private _http: Http) { }
  
  create(products, callback) {
    // console.log(products);
        console.log("create service route");
    this._http.post('/products', products).subscribe(
      (res)=>{
        callback(res);
      },
      (err)=>{
        console.log(err);
      }  
    )
  }
  
  getPostNewPro(id, data) {
    this._http.put('/products/edit/' + id, data).subscribe(
      (res)=>{
      console.log("success update from service");
      },
      (err)=>{
      console.log("fail update product", err);  
      }
    )
    
  }
  
  retrieveOneProduct(id, callback) {
    this._http.get('/products/' + id).subscribe((res)=>{
      console.log(res.json());
      callback(res.json());
    })
  }
  
  retrieveProduct(callback) {
    console.log("retrieve all products in list component");
    this._http.get('/products').subscribe(
      (res)=>{
        callback(res.json());
        console.log("from service", res.json())

      },
      (err)=>{
        console.log(err);
      }
    )
  }
  
  delete(id, callback) {
    console.log("delete method");
    this._http.delete('/products/' + id).subscribe(
      (res)=> {
        callback(res.json());
      },
      (err)=> {
        console.log(err);
      }
    )
  }
  
}
