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
  selectedUser: User= {
    id: '',
    name: '',
    email: '',
  }
  displayedColumns = ['name', 'email', 'posts']

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

  setSelectUser(user: User){
    console.log(user)
  }

  clearUser(u: User){
    this.selectedUser = {
      id: '',
      name: '',
      email: '',
    }
  }

}
