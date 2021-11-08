import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  projects = [];

  // statusRegistered: Boolean = false;
  constructor(private _projects: AuthProjectEventsService) { }


  ngOnInit() {
    this._projects.readProjects()
      .subscribe(
        res => {
          console.log(res.projectData)
          this.projects = res.projectData
        },
        err => console.log(err)
      )
  }
  statusUpdate(projectId :String, statusValue :String){
    console.log(projectId, statusValue)
    let updateObj = {
      _id: projectId,
    status: statusValue
    }
    this._projects.updateProjects(updateObj)
    .subscribe(
      res => {
        console.log(res.project)
        // this.projects = res.projectData
        window.location.reload()
      },
      err => console.log(err)
    )
  }
}
