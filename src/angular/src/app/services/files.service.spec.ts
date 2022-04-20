import { inject, TestBed } from '@angular/core/testing';
import { FilesService } from './files.service';


describe('FilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FilesService ]
    });
  });

  it('should be created', inject([ FilesService ], (service: FilesService) => {
    expect(service).toBeTruthy();
  }));
});
