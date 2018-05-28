import { Injectable } from '@angular/core';
import { EntityAction, OP_ERROR, OP_SUCCESS, ofEntityOp } from 'ngrx-data';
import { ToastrService } from 'ngx-toastr';
import { Actions } from '@ngrx/effects';
import { filter } from 'rxjs/operators';

@Injectable()
export class ToastService {
  constructor(actions$: Actions, private toastrservice: ToastrService) {
    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) =>
            ea.op.endsWith(OP_SUCCESS) || ea.op.endsWith(OP_ERROR)
        )
      )
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        // this is a hack against "expression changed" bug listed here https://github.com/scttcper/ngx-toastr/issues/160
        setTimeout(() =>
          this.toastrservice.success(`${action.entityName} action`, 'Success!')
        )
      );
  }
}
