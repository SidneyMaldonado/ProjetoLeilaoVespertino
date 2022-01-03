import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Vendedor } from '../models/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedorincluir',
  templateUrl: './vendedorincluir.component.html',
  styleUrls: ['./vendedorincluir.component.css']
})
export class VendedorincluirComponent implements OnInit {
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
  vendedores: Vendedor[] = []
  constructor(private servicoVendedor: VendedorService, private router: Router) { }

  ngOnInit(): void {
    this.servicoVendedor.listar().subscribe(
      dados => this.vendedores = dados
    )
  }

  incluir(frm: NgForm) {
    this.servicoVendedor.incluir(this.vendedor).subscribe(
      dados => {
        this.mensagem = dados
        if (this.mensagem.erro.length == 0) {
          this.router.navigateByUrl("vendedor")
        } else {
          this.mensagem.erro.forEach(function (value) { alert(value) })
        }
      }
    )
  }

}
