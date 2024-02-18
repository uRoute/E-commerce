import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { EcommDataService } from 'src/app/shared/ecomm-data.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy{
  product:Product = {} as Product;
  detailsSub:Subscription = new Subscription()
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcommDataService:EcommDataService){}
  ngOnDestroy(): void {
    this.detailsSub.unsubscribe()
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
        let productId:any = params.get('id');
        this.detailsSub = this._EcommDataService.getProductDetails(productId).subscribe({
          next:(respo)=>{
            console.log(respo);
            this.product = respo.data
            console.log(this.product);
            
          },
          error:(err)=>{
            console.log(err);
          }
        })
        
      }
    })
  //  console.log(this._ActivatedRoute.paramMap);
  }


  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

}
