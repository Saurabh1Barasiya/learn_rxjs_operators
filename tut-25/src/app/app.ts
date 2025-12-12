import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-25';

  fakeApiRequest() {
    return new Observable((observer) => {
      console.log("API calling...");

      // Simulating network delay
      setTimeout(() => {

        let success = Math.random() > 0.5;  // 50% chance

        if (success) {
          observer.next("🎉 API Success!");
          observer.complete();
        } else {
          observer.error("❌ API Failed!");
        }

      }, 1000);
    });
  }

  understand(){
    this.fakeApiRequest().pipe(
       retry(3)  // try 3 more times on failure
    ).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error: (err) => console.log("Final Error:", err)
    })
  }
}
