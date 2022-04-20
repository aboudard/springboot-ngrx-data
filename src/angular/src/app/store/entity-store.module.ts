// entity-store.module.ts
import { NgModule } from '@angular/core';
import { EntityDataModule, EntityMetadataMap, PropsFilterFnFactory } from '@ngrx/data';

export function activeFilter(entities: { active: boolean }[], search: boolean) {
  return entities.filter(e => e.active === search);
}

/**
 * Filter for entities whose name matches the case-insensitive pattern
 * The filter works on ALL properties
 * @param {T[]} entities
 * @param {string} pattern
 * @return {any[]}
 */
export function textFilter<T extends { title: string; description: string }>(
  entities: T[],
  pattern: string
) {
  return PropsFilterFnFactory([ 'title', 'description' ])(entities, pattern);
}

/**
 * Fonction de comparaison pour trier les entities
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
export function sortByTitle(
  a: { title: string },
  b: { title: string }
): number {
  return a.title.localeCompare(b.title);
}

export const entityMetadata: EntityMetadataMap = {
  Todo: {
    filterFn: activeFilter,
    sortComparer: sortByTitle
  }
};

@NgModule({
  imports: [ EntityDataModule.forRoot({ entityMetadata: entityMetadata }) ]
})
export class EntityStoreModule {
}
