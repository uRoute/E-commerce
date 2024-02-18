import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string = 'https://ecommerce.routemisr.com';
  headerToken:any = {
    token:localStorage.getItem('userToken')
  }
  constructor(private _HttpClient:HttpClient) { }
  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
    {
      productId:id
    },
    {
      headers:this.headerToken
    })
  }

  ///api/v1/cart
}
