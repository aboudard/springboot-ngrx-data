import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EntityStoreModule } from './entity-store.module';
import { DefaultDataServiceConfig } from 'ngrx-data';

// TODO : change this config when using json-server or Spring Boot Data
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api'
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EntityStoreModule
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  declarations: []
})
export class AppStoreModule {}
