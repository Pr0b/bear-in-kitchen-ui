import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RecipeFetcherService {

  constructor(public http: Http) {
  }

  // getRecipes(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/photos')
  //     .map(res => res.json());
  // }

  getRecipes() {
    return Observable.of(MOCK_IMAGES);
  }

  getRecipe(id: number) {
    return MOCK_IMAGES[id];
  }
}

const MOCK_IMAGES = [
  {
    'albumId': 1,
    'id': 1,
    'title': 'Jahodová bublanina',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'thumbnail': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'ingredients': [
      {'id': 1, 'title': 'polohrubé mouky', 'quantity': 2, 'unit': 'hrnky'},
      {'id': 2, 'title': 'cukru krupice', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 3, 'title': 'prášek do pečiva', 'quantity': 1, 'unit': 'ks'},
      {'id': 4, 'title': 'mléka', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 5, 'title': 'oleje', 'quantity': 4, 'unit': 'lžíce'},
      {'id': 6, 'title': 'vejce', 'quantity': 2, 'unit': 'ks'},
      {'id': 7, 'title': 'jahod', 'quantity': 500, 'unit': 'g'},
      {'id': 8, 'title': 'vanilkové cukry', 'quantity': 2, 'unit': 'ks'}],
    'protocol': [
      {'item': 'Nejdříve si v míse smícháme mouku, cukr a prášek do pečiva, uděláme důlek a přidáme mléko, olej a vejce.'},
      {'item': 'Důkladně smícháme, vylijeme na plech a povrch poklademe pokrájenými jahodami a zasypeme vanilkovými cukry.'},
      {'item': 'Pečeme na 180°C přibližně 35min.'}]
  },
  {
    'albumId': 1,
    'id': 1,
    'title': 'Jahodová bublanina',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'thumbnail': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'ingredients': [
      {'id': 1, 'title': 'polohrubé mouky', 'quantity': 2, 'unit': 'hrnky'},
      {'id': 2, 'title': 'cukru krupice', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 3, 'title': 'prášek do pečiva', 'quantity': 1, 'unit': 'ks'},
      {'id': 4, 'title': 'mléka', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 5, 'title': 'oleje', 'quantity': 4, 'unit': 'lžíce'},
      {'id': 6, 'title': 'vejce', 'quantity': 2, 'unit': 'ks'},
      {'id': 7, 'title': 'jahod', 'quantity': 500, 'unit': 'g'},
      {'id': 8, 'title': 'vanilkové cukry', 'quantity': 2, 'unit': 'ks'}],
    'protocol': [
      {'item': 'Nejdříve si v míse smícháme mouku, cukr a prášek do pečiva, uděláme důlek a přidáme mléko, olej a vejce.'},
      {'item': 'Důkladně smícháme, vylijeme na plech a povrch poklademe pokrájenými jahodami a zasypeme vanilkovými cukry.'},
      {'item': 'Pečeme na 180°C přibližně 35min.'}]
  },  {
    'albumId': 1,
    'id': 3,
    'title': 'Recipe 3 title',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': 'http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}]
  },  {
    'albumId': 1,
    'id': 4,
    'title': 'Recipe 4 title',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': 'http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}]
  },  {
    'albumId': 1,
    'id': 5,
    'title': 'Recipe 5 title',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': '.http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}]
  }];

