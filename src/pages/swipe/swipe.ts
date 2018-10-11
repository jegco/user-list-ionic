import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { pageParameters } from '../../utils/constants';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html'
})
export class SwipePage {
  users: User[];

  @Output()
  itemClicked: EventEmitter<String> = new EventEmitter();

  avatar: String;

  constructor(private navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.users = this.navParams.get(pageParameters.users);
    this.chooseRandomAvatar();
  }

  onAvatarSwipe(event) {
    this.chooseRandomAvatar();
  }

  chooseRandomAvatar() {
      this.avatar = this.users[Math.floor(Math.random() * this.users.length)].avatar;
  }

  goTo(avatar: String) {
    this.navCtrl.push(DetailPage, {
      avatar: avatar
    });
  }
}
