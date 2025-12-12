import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, interval, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected title = 'tut-20';
  @ViewChild('myinput') myinput!:ElementRef;

  @ViewChild('btn') btn!:ElementRef;



  ngAfterViewInit(): void {
    fromEvent<Event>(this.myinput.nativeElement,"input")
    .pipe(
      map((event:Event):string=>(event.target as HTMLInputElement).value),
      switchMap(value=>this.fakeApiCall(value))
    )
    .subscribe({
      next:(data)=>{
        console.log(data);
      }
    })

    fromEvent(this.btn.nativeElement,"click").pipe(
      switchMap((value)=>interval(1000))
    ).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }


  fakeApiCall(value:string){
    return of(value); 
  }



}
