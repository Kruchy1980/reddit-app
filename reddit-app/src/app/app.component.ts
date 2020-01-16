import { Component } from "@angular/core";
// firstly importing stuffs from new artivle.model
import { NewArticle } from "./new-article/new-article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // after import we are changing the property of component
  newArticles: NewArticle[]; // <-- component property
  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  //   // log just to check if button is working
  //   console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  //   return false;
  // }
  // Now we can add the clazss constructor in here
  constructor() {
    this.newArticles = [
      new NewArticle("Angular", "http://angular.io", 4),
      new NewArticle("CSS", "http://css.io", 2),
      new NewArticle("Tyoescript", "http://typescript.io", 6)
    ];
  }
}
