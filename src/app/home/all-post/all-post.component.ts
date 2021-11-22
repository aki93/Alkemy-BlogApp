import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  posts:any[] = []
  postsDet:any
  filterPost = ""

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(res =>
      {this.posts = res,console.log(this.posts)}) 

  }

  async getPost(id:any){
    console.log("ok")
    this.postsDet = this.posts[id];
     console.log(this.postsDet)
     localStorage.setItem("post", JSON.stringify(this.postsDet))
    console.log("fin")
    await this.router.navigate(["/post"])
  }

  searchByUserId(userId:any){
    this.blogService.getAllPosts().subscribe(res =>
      {this.posts = res})
 
      setTimeout(()=>{   
        this.posts = this.posts.filter(post =>
          post.userId == userId)                      
    }, 1000);

    console.log(this.posts)

    
  }

}
