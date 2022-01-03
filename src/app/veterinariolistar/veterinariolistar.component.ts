import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinariolistar',
  templateUrl: './veterinariolistar.component.html',
  styleUrls: ['./veterinariolistar.component.css']
})
export class VeterinariolistarComponent implements OnInit {

  veterinarios: Veterinario[] = [];

  constructor(private servicoVeterinario: VeterinarioService) { }

  ngOnInit(): void {
    this.servicoVeterinario.listarVeterinario().subscribe(
      data => {this.veterinarios = data}
    )
  }

}
