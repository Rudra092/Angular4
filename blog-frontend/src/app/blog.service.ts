import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-09-14T12:20:47.854Z",
      "created": "2019-09-14T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Commedy",
      "IsPublished": true,
      "views": 0,
      "bodyHtml": "This is the blog body",
      "description": "This is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2019-09-14T12:20:47.854Z",
      "created": "2019-09-14T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Commedy",
      "IsPublished": true,
      "views": 0,
      "bodyHtml": "This is the second blog body",
      "description": "This is blog 2 description",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2019-09-14T12:20:47.854Z",
      "created": "2019-09-14T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Commedy",
      "IsPublished": true,
      "views": 0,
      "bodyHtml": "This is the third blog body",
      "description": "This is blog 3 description",
      "title": "This is blog 3"
    }
  ]

  public currentBlog;


  constructor() {
    console.log("service constructor is called");
  }

  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }


}
