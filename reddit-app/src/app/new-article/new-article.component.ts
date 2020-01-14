import { Component, OnInit, HostBinding } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
// Firstly define new Component with decorator @Component with understanding that the selector says that the component can be placed on the page by using the tag <app-new-article> so we can say that the selector is a tag name.
@Component({
  selector: "app-new-article",
  templateUrl: "./new-article.component.html",
  styleUrls: ["./new-article.component.css"]
})
export class NewArticleComponent implements OnInit {
  // first declaring properties - 4 of them.
  @HostBinding("att.class")
  cssClass = "row";
  votes: number;
  title: string;
  link: string;

  // constructor creates the class we need
  constructor() {
    this.title = "Angular";
    this.link = "http://angular.io";
    this.votes = 10;
  }
  // declaring logic to votes change
  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  ngOnInit() {}
}
