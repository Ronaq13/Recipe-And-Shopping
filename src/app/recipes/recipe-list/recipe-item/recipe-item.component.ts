import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from "../../../services/recipe.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService,
              private route: Router) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.route.navigate(['/recipes', this.index ]);
  }
}
