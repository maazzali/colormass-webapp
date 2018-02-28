import { AfterViewInit, Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, AfterViewInit {
  @Output('loadMore') public loadMore = new EventEmitter();
  private el;

  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.el.addEventListener('scroll', () => {
      if (this.el.scrollTop >= (this.el.firstElementChild.clientHeight - this.el.clientHeight)) {
        this.loadMore.emit();
      }
    });
  }
}
