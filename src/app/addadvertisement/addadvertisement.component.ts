import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { addIcons } from 'ionicons';
import { cameraOutline, saveOutline, arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Ads, AdsDatabaseService } from '../services/ads-database.service';

@Component({
  selector: 'app-addadvertisement',
  templateUrl: './addadvertisement.component.html',
  styleUrls: ['./addadvertisement.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule, NgIf]
})

export class AddadvertisementComponent implements OnInit, AfterViewInit {

  @ViewChild('titleInput') titleInput!: NgModel
  @ViewChild('descriptionInput') descriptionInput!: NgModel

  //ESPACIO DE CÓDIGO
  //nGModel de cada input
  //Insertar el ngModel para el URI de la photo
  adsData = {
    title: '',
    description: '',
    imageRoute: ''
  }


  constructor(private database: AdsDatabaseService) { 
    addIcons({cameraOutline, saveOutline, arrowBack})
  }

  async addNewAd(){
    console.log("Mostrando en consola")
    await this.database.addAds(this.adsData.title, this.adsData.description, this.adsData.imageRoute)
    console.log("Adding new ad..")
    console.log(this.adsData)
    this.adsData = {title: '', description: '', imageRoute: ''}
  }

  async deleteAd(ad:Ads){
    this.database.deleteAdById(ad.id)
  }

  ionViewWillLeave(){
    this.resetInputs(this.descriptionInput, this.titleInput)
  }

  resetInputs(...controles: NgModel[]) {
    controles.forEach(control => {
      control.control.markAsUntouched();
      control.control.markAsPristine();
    });
  }

  async openCamera(){
    const newImage = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })

    console.log(newImage)
    //newImage.webPath
    if(newImage && newImage.webPath){
      this.displayImage(newImage.webPath)
      console.log(newImage.webPath)
    } else{
      console.log("newImage is undefined")
    }
  }

  displayImage(imagePath:string){
    const imageContainer = document.getElementById('displayImageTaken')
    if(imageContainer){
      imageContainer.innerHTML = `<img src="${imagePath}">`
    }
  }

  ngAfterViewInit() {}

  ngOnInit() {}

}
