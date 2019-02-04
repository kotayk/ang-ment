import { Injectable } from '@angular/core';
import {ICourse} from '../../interfaces/icourse';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: ICourse[];

  constructor() {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1',
        creationDate: '2019-01-08',
        durationTime: '98',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 2,
        title: 'Video Course 2',
        creationDate: '2019-02-14',
        durationTime: '55',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 3,
        title: 'Video Course 3',
        creationDate: '2018-12-31',
        durationTime: '105',
        topRated: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 4,
        title: 'Video Course 4',
        creationDate: '2018-03-15',
        durationTime: '120',
        topRated: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 5,
        title: 'Video Course 5',
        creationDate: '2018-03-15',
        durationTime: '33',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 6,
        title: 'Video Course 6',
        creationDate: '2018-03-15',
        durationTime: '56',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      },
      {
        id: 7,
        title: 'Video Course 7',
        creationDate: '2018-03-15',
        durationTime: '61',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores dolorum eius facere harum id laboriosam laudantium nam nulla odio officiis optio, perferendis quia quisquam quo repellat sit soluta veritatis.',
      }
    ];
  }

  getList() {
    return this.courses;
  }

  createCourse() {
    console.log('save');
  }

  getItemById (id) {
    return this.courses.find(course => +course.id === +id );
  }

  updateItem() {}

  removeItem(id) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

}
