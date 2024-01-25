import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { WritableSignal, signal } from '@angular/core';

const DB_ADS = "advertisementsAppDb"

export interface Ads{
  id: number,
  title: string,
  description: string,
  imageRoute: string
}

@Injectable({
  providedIn: 'root'
})

export class AdsDatabaseService {
  private sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  private db!: SQLiteDBConnection
  private ad: WritableSignal<Ads[]> = signal<Ads[]>([]);

  constructor() { }

  async initializeDatabase(){
    console.log("Punto de conexión... Intentando")
    this.db = await this.sqlite.createConnection(
      DB_ADS,
      false,
      'no-encryption',
      2,
      false
    )
    console.log("Base de datos abierta con éxito")

    await this.db.open()

    const dbSchema = `CREATE TABLE IF NOT EXISTS usersAds(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      imageRoute TEXT
    );`
    await this.db.execute(dbSchema)
    this.loadAllAds()
    return true
  }

  async loadAllAds(){
    const ads = await this.db.query(`SELECT * FROM usersAds;`)
    this.ad.set(ads.values || [])
  }

  getAds(){
    return this.ad
  }

  //CRUD functions

  

  async addAds(
    title: string,
    description: string,
    imageRoute: string = "no hay ruta asignada",
  ){
    console.log("Entrando datos", {title, description, imageRoute})
    const query = `INSERT INTO usersAds (title, description, imageRoute) VALUES ('${title}', '${description}', '${imageRoute}')`

    const result = await this.db.query(query)

    this.loadAllAds()
    return result
  }

  async deleteAdById(
    id: number
  ){
    const query = `DELETE FROM usersAds WHERE id=${id}`
    const result = await this.db.query(query)

    this.loadAllAds()
    return result
  }

}
