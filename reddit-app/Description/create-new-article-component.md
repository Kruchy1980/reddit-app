# new-article-component.ts - creating the ArticleComponent

<!-- We import HostBinding from the package @angular/core . For instance we can add HostBinding like this: -->

import { Component, OnInit, HostBinding } from "@angular/core";

<!-- // Firstly define new Component with decorator @Component with understanding that the selector says that the component can be placed on the page by using the tag <app-new-article> so we can say that the selector is a tag name. -->

@Component({
selector: "app-new-article",
templateUrl: "./new-article.component.html",
styleUrls: ["./new-article.component.css"]
})

<!-- So the  most essential way to use this component would be to place the following tqaqg in our markup  <app-new-article>
</app-new-article>
so these tags remain in our view when the page is rendered -->

# new-article-component.ts - Creating the new-article-component DefinitionClass.

export class NewArticleComponent implements OnInit {

<!-- // first declaring properties - 4 of them. -->
<!-- By using @HostBinding() the host element (the app-article tag) we want to set the class attribute to have “ row ”.
-->
<!-- Using the @HostBinding() is nice because it means we can encapsulate the app-article markup within our component. That is, we don’t have to both use an app-article tag and require a class="row" in the markup of the parent view. By using the @HostBinding decorator, we’re able to configure our host element from within the component. -->

@HostBinding("att.class")
cssClass = "row";
votes: number;
title: string;
link: string;

<!-- In the constructor() we set some default attributes: -->


constructor() {
this.title = "Angular";
this.link = "http://angular.io";
this.votes = 10;
}

<!-- And we define two functions for voting, one for voting up voteUp and one for voting down voteDown : -->

voteUp() {
this.votes += 1; <!-- here we incrementing the previous value -->
}

voteDown() {
this.votes -= 1; <!-- here we decrementing the previous value -->
}

ngOnInit() {}
}

##### Here we create four properties on ArticleComponent :

1. cssClass - the CSS class we want to apply to the “host” of this component - our app component is a host
2. votes - a number representing the sum of all upvotes, minus the downvotes
3. title - a string holding the title of the article
4. link - a string holding the URL of the article

We want each app-article to be on its own row. We’re using Semantic UI, and Semantic provides a CSS class for rows20 called row .
In Angular, a component host is the element this component is attached to. We can set properties on the host element by using the @HostBinding() decorator. In this case, we’re asking Angular to keep the value of the host elements class to be in sync with the property cssClass .
