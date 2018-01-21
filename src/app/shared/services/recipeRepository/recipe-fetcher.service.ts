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
    'id': 0,
    'title': 'Jahodová bublanina',
    'description': 'Česká klasika se sladkými jahodami.',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'thumbnail': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'stats': {'serves': '12 osob', 'time': '60 min', 'difficulty': 'pokrocily', 'category': 'dezert'},
    'ingredients': [
      {'id': 1, 'title': 'polohrubé mouky', 'quantity': 2, 'unit': 'hrnky'},
      {'id': 2, 'title': 'cukru krupice', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 3, 'title': 'prášek do pečiva', 'quantity': 1, 'unit': ''},
      {'id': 4, 'title': 'mléka', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 5, 'title': 'oleje', 'quantity': 4, 'unit': 'lžíce'},
      {'id': 6, 'title': 'vejce', 'quantity': 2, 'unit': ''},
      {'id': 7, 'title': 'jahod', 'quantity': 500, 'unit': 'g'},
      {'id': 8, 'title': 'vanilkové cukry', 'quantity': 2, 'unit': ''}],
    'protocol': [
      {'item': 'Nejdříve si v míse smícháme mouku, cukr a prášek do pečiva, uděláme důlek a přidáme mléko, olej a vejce.'},
      {'item': 'Důkladně smícháme, vylijeme na plech a povrch poklademe pokrájenými jahodami a zasypeme vanilkovými cukry.'},
      {'item': 'Pečeme na 180°C přibližně 35min.'}],
    'tags': [{'item': 'jahody'},
      {'item': 'kolac'},
      {'item': 'buchta'}],
    'tips': [{'item': 'Vyborne se hodi k ranni kave'},
      {'item': 'Je to mnamka'}]
  },
  {
    'id': 1,
    'title': 'Jahodová bublanina',
    'description': 'Česká klasika se sladkými jahodami.',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'photo': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'thumbnail': './assets/imgs/recipe/021_Jahodová_bublanina00.jpg',
    'stats': {'serves': '12 osob', 'time': '60 min', 'difficulty': 'pokrocily', 'category': 'dezert'},
    'ingredients': [
      {'id': 1, 'title': 'polohrubé mouky', 'quantity': 2, 'unit': 'hrnky'},
      {'id': 2, 'title': 'cukru krupice', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 3, 'title': 'prášek do pečiva', 'quantity': 1, 'unit': ''},
      {'id': 4, 'title': 'mléka', 'quantity': 1, 'unit': 'hrnek'},
      {'id': 5, 'title': 'oleje', 'quantity': 4, 'unit': 'lžíce'},
      {'id': 6, 'title': 'vejce', 'quantity': 2, 'unit': ''},
      {'id': 7, 'title': 'jahod', 'quantity': 500, 'unit': 'g'},
      {'id': 8, 'title': 'vanilkové cukry', 'quantity': 2, 'unit': ''}],
    'protocol': [
      {'item': 'Nejdříve si v míse smícháme mouku, cukr a prášek do pečiva, uděláme důlek a přidáme mléko, olej a vejce.'},
      {'item': 'Důkladně smícháme, vylijeme na plech a povrch poklademe pokrájenými jahodami a zasypeme vanilkovými cukry.'},
      {'item': 'Pečeme na 180°C přibližně 35min.'}],
    'tags': [{'item': 'jahody'},
      {'item': 'kolac'},
      {'item': 'buchta'}],
    'tips': [{'item': 'Vyborne se hodi k ranni kave'},
      {'item': 'Je to mnamka'}]
  },
  {
    'id': 2,
    'title': 'Tvarohové větrné mlýny',
    'description': 'Elegantní dezert či snídaně, která je snadná a ostatní budou ohromeni.',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'stats': {'serves': '12 osob', 'time': '45 min', 'difficulty': 'snadné', 'category': 'dezert'},
    'photo': './assets/imgs/recipe/061_Tvarohové_větrné_mlýny_00.jpg',
    'thumbnail': './assets/imgs/recipe/061_Tvarohové_větrné_mlýny_00.jpg',
    'ingredients': [
      {'id': 1, 'title': 'rozváleného listového těsta', 'quantity': 2, 'unit': 'balení'},
      {'id': 2, 'title': 'měkkého polotučného tvarohu', 'quantity': 250, 'unit': 'g'},
      {'id': 3, 'title': 'vejce', 'quantity': 1, 'unit': ''},
      {'id': 4, 'title': 'moučkového cukru', 'quantity': 2, 'unit': 'lžíce'},
      {'id': 5, 'title': 'vanilkový cukr', 'quantity': 1, 'unit': ''},
      {'id': 6, 'title': 'moučkový cukr na poprášení', 'quantity': 1, 'unit': ''}],
    'protocol': [
      {'item': 'Vejce si rozklepneme do nízké skleničky, rozmícháme a ¾ přelijeme do misky, kam přidáme tvaroh, moučkový cukr, vanilkový cukr a vymícháme do hladka.'},
      {'item': 'Listové těsto rozkrájíme rádýlkem na 6 čtverců a nakrojíme úhlopříčně od kraje do středu přibližně do dvou třetin. Doprostřed dáme lžíci tvarohové náplně.'},
      {'item': 'Přeložíme každý druhý roh vzniklého trojúhelníku doprostřed. Jako druhý přeložíme protější roh, aby mlýn dobře držel a pak zbylé dva. Veprostřed slepujeme zbylým vajíčkem ve skleničce.'},
      {'item': 'Připravené mlýny přendáme opatrně na plech a potřeme vajíčkem. Totéž uděláme s druhým listovým těstem.'},
      {'item': 'Pečeme na 190°C přibližně 15min. Po vychladnutí poprášíme moučkovým cukrem.'}],
    'tags': [{'item': 'listové těsto'},
      {'item': 'mlýn'},
      {'item': 'tvaroh'}],
    'tips': [{'item': 'Listové těsto necháme na pečícím papíře. Snadno pak přeneseme hotové větrné mlýny na plech. '},
      {'item': 'Je to mnamka'}]
  },  {
    'id': 3,
    'title': 'Recipe 3 title',
    'description': 'Lorem ipsum',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'stats': {'serves': '12 osob', 'time': '60 min', 'difficulty': 'pokrocily', 'category': 'dezert'},
    'photo': 'http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}],
    'tags': [{'item': 'jahody'},
      {'item': 'kolac'},
      {'item': 'buchta'}],
    'tips': [{'item': 'Vyborne se hodi k ranni kave'},
      {'item': 'Je to mnamka'}]
  },  {
    'id': 4,
    'title': 'Recipe 4 title',
    'description': 'Lorem ipsum',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'stats': {'serves': '12 osob', 'time': '60 min', 'difficulty': 'pokrocily', 'category': 'dezert'},
    'photo': 'http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}],
    'tags': [{'item': 'jahody'},
      {'item': 'kolac'},
      {'item': 'buchta'}],
    'tips': [{'item': 'Vyborne se hodi k ranni kave'},
      {'item': 'Je to mnamka'}]
  },  {
    'id': 5,
    'title': 'Recipe 5 title',
    'description': 'Lorem ipsum',
    'url': 'http://placehold.it/600/92c952',
    'thumbnailUrl': 'http://placehold.it/150/92c952',
    'stats': {'serves': '12 osob', 'time': '60 min', 'difficulty': 'pokrocily', 'category': 'dezert'},
    'photo': '.http://placehold.it/150/92c952',
    'thumbnail': 'http://placehold.it/150/92c952',
    'ingredients': [
      {'id': 1, 'title': 'ingredient1', 'quantity': 2, 'unit': 'ml'},
      {'id': 2, 'title': 'ingredient2', 'quantity': 5, 'unit': 'kg'}],
    'protocol': [
      {'item': 'polozka postupu 1'},
      {'item': 'polozka postupu 2'},
      {'item': 'polozka postupu 3'},
      {'item': 'polozka postupu 4'}],
    'tags': [{'item': 'jahody'},
      {'item': 'kolac'},
      {'item': 'buchta'}],
    'tips': [{'item': 'Vyborne se hodi k ranni kave'},
      {'item': 'Je to mnamka'}]
  }];

