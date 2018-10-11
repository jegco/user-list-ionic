import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list';
import { UserItemComponent } from './user-item/user-item';
@NgModule({
	declarations: [UserListComponent,
    UserItemComponent],
	imports: [],
	exports: [UserListComponent,
    UserItemComponent]
})
export class ComponentsModule {}
