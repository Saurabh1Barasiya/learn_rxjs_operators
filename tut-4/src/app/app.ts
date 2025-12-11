import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-4';

  protected lastValue!:number;

  private obs$ = of(10,20,30,40,50,60);
  async getLast(){
    this.lastValue = await lastValueFrom(this.obs$)
  }
}
