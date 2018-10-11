import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html'
})
export class SwipePage {
  users: Observable<User[]>;

  @Output()
  itemClicked: EventEmitter<String> = new EventEmitter();

  avatar: String;

  constructor(private navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.users = this.navParams.get('users');
    this.chooseRandomAvatar();
  }

  onAvatarSwipe(event) {
    this.chooseRandomAvatar();
  }

  chooseRandomAvatar() {
    this.users.subscribe((users: User[]) => {
      this.avatar = users[Math.floor(Math.random() * users.length)].avatar;
    });
  }

  goTo(avatar: String) {
    this.navCtrl.push(DetailPage, {
      avatar: avatar
    });
  }
}
