import { Component, OnInit } from '@angular/core';
import { Leilao } from '../models/leilao';
import { LeilaoService} from '../services/leilao.service';

@Component({
  selector: 'app-leilaolistar',
  templateUrl: './leilaolistar.component.html',
  styleUrls: ['./leilaolistar.component.css']
})
export class LeilaolistarComponent implements OnInit {

  leiloes: Leilao[] = []

  constructor(private servicoleilao : LeilaoService) { }

  ngOnInit(): void {
    this.servicoleilao.listar().subscribe(
      dados => this.leiloes = dados
    )
  }

}
