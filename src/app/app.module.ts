import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BlogService } from './service/blog.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './home/user/user.component';
import { PostComponent } from './home/user/post/post.component';
import { PostDetComponent } from './home/user/post/post-det/post-det.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommentsComponent } from './home/user/post/post-det/comments/comments.component';
import { AlbumsComponent } from './home/user/albums/albums.component';
import { PhotosComponent } from './home/user/albums/photos/photos.component';
import { TodoComponent } from './home/user/todo/todo.component';
import { AllPostComponent } from './home/all-post/all-post.component';
import { AllTodosComponent } from './home/all-todos/all-todos.component';
import { AllAlbumsComponent } from './home/all-albums/all-albums.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './footer/footer.component';


const routes:Routes = [
{path:'',redirectTo:'/home',pathMatch: 'full'},
{path:'home',component:HomeComponent},
{path:'user/:userId',component:UserComponent},
{path:'user/:userId/posts',component:PostComponent},
{path:'post',component:PostDetComponent},
{path:'comments',component:CommentsComponent},
{path:'user/:userId/albums',component:AlbumsComponent},
{path:'photos',component:PhotosComponent},
{path:'user/:userId/todos',component:TodoComponent},
{path:'allPosts',component:AllPostComponent},
{path:'allTodos',component:AllTodosComponent},
{path:'allAlbums',component:AllAlbumsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    PostDetComponent,
    NavigationComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodoComponent,
    AllPostComponent,
    AllTodosComponent,
    AllAlbumsComponent,
    FilterPipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
