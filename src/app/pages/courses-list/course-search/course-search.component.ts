import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent, Observable, Subject, timer} from 'rxjs';
import {debounce, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  @Output() searchClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('searchInput') searchInput: ElementRef;
  searchQuery: string;
  inputChange: Observable<any>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.inputChange = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((e: any) => e.target.value),
      filter((val: string) => val.length >= 3 || !val.length),
      debounce(() => timer(500))
    );
    this.inputChange.subscribe((val) => {
      console.log(val)
      this.searchClick.emit(val);
    });
  }

  onClickSearch(event: MouseEvent) {
    this.searchClick.emit(this.searchQuery);
  }

  onClickAdd(event: MouseEvent) {
    this.router.navigate(['/courses/new']);
  }


}
