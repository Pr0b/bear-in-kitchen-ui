import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Injectable()
export class RecipeFetcherService {

  constructor(public http:Http) { }
  // getRecipes(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/photos')
  //     .map(res => res.json());
  // }
  
  getRecipes(){
    return Observable.of(MOCK_IMAGES);
  }  

  getRecipe(id: number){
    return MOCK_IMAGES[id];
  }
}

const MOCK_IMAGES =[
  {
    "albumId": 1,
    "id": 1,
    "title": "Recipe 1 title",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "Recipe 2 title",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "Recipe 3 title",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "Recipe 4 title",
    "url": "http://placehold.it/600/d32776",
    "thumbnailUrl": "http://placehold.it/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "http://placehold.it/600/f66b97",
    "thumbnailUrl": "http://placehold.it/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "http://placehold.it/600/56a8c2",
    "thumbnailUrl": "http://placehold.it/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "http://placehold.it/600/b0f7cc",
    "thumbnailUrl": "http://placehold.it/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "http://placehold.it/600/54176f",
    "thumbnailUrl": "http://placehold.it/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "http://placehold.it/600/51aa97",
    "thumbnailUrl": "http://placehold.it/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "http://placehold.it/600/810b14",
    "thumbnailUrl": "http://placehold.it/150/810b14"
  }];
