import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  private Posts: any[];
  private favorite_icon_color: string;
  constructor(private postservice: PostService) { }

  ngOnInit() {

    this.Posts =   [
      {name : 'UNDERTAKER VS RUSEV',
        url  : 'https://static.toiimg.com/thumb/imgsize-208826,msid-63721981,width-650,resizemode-4/63721981.jpg',
        favourite: false
      },
      {
        name : 'BROCK VS ROMAN',
        url : 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2018/03/19/18/wwe.png',
        favourite: false
      },
      {
        name : 'SETH',
        url : 'https://cbssportslocal.files.wordpress.com/2017/05/seth-rollins-wwe-summerslam-2015.jpg',
        favourite: false
      }
    ];

    this.Add_Post();
    this.Remove_All();
  }

  public getPosts() {
    return this.Posts;
  }

  public favorite_icon(i) {
    if (this.Posts[i].favourite === false) {
      this.Posts[i].favourite = true;
    } else {
      this.Posts[i].favourite = false;
    }
  }
  public delete_icon(i) {
    console.log('fuck');
    this.Posts.splice(i, 1);
  }

  public Add_Post() {
    this.postservice.getADD_Post().subscribe((data) => {
      this.Posts.push(data);
    });
    console.log('fuck');
  }

  public Remove_All() {
    this.postservice.getREMOVE_ALL().subscribe(() => {
      this.Posts.splice(0, this.Posts.length);
      console.log(this.Posts.length);
    });
  }
}
