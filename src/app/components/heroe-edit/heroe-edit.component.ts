import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Heroe } from '../../interfaces/heroe.interface';

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

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
  }

}
