import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';
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
  users: User[];

  @Output()
  itemClicked: EventEmitter<String> = new EventEmitter();

  constructor() {}

  onUserSelected(avatar: String) {
    this.itemClicked.emit(avatar);
  }
}
