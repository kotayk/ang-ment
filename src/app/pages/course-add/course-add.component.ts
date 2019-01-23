import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  title: string;
  description: string;
  date: string;
  duration: number;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('saved');
  }

  cancel() {
    console.log('canceled');
  }

}
