import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular'
import { data } from 'src/data';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import {trashOutline, cameraOutline} from 'ionicons/icons'
import { AdsDatabaseService } from '../services/ads-database.service';


@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgFor, DatePipe],
})
export class AdvertisementComponent  implements OnInit {
  /*
  Eliminar data cuando los datos se persistan
  Esto es solo para hacer las pruebas correspondientes
  */ 
  data = data

  ads = this.database.getAds()

  constructor(private database:AdsDatabaseService) { 
    addIcons({trashOutline, cameraOutline})
  }



  ngOnInit() {}

}
