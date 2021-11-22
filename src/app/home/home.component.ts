import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BlogService } from '../service/blog.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users:any

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.blogService.getAllUsers().subscribe(res =>
    this.users = res)
    console.log("ok")
  }



}
