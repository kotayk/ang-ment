import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SpinnerService {
  public requestsCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  showSpinner(value: boolean) {
    const counter = value ? this.requestsCounter.value + 1 : this.requestsCounter.value - 1;
    this.requestsCounter.next(counter);
  }
}

