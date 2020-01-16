# Create component which will:

##### 1. Store our current list of articles

##### 2. Contqain the form for submitting new articles

### Step 1 - removing the application title.

Remove the title from app.component.ts

import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

<!-- remove this line -->
<!-- title = 'reddit-app'; -->

}

### Step 2 - changing main template app.component.html - which is a main layout connected to app-root tag inside index.html file which is the main file which display our app in the browser.

We are doing this because we will use semantic ui in here.

### Code:

<form action="" class="ui large form segment">
  <h3 class="ui header">Add a Link</h3>

  <div class="field">
    <label for="title">Title</label>
    <input type="title"  id="title" />
  </div>
  <div class="field">
    <label for="link">Link</label>
    <input type="text" name="link" id="link" />
  </div>
</form>

