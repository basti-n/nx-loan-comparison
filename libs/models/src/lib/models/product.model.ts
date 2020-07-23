import { Entity } from './entity.model';

export interface Product extends Entity {
  name: string;
  features: any[];
}
