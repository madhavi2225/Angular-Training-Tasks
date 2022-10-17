import{Directive, ElementRef , Renderer2} from '@angular/core';

@Directive({
    selector: '[mycustomDirective]',
})

export class CustomDirective{
    constructor(private elememntRef:ElementRef , private renderer:Renderer2){
        this.renderer.setStyle(this.elememntRef.nativeElement,'color','red');
    }
}