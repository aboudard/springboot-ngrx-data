import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheck, faBurn, faCommentAlt, faEdit, faTrash,
  faCheckSquare, faSquare, faUpload, faCalendar
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private library: FaIconLibrary) { }

  initIcons(): void {
    this.library.addIcons(
      faCheck, faBurn, faCommentAlt, faEdit, faTrash, faCheckSquare, faSquare, faUpload, faCalendar
    );
  }
}

