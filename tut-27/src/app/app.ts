import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-27';

  // Subjects
  nameSubject = new BehaviorSubject<string>("Saurabh");
  ageSubject = new BehaviorSubject<number>(25);

  // Name list for changes
  names = ["Saurabh", "Rohan", "Amit", "Neha"];
  nameIndex = 0;

  age = 25;

  constructor() {
    // combineLatest logic
    combineLatest([this.nameSubject, this.ageSubject])
      .subscribe({
        next: ([name, age]) => {
          console.log("Latest Output →", name, age);
        }
      }
    );
  }

   // Change Name on button click
  changeName() {
    this.nameSubject.next(this.names[this.nameIndex]);
    this.nameIndex = (this.nameIndex + 1) % this.names.length;
  }

  // Increase Age on button click
  increaseAge() {
    this.age++;
    this.ageSubject.next(this.age);
  }
}
