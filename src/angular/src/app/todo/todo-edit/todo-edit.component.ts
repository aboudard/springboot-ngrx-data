import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { combineLatest, Observable, Subject } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../dto/todo';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: [ './todo-edit.component.scss' ]
})
export class TodoEditComponent implements OnInit, OnDestroy {
  id$: Observable<any>;
  todo$: Observable<Todo>;
  todoForm: UntypedFormGroup;
  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService,
    private location: Location
  ) {
  }

  validateForm(formGroup: UntypedFormGroup) {
    if (formGroup.get('title').value === '' && formGroup.get('description').value === '') {
      return {
        validateForm: {
          msg: 'Au moins un des champs doit être renseigné'
        }
      };
    } else {
      return null;
    }
  }

  /**
   * Chargement des entities avec lecture dans le cache
   * Déclaration du reactive form
   * Injection du Todo dans le form
   */
  ngOnInit() {
    this.todo$ = combineLatest(
      [ this.route.paramMap.pipe(map(paramMap => paramMap.get('id'))),
        this.todosService.entityMap$ ]
    ).pipe(
      map(([ id, entityMap ]) => {
        const todo = entityMap[id];
        if (!todo) {
          this.todosService.getByKey(id);
        }
        return todo;
      }),
      takeUntil(this.destroy$), // must be just before shareReplay
      shareReplay(1)
    );

    this.todoForm = new UntypedFormGroup({
      title: new UntypedFormControl(),
      description: new UntypedFormControl(),
      active: new UntypedFormControl(),
      dateTodo: new UntypedFormControl(),
      id: new UntypedFormControl()
    }, (formGroup: UntypedFormGroup) => {
      return this.validateForm(formGroup);
    });

    this.todo$.subscribe((todo: Todo) => {
      if (todo) {
        this.todoForm.patchValue(todo);
      }
    });
  }

  saveTodo() {
    this.todosService.update(this.todoForm.value);
    this.close();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  close() {
    this.location.back();
  }
}
