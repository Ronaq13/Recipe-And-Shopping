import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'assets/fries.jpg',
      [
        new Ingredient('Tomato', 4),
        new Ingredient('Onion', 5)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say',
      'assets/burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Potato', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
