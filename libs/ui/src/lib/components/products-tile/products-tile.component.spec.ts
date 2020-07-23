import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsTileComponent } from './products-tile.component';

describe('ProductsTileComponent', () => {
  let component: ProductsTileComponent;
  let fixture: ComponentFixture<ProductsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
