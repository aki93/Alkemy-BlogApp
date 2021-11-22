import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Router } from  '@angular/router';
import { Observable } from 'rxjs';

const url = "https://jsonplaceholder.typicode.com";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient,private router:Router) { }

  getAllUsers():Observable<any>{
    return this.http.get<any>(url+"/"+"users");
  }

  getAllAlbums():Observable<any>{
    return this.http.get<any>(url+"/"+"albums");
  }

  getAllPosts():Observable<any>{
    return this.http.get<any>(url+"/"+"posts");
  }

  getAllTodos():Observable<any>{
    return this.http.get<any>(url+"/"+"todos");
  }

  getUser(userId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"users/" + userId)
  }

  getUserPosts(userId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"users/" + userId + "/posts")
  }

  getPostComments(userId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"posts/" + userId + "/comments")
  }

  getUserAlbums(userId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"users/" + userId + "/albums")
  }

  getAlbumPhotos(albumId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"albums/" + albumId + "/photos")
  }

  getUserTodos(userId:any):Observable<any>{
    return this.http.get<any>(url+"/"+"users/" + userId + "/todos")
  }

  
}
