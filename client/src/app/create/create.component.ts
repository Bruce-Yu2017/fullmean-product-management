import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  newProduct = {
    title: "",
    price: "",
    image_url: ""
  } 
  
  constructor(private _service: ProductService, private _router: Router) { }
  
  OnSubmit() {
    this._service.create(this.newProduct, (res)=>{
      console.log(res.json());
      console.log("Create component data sending route");
      this.newProduct = {
          title: "",
          price: "",
          image_url: ""
        } 
    });
    // When create a new product will automatically navigate to list component html
    this._router.navigate(['list']);
  }
  
  
  ngOnInit() {
  }

}
