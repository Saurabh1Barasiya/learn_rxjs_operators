import { TmplAstBlockNode } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-5';

  protected obs$ = of(10,20,30,40,50);
  
  getDataFromApi(){
    this.obs$.pipe(
      tap(()=>console.log("stream start")),
      tap((value)=>console.log(`value bfore map ${value}`)),
      map(ele=>ele*2),
      tap((value)=>console.log(`value after map ${value}`)),
    ).subscribe({
      next(value) {
        console.log("actual data ",value);
      },
    })
  }
}
