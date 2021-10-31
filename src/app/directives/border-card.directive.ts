import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[houseBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#118041';

  constructor(private el: ElementRef) { 

    this.setBorder(this.initialColor);
    this.borderColor = "#118041";
  }

  //permet de choisir la couleur à mettre via notre template
  @Input('houseBorderCard') borderColor: string; // avec alias

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
    //this.setHeight( this.defaultHeightMouse || this.defaultHeight);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
    //this.setHeight(this.defaultHeight);
  }
  
  private setBorder(color: string) {
      let border = 'solid 4px ' + color;
      this.el.nativeElement.style.border = border;
  }

}
