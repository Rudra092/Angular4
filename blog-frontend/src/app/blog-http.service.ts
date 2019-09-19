import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) {
    console.log("Blog-Http Service was called");
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=YzM5NTY5ZTI4ZTU5YWRkYjc2NDk2OWY3YmNmMGJmMDEwMWVlOGFhMGVmYmNhZDBlM2ZlNGQwYjMxMjQ4OTI1NTgwYTMwMzNkZmEwMzBjNTBmZWNiMDNjMjAxZTg1MWU0YTM2NjgwNTZjMDU3NDkxY2FmYjYwMGNhOTBlMzU0ZTM3MA==');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
  }
}
