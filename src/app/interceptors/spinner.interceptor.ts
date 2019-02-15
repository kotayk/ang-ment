import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpinnerService} from '../common/services/spinner.service';
import {finalize, tap} from 'rxjs/operators';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.showSpinner(true);
    return next
      .handle(req).pipe(
        finalize(() => {this.spinnerService.showSpinner(false); })
      );
  }
}
