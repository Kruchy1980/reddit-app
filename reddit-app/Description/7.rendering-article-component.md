# Rendering the new-article-component on the page

### To render the new-article-component on the page we need to add the component tag to the application component file:

In order to use this component and make the data visible, we have to add a <app-
article></app-article> tag somewhere in our markup.
In this case, we want the AppComponent to render this new component, so let’s
update the code in that component. Add the <app-article> tag to the AppComponent ’s
template right after the closing </form> tag:

<form action="" class="ui large form segment">
  <h3 class="ui header">Add a Link</h3>
  <div class="field">
    <label for="title">title</label>
    <input type="text" id="title" #newtitle />
    <!-- changed #newtitle added-->
  </div>
  <div class="field">
    <label for="link">Link</label>
    <input type="text" name="link" id="link" #newlink />
    <!-- changed - #newlink added-->
  </div>
  <!-- This is the button added with seamntic ui classes-->
  <button
    (click)="addArticle(newtitle, newlink)"
    class="ui violet inverted right floated button"
  >
    Submit link
  </button>
</form>
<!-- adding the new-article-component  !!!!! -->
<div class="ui grid posts">
  <new-app-article> </new-app-article>
</div>

# Some interesting information about why the hand made component can be not rendered .

If we generated the ArticleComponent using Angular CLI (via ng generate component ), by default it should have “told” Angular about our app-article tag (more on that below). However, if we created this component “by hand” and we reload the browser now, we might see that the <app-article> tag wasn’t compiled. Oh no!;)
Whenever hitting a problem like this, the first thing to do is open up your browser’s developer console. If we inspect our markup (see screenshot below), we can see that
the app-article tag is on our page, but it hasn’t been compiled into markup. Why not?

# Explanation

This happens because the AppComponent component doesn’t know about the ArticleComponent component yet.

\*\* Angular 1 Note: If you’ve used Angular 1 it might be surprising that our app doesn’t know about our new app-article component. This is because in Angular 1, directives match globally. However, in Angular you need to
explicitly specify which components (and therefore, which selectors) you want to use.

On the one hand, this requires a little more configuration. On the other hand, it’s great for building scalable apps because it means we don’t have to share our directive selectors in a global namespace.

In order to tell our AppComponent about our new ArticleComponent component, we need to add the ArticleComponent to the list of declarations in this NgModule .

We add ArticleComponent to our declarations because ArticleComponent is part of this module ( AppModule ). However, if ArticleComponent were part of a different module, then we might import it with imports .

### For now, we need to know that when we create a new component, we have to put in a declarations in NgModules.

##### Firstly we need to import component

import { AppComponent } from './app.component';
import { NewArticleComponent } from './new-article/new-article.component';

###### After that we need to add it to the list

@NgModule({
declarations: [
AppComponent,
NewArticleComponent <!-- This component is added -->
],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

### After we’ve added ArticleComponent to declarations in the NgModule , if we reload the browser we should see the article properly rendered:

However, clicking on the vote up or vote down links will cause the page to reload instead of updating the article list.
JavaScript, by default, propagates the click event to all the parent components. Because the click event is propagated to parents, our browser is trying to follow the
empty link, which tells the browser to reload.
To fix that, we need to make the click event handler to return false . This will ensure the browser won’t try to refresh the page. Let’s update our code so that each of the
functions voteUp() and voteDown() return a boolean value of false (tells the browser not to propagate the event upwards):

### new-article-component.ts:

export class NewArticleComponent implements OnInit {
// first declaring properties - 4 of them.
@HostBinding("attr.class")
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

<!-- here we have added return -->

voteUp(): boolean {
this.votes += 1;
return false;
}

<!-- here we have added return -->

voteDown(): boolean {
this.votes -= 1;
return false;
}

ngOnInit() {}
}
