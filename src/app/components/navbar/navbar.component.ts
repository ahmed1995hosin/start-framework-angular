import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  navPadding4: boolean = true;
  // scroll navigation
  onScroll(): void {
    let scroll: number = window.scrollY;
    if (scroll > 10) this.navPadding4 = false;
    else this.navPadding4 = true;
  }
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  ngOnDestroy(): void {
    console.log('destroy navbar component');
  }
}
