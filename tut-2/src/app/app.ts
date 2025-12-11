import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';
  protected arr:number[] = [];

  $obs1 = new Observable((observer)=>{
    observer.next(10);
    observer.next(20);
    observer.next(30);
    observer.error(new Error("Network issue !!!"));
  })

  getData(){
    this.$obs1.pipe(
      catchError(err=>{
        console.log("error aa gayi",err);
        return throwError(()=>new Error("Something went wrong !!!"));
      })
    ).subscribe({
      next:(data)=>{
        this.arr.push(data as any)
      },
      error:(err)=>{
        console.log("Error handled",err);
      }
    })
  }
}
