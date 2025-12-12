import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { concatMap, debounceTime, delay, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected title = 'tut-23';
  @ViewChild('myinput') myinput!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.myinput.nativeElement, "input")
      .pipe(
        map((event: any) => (event.target as HTMLInputElement).value),
        debounceTime(500),
        concatMap((req)=>this.fakeApiCall(req))
      )
      .subscribe({
        next: (data) => {
          console.log("Response: ", data);
        }
      })
  }

  fakeApiCall(req: string) {
    console.log(`Api call for ${req}`);

    return of(`Server send response for ${req}`)
      .pipe(
        delay(3000)  // will send response after 3 secound
      )
  }
}
