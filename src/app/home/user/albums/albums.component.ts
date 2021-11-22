import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:any
  photos:any

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      let userId = params['userId']
      this.blogService.getUserAlbums(userId).subscribe((res) => {this.albums = res,console.log(res)})
    })
  }

  async getPhotos(id:any){
    console.log("ok")
    this.photos = this.albums[id];
     console.log(this.photos)
     localStorage.setItem("post", JSON.stringify(this.photos))
    console.log("fin")
    await this.router.navigate(["/photos"])
  }

}
