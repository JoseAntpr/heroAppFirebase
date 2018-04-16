import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styles: []
})
export class HeroeEditComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel",
  }
  nuevo: boolean = false;
  id: string;

  constructor(private heroesService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) { 
      this.route.params.subscribe( params => {
        this.id = params['id'];
      })
  }

  ngOnInit() {
  }

  guardar(){

    if(this.id === "nuevo"){
      this.heroesService.nuevoHeroe( this.heroe )
            .subscribe(data => {
              this.router.navigate(['/heroe', data['name']])
            }, error => console.error(error));
    }else{
      this.heroesService.actualizarHeroe( this.heroe, this.id)
            .subscribe(data => {
              console.log("Actualizado");
            }, error => console.error(error));

    }
    
  }

}
