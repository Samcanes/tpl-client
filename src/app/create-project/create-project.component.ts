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

  constructor(private _events: AuthProjectEventsService) { }

  ngOnInit(): void {
  }

  createProject(){
    console.log(this.projectData['name']) //this works
    // for (let key in this.projectData) {
    //   console.log(key) // this works
    //   // console.log(this.projectData[key])  ///4
    //   if(this.projectData == null){
    //     console.log(key)
    //     alert(key + "is reqd")
    //   }
    // }
    
    console.log(this.projectData)
    this._events.createProjects(this.projectData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
