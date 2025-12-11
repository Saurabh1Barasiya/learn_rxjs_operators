import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, take } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-8';

  obj$ = interval(2000);
  arr: number[] = [];
  arr2: number[] = [];

  getData() {
    this.obj$.pipe().subscribe({
      next: (data) => {
        this.arr.push(data)
      }
    })
  }

  onlyThreeValues() {
    this.obj$.pipe(
      take(3),
    ).subscribe({
      next: (ele) => {
        this.arr2.push(ele)
      }
    })
  }
}
