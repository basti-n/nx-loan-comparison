import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@models';

@Component({
  selector: 'ui-products-tile',
  templateUrl: './products-tile.component.html',
  styleUrls: ['./products-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTileComponent {
  @Input() product: Product;
  constructor() {}
}
