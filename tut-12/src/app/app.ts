import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-12';

  obs$ = of(10, 20, 30, 40, 50);
  totel!: number;

  getFinalValue() {
    this.obs$.pipe(
      reduce((acc, curr) => acc + curr, 0)
    ).subscribe((data) => {
      this.totel = data;
    })
  }

  people$ = from([
    { name: 'Saurabh', age: 25 },
    { name: 'Neha', age: 20 }
  ]);

  names: string[] = [];
  ages: number[] = [];

  getName() {
    this.people$.pipe(
      reduce((acc, curr) => {
        acc.push(curr.name)
        return acc;
      }, [] as string[])
    ).subscribe({
      next: (data) => {
        this.names = data;
      }
    })
  }

  getAge() {
    this.people$.pipe(
      reduce((acc, curr) => {
        acc.push(curr.age)
        return acc;
      }, [] as number[])
    ).subscribe({
      next: (data) => {
        this.ages = data;
      }
    })
  }


  products$ = from([
    { name: 'Laptop', price: 1000},
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 80 },
  ]);
  

  price!:number;
  productTotel(){
    this.products$.pipe(
      reduce((acc,curr)=>acc+curr.price,0),
    ).subscribe({
      next:(value)=> {
        this.price = value;
      },
    })
  }
}
