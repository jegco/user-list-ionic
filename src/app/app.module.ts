import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";
import { UserListComponent } from "../components/user-list/user-list";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { UserProvider } from "../providers/user/user";
import { UserItemComponent } from "../components/user-item/user-item";
import { DetailPage } from "../pages/detail/detail";
import { DetailProvider } from "../providers/detail/detail";
import { SwipePage } from "../pages/swipe/swipe";
import { UiErrorHandler } from "../exception/ui-error-handler/ui-error-handler";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListComponent,
    UserItemComponent,
    DetailPage,
    SwipePage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserListComponent,
    UserItemComponent,
    DetailPage,
    SwipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: UiErrorHandler },
    UserProvider,
    DetailProvider
  ]
})
export class AppModule {}
