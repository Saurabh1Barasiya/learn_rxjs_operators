import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-16';
  obs1$ = of(10,20,30,40,50,60);
  nums:number[] = [];

  getStreamData(){
    this.obs1$.pipe(startWith(0,2,3)).subscribe({next:(data)=>{
      this.nums.push(data)
    }})
  }
}
