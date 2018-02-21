import {Component, OnInit} from '@angular/core';
import {RecipeFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {

  constructor(private recipeFetcherService: RecipeFetcherService) {
  }

  ngOnInit() {
    this.recipeFetcherService.init();
  }

  onScroll() {
    console.log('scrolled!!');
    this.recipeFetcherService.more();
  }
}
