import { Component } from "@angular/core";
// firstly importing stuffs from new artivle.model
import { NewArticle } from "./new-article/new-article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export class AppComponent {
  // after import we are changing the property of component
  newArticles: NewArticle[]; // <-- component property
  // now we need this part of code changed a little
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // to check in console:
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.newArticles.push(new NewArticle(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }
  // to sort articles we can add the sortedNewArticles method
  sortedNewArticles(): NewArticle[] {
    return this.newArticles.sort(
      (a: NewArticle, b: NewArticle) => b.votes - a.votes
    );
  }

  // Now we can add the class constructor in here
  constructor() {
    this.newArticles = [
      // new NewArticle("Angular", "http://angular.io", 4),
      // new NewArticle("CSS", "http://css.io", 2),
      // new NewArticle("Typescript", "http://typescript.io", 6)
    ];
  }
}
