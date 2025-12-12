import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, fromEvent, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{

  protected title = 'tut-21';
  @ViewChild('myinput') myinput!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent<Event>(this.myinput.nativeElement,"input")
    .pipe(
      map((event:Event)=>(event.target as HTMLInputElement).value),
      mergeMap((req)=>this.fakeApiCall(req)),
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
