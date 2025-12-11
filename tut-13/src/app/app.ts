import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-13';

  $obj = of(10,20,30,40,4,2,5,3,10,20,50,100,200,300,400,500);

  nums:number[] = [];

  getData(){
    this.$obj.pipe(
      takeWhile((value)=>value<100),
    ).subscribe({
      next:(data)=>{
        this.nums.push(data);
      }
    });
  }
  


  numsAgain:number[] = [];
   getDataAgain(){
    this.$obj.pipe(
      // inclusive: true → jis value ne rule toda, usko ek baar bhej dega, phir band
      takeWhile((value)=>value<100,true),
    ).subscribe({
      next:(data)=>{
        this.numsAgain.push(data);
      }
    });
  }
}
