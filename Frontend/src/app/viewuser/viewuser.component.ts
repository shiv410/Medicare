import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

  user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

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


}
