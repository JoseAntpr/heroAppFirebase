import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';


import { Heroe } from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  heroesUrl: string = "https://heroapp21.firebaseio.com/heroes.json";
  heroeUrl: string = "https://heroapp21.firebaseio.com/heroes/"

  constructor(private http: HttpClient) { }

  nuevoHeroe( heroe: Heroe){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers: headers })
                .map(res => {
                  console.log("Guardando", res);
                  return res;
                })
  }

  actualizarHeroe( heroe: Heroe, key: string){
    let url = `${this.heroeUrl}${key}.json`
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put( url, body, { headers: headers })
                .map(res => {
                  console.log("Actualizando", res);
                  return res;
                })
  }
  

}
