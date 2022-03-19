import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PostsComponent } from './components/posts/posts.component';
import { InfosComponent } from './components/infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    StoriesComponent,
    PostsComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
