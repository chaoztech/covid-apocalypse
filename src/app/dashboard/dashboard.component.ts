import { Component, OnInit } from '@angular/core';
import { AppservicesService } from '../appservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  //covid:any;
  //resultArray:any;
  public states:any ;
  last:any;
  constructor(private appservicesService: AppservicesService) { }

  ngOnInit() {
    this.appservicesService.getData().subscribe((data)=>{
      this.states = data
      console.log(this.states);
      // this.last =  this.states.cases_time_series[this.states.cases_time_series.length - 1]
      
    //   this.resultArray = Object.keys(data).map(function(personNamedIndex){
    //     let person = data[personNamedIndex];
    //     // do something with person
    //     console.log("data",person)
    //     return person;
        
    // });
    });
  
}
}