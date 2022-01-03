import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensagem } from '../models/mensagem';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinarioincluir',
  templateUrl: './veterinarioincluir.component.html',
  styleUrls: ['./veterinarioincluir.component.css']
})
export class VeterinarioincluirComponent implements OnInit {

  mensagem: Mensagem ={
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

  constructor(private veterinarioService: VeterinarioService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.veterinarioService.incluir( this.veterinario).subscribe(
      dados => { this.mensagem = dados
                  alert( this.mensagem.mensagem )
                  if (this.mensagem.erro.length == 0){
                    this.router.navigateByUrl("veterinario");

                  } else {
                    this.mensagem.erro.forEach(function (value) {
                      alert(value);
                    }); 
                  }
                }
    )
  }

}
