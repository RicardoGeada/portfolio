import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

/**
 * Aos Interface
 * @prop {string} class - animation css class
 * @prop {string} delay - delay to start the animation after triggering e.g. '2s'
 * @prop {string} boxTrigger - part of the bounding box that triggers the animation
 * @prop {string} winTrigger - window position the boxTrigger needs to pass to trigger the animation
 */
interface Aos {
  class: string;
  delay?: string;
  boxTrigger?: 'top' | 'mid' | 'bottom'; 
  winTrigger?: 'top' | 'mid' | 'bottom';
}


@Directive({
  selector: '[aos]',
  standalone: true,
})


export class AosDirective {

  @Input('aos') aos: Aos = {
    class: '',
  };

  private playstate: string = 'paused';
  
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

  @HostListener('window:scroll', [])
  scroll(): void {
    this.triggerAnimation();
  }

  @HostListener('window:touchmove', [])
  touchmove(): void{
    this.triggerAnimation();
  }

  
  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}


  ngOnInit() {
    this.addAnimationClass();
  }


  /**
   * add animation css class to the element 
   */
  private addAnimationClass() {
    this.renderer.addClass(this.element.nativeElement, this.aos.class);
  }


  /**
   * trigger animation
   */
  private triggerAnimation() {
    const rect = this.element.nativeElement.getBoundingClientRect();
    let scroll = this.mapRange(0, window.innerHeight, 0, 1, this.getBoxTriggerPosition(rect));
    if (+scroll.toFixed(2) <= this.getWindowTriggerPosition()) {
      this.playstate = 'running';
    }
  }


  /**
   * remap value from range a to range b
   * @param a1 - first range start point
   * @param a2 - first range end point
   * @param b1 - second range start point
   * @param b2 - second range end point
   * @param value - value inside first range
   * @returns - mapped value on range b
   */
  private mapRange(a1: number, a2: number, b1: number, b2: number, value: number): number {
    return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
  }


  /**
   * get the position of the boundingClientRect that should be used to trigger the animation
   * @param {DOMRect} rect - boundingClientRect of the element
   * @returns number
   */
  private getBoxTriggerPosition(rect: DOMRect): number {
    switch (this.aos.boxTrigger) {
      case 'top': return rect.top;
      case 'mid': return rect.top + rect.height / 2;
      case 'bottom': return rect.top + rect.height;
      default: return rect.top;
    }
  }


  /**
   * get where in the window the animation should start
   * @returns number
   */
  private getWindowTriggerPosition(): number {
    switch (this.aos.winTrigger) {
      case 'top': return 0;
      case 'mid': return 0.5;
      case 'bottom':  return 1;
      default: return 1;
    }
  }

}
