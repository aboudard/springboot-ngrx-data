import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheck, faTrash, faSquare, faUpload, faCalendar, faFire, faPencil, faCommentDots, faSquareCheck
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private library: FaIconLibrary) { }

  initIcons(): void {
    this.library.addIcons(
      faCheck, faFire, faCommentDots, faPencil, faTrash, faSquareCheck, faSquare, faUpload, faCalendar
    );
  }
}

