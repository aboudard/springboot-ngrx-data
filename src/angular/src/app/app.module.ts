import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppStoreModule,
    ServicesModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
