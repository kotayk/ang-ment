import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() flexBlock: boolean;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  onButtonClick(event: any) {
    this.buttonClick.emit(event);
  }

  constructor() { }

  ngOnInit() { }

}
