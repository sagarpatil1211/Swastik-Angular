import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  farmers:any;
  crops:any;

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.api.get("farmers").subscribe((result:any)=>{
      this.farmers = result.data;
    });
    this.api.get("crops").subscribe((result:any)=>{
      this.crops = result.data;
    });
  }

}
