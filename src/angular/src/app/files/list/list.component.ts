import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { Observable } from 'rxjs';
import { Fileup } from '../../dto/fileup';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {

  files$: Observable<Fileup[]>;

  constructor(
    private filesService: FilesService
  ) {
  }

  ngOnInit(): void {
    this.files$ = this.filesService.getFiles();
  }

}
