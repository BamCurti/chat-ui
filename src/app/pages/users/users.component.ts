import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  hasFetch: boolean;

  constructor(private userService: UserService) {
    this.hasFetch = false;
  }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.hasFetch = true;
      this.users = users;
    })
  }

}
