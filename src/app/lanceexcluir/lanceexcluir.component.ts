import { Lance } from './../models/lance';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Comprador } from '../models/comprador';
import { Leilao } from '../models/leilao';
import { Mensagem } from '../models/mensagem';
import { LanceService } from '../services/lance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { CompradorService } from '../services/comprador.service';
import { LeilaoService } from '../services/leilao.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lanceexcluir',
  templateUrl: './lanceexcluir.component.html',
  styleUrls: ['./lanceexcluir.component.css']
})
export class LanceexcluirComponent implements OnInit {
  lance: Lance={
    id: 0,
    data: new Date,
    valor: 0,
    ativo: false,
    idComprador: 0,
    idLeilao: 0,
    idAnimal: 0
  }
  animais: Animal[] = []
  leilaos: Leilao[] = []
  compradors: Comprador[] = []
  mensagem: Mensagem = {
    mensagem: '',
    erro: []
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


    excluir(frm: NgForm){
      let id = this.route.snapshot.paramMap.get("id");
      this.servicolance.excluir( id + "").subscribe(
        dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          alert( this.mensagem.mensagem)
          this.router.navigateByUrl("lance")
        }
       }
      )
    }


  }



