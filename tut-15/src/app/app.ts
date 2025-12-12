import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-15';

  ngOnInit(): void {
    timer(5000).subscribe({
      // ye 5 secound ke baad 1 hi baar chalega
      next:(data)=>{
        console.log(data);
      }
    })

    timer(10000,1000).subscribe({
      // 10 secound ka wait ke baar har 1 secound me 
      // number emit karega. 
      next:(data)=>{
        console.log(data);
      }
    })
  }
}
