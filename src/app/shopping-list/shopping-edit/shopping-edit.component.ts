import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {isUndefined} from 'util';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('name') nameInput: string;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredients() {
    const name = this.nameInput;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.newIngredientAdded.emit(newIngredient);
  }

}
