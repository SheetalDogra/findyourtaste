import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { BlogfeedComponent } from './blogfeed/blogfeed.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    BlogfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
