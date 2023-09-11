import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeadingtitleComponent } from './components/headingtitle/headingtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NotfoundComponent,
    HeadingtitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
