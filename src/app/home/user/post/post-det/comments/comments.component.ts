import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../../../service/blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  userId:any;
  post:any;
  comments:any;

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.post = JSON.parse(localStorage.getItem("post")|| '{}')
    this.blogService.getPostComments(this.post.id).subscribe(com =>
      {this.comments = com,console.log(this.comments)});
      


  }

}
