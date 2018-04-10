import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  recipeIndex: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(params['id']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
