import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCustomButton]',
  exportAs: 'customButton',
})
export class CustomButtonDirective implements OnInit{

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void
  {
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '14pt');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold');
  }

  @HostListener('click',['$event'])
  clickEvent(event: Event){
    event.preventDefault();
    event.stopPropagation();
    alert('button');
  }
}
