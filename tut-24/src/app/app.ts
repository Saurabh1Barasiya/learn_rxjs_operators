import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected title = 'tut-24';

   @ViewChild('btn') btn!: ElementRef;

   ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.fakeApiCall())
      )
      .subscribe(res => console.log(res));
  }

  fakeApiCall() {
    console.log("API Called");
    return of("Response from Server").pipe(
      delay(5000)  // simulate 5 second API call
    );
  }
}
