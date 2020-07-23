import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { IconRegistryService } from './icon-registry.service';
import { svgElementFromSvgString } from '../utils/svg-element-from-svg-string';
import { Icon } from '../defs';

@Component({
  selector: 'icon',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  private svgElement: SVGElement;

  @Input() width = 25;
  @Input() height = 25;
  @Input() set name(iconName: string) {
    if (this.svgElement) {
      this.removeElement(this.svgElement);
    }
    if (this.hasNativeElement()) {
      const svgIcon: Icon = this.registry.getIcon(iconName);
      this.attachSvg(svgIcon.data || '');
    }
  }

  public get icon(): SVGElement {
    return (
      this.elementRef.nativeElement &&
      (<HTMLElement>this.elementRef.nativeElement).querySelector('svg')
    );
  }

  public setIconSize(width: number, height: number) {
    this.renderer.setStyle(this.icon, 'width', `${width}px`);
    this.renderer.setStyle(this.icon, 'height', `${height}px`);
  }

  constructor(
    private registry: IconRegistryService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setIconSize(this.width, this.height);
  }

  private attachSvg(svgString: string) {
    const svgElement = svgElementFromSvgString(svgString);
    (this.elementRef.nativeElement as Element).appendChild(svgElement);
  }

  private hasNativeElement() {
    return this.elementRef.nativeElement;
  }

  private removeElement(element: Element) {
    (this.elementRef.nativeElement as HTMLElement).removeChild(element);
  }
}
