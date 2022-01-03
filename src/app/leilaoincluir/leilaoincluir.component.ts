import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Leilao } from '../models/leilao';
import { Mensagem } from '../models/mensagem';
import { LeilaoService } from '../services/leilao.service';


@Component({
  selector: 'app-leilaoincluir',
  templateUrl: './leilaoincluir.component.html',
  styleUrls: ['./leilaoincluir.component.css']
})
export class LeilaoincluirComponent implements OnInit {
  
  mensagem : Mensagem = {
    mensagem: '',
    erro: []
  }

  leilao : Leilao = {
    id: 0,
    data: new Date,
    nome: '',
    ativo: true
  }

  leiloes : Leilao [] = []

  constructor(private servicoLeilao : LeilaoService, private router: Router) { }

  ngOnInit(): void {
    this.servicoLeilao.listar().subscribe(
      dados => this.leiloes = dados
    )
  }

  incluir(frm: NgForm){

    this.servicoLeilao.incluir(this.leilao).subscribe(
      dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          this.router.navigateByUrl("leilao")
        } else {
          this.mensagem.erro.forEach( function (value) { alert(value) })
        }
      }
    )

  }

}
