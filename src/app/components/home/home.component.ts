import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommDataService } from 'src/app/shared/ecomm-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  dataSubscripe:Subscription = new Subscription();
  constructor(private _EcommDataService:EcommDataService){}
  ngOnInit(): void {
    this.dataSubscripe = this._EcommDataService.getAllProducts().subscribe({
      next:(respo)=>{
        console.log(respo.data);
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
