import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommDataService } from 'src/app/shared/ecomm-data.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  dataSubscripe:Subscription = new Subscription();
  products:Product[] = []
  constructor(private _EcommDataService:EcommDataService){}
  ngOnInit(): void {
    this.dataSubscripe = this._EcommDataService.getAllProducts().subscribe({
      next:(respo)=>{
        console.log(respo.data);
        this.products = respo.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnDestroy(): void {
    this.dataSubscripe.unsubscribe();
  }
}
