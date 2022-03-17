import { inject, TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';


describe('ToastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService]
    });
  });

  it('should be created', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
