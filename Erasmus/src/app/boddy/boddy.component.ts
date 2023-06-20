import { Component } from '@angular/core';

@Component({
  selector: 'app-boddy',
  templateUrl: './boddy.component.html',
  styleUrls: ['./boddy.component.css']
})
export class BoddyComponent {
isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
}
