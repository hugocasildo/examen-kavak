import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/shared/model/Post';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  id: string;
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getPostById(this.id).subscribe(_res => this.post = _res);

  }

}
