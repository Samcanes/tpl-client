import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {


  }


  submitProject(){
    console.log(this.projectData['name'])
    for (let key in this.projectData) {
      console.log(key)
      console.log(this.projectData + "['" + key + "']" )
      if(this.projectData == null){
        console.log(key)
        alert(key + "is reqd")
        return null
      }
    }
    console.log(this.projectData)
    return null
  }
  
}
