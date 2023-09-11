import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnDestroy {
  headingTitle: string = 'Not Found';
  headingColor: string = '#2c3e50';
  ngOnDestroy(): void {
    console.log('onDestroy notFound component');
  }
}
