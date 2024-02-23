import { Component } from '@angular/core';

@Component({
  selector: 'app-nstiform',
  templateUrl: './nstiform.component.html',
  styleUrl: './nstiform.component.css'
})
export class NstiformComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];
  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages);
  }

  
}
