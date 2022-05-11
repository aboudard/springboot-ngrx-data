import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnDestroy {
  @Input() user;
  count = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
    }, 1000);
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  ngOnDestroy(): void {
    this.cdr.detach();
  }
}
