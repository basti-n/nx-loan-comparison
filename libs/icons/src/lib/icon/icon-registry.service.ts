import { Injectable } from '@angular/core';
import { Icon } from '../defs';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  private registry = new Map<string, Icon>();

  public register(icons: Icon[]) {
    icons.forEach((icon) => this.setInRegistry(icon));
  }

  public getIcon(iconName: string): Icon {
    return this.registry.get(iconName);
  }

  constructor() {}

  private setInRegistry(icon: Icon) {
    this.registry.set(icon.name, icon);
  }
}
