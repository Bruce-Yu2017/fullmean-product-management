import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  products=[];
  
  constructor(private _service: ProductService, private _router: Router) { }
   
  ngOnInit() {
    this._service.retrieveProduct(res=>{this.products = res});
    console.log(this.products)
  }
  
  deleteProduct(id) {
    this._service.delete(id, (res)=>{this.products = res});
    // this._service.retrieveProduct(res=>{this.products = res});
  }

}
