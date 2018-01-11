import { Component, OnInit } from '@angular/core';
import { RecipeFetcherService } from '../../services/recipe-fetcher.service';
import { ActivatedRoute } from '@angular/router'
import { RecipeDetail } from '../gallery/gallery.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe:RecipeDetail
  
  constructor(private recipeFetcherService: RecipeFetcherService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeFetcherService.getRecipe(+this.route.snapshot.params['id']);
  }

}
