import { Component, OnInit, OnDestroy } from '@angular/core';
import{ ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {
public currentBlog;

  constructor(private _route: ActivatedRoute, private router:Router, public blogService: BlogService) { 
    console.log("Blog view constructor is called");
  }

  ngOnInit() {
    console.log("Blog view ngOnInIt Called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  }
  ngOnDestroy() {
    console.log("Blog view destroyed");
  }
  
}
