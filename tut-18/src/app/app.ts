import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected title = 'tut-18';
  // @viewChild('btn',{ static: false }) btn!:ElementRef<HTMLButtonElement>;


  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('inputbox',{static:false}) inp!: ElementRef<HTMLInputElement>;

  @ViewChild('reactangle') reactangle!:ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, "click").subscribe({
        next: () => {
          console.log("button click")
        }
      }
    )

    fromEvent(this.inp.nativeElement,"input").subscribe({
      next:(event:Event)=>{
        console.log((event.target as HTMLInputElement).value);
      }
    })

    fromEvent(this.reactangle.nativeElement,'mousemove')
    .subscribe({
      next:(event:Event)=>{
        console.log("mousemove!!!",event.target);
        (event.target as HTMLDivElement).style.background = "yellow";
      }
    })
  }
}
