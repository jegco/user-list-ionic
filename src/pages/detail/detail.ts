import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Detail } from '../../models/Detail';
import { DetailProvider } from '../../providers/detail/detail';
import { pageParameters } from '../../utils/constants';

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
    private navParams: NavParams,
    private detailsProvider: DetailProvider
  ) {}

  ionViewDidLoad() {
    this.avatar = this.navParams.get(pageParameters.avatar);
    this.details = this.detailsProvider.getDetails();
  }
}
