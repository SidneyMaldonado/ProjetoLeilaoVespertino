import { Component, OnInit } from '@angular/core';
import { Lance } from '../models/lance';
import { LanceService } from '../services/lance.service';

@Component({
  selector: 'app-lancelistar',
  templateUrl: './lancelistar.component.html',
  styleUrls: ['./lancelistar.component.css']
})
export class LancelistarComponent implements OnInit {
  lances: Lance[] = [];

  constructor(private servicoLance: LanceService) { }

  ngOnInit(): void {

    this.servicoLance.listar().subscribe(
      data => this.lances = data  
    )
  }
}