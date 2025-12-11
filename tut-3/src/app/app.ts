import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-3';

  obs$ = of(10,20,30,40,50);
  firstValue!:number;

  async getFirstValue(){
    this.firstValue =  await firstValueFrom(this.obs$);
  }

}
