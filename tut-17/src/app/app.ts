import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { endWith, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-17';
  protected obs1$ = of(1,2,3,4,5,6);
  nums:number[]=[]

  ngOnInit(): void {
    this.obs1$.pipe(
      endWith(100,200,300,400)
    ).subscribe({
      next:(data)=>{
        console.log(data)
        this.nums.push(data);
      }
    })
  }
}
