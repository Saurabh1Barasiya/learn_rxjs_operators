import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-28';

  constructor() {
    of(1, 1, 2, 2, 2, 3, 1, 1)
      .pipe(distinctUntilChanged())
      .subscribe(console.log);
  }

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngAfterViewInit() {
    // Step 1: input element ko observable me convert karna
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        // Step 2: event se actual value nikalna
        map((e: any) => e.target.value.trim()),
        // Step 3: consecutive duplicates ignore karna
        debounceTime(300),          
        distinctUntilChanged(),
      )
      // Step 4: subscribe karke console me print karna
      .subscribe(value => {
        console.log("Search API call for:", value);
      });
  }
}
