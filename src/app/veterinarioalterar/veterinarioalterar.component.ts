import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinarioalterar',
  templateUrl: './veterinarioalterar.component.html',
  styleUrls: ['./veterinarioalterar.component.css']
})
export class VeterinarioalterarComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erro: []
  }

  veterinario: Veterinario = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    ativo: false
  }

  constructor(private servicoVeterinario: VeterinarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.servicoVeterinario.listarVeterinario().subscribe( dados => this.veterinario = dados)
    
    let id = this.route.snapshot.paramMap.get("id")
    this.servicoVeterinario.buscar(id+"").subscribe(
      dados => this.veterinario = dados
    )
  }

  alterar( frm: NgForm){

    this.servicoVeterinario.alterar(this.veterinario).subscribe(
      dados => {this.mensagem = dados
        if (this.mensagem.erro.length == 0){
          alert( this.mensagem.mensagem)
          this.router.navigateByUrl("animal")
        } else {
          this.mensagem.erro.forEach( function (value) { alert(value) })
        }
      }
    )


  }

}
