import { TestBed, inject } from '@angular/core/testing';

import { ToastServiceService } from './toast.service';

describe('ToastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastServiceService]
    });
  });

  it('should be created', inject([ToastServiceService], (service: ToastServiceService) => {
    expect(service).toBeTruthy();
  }));
});
