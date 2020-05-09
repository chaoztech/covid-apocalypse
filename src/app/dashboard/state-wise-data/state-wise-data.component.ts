import { Component, OnInit } from '@angular/core';
import { AppservicesService } from 'src/app/appservices.service';

@Component({
  selector: 'app-state-wise-data',
  templateUrl: './state-wise-data.component.html',
  styleUrls: ['./state-wise-data.component.css']
})
export class StateWiseDataComponent implements OnInit {
  public states:any ;
  last:any;
  constructor(private appservicesService: AppservicesService) { }

  ngOnInit() {
    this.appservicesService.getData().subscribe((data)=>{
      this.states = data
      console.log(this.states.statewise);
      this.last =  this.states.cases_time_series[this.states.cases_time_series.length - 1]
      
    //   this.resultArray = Object.keys(data).map(function(personNamedIndex){
    //     let person = data[personNamedIndex];
    //     // do something with person
    //     console.log("data",person)
    //     return person;
        
    // });
    });
  
}
}