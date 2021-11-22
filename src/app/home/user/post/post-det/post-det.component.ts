import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../../service/blog.service';

@Component({
  selector: 'app-post-det',
  templateUrl: './post-det.component.html',
  styleUrls: ['./post-det.component.css']
})
export class PostDetComponent implements OnInit {

post:any
user:any

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  this.post = JSON.parse(localStorage.getItem("post")|| '{}')
  console.log(this.post)
  this.blogService.getUser(this.post.userId).subscribe(userName =>
   this.user = userName )
   console.log(this.user)
  }

}
