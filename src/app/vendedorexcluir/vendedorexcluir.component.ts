import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Vendedor } from '../models/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedorexcluir',
  templateUrl: './vendedorexcluir.component.html',
  styleUrls: ['./vendedorexcluir.component.css']
})
export class VendedorexcluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erro: []
  }
  vendedor: Vendedor = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    ativo: false
  }

  constructor(private servicoVendedor: VendedorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.servicoVendedor.buscar(id+"").subscribe(dados => this.vendedor = dados)
  }

  excluir(frm: NgForm){
    let id = this.route.snapshot.paramMap.get("id");
    this.servicoVendedor.excluir( id + "").subscribe(
      dados => {this.mensagem = dados
      if (this.mensagem.erro.length == 0){
        alert( this.mensagem.mensagem)
        this.router.navigateByUrl("vendedor")
      }
     }
    )
  }

}
