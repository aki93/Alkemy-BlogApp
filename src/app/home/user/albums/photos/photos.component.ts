import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../../../service/blog.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  album:any;
  photos:any;
  photoArray:any = []
  photoArrayRem:[] = []

  constructor(
    private blogService : BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.album = JSON.parse(localStorage.getItem("post")|| '{}')
    this.blogService.getAlbumPhotos(this.album.id).subscribe(photo =>
     {this.photos = photo,localStorage.setItem("photos",JSON.stringify(this.photos)),console.log(this.photos)})
     this.photoArray = JSON.parse(localStorage.getItem("photos")|| '{}')
     console.log(this.photoArray)
    }

    removePhoto(photoId:any){
    this.photoArray.splice(photoId,1)
    }

  

}
