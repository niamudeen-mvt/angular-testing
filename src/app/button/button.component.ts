import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btnClass:string = 'bg-red-500'
  @Output() buttonClick = new EventEmitter()
  onClick(){
    this.buttonClick.emit()
  }
}
