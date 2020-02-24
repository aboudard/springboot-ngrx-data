import { CustomAdapter } from './shared/custom-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompModule } from './comp/comp.module';
import { ToastrModule } from 'ngx-toastr';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomDateParser } from './shared/custom-date-parser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CompModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppStoreModule,
    ServicesModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: NgbDateAdapter, useClass: CustomAdapter
    },
    {
      provide: NgbDateParserFormatter, useClass: CustomDateParser
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
