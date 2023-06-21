import { DefaultDataService, HttpUrlGenerator, Logger } from "@ngrx/data";
import { Todo } from "../dto/todo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class CustomDataService extends DefaultDataService<Todo> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('Todo', http, httpUrlGenerator);
    logger.log('Created custom Todo EntityDataService');
  }
  override getAll(): Observable<Todo[]> {
    // return super.getAll().pipe(map(heroes => heroes.map(hero => this.mapHero(hero))));
    return this.http.get<Todo[]>('http://localhost:8080/api/todos');
  }
  // this will override the returned objects
  private mapHero(hero: Todo): Todo {
    return { ...hero, active: false };
  }
}
