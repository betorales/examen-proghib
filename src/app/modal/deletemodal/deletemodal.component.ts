import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController}from '@ionic/angular'
import { AdsDatabaseService } from 'src/app/services/ads-database.service';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DeletemodalComponent  implements OnInit {

  constructor(private modalCtrl:ModalController, private database:AdsDatabaseService) { }

  ngOnInit() {}

  cancel(){
    console.log("Dismiss")
    return this.modalCtrl.dismiss(null, 'Cancelar')
  }

  accept(){
    console.log("Accept")
    this.database.deleteAdById
    return this.modalCtrl.dismiss(null, 'Confirmar')
  }

}
