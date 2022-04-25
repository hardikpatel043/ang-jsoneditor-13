import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  template: '<div>{{showData()}}</div>'
})
export class ShowComponent {

  @Input()
  public data: any;

  showData(){
    return JSON.stringify(this.data, null, 2);
  }

}
