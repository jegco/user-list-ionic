import { Injectable, ErrorHandler } from "@angular/core";
import { ToastController } from "ionic-angular";

/*
  Generated class for the UiErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiErrorHandler extends ErrorHandler {
  constructor(private toastCtrl: ToastController) {
    super();
  }

  handleError(error) {
    super.handleError(error);
    let toast = this.toastCtrl.create({
      message: 'We have a problem connecting the server, please try again',
      duration: 8000,
      position: 'bottom'
    });
  
    toast.present();
  }
}
