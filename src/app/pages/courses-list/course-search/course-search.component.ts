import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  @Output() searchClick: EventEmitter<any> = new EventEmitter();
  searchQuery: string;

  constructor() {
  }

  ngOnInit() {
  }

  onClickSearch(event: MouseEvent) {
    this.searchClick.emit(this.searchQuery);
  }


}
