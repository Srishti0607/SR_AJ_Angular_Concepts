import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockcutcopypaste]'
})
export class BlockcutcopypasteDirective {

  constructor() { }

  @HostListener("paste", ["$event"]) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener("copy", ["$event"]) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener("cut", ["$event"]) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

}
