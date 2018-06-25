import { Ingredient } from './../../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientEdited: EventEmitter<Ingredient>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  createIngredient(name,amount){
    this.newIngredientEdited.emit(new Ingredient(name.value,amount.value));
  }

}
