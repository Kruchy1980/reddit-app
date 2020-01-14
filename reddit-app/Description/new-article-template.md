# new-article.component.html

<!-- This is one column of article part with votes -->
<div class="four wide column center aligned votes">
  <div class="ui statistic">
    <!-- votes are showed by template expansion strings -->
    <div class="value">{{ votes }}</div>
    <div class="label">Points</div>
  </div>
  <!-- This is an article information column -->
  <div class="twelve wide column">
    <!-- title is showed by template expansion strings as well -->
    <a href="{{ link }}" class="ui large header">{{ title }}</a>
  </div>
  <ul class="ui big horizontal list voters">
    <li class="item">
      <a href (click)="voteUp()"> <i class="arrow up icon"></i>upvote</a>
    </li>
    <li class="item">
      <a href (click)="voteDown()"><i class="arrow down icon"></i>downvote</a>
    </li>
  </ul>
</div>

<!-- ATTENTION !!!! the values of votes and title comes from ArticleComponent class -->

<!-- Notice that we can use template strings in attribute values, as in the href of the a tag: href="{{ link }}" . In this case, the value of the href will be dynamically
populated with the value of link from the component class
On our upvote/downvote links we have an action. We use (click) to bind voteUp() / voteDown() to their respective buttons. When the upvote button is pressed,
the voteUp() function will be called on the ArticleComponent class (similarly with downvote and voteDown()-->
