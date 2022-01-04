import { AnimalexcluirComponent } from './animalexcluir/animalexcluir.component';
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';

import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';

import { VendedorlistarComponent } from './vendedorlistar/vendedorlistar.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { LancealterarComponent } from './lancealterar/lancealterar.component';
import { LanceexcluirComponent } from './lanceexcluir/lanceexcluir.component';
import { VeterinarioalterarComponent } from './veterinarioalterar/veterinarioalterar.component';
import { VeterinarioexcluirComponent } from './veterinarioexcluir/veterinarioexcluir.component';
import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
import { CompradorexcluirComponent } from './compradorexcluir/compradorexcluir.component';
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
import { LeilaoexcluirComponent } from './leilaoexcluir/leilaoexcluir.component';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { VendedorexcluirComponent } from './vendedorexcluir/vendedorexcluir.component';


const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path: "animal/incluir", component: AnimalincluirComponent},
  {path: "animal/alterar/:id", component: AnimalalterarComponent},
  {path: "animal/excluir/:id", component: AnimalexcluirComponent},
  
  {path: "lance", component: LancelistarComponent},
  {path: "lance/incluir", component: LanceincluirComponent},
  {path: "lance/alterar/:id", component: LancealterarComponent},
  {path: "lance/excluir/:id", component: LanceexcluirComponent},

  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "veterinario/incluir", component: VeterinarioincluirComponent},
  {path: "veterinario/alterar/:id", component: VeterinarioalterarComponent},
  {path: "veterinario/excluir/:id", component:VeterinarioexcluirComponent},

  {path: "comprador", component: CompradorlistarComponent},
  {path: "comprador/incluir", component: CompradorincluirComponent},
  {path: "comprador/alterar/:id", component: CompradoralterarComponent},
  {path: "comprador/excluir/:id", component: CompradorexcluirComponent},

  {path: "leilao", component:LeilaolistarComponent},
  {path: "leilao/incluir", component:LeilaoincluirComponent},
  {path: "leilao/alterar/:id", component:LeilaoalterarComponent},
  {path: "leilao/excluir/:id", component: LeilaoexcluirComponent},

  {path: "vendedor", component: VendedorlistarComponent},
  {path: "vendedor/incluir", component: VendedorincluirComponent},
  {path: "vendedor/alterar/:id", component:VendedoralterarComponent},
  {path: "vendedor/excluir/:id", component: VendedorexcluirComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
