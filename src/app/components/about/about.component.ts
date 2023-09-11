import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnDestroy {
  headingTitle: string = 'ABOUT COMPONENT';
  headingColor: string = 'white';
  ngOnDestroy(): void {
    console.log('onDestroy about component');
  }
}
