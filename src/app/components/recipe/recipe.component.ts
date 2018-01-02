import { Component, OnInit } from '@angular/core';
import { RecipeFetcherService } from '../../services/recipe-fetcher.service';
import { ActivatedRoute } from '@angular/router'
import { RecipePhoto } from '../gallery/gallery.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  image:RecipePhoto
  
  constructor(private recipeFetcherService: RecipeFetcherService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.recipeFetcherService.getImage(+this.route.snapshot.params['id']);
    console.log(this.image.title);
  }

}
