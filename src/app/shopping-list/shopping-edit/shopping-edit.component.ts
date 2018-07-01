import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editeItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') form: NgForm;
    constructor(private slService: ShoppingListService) { }
 

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editeItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  createIngredient(form: NgForm) {
    if ( this.editMode ) {
      this.slService.updateIngredient(this.editeItemIndex, new Ingredient(form.value.name, form.value.amount) );
    } else {
      this.slService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    }
    this.editMode = false;
    this.form.reset();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false; 
  }

  onDelete() {
    if (this.editMode) {
      this.slService.deleteIngredient(this.editeItemIndex);
    }
    this.onClear();
  }
}
