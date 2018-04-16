import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes()
        .subscribe( (data:Heroe[]) => {
          this.heroes = data;
          this.loading=false;
        });
   }

  ngOnInit() {
  }

  borraHeroe(key:string){
    this.heroesService.borrarHeroe(key)
        .subscribe(resp => {
          if(resp){
            console.error(resp);
          }else{
            delete this.heroes[key];
          }
        });
  }

}
