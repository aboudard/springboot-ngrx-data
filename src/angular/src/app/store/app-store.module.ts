import { entityConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

// TODO : change this config when using json-server or Spring Boot Data
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api'
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  declarations: []
})
export class AppStoreModule {}
