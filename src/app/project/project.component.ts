import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  idPerson = 2 ;
  constructor(private rout : Router) { }

  ngOnInit(): void {
  }

  NaHome()
  {
    this.rout.navigate([''],{queryParams : {id :this.idPerson}});
  }

}
