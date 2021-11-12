import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  public projects = [];
    public depselectionArray = []

  // statusRegistered: Boolean = false;
  constructor(private _projects: AuthProjectEventsService, ) { 
    
  }


  ngOnInit() {
    

    this._projects.readProjects()
      .subscribe(
        res => {
          console.log(res.projectData)
          this.projects = res.projectData
          console.log(this.depselectionArray)

          for (const item of this.projects) {
            console.log(item)
              // this.depselectionArray.push(item.department);
        
          } 
          console.log(this.depselectionArray)
        },
        err => console.log(err)
      )
  }
  statusUpdate(projectId: String, statusValue: String) {
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
