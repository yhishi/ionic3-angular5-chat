import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from  '../room/room';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  data = { nickname:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }

  // サインアップページに遷移
  openSignUp() {
    this.navCtrl.setRoot(SignupPage);
  }

}
