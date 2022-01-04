import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comprador } from '../models/comprador';
import { Mensagem } from '../models/mensagem';
import { CompradorService } from '../services/comprador.service';

@Component({
  selector: 'app-compradoralterar',
  templateUrl: './compradoralterar.component.html',
  styleUrls: ['./compradoralterar.component.css']
})
export class CompradoralterarComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erro: []
  }
  compradores: Comprador = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    ativo: false
  }
  constructor(private servicoComprador: CompradorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.servicoComprador.buscar(id+"").subscribe(dados => this.compradores = dados)
  }

  alterar(frm: NgForm) {
    this.servicoComprador.alterar(this.compradores).subscribe(
      dados => {
        this.mensagem = dados
        if (this.mensagem.erro.length == 0) {
          alert(this.mensagem.mensagem)
          this.router.navigateByUrl("comprador")
        } else {
          this.mensagem.erro.forEach(function (value) {alert(value)})
        }
      }
    )
  }
}
