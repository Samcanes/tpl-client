import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';


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

  constructor(private _projects: AuthProjectEventsService) { }

  ngOnInit() {
    this._projects.readAllProjects()
      .subscribe(
        res => {
          console.log(res.projectData)
          this.projectsLength = res.projectData.length
          for (let each in res.projectData){
            console.log(res.projectData[each])
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
      )
  }

}
