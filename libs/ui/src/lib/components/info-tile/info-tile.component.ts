import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: ['./info-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
