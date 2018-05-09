import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './counter/counter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CountervalidComponent } from './counter/countervalid/countervalid.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CompModule} from "./comp/comp.module";
import {DirectivesModule} from "./directives/directives.module";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CountervalidComponent
  ],
  imports: [
    DirectivesModule,
    CompModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppStoreModule,
    ServicesModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
