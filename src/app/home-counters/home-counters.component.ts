import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home-counters',
  templateUrl: './home-counters.component.html',
  styleUrls: ['./home-counters.component.css'],
})
export class HomeCountersComponent implements OnInit {
  projects = [];
  projectsLength: number = 0;
  statusRegisteredCounter: number = 0;
  statusRunningCounter: number = 0;
  statusClosedCounter: number = 0;
  statusCancelledCounter: number = 0;

  graphsData: string[] = [];
  // graphsData = [];
  runningData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  registeredData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  cancelledData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  closedData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  totalData: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: this.totalData,
      label: 'Total Projects',
      backgroundColor: '#000',
      hoverBackgroundColor: '#000',
    },
    {
      data: this.runningData,
      label: 'Running',
      backgroundColor: '#49FF00',
      hoverBackgroundColor: '#49FF00',
    },
    {
      data: this.registeredData,
      label: 'Registered',
      backgroundColor: '#000D6B',
      hoverBackgroundColor: '#000D6B',
    },
    {
      data: this.cancelledData,
      label: 'Canelled',
      backgroundColor: '#B983FF',
      hoverBackgroundColor: '#B983FF',
    },
    {
      data: this.closedData,
      label: 'Closed',
      backgroundColor: '#0CECDD',
      hoverBackgroundColor: '#0CECDD',
    },
  ];

  constructor(private _projects: AuthProjectEventsService) {}

  ngOnInit() {
    this._projects.readAllProjects().subscribe(
      (res) => {
        // console.log(res.projectData)
        // this.registeredData.push(3)
        this.projectsLength = res.projectData.length;
        for (let each in res.projectData) {
          // console.log(res.projectData[each])
          if (res.projectData[each].status === 'Closed') {
            this.statusClosedCounter++;
            // console.log()
          } else if (res.projectData[each].status === 'Cancelled') {
            this.statusCancelledCounter++;
          } else if (res.projectData[each].status === 'Registered') {
            this.statusRegisteredCounter++;
          } else if (res.projectData[each].status === 'Running') {
            this.statusRunningCounter++;
          }
        }
      },
      (err) => console.log(err)
    ),
      this._projects.readGraphData().subscribe(
        (res) => {
          this.graphsData = res.obj;
          // console.log(this.graphsData)
          res.obj.forEach((element: any, index: any) => {
            this.barChartLabels.push(element._id);
            console.log(element);
            // console.log("length: ", element.updates.length)
            // let temp: string
            element.updates.forEach((comp: any) => {
              if (comp.status === 'Running') {
                this.runningData[index] = comp.total;
              } else if (comp.status === 'Registered') {
                this.registeredData[index] = comp.total;
              } else if (comp.status === 'Closed') {
                this.closedData[index] = comp.total;
              } else if (comp.status === 'Cancelled') {
                this.cancelledData[index] = comp.total;
              }
            });
            this.totalData[index] = element.sum;
          });
          // // res.obj
        },
        (err) => console.log(err)
      );
  }
}
