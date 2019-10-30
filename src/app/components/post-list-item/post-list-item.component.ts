import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  // postTitle: string;
  // postDate: string;
  // postContent: string;
  loveIts:number = 0

  constructor() { }

  ngOnInit() {
  }
  aimer(){
    return this.loveIts= this.loveIts+1
    console.log(this.loveIts)
  }

  pasAimer(){
    return this.loveIts= this.loveIts-1
    console.log(this.loveIts)
  }

  getColor(){
    if (this.loveIts>0) {
      return 'green';
    } else if (this.loveIts<0) {
      return 'red'
    }
    else{
      return 'black'
    }
  }
  getBackgroundColor(){
    if (this.loveIts>0) {
      return 'rgba(11,156,49,0.4)';
    } else if (this.loveIts<0) {
      return 'rgba(255,0,0,0.4)'
    }
    else{
      return 'rgba(255,255,255,0)'
    }
  }
}
