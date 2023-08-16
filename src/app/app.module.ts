import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataComponent } from './data/data.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    DataComponent,
    ListComponent,
    ContactComponent,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
