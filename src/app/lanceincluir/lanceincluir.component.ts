import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from '../models/animal';
import { Comprador } from '../models/comprador';
import { Lance } from '../models/lance';
import { Leilao } from '../models/leilao';
import { Mensagem } from '../models/mensagem';
import { AnimalService } from '../services/animal.service';
import { CompradorService } from '../services/comprador.service';
import { LanceService } from '../services/lance.service';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-lanceincluir',
  templateUrl: './lanceincluir.component.html',
  styleUrls: ['./lanceincluir.component.css']
})
export class LanceincluirComponent implements OnInit {

  mensagem: Mensagem = {mensagem:"", erro: [] }

  lance: Lance = {id: 0, data:new Date , valor: 0, ativo: true, idComprador: 0, idLeilao: 0, idAnimal: 0}
  animais: Animal[] = []
  leilaos: Leilao[] = []
  compradors: Comprador[] = []
  
  constructor(private lanceService: LanceService, private router: Router, private servicoAnimal: AnimalService, private servicoLeilao: LeilaoService, private servicoComprador: CompradorService) { }

    ngOnInit(): void {
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

  incluir( frm: NgForm){
    this.lanceService.incluir( this.lance).subscribe(
      dados => { this.mensagem = dados
                 alert( this.mensagem.mensagem )
                 if (this.mensagem.erro.length == 0){
                     this.router.navigateByUrl("lance");
                 } else {
                  this.mensagem.erro.forEach(function (value) {
                    alert(value);
                  }); 
                 }
                }
    )
  }

}