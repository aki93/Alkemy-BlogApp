import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  albums:any[] = []
  photos:any

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.blogService.getAllAlbums().subscribe(res =>
      {this.albums = res,console.log(this.albums)})  
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
