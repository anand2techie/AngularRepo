import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{


  ngOnInit(): void {
    alert('inside BasicHighlightDirective ngOnInit...')
    this.elementRef.nativeElement.style.backgroundColor='red';
  }

  //depedency injection
  constructor(private elementRef: ElementRef) { 
    alert('inside constructor...')
  }

}
