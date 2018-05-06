import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css']
})
export class PostsScreenComponent implements OnInit {


  constructor(private postservice: PostService) {

  }

  ngOnInit(): void {
  }

  public delete_all() {
    this.postservice.getREMOVE_ALL().next();
  }

}
