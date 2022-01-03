import { Component, OnInit } from '@angular/core';
import { Leilao } from '../models/leilao';
import { LeilãoService } from '../services/leilão.service';

@Component({
  selector: 'app-leilaolistar',
  templateUrl: './leilaolistar.component.html',
  styleUrls: ['./leilaolistar.component.css']
})
export class LeilaolistarComponent implements OnInit {

  leiloes: Leilao[] = []

  constructor(private servicoleilao : LeilãoService) { }

  ngOnInit(): void {
    this.servicoleilao.listar().subscribe(
      dados => this.leiloes = dados
    )
  }

}
