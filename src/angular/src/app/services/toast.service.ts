import { Injectable } from '@angular/core';
import { EntityActions, OP_ERROR, OP_SUCCESS } from 'ngrx-data';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ToastService {

  constructor(actions$: EntityActions, private toastrservice: ToastrService) {
    actions$
      .where(ea => ea.op.endsWith(OP_SUCCESS) || ea.op.endsWith(OP_ERROR))
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        // this is a hack against "expression changed" bug listed here https://github.com/scttcper/ngx-toastr/issues/160
        setTimeout(() => this.toastrservice.success(`${action.entityName} action`, 'Success!'))
      );
  }

}
