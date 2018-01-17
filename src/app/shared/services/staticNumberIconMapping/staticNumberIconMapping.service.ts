import {OnInit} from '@angular/core';


export class StaticNumberIconMappingService implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getIcon(id: number) {
    return './assets/icons/numbers/' + ICON_NAMES[id];
  }
}

const ICON_NAMES = [
  'one.svg',
  'two.svg',
  'three.svg',
  'four.svg',
  'five.svg',
  'six.svg',
  'seven.svg',
  'eight.svg',
  'nine.svg',
  'ten.svg'];
