import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[aos]',
  standalone: true,
})
export class AosDirective {
  @Input('aos') aos: {
    class: string;
    delay?: string;
    boxTrigger?: 'top' | 'mid' | 'bottom';
    winTrigger?: 'top' | 'mid' | 'bottom';
  } = {
    class: '',
  };

  // private delay: string = '0s';
  private playstate: string = 'paused';

  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, this.aos.class);
  }

  @HostListener('document:scroll', [])
  scroll(): void {
    const rect = this.element.nativeElement.getBoundingClientRect();
    let scroll = this.mapRange(0, window.innerHeight, 0, 1, this.getBoxTriggerPosition(rect));
    // scroll = scroll < 0 ? 0 : scroll > 1 ? 1 : scroll;
    // this.delay = `-${scroll.toFixed(2)}s`;
    console.log('scroll gets triggered');
    if (+scroll.toFixed(2) <= this.getWindowTriggerPosition()) {
      this.playstate = 'running';
      this.renderer.addClass(this.element.nativeElement,'active');
    }
  }

  @HostBinding('style.animationDelay') get animationDelay(): string {
    if (this.aos.delay) {
      return this.aos.delay;
    } else {
      return '0s';
    }
  }

  @HostBinding('style.animationPlayState') get animationPlayState(): string {
    return this.playstate;
  }

  private mapRange(a1: number, a2: number, b1: number, b2: number, value: number): number {
    return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
  }

  private getBoxTriggerPosition(rect: DOMRect): number {
    switch (this.aos.boxTrigger) {
      case 'top': {
        return rect.top;
      }
      case 'mid': {
        return rect.top + rect.height / 2;
      }
      case 'bottom': {
        return rect.top + rect.height / 2;
      }
      default: {
        return rect.top;
      }
    }
  }

  private getWindowTriggerPosition(): number {
    switch (this.aos.winTrigger) {
      case 'top': {
        return 0;
      }
      case 'mid': {
        return 0.5;
      }
      case 'bottom': {
        return 1;
      }
      default: {
        return 1;
      }
    }
  }
}
