import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  projects = []
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

}
