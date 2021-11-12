import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-home-counters',
  templateUrl: './home-counters.component.html',
  styleUrls: ['./home-counters.component.css']
})
export class HomeCountersComponent implements OnInit {

  projects = [];
  projectsLength: number = 0;
  statusRegisteredCounter: number = 0;
  statusRunningCounter: number = 0;
  statusClosedCounter: number = 0;
  statusCancelledCounter: number = 0;

  graphsData : string[] = [];
  // graphsData = [];
  runningData = [4, 6, 6, 8, 7];
  registeredData = [4, 6, 6, 8, 7];
  cancelledData = [1, 6, 0, 8, 7];
  closedData = [4, 6, 6, 8, 7];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 50, 55, 40], label: 'Registered' },
    { data: [28, 48, 40, 19, 6, 27, 0], label: 'Closed' }
    // { data: this.runningData, label: "Running" },
    // { data: this.registeredData, label: "Registered" },
    // { data: this.cancelledData, label: "Cancelled" },
    // { data: this.closedData, label: "Closed" }
  ];

  constructor(private _projects: AuthProjectEventsService) { }

  ngOnInit() {
    this._projects.readAllProjects()
      .subscribe(
        res => {
          // console.log(res.projectData)
          this.projectsLength = res.projectData.length
          for (let each in res.projectData){
            // console.log(res.projectData[each])
            if(res.projectData[each].status === "Closed"){
              this.statusClosedCounter++
            } else if(res.projectData[each].status === "Cancelled"){
              this.statusCancelledCounter++
            }else if(res.projectData[each].status === "Registered"){
              this.statusRegisteredCounter++
            }else if(res.projectData[each].status === "Running"){
              this.statusRunningCounter++
            }
          }
        },
        err => console.log(err)
      ),

      this._projects.readGraphData()
      .subscribe(
        res => {

          this.graphsData = res.obj
          // console.log(this.graphsData)
          res.obj.forEach((element: any) => {
            this.barChartLabels.push(element._id)
            console.log(element._id)
            console.log(element.updates)
            // let temp: string
            element.updates.forEach((comp: any, index: any) => {
              console.log(index)
              if(comp.status === "Running"){
                // temp = comp.total
                this.runningData.push(comp.total)
              } else if(comp.status === "Registered") {
                this.registeredData.push(comp.total)
              } else if(comp.status === "Closed") {
                this.closedData.push(comp.total)
              } else if(comp.status === "Cancelled") {
                this.cancelledData.push(comp.total)
              } else {


              }
              
            });
          });

          // // res.obj
         
        },
        err => console.log(err)
      )
  }

}
