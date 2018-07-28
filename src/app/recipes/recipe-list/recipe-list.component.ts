import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe('This is test', 'This is sample', 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
