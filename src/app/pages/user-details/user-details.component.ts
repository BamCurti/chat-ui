import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../shared/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Output() onUserClear: EventEmitter<User> = new EventEmitter();

  @Input('item')user: User = {
    name: '',
    id: '',
    email: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  clearUser(user: User) {
    this.user = {
      id: '',
      email: '',
      name: ''
    };

    this.onUserClear.emit(this.user);

  }

}
