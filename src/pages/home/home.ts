import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';
import { DetailPage } from '../detail/detail';
import { SwipePage } from '../swipe/swipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.getUsers(null);
  }

  getUsers(refresher) {
    this.users = this.userProvider.getUSers();
    if (refresher != null) {
      refresher.complete();
    }
  }

  goTo(avatarUrl: String) {
    this.navCtrl.push(DetailPage, {
      avatar: avatarUrl
    });
  }

  goToSwipe() {
    this.users.subscribe((users: User[]) => {
      this.navCtrl.push(SwipePage, {
        users: this.users
      });
    });
  }
}
