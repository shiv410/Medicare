import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  // constructor(private route: ActivatedRoute) {
  //   this.route.params.subscribe(params => {
  //     let id = +params['id'];  // The '+' is a shorthand to convert the string to a number
  //     // Now you can use the ID to fetch the relevant data or whatever else you need to do
  //   });
  // }


  user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      let id = +params['id'];  // The '+' is a shorthand to convert the string to a number
      // Now you can use the ID to fetch the relevant data or whatever else you need to do
    });
  }

  ngOnInit() {
    // Get the ID from the route parameter
    const id = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the user details
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
    }, error => {
      console.error('Error fetching user details', error);
    });
  }


  onSubmit() {
    this.userService.updateUser(this.user).subscribe(response => {
      console.log('User updated!', response);
      // Handle further actions, like redirecting to a user list or showing a success message.
      alert("User update successfully...!")
      this.router.navigate(["/viewallusers"])
    }, error => {
      console.error('Error updating user', error);
      alert("User can not be update! Please Try Again...")
    });
  }


}
