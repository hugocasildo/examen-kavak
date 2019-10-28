import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../core/shared/model/Post';
import { ApiService } from '../../core/http/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.posts$ = this.api.getPosts();
  }

}
