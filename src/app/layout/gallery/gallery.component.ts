import {Component, OnInit} from '@angular/core';
import {RecipePaginatedFetcherService} from '../../shared/services';
import {routerTransition} from '../../router.animations';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition()]
})
export class GalleryComponent implements OnInit {

  constructor(private recipePaginatedFetcherService: RecipePaginatedFetcherService) {
  }

  ngOnInit() {
    console.log('init!!');
    this.recipePaginatedFetcherService.init();
    this.recipePaginatedFetcherService.data.subscribe(array => {
      console.log('--==start==--');
      array.forEach(item => {
        console.log('item.id=' + item.id);
      });
      console.log('--==end==--');
    });
  }

  onScroll() {
    // console.log('scrolled!!');
    // this.recipePaginatedFetcherService.more();
    // this.recipePaginatedFetcherService.data.subscribe(array => {
    //   array.forEach(item => {
    //     console.log('--==start==--');
    //     console.log('item.id=' + item.id);
    //   });
    //   console.log('--==end==--');
    // });
  }
}
