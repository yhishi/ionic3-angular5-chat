import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { HomePage } from '../home/home';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  rooms = [];
  ref = firebase.database().ref('chatrooms/');

  // firebaseからroom一覧を取得
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  // ルーム追加ページに遷移
  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  // チャットルームに遷移
  joinRoom(key) {
    this.navCtrl.setRoot(HomePage, {
      // room.keyとnicknameを渡す
      key:key,
      nickname:this.navParams.get("nickname")
    });
  }

}

// FirebaseのオブジェクトをArray型に変換
export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
