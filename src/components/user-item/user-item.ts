import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';

/**
 * Generated class for the UserItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-item',
  templateUrl: 'user-item.html'
})
export class UserItemComponent {
  @Input()
  user: User;

  @Output()
  itemClicked: EventEmitter<String> = new EventEmitter();

  constructor() {}

  onItemClicked() {
    this.itemClicked.emit(this.user.avatar);
  }
}
