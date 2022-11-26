import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  username = environment.username;
  
  constructor(private title: Title, private meta:Meta){}

  ngOnInit() {
    this.title.setTitle('GitHub portofolio app');
    this.meta.addTags([
      {
        name: 'description',
        content:`${this.username}'s GitHub portofolio`
      },
      {
        name: 'author',
        content:this.username
      }


    ]);
  }

}

