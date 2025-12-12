import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, delayWhen, Observable, retryWhen, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-26';

  fakeApi() {
    return new Observable(observer => {
      console.log("API call ho rahi hai...");

      let success = Math.random() > 0.5;

      if (success) {
        observer.next("✔ Success hua!");
        observer.complete();
      } else {
        observer.error("❌ Error aaya!");
      }
    });
  }


  simulate() {
    this.fakeApi()
      .pipe(
        retryWhen((errorStream) =>
          errorStream.pipe(
            // delay(2000), // 2 second ruk ke retry karega
            // take(3) // i will only try for 3 times. if isko nahi 
            // lagaye to ye infinite time chalta rahega jab tak 
            // api success nahi ho jati h.

             delayWhen(() => timer(3000)),
             take(2)
          )
        )
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (e) => console.log("Final error:", e)
      })
  }
}
