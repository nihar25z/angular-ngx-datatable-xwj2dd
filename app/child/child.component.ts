import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  data: any;
  data2: any;
  // @Input() pagex: number | any;
  @Input()
  set pagex(pagex: number) {
    this.data2 = pagex;
    console.log(pagex);
  }
  // @Input() pagey: number | any;

  @Input()
  set pagey(pagey: number) {
    this.data = pagey;
    console.log(pagey);
  }

  @Output() myEvent = new EventEmitter<boolean>();

  element;
  display = true;
  constructor() {}

  ngOnInit() {
    // this.element = document.querySelector('.content');
    // this.element.style.top = this.data;
    // this.element.style.left = this.data2;
  }

  setDate() {
    this.display = false;
  }

  onButtonClick() {
    this.myEvent.emit(false);
  }
}

// pagey: number | any;
