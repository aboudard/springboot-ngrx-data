import { TestBed, inject } from '@angular/core/testing';

import { FilesService } from './files.service';

describe('FilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesService]
    });
  });

  it('should be created', inject([FilesService], (service: FilesService) => {
    expect(service).toBeTruthy();
  }));
});
