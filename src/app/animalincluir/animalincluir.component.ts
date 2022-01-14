import { VendedorService } from './../services/vendedor.service';
import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../models/animal';
import { Mensagem } from '../models/mensagem';
import { Vendedor } from '../models/vendedor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animalincluir',
  templateUrl: './animalincluir.component.html',
  styleUrls: ['./animalincluir.component.css']
})
export class AnimalincluirComponent implements OnInit {

resultado: boolean = false;
mensagem: Mensagem ={
  mensagem: '',
  erro: []
}
animal: Animal = {
  id: 0,
  nome: '',
  registro: '',
  raca: '',
  preco: 0,
  ativo: true,
  idVendedor: 0,
  idVeterinario: 0
}
vendedores: Vendedor[] = []

  constructor( private servicoAnimal: AnimalService, private servicoVendedor: VendedorService, private router: Router) { }

  ngOnInit(): void {

    this.servicoVendedor.listar().subscribe(
      dados => this.vendedores = dados
    )
    
  }

  incluir(frm: NgForm) {

    this.servicoAnimal.incluir(this.animal).subscribe(
      dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          this.router.navigateByUrl("animal")
          this.resultado = true;
        } else {
          this.mensagem.erro.forEach( function (value) { alert(value) })
          this.resultado = false;
        }
      }
    )

  }

}
