import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    firstname: '',
    lastname: '',
    emailId: '',
    password: '',
    gender: '',
    dateOfBirth: ''
  };
  message: string = '';

  constructor(private userService: UserService) { }

  onRegister() {
    this.userService.register(this.user).subscribe({
      next: (response) => {
        console.log("User registered!", response);
        this.message = 'User registered successfully!';
      },
      error: (error) => {
        console.error("Error registering user:", error);
        this.message = 'Error occurred during registration!';
      },
      complete: () => {
        console.log('Registration request completed.'); // This is optional
      }
    });
  }

}
