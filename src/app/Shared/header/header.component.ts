import { Component, OnInit } from '@angular/core';
import { AppservicesService } from 'src/app/appservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public states:any ;
  last:any;
  constructor(private appservicesService: AppservicesService) { }

  ngOnInit() {
    this.appservicesService.getData().subscribe((data)=>{
      this.states = data
      console.log(this.states);
      this.last =  this.states.cases_time_series[this.states.cases_time_series.length - 1]
      console.log("this.last",this.last)

    });
  
}
}