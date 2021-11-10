import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthProjectEventsService {

  private _createProject = "https://tpl-server.herokuapp.com/api/project/create";
  private _updateProject = "https://tpl-server.herokuapp.com/api/project/update";
  private _readProjects = "https://tpl-server.herokuapp.com/api/project/read"
  private _readAllProjects = "https://tpl-server.herokuapp.com/api/project/readAll"
  private _readGraphData = "https://tpl-server.herokuapp.com/api/project/readGraph"

  constructor(private http: HttpClient) { }

  createProjects(project: any) {
    return this.http.post<any>(this._createProject, project)
  }

  updateProjects(project: any) {
    return this.http.post<any>(this._updateProject, project)
  }

  readProjects() {
    return this.http.get<any>(this._readProjects)
  }
  readAllProjects() {
    return this.http.get<any>(this._readAllProjects)
  }
  readGraphData() {
    return this.http.get<any>(this._readGraphData)
  }
}
