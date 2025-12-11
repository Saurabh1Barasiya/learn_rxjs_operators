import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, finalize, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-6';

  protected obs$ = of(10,20,30,40,50)
  data:number[] = [];
  getData(){
    this.obs$.pipe(
      finalize(()=>alert("stream complete..."))
    ).subscribe({
      next:(item)=>{
        this.data.push(item);
      }
    })
  }


  obs1$ = new Observable((observer)=>{
    observer.next(100),
    observer.next(200),
    observer.next(300),
    observer.next(400),
    observer.next(500),
    observer.error(new Error("Network issue"));
    observer.next(600);
  });

  loadData(){
    this.obs1$.pipe(
      tap(()=>console.log("getting value")),
      finalize(()=>{
        console.log("stream stopped due to error occur...");
      })
    ).subscribe({
      next:(ele)=>{
        console.log(ele);
      }
    })
  }
}
