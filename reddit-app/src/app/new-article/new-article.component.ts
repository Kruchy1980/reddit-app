import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
// Here we are importing the class
import { NewArticle } from "./new-article.model";

@Component({
  selector: "app-new-article",
  templateUrl: "./new-article.component.html",
  styleUrls: ["./new-article.component.css"]
})
export class NewArticleComponent implements OnInit {
  @HostBinding("attr.class")
  cssClass = "row";
  @Input() newArticle: NewArticle;


  constructor() {
// Articl is populated by the Input now, so we do not need anything here now
    // this.newArticle = new NewArticle("Angular", "http://angular.io", 10);
  }
  // declaring logic to votes change
  voteUp(): boolean {
    this.newArticle.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.newArticle.votes -= 1;
    return false;
  }

  ngOnInit() {}
}
