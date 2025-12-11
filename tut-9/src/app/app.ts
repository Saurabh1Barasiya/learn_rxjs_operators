import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-9';

  obs$ =  interval(1000);
  arr:number[] = [];

  getData(){
    this.obs$.pipe(
      take(5)  // only take 5 numbers .
    ).subscribe({
      next:(data)=>{
        this.arr.push(data);
      }
    })
  }
}
