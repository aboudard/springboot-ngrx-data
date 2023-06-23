import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CompModule } from './comp/comp.module';
import { CustomAdapter } from './shared/custom-adapter';
import { CustomDateParser } from './shared/custom-date-parser';
import { AppStoreModule } from './store/app-store.module';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './services/template-page-title-strategy';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CompModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppStoreModule,
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
    },
    {
      provide: TitleStrategy, useClass: TemplatePageTitleStrategy
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
