import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.cdr.detach();
  }
}
