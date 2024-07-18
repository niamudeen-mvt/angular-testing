import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent  implements OnInit {
 
  @Input() inputType:string =  'text'
  @Input() inputName:string =  ''
  @Input() inputPlaceholder:string =  ''
  @Input() control = new FormControl()
  @Input() isFormSubmitted: boolean =  false
  
  @Output() handleChange = new EventEmitter()
  
  
  ngOnInit(): void {
    console.log('control: ', this.control);
  }

  errorMessage:any = {
    required : "This field is required",
    email: 'The email is not valid',
    minlength: 'Password must contain at least 3 characters'
  }



  handleInput(event: any){
    this.handleChange.emit(event.target.value)
  }

}
