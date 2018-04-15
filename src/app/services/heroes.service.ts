import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';


import { Heroe } from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  heroesUrl: string = "https://heroapp21.firebaseio.com/heroes.json";

  constructor(private http: HttpClient) { }

  nuevoHeroe( heroe: Heroe){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "true",
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers: headers })
                .map(res => {
                  console.log(res);
                  return res;
                })
  }

}
