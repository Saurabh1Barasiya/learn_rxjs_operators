import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, from, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-11';
  protected $people = from([
    { name: 'Saurabh', age: 25 },
    { name: 'Neha', age: 19 },
    { name: 'Peeyush', age: 24 }
  ]);

  newArray:{ name: string, age: number }[] = [];

  getFilter(){
    this.$people.pipe(
      filter(obj=>obj.age >= 20),
    ).subscribe({
     next:(data)=>{
      console.log(data)
      this.newArray.push(data)
     }
    });
  }


}
