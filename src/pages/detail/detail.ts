import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailProvider } from '../../providers/detail/detail';
import { Observable } from 'rxjs/Observable';
import { Detail } from '../../models/Detail';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  details: Observable<Detail[]>;

  avatar: String;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private detailsProvider: DetailProvider
  ) {}

  ionViewDidLoad() {
    this.avatar = this.navParams.get('avatar');
    this.details = this.detailsProvider.getDetails();
  }
}
