import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipePage } from './swipe';
import { UserListComponent } from '../../components/user-list/user-list';
import { UserItemComponent } from '../../components/user-item/user-item';

@NgModule({
  declarations: [
    SwipePage,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    IonicPageModule.forChild(SwipePage),
  ]
})
export class SwipePageModule {}
