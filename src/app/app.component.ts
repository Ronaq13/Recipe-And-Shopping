import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isShowRecipeSection = true;
  isShowShoppingSection = false;

  showSelectedSection(event) {
    if (event === 'recipes') {
      this.isShowRecipeSection = true;
      this.isShowShoppingSection = false;
    }else {
      this.isShowRecipeSection = false;
      this.isShowShoppingSection = true;
    }
  }
}
