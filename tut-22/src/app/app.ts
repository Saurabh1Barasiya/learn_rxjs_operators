import { NgStyle } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounceTime, delay, fromEvent, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-22';

  @ViewChild('myinput') myinput!: ElementRef;
  
  ngAfterViewInit(): void {
    fromEvent<Event>(this.myinput.nativeElement,"input")
    .pipe(
      map((event:Event)=>(event.target as HTMLInputElement).value),
      debounceTime(500),
      switchMap((req)=>this.fakeApiCall(req)),
    )
    .subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

  fakeApiCall(value: string) {
    console.log(`Api call for ${value} request`)
    return of("server response for", value+'hello')
      .pipe(delay(5000)   // 1 second delay to simulate API call
    );
  }
}
