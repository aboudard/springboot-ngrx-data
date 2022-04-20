import { Injectable } from '@angular/core';
import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS } from '@ngrx/data';
import { ToastrService } from 'ngx-toastr';
import { Actions } from '@ngrx/effects';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(actions$: Actions, private toastrservice: ToastrService) {
    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) =>
            ea.payload.entityOp.endsWith(OP_SUCCESS) ||
            ea.payload.entityOp.endsWith(OP_ERROR)
        )
      )
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        // this is a hack against "expression changed" bug listed here https://github.com/scttcper/ngx-toastr/issues/160
        setTimeout(() =>
          this.toastrservice.success(
            `${action.payload.entityName} action`,
            'Success!'
          )
        )
      );
  }
}
