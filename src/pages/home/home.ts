import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/User';
import { UserProvider } from '../../providers/user/user';
import { DetailPage } from '../detail/detail';
import { SwipePage } from '../swipe/swipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.getUsers(null);
  }

  getUsers(refresher) {
    this.userProvider.getUSers().subscribe((users) => {
      this.users = users;
      if (refresher != null) {
        refresher.complete();
      }
    });
  }

  goTo(avatarUrl: String) {
    this.navCtrl.push(DetailPage, {
      avatar: avatarUrl
    });
  }

  goToSwipe() {
      this.navCtrl.push(SwipePage, {
        users: this.users
      });
  }
}
