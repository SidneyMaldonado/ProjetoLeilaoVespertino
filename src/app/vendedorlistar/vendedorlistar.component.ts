import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../models/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedorlistar',
  templateUrl: './vendedorlistar.component.html',
  styleUrls: ['./vendedorlistar.component.css']
})
export class VendedorlistarComponent implements OnInit {

  vendedores: Vendedor[] = []
  constructor(private servicoVendedor: VendedorService) { }

  ngOnInit(): void {
    this.servicoVendedor.listar().subscribe(
      dados => this.vendedores = dados
    )
  }

}
