// entity-store.module.ts
import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';
export const entityMetadata: EntityMetadataMap = {
  Todo: {}
};
@NgModule({
  imports: [
    NgrxDataModule.forRoot({ entityMetadata: entityMetadata })
  ]
})
export class EntityStoreModule { }
