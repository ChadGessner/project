import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe(
      'Delicious Apple Pie',
      'Tastes Like Apples!',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg'
      ),
      new Recipe(
        'Delicious Apple Pie',
        'Tastes Like Apples!',
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg'
        ),
        new Recipe(
          'Delicious Apple Pie',
          'Tastes Like Apples!',
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg'
          ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
