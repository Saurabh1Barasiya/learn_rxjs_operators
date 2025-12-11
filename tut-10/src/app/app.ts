import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-10';

  protected obs$ = of(10,20,30,40,50,60);
  newdata:number[] = []
  getNewData(){
    this.obs$.pipe(
      map((data)=>data*10)
    ).subscribe({
      next:(res)=>{
        this.newdata.push(res);
      }
    })
  }

  protected names:string[] = [];
  protected ages:number[] = [];


//   Angular + TypeScript me new Observable() by default value ka type = unknown maan leta hai.
//    Isliye map() ke andar TypeScript ko nahi pata ki obj.name exists karta hai ya nahi.

//   Tumko Observable ko batana hoga ki ye object emit karega jisme name and age honge.


  protected obs2$ = new Observable<{name: string, age: number}>((observer)=>{
    observer.next({ "name": "Saurabh", "age": 25 }),
    observer.next({ "name": "Peeyush", "age": 24 }),
    observer.next({ "name": "Suhani", "age": 21 }),
    observer.next({ "name": "Neha", "age": 20 })
  })

  getNames(){
    this.obs2$.pipe(
      map(obj=>obj.name)
    ).subscribe({
      next:(data)=>
        this.names.push(data)
    })
  }

  getAge(){
    this.obs2$.pipe(
      map(obj=>obj.age)
    ).subscribe({
      next:(data)=>
        this.ages.push(data)
    })
  }


}
