import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from 'src/app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { Home1Component } from './home1/home1.component';
import { FormsModule } from '@angular/forms';
import { CjavaComponent } from './cjava/cjava.component';
import { AjavaComponent } from './ajava/ajava.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PhotoGalaryComponent,
    HelpComponent,
    ContactComponent,
    BlogComponent,
    MeanComponent,
    MernComponent,
    Home1Component,
    CjavaComponent,
    AjavaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
