import { NgForm } from '@angular/forms';
import { VendedorService } from './../services/vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from './../services/animal.service';
import { Animal } from './../models/animal';
import { Vendedor } from './../models/vendedor';
import { Mensagem } from './../models/mensagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animalexcluir',
  templateUrl: './animalexcluir.component.html',
  styleUrls: ['./animalexcluir.component.css']
})
export class AnimalexcluirComponent implements OnInit {

 
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

  excluir(frm: NgForm){
    let id = this.route.snapshot.paramMap.get("id");
    this.servicoAnimal.excluir( id + "").subscribe(
      dados => {this.mensagem = dados
      if (this.mensagem.erro.length == 0){
        alert( this.mensagem.mensagem)
        this.router.navigateByUrl("animal")
      }
     }
    )


  }


}
