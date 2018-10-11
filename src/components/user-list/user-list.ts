import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserListComponent {
  @Input()
  users: Observable<User[]>;

  @Output()
  itemClicked: EventEmitter<String> = new EventEmitter();

  constructor() {}

  goTo(avatar: String) {
    this.itemClicked.emit(avatar);
  }
}
