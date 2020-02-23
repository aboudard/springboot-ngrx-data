import { CustomAdapter } from './shared/custom-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompModule } from './comp/comp.module';
import { ToastrModule } from 'ngx-toastr';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CompModule,
    TodoModule,
    AdminModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
