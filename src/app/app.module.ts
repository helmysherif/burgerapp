import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { BurgerSectionComponent } from './components/burger-section/burger-section.component';
import { EventSectionComponent } from './components/event-section/event-section.component';
import { BookSectionComponent } from './components/book-section/book-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsSectionComponent,
    BurgerSectionComponent,
    EventSectionComponent,
    BookSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
