import { Lance } from './../models/lance';
import { LanceService } from './../services/lance.service';
import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../models/mensagem';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Comprador } from '../models/comprador';
import { Leilao } from '../models/leilao';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { CompradorService } from '../services/comprador.service';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-lancealterar',
  templateUrl: './lancealterar.component.html',
  styleUrls: ['./lancealterar.component.css']
})
export class LancealterarComponent implements OnInit {

  animais: Animal[] = []
  leilaos: Leilao[] = []
  compradors: Comprador[] = []
  mensagem: Mensagem = {
    mensagem: '',
    erro: []
  }
  lance: Lance = {
    id: 0,
    data: new Date,
    valor: 0,
    ativo: false,
    idComprador: 0,
    idLeilao: 0,
    idAnimal: 0
  }

  constructor(private servicolance: LanceService, private route: ActivatedRoute,
    private router: Router,private servicoAnimal: AnimalService, private servicoLeilao: LeilaoService, private servicoComprador: CompradorService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.servicolance.buscar(id+"").subscribe(
      dados => this.lance = dados
    )
    this.servicoAnimal.listar().subscribe(
      dados => this.animais = dados
    )
    this.servicoLeilao.listar().subscribe(
      dados => this.leilaos = dados
    )
    this.servicoComprador.listar().subscribe(
      dados => this.compradors = dados
    )
  }
  alterar( frm: NgForm){

    this.servicolance.alterar(this.lance).subscribe(
      dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          alert( this.mensagem.mensagem)
          this.router.navigateByUrl("lance")
        } else {
          this.mensagem.erro.forEach( function (value) { alert(value) })
        }
      }
    )


}
}
