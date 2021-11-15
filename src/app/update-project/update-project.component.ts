import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent implements OnInit {
  public projects = [];
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  // public depselectionArray = [];
  public searchTearm: String = '';

  // statusRegistered: Boolean = false;
  constructor(private _projects: AuthProjectEventsService) {}

  ngOnInit() {
    this._projects.readAllProjects().subscribe(
      (res) => {
        console.log(res.projectData);
        this.projects = res.projectData;
      },
      (err) => console.log(err)
    );
  }
  Search() {
    if (this.searchTearm == '') {
      this.ngOnInit();
    } else {
      this.projects = this.projects.filter((res) => {
        console.log(res['name']);
        let basicRes: any = res['name'];
        return basicRes
          .toLocaleLowerCase()
          .match(this.searchTearm.toLocaleLowerCase());
      });
    }
  }
  sort(key: any) {
    console.log('sort');
    this.key = key;
    this.reverse = !this.reverse;
  }

  statusUpdate(projectId: String, statusValue: String) {
    console.log(projectId, statusValue);

    let updateObj = {
      _id: projectId,
      status: statusValue,
    };
    this._projects.updateProjects(updateObj).subscribe(
      (res) => {
        console.log(res.project);
        // this.projects = res.projectData
        // window.location.reload()
      },
      (err) => console.log(err)
    );
  }
}
