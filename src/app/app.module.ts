import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    DateCountPipe,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
