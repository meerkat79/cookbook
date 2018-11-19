import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  
  recipes: Recipe[] = [];

  handleNewRecipe = function() {
    this.recipes.push(new Recipe('test recipe', 'this is a test', '../../../assets/images/apple-pie.jpg'));
    console.log(this.recipes)
  }

  constructor() { }

  ngOnInit() {
    console.log(this.recipes);
  }

}
