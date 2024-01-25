import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AdsDatabaseService } from './services/ads-database.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {



  constructor(private database: AdsDatabaseService) {
    this.initApp()
  }

  async initApp(){
    console.log("Inicializando base de datos...")
    await this.database.initializeDatabase()
    SplashScreen.hide()
    console.log("Base de datos incializada")
  }

}
