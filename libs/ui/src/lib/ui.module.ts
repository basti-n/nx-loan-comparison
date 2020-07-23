import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule, IconRegistryService, ch24_logo } from '@icons';
import { ProductsTileComponent } from './components/products-tile';
import { InfoTileComponent } from './components/info-tile';
import { HeaderComponent } from './components/header';

@NgModule({
  imports: [CommonModule, IconsModule],
  declarations: [ProductsTileComponent, InfoTileComponent, HeaderComponent],
  exports: [ProductsTileComponent, InfoTileComponent, HeaderComponent],
})
export class UiModule {
  constructor(private iconRegistry: IconRegistryService) {
    this.iconRegistry.register([ch24_logo]);
  }
}
