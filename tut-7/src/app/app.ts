import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, of, take, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-7';

  obs$ = of(10,20,30,40);
  arr:number[] = []

  getData(){
    this.obs$.pipe(
      delay(5000),
      // tap((ele)=>console.log(ele)),
    ).subscribe({
      next:(data)=>{
        console.log(data);
        this.arr.push(data)
      }
    })
  }
}
