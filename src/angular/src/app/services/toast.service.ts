import { Injectable } from '@angular/core';
import { EntityActions, OP_ERROR, OP_SUCCESS } from 'ngrx-data';
import {ToastsManager} from "ng2-toastr";

@Injectable()
export class ToastService {

  constructor(actions$: EntityActions, public toastr: ToastsManager) {
    actions$
      .where(ea => ea.op.endsWith(OP_SUCCESS) || ea.op.endsWith(OP_ERROR))
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        this.toastr.success(`${action.entityName} action`, 'Success!')
      );
  }

}
