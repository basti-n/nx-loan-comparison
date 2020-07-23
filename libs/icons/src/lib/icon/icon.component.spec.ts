import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { ElementRef, Renderer2 } from '@angular/core';
import { MockElementRef, mockSvgElement, mockIcon } from '../test-data';
import { IconRegistryService } from './icon-registry.service';

fdescribe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  function setUpSpies() {
    jest.spyOn(renderer, 'setStyle').mockImplementation();
    jest
      .spyOn(elementRef.nativeElement, 'querySelector')
      .mockImplementation(() => 'test');
    jest
      .spyOn(component, 'icon', 'get')
      .mockImplementation(() => mockSvgElement);

    jest.spyOn(component, 'setIconSize');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      providers: [
        {
          provide: IconRegistryService,
          useValue: {
            getIcon: jest.fn(() => mockIcon),
          },
        },
        { provide: ElementRef, useClass: MockElementRef },
        { provide: Renderer2, useValue: { setStyle: jest.fn() } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    elementRef = TestBed.inject(ElementRef);
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2);

    setUpSpies();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component instanceof IconComponent).toBeTruthy();
  });

  it('should get the icon for the provided input and set it as the innerHtml of the enclosing element', () => {
    component.name = mockIcon.name;
    fixture.detectChanges();

    expect(fixture.nativeElement.innerHTML).toContain('</svg>');
  });

  describe('setIconSize', () => {
    it('should be called when initializing the component', () => {
      expect(component.setIconSize).toHaveBeenCalledWith(25, 25);
      expect(renderer.setStyle).toHaveBeenCalledWith(
        component.icon,
        'width',
        '25px'
      );
      expect(renderer.setStyle).toHaveBeenCalledWith(
        component.icon,
        'height',
        '25px'
      );
    });

    it('should set the size of the svg icons', () => {
      component.height = 50;
      component.width = 100;

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.setIconSize).toHaveBeenCalledWith(100, 50);
      expect(renderer.setStyle).toHaveBeenCalledWith(
        component.icon,
        'width',
        '100px'
      );
      expect(renderer.setStyle).toHaveBeenCalledWith(
        component.icon,
        'height',
        '50px'
      );
    });
  });

  describe('get icon', () => {
    it('should return the svg element', () => {
      const result = component.icon;

      expect(result).toEqual(mockSvgElement);
    });
  });
});
