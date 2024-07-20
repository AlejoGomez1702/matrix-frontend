import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCompleteZeros]'
})
export class CompleteZerosDirective implements OnChanges{
  @Input() appCompleteZeros!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appCompleteZeros']) {
      const paddedNumber = this.padZeros(this.appCompleteZeros);
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', paddedNumber);
    }
  }

  private padZeros(num: number): string {
    return num.toString().padStart(6, '0');
  }

}
