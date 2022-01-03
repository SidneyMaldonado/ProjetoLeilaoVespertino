import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animallistar',
  templateUrl: './animallistar.component.html',
  styleUrls: ['./animallistar.component.css']
})
export class AnimallistarComponent implements OnInit {


  animais: Animal[] = []

  constructor(private servicoAnimal: AnimalService) { }

  ngOnInit(): void {
    this.servicoAnimal.listar().subscribe(
      dados => this.animais = dados
    )
  }

}
