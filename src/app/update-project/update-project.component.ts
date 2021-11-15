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
  public projectsData = [];

  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;
  deptDataArray = [];
  loctDataArray = [];

  // public depselectionArray = [];
  public searchTearm: String = '';
  public searchLoctTerm: String = '';
  public searchDeptTerm: String = '';

  // statusRegistered: Boolean = false;
  constructor(private _projects: AuthProjectEventsService) {}

  duplicateRemover(arr: any) {
    var tmp: any = [];
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      if (tmp.indexOf(arr[i]) == -1) {
        // console.log(arr[i]);
        tmp.push(arr[i]);
      }
    }
    // console.log(tmp);
    return tmp;
  }

  ngOnInit() {
    this._projects.readAllProjects().subscribe(
      (res) => {
        // console.log(res.projectData);
        this.projects = res.projectData;
        this.projectsData = res.projectData;

        // console.log(this.projects);
        // let temp: any =
        this.projects.forEach((element, index) => {
          // console.log(index);
          this.deptDataArray[index] = element['department'];
          this.loctDataArray[index] = element['location'];
        });
        console.log(this.loctDataArray, this.deptDataArray);

        this.loctDataArray = this.duplicateRemover(this.loctDataArray);

        this.deptDataArray = this.duplicateRemover(this.deptDataArray);

        console.log(this.loctDataArray, this.deptDataArray);
      },
      (err) => console.log(err)
    );
  }

  Search() {
    if (this.searchTearm == '') {
      this.ngOnInit();
    } else {
      this.projects = this.projectsData.filter((res) => {
        console.log(res['name']);
        let basicRes: any = res['name'];
        return basicRes
          .toLocaleLowerCase()
          .match(this.searchTearm.toLocaleLowerCase());
      });
    }
  }
  dropdownDeptSelect() {
    console.log(this.searchDeptTerm);
    if (this.searchDeptTerm == '') {
      this.ngOnInit();
    } else {
      console.log('I am here');
      this.projects = this.projectsData.filter((res) => {
        console.log(res);
        console.log(res['department']);
        let basicRes: any = res['department'];
        console.log(this.searchDeptTerm.toLocaleLowerCase());
        return basicRes
          .toLocaleLowerCase()
          .match(this.searchDeptTerm.toLocaleLowerCase());
      });
    }
  }
  dropdownLoctSelect() {
    console.log(this.searchLoctTerm);
    if (this.searchLoctTerm == '') {
      this.ngOnInit();
    } else {
      console.log('I am here');
      this.projects = this.projectsData.filter((res) => {
        console.log(res);
        console.log(res['location']);
        let basicRes: any = res['location'];
        console.log(this.searchLoctTerm.toLocaleLowerCase());
        return basicRes
          .toLocaleLowerCase()
          .match(this.searchLoctTerm.toLocaleLowerCase());
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
