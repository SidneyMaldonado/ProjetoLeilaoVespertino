import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Vendedor } from '../models/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedoralterar',
  templateUrl: './vendedoralterar.component.html',
  styleUrls: ['./vendedoralterar.component.css']
})
export class VendedoralterarComponent implements OnInit {

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

alterar(frm: NgForm) {
  this.servicoVendedor.alterar(this.vendedor).subscribe(
    dados => {
      this.mensagem = dados
      if (this.mensagem.erro.length == 0) {
        alert(this.mensagem.mensagem)
        this.router.navigateByUrl("vendedor")
      } else {
        this.mensagem.erro.forEach(function (value) {alert(value)})
      }
    }
  )
}

  

  

}
