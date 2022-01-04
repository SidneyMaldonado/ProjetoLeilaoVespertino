import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinarioexcluir',
  templateUrl: './veterinarioexcluir.component.html',
  styleUrls: ['./veterinarioexcluir.component.css']
})
export class VeterinarioexcluirComponent implements OnInit {

  veterinarios : Veterinario = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    ativo: false
  }
  mensagem : Mensagem = {
    mensagem: '',
    erro: []
  }

  constructor(private servicoVeterinario: VeterinarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.servicoVeterinario.buscar(id+"").subscribe(
      dados => this.veterinarios = dados
    )
  }

  excluir(frm: NgForm){
    let id = this.route.snapshot.paramMap.get("id");
    this.servicoVeterinario.excluir( id + "").subscribe(
      dados => {this.mensagem = dados
      if (this.mensagem.erro.length == 0){
        alert( this.mensagem.mensagem)
        this.router.navigateByUrl("veterinario")
      }
     }
    )
  }

}
