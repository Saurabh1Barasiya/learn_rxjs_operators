import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounceTime, fromEvent, interval, map, Subject, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-30';


  @ViewChild('searchInput') searchInput!: ElementRef;

  searchClick$ = new Subject<void>();


  ngAfterViewInit() {
    const input$ = fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(map((e: any) => e.target.value));

    this.searchClick$
      .pipe(
        debounceTime(500),
        // withLatestFrom(input$),
        withLatestFrom(interval(1000)),
      )
      .subscribe(([_, value]) => {
        console.log('Search value:', value);
      });
  }

}
