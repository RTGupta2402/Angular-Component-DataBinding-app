import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

//sits on ng-template
export class UnlessDirective {
  // we need to get the condition as Input and bind to a property named unless.
  // whenever our input parameter (condition) changes, we need to execute a method - setter method of property 'unless'.
  @Input() set appUnless(condition: boolean) {
    if(condition) {
      // create a view with the template reference.
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  
  // we need to access the template and where we should render it.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
