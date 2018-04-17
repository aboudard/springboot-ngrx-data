// entity-store.module.ts
import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

export function activeFilter(entities: {active: boolean}[], search: boolean) {
  return entities.filter(e => e.active === search);
}

export const entityMetadata: EntityMetadataMap = {
  Todo: {
    filterFn: activeFilter
  }
};
@NgModule({
  imports: [
    NgrxDataModule.forRoot({ entityMetadata: entityMetadata })
  ]
})
export class EntityStoreModule { }
