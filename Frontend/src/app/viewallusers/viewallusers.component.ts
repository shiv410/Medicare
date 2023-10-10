import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUsers();
    // this.userService.getAllUsers().subscribe(data => {
    //   this.users = data;
    // }, error => {
    //   console.error('Error fetching users', error);
    // });
  }


  private loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }


  viewUser(userId: number) {
    // Navigate to the view user page
    this.router.navigate(['/viewuser', userId]);
  }


  onUpdate(user: User) {
    // Navigate to edit page or open a modal/dialog with the user's data.
    // Example for navigation:
    this.router.navigate(['/updateuser', user.id]);
  }


  onDelete(userId: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(u => u.id !== userId);
          alert("Deleted Successfully...!")
          this.router.navigate(["/viewallusers"]);
        },
        error => {
          console.error("Error deleting user:", error);
        }
      );
    }
  }

}
