import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Leilao } from '../models/leilao';
import { Mensagem } from '../models/mensagem';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoalterar',
  templateUrl: './leilaoalterar.component.html',
  styleUrls: ['./leilaoalterar.component.css']
})
export class LeilaoalterarComponent implements OnInit {

  mensagem:Mensagem={
    mensagem: '',
    erro: []
  }

  leiloes : Leilao = {
    id: 0,
    data: new Date,
    nome: '',
    ativo: false
  }

  constructor(private servicoLeilao: LeilaoService, private route: ActivatedRoute, private router: Router) { }

 ngOnInit(): void {
   let id = this.route.snapshot.paramMap.get("id")
   this.servicoLeilao.buscar(id+"").subscribe(
     dados => this.leiloes = dados
   )

 }

 alterar( frm: NgForm){

   this.servicoLeilao.alterar(this.leiloes).subscribe(
     dados => {this.mensagem = dados
       if (this.mensagem.erro.length == 0){
         alert( this.mensagem.mensagem)
         this.router.navigateByUrl("leilao")
       } else {
         this.mensagem.erro.forEach( function (value) { alert(value) })
       }
     }
   )


 }

}
