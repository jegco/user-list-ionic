import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipePage } from './swipe';
import { UserListComponent } from '../../components/user-list/user-list';

@NgModule({
  declarations: [
    SwipePage,
    UserListComponent
  ],
  imports: [
    IonicPageModule.forChild(SwipePage),
  ]
})
export class SwipePageModule {}
