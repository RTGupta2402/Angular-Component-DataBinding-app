import { Directive, ElementRef, OnInit } from '@angular/core';

//defines BasicHighlightDirective as a directive
@Directive({
    //configure the directive here
    selector: '[appBasicHighlight]' //an attribue selector to attach the directive in templates to elements.
})

export class BasicHighlightDirective implements OnInit{
    //reference of the element on which the directive is added to.
    constructor(private elementRef: ElementRef) {
        // elementRef.nativeElement
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}