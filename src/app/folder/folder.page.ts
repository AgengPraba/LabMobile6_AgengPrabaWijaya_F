import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: Date;
  unreadCount: number;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  chatList: Chat[] = [
    {
      id: '1',
      name: 'Ageng Praba Wijaya | H1D022016',
      avatar: 'assets/avatars/ageng.jpg',
      lastMessage: 'Bro besok jadi jogging ga?',
      time: new Date(),
      unreadCount: 2,
    },
    {
      id: '2',
      name: 'Mayor Bahlil',
      avatar: 'assets/avatars/mayor_bahlil.jpg',
      lastMessage: 'Pak minta tambahan anggaran buat dana koperasi',
      time: new Date(),
      unreadCount: 1,
    },
    {
      id: '3',
      name: 'Fufufafa',
      avatar: 'assets/avatars/fufufafa.jpg',
      lastMessage: 'susunya susu',
      time: new Date(),
      unreadCount: 0,
    },
    {
      id: '4',
      name: 'Pak Putin',
      avatar: 'assets/avatars/pak_putin.jpeg',
      lastMessage: 'I will deport you to the Gulag!',
      time: new Date(),
      unreadCount: 0,
    },
    {
      id: '5',
      name: 'Cha Ie Minh',
      avatar: 'assets/avatars/cak_imin.jpg',
      lastMessage: 'Tak slepet kamu mas',
      time: new Date(),
      unreadCount: 0,
    },
    {
      id: '6',
      name: 'SuToYo',
      avatar: 'assets/avatars/STY.jpeg',
      lastMessage: 'King Indo siap membantai MU',
      time: new Date(),
      unreadCount: 0,
    },
    {
      id: '7',
      name: 'Yanto Galon',
      avatar: 'assets/avatars/galon.jpeg',
      lastMessage: 'Galon abis mas?',
      time: new Date(),
      unreadCount: 0,
    },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  openChat(chat: Chat) {
    this.navCtrl.navigateForward(`/chat/${chat.id}`, {
      queryParams: {
        name: chat.name,
        avatar: chat.avatar,
      },
    });
  }

  newMessage() {
    this.navCtrl.navigateForward('/new-message');
  }
}
