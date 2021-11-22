import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById(){
  return  this.activatedRoute.params.subscribe(params =>{
      let userId = params['userId']
      this.blogService.getUser(userId).subscribe((res) => {this.user = res,console.log(res)})
    })
    }

}
