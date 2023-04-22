import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './material.scss'],
})
export class AppComponent {
  name = 'Angular 4';
  display = false;
  modalleft;
  modaltop;
  data: any;
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  onActivate(event) {
    // debugger
    // if(event.type == 'click' && event.cellIndex == 1) {
    if (event.cellIndex == 1) {
      console.log(event.row, event.event);
      console.log('page', event.event.pageX, event.event.pageY);
      this.display = !this.display;
      // this.userModal = true;

      // this.bsModalRef = this.modalService.show(UserModalComponent);
      // let data = (document.getElementById('comp-render').style.marginLeft =
      //   event.event.pageX + 'px');

      this.modalleft = event.event.pageX + 79 + 'px';
      this.modaltop = event.event.pageY - 39 + 'px';
      console.log('page2', this.modalleft, this.modaltop);
      // this.data.style.display = 'block';
      // data.style.marginLeft =;
      // data.style.marginTop = event.event.pageY + 'px';
    }
  }

  onChildEvent(data: boolean) {
    console.log('Data received from child component:', data);
    this.display = data;
  }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
