import { NewArticleComponent } from "./new-article.component";
// Firstly exporting class of article with previous State NOTE!! that it is not extension of Angular componnent but a plain class.
export class NewArticle {
  title: string;
  link: string;
  votes: number;

  // and now we can construct the class as it should be - first declaration of state inside consttuctor
  // The question mark means that it is optional not obligatory element
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  // we need to transfer this two functions inside article module:

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // And we need to add domain() methode as well
  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split("//")[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split("/")[0];
    } catch (err) {
      return null;
    }
  }
}
