import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  postsDet:any;


  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllUserPosts();
  
    
  }

  getAllUserPosts(){
    this.activatedRoute.params.subscribe(params =>{
      let userId = params['userId']
      this.blogService.getUserPosts(userId).subscribe((res) => {this.posts = res,console.log(res)})
    })
  
    }
  
    async getPost(id:any){
      console.log("ok")
      this.postsDet = this.posts[id];
       console.log(this.postsDet)
       localStorage.setItem("post", JSON.stringify(this.postsDet))
      console.log("fin")
      await this.router.navigate(["/post"])
    }
  

}
