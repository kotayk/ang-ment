import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent, Observable, Subject, timer} from 'rxjs';
import {debounce, debounceTime, filter, map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit, OnDestroy {
  @Output() searchClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('searchInput') searchInput: ElementRef;
  searchQuery: string;
  inputChange: Observable<any>;
  unsubscribe = new Subject();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.inputChange = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((e: any) => e.target.value),
      filter((val: string) => val.length >= 3 || !val.length),
      debounceTime(500),
      takeUntil(this.unsubscribe)
  );
    this.inputChange.subscribe((val) => {
      this.searchClick.emit(val);
    });
  }

  onClickSearch(event: MouseEvent) {
    this.searchClick.emit(this.searchQuery);
  }

  onClickAdd(event: MouseEvent) {
    this.router.navigate(['/courses/new']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
