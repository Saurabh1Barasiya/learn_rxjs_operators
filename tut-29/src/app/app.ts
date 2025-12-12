import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-29';

  constructor() {
    // 3 timers ek saath chalao
    forkJoin([
      timer(1000),   // 1 sec baad 0
      timer(2000),   // 2 sec baad 0
      timer(3000)    // 3 sec baad 0
    ]).subscribe(([a, b, c]) => console.log(a, b, c));

    // forkJoin({
    //   user: this.http.get('/api/user/123'),
    //   posts: this.http.get('/api/user/123/posts'),
    //   friends: this.http.get('/api/user/123/friends')
    // }).subscribe(result => {
    //   console.log(result.user);
    //   console.log(result.posts);
    //   console.log(result.friends);
    //   // Ab teeno ready → page dikha do!
    // });
  }
}
