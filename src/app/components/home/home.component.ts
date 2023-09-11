import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  headingTitle: string = 'START FRAMEWORk';
  headingColor: string = 'white';
  ngOnDestroy(): void {
    console.log('onDestroy home component');
  }
}
