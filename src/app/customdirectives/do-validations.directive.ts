import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDoValidations]'
})
export class DoValidationsDirective {

  constructor(private el: ElementRef) { }

  @Input() numericOnly = false;
  @Input() allowSpace = false;
  @Input() alphabetsOnly = false;
  @Input() alphaNumericOnly = false;

  @HostListener('input', ['$event']) input() {

    if (this.numericOnly) {
      const regex = this.allowSpace ? /[^0-9 ]/g : /[^0-9]/g;
      this.el.nativeElement.value = this.el.nativeElement.value.replace(
        regex,
        ''
      );
    }

    if (this.alphaNumericOnly) {
      const regex = this.allowSpace ? /[^a-zA-Z0-9 ]/g : /[^a-zA-Z0-9]/g;
      this.el.nativeElement.value = this.el.nativeElement.value.replace(
        regex,
        ''
      );
    }

    if (this.alphabetsOnly) {
      const regex = this.allowSpace ? /[^a-zA-Z ]/g : /[^a-zA-Z]/g;
      this.el.nativeElement.value = this.el.nativeElement.value.replace(
        regex,
        ''
      );
    }



  }



  }




