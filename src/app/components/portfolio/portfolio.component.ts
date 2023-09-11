import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  headingTitle: string = 'PORTFOLIO COMPONENT';
  headingColor: string = '#2c3e50';
  popUpSrc: string = '';
  popUpSwitche: boolean = true;

  popUp(targ: any): void {
    console.log(targ.src);
    this.popUpSrc = targ.src;
    this.displayPopUp();
  }
  displayPopUp(): void {
    this.popUpSwitche = false;
  }
  // close pop-up
  close(event: any): void {
    event.stopPropagation();
    this.popUpSwitche = true;
  }
  // stop propagation at image popup
  imageStop(event: Event) {
    event.stopPropagation();
  }

  ngOnInit(): void {
    // Escape key events to close
    document.addEventListener('keydown', (e: KeyboardEvent): void => {
      if (e.code === 'Escape') this.popUpSwitche = true;
    });
  }
  ngOnDestroy(): void {
    console.log('destroy portfolio');
  }
}
