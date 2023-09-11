import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnDestroy {
  headingTitle: string = 'CONATCT SECTION';
  headingColor: string = '#2c3e50';

  input(event: any): void {
    console.log(event.target.value);
    if (event.target.value) {
      event.target.previousElementSibling.classList.remove('_top');
    } else {
      event.target.previousElementSibling.classList.add('_top');
    }
  }
  // submit($event)  prevents the default behavior of the submit event
  submit(event: Event) {
    event.preventDefault();
  }
  ngOnDestroy(): void {
    console.log('destroy the contact');
  }
}
