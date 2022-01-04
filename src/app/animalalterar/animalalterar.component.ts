import { Mensagem } from './../models/mensagem';
import { VendedorService } from './../services/vendedor.service';
import { Vendedor } from './../models/vendedor';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from './../models/animal';
import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animalalterar',
  templateUrl: './animalalterar.component.html',
  styleUrls: ['./animalalterar.component.css']
})
export class AnimalalterarComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erro: []
  }
  vendedores: Vendedor[] = []
  animal: Animal = {
    id: 0,
    nome: '',
    registro: '',
    raca: '',
    preco: 0,
    ativo: false,
    idVendedor: 0,
    idVeterinario: 0
  };
  constructor(private servicoAnimal: AnimalService, private route: ActivatedRoute,
     private servicoVendedor: VendedorService, private router: Router) { }

  ngOnInit(): void {

    this.servicoVendedor.listar(). subscribe( dados => this.vendedores = dados)

    let id = this.route.snapshot.paramMap.get("id")
    this.servicoAnimal.buscar(id+"").subscribe(
      dados => this.animal = dados
    )

  }

  alterar( frm: NgForm){

    this.servicoAnimal.alterar(this.animal).subscribe(
      dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          alert( this.mensagem.mensagem)
          this.router.navigateByUrl("animal")
        } else {
          this.mensagem.erro.forEach( function (value) { alert(value) })
        }
      }
    )


  }

}
