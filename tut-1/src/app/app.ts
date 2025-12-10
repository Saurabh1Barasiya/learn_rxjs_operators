import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  obs1 = new Observable((observer)=>{
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.next(40);
      observer.next(50);
  });

  obs2 = new Observable((observer)=>{
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.error(new Error("404 page not found !!!"));
    observer.next(400);
  })

  protected title = 'tut-1';
  protected arr:number[] = [];
  protected arr2:number[] = [];
   

  loadData(){
    this.obs1.subscribe({
      next:(data)=>{
        console.log(data);
        if(typeof data === "number"){
          this.arr.push(data)
        }
      }
    })
  }

  loaddataError(){
    this.obs2.pipe(
      catchError((err)=>{
        console.log("error occor",err)
        return of("Error resolved"); 
      })
    ).
    subscribe((data)=>{
      // if(typeof data === "number"){
      //   this.arr2.push(data);
      // }

      this.arr2.push(data as any);
    })
  }
}
