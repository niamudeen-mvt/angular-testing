import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  count!: number;

  constructor(private counterService: CounterService) {
  }
  
  ngOnInit(): void {
    
    this.counterService.count.subscribe((el)=>{
      this.count = el
    })
   }
   
   increment(){
    this.counterService.count.next(this.count+1)
   }

   
   decrement(){
    if(this.count > 0){
      this.counterService.count.next(this.count-1)
    }
   }

}
