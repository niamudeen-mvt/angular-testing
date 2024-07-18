import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  @Input() title: string = 'toast';
  @Input() desc: string = 'desc';
  @Input() accept:string = 'accept';
  @Input() cancel:string = 'cancel';
  
  isShow : boolean = false
  ngOnInit(): void {
    // this.isShow = true
  }


  onAccept(){
    this.isShow = false
  }

  onCancel(){ 
    this.isShow = false
  }
}
