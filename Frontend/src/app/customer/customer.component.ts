import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  currentUser!: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.userService.getCurrentUser().subscribe(data => {
    //   this.currentUser = data;
    // });
    this.userService.getCurrentUser().subscribe(
      data => {
        this.currentUser = data;
      },
      error => {
        if (error.status === 401) {
          // Redirect to login or show message
          this.router.navigate(['/login']);
        }
      }
    );

  }

}
