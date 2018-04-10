import {Recipe} from '../recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Tomato',4),
        new Ingredient('Onion', 5)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say',
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/WHOPPER_with_Cheese%2C_at_Burger_King_%282014.05.04%29.jpg',
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
}
