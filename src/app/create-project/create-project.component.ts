import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectData= {
      name,
      reason: null,
      type: null,
      division: null,
      category: null,
      priority: null,
      department: null,
      location: null,
      startDate: null,
      endDate: null,      
      status: "Registered"
  }

  createStatus: number = 0;

  constructor(private _events: AuthProjectEventsService) { }

  ngOnInit(): void {
  }

  createProject(){
    console.log(this.projectData['name']) //this works
    this.createStatus = 1;
    console.log(this.projectData)
    this._events.createProjects(this.projectData)
    
    .subscribe(
      res => {
        console.log(res)
        this.createStatus = 2;
      },
      err => {console.log(err)
        this.createStatus = 3;}
    )
  }
}
