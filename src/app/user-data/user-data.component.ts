import { Component, OnInit } from '@angular/core';
import { AuthProjectEventsService } from '../auth-project-events.service';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  public projects = [];
  p: number = 1;
  public depselectionArray = [];
  public searchTearm: String = '';

  // statusRegistered: Boolean = false;
  constructor(private _projects: AuthProjectEventsService) {}

  ngOnInit() {
    this._projects.readProjects().subscribe(
      (res) => {
        console.log(res.projectData);
        this.projects = res.projectData;
        console.log(this.depselectionArray);
        for (const item of this.projects) {
          console.log(item);
          // this.depselectionArray.push(item.department);
        }
        console.log(this.depselectionArray);
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
