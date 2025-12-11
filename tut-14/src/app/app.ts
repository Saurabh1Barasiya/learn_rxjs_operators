import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, interval, map, Subject, takeUntil, timeInterval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-14';

  obs$ = interval(1000);

  // delay(5000)   ye new vlaue emit nahi karta h . only opeation k delay karta h.
  nums:number[] = [];
  fire(){
    this.obs$.pipe(
      takeUntil(timer(10000)),
    ).subscribe({
      next:(data)=>{
        console.log(data);
        this.nums.push(data)
      }
    })
  }


  $obs = interval(1000);
  
  $subject = new Subject<number>();

  numsArr:number[] = [];

  fireAgain(){
    this.obs$.pipe(
      takeUntil(this.$subject),
      map(ele=>ele*10),
    ).subscribe({
      next:(data)=>{
        console.log(data);
        this.numsArr.push(data);
      }
    })
  }

  emitsubject(){
    this.$subject.next(10);
  }
}
