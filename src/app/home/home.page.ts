import { Component } from '@angular/core';
import { AdvertisementComponent } from '../advertisement/advertisement.component';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import {IonicModule }from '@ionic/angular'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AdvertisementComponent, IonicModule, RouterLink],
})
export class HomePage {
  constructor() {
    addIcons({addCircleOutline})
  }
}
