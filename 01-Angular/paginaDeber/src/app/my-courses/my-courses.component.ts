import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  @Input()
    titulo; 
  @Input()
    urlImage;
  @Input()
  progreso;


  constructor() { }

  ngOnInit() {
  }

}
