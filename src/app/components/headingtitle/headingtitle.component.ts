import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headingtitle',
  templateUrl: './headingtitle.component.html',
  styleUrls: ['./headingtitle.component.css'],
})
export class HeadingtitleComponent {
  @Input() headingTitle: string = 'ahmed hosin';
  @Input() headingColor: string = 'black';
}
