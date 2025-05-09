import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  
  constructor(public photoService: PhotoService,private actionSheetCtrl: ActionSheetController) {}

  async actions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Photo Quality',
      buttons: [
        {
          text: 'Maxima Calidad(100%)',
          icon: 'camera',
          handler: () => this.photoService.photoQuality(100)
        },
        {
          text: 'Calidad Media (50%)',
          icon: 'image',
          handler: () => this.photoService.photoQuality(50)
        },
        {
          text: 'Salir',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
}