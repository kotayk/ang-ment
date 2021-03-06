import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {SpinnerService} from './common/services/spinner.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mentoring';
  isLoading: boolean;

  constructor(private spinnerService: SpinnerService, private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
    this.spinnerService.requestsCounter.pipe(debounceTime(0)).subscribe(counter => {
      this.isLoading = counter > 0;
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.spinnerService.showSpinner(true);
      }
      if (event instanceof NavigationEnd) {
        this.spinnerService.showSpinner(false);
        if (event.url === '/login') {
          this.spinnerService.resetSpinner();
        }
      }
    });
  }

}
