import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar, faCheck, faCommentDots, faFire, faPencil, faSquare, faSquareCheck, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private library: FaIconLibrary) {
  }

  initIcons(): void {
    this.library.addIcons(
      faCheck, faFire, faCommentDots, faPencil, faTrash, faSquareCheck, faSquare, faUpload, faCalendar
    );
  }
}

