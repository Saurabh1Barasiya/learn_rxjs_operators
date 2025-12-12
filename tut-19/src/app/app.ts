import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { debounceTime, fromEvent, map } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  
  
  protected title = 'tut-19';
  @ViewChild('myinp') inp!:ElementRef;


  ngAfterViewInit(): void {
    fromEvent<Event>(this.inp.nativeElement,"input")
    .pipe(
      map((event:Event)=>(event.target as HTMLInputElement).value),
      debounceTime(500),
    )
    .subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
  
}
