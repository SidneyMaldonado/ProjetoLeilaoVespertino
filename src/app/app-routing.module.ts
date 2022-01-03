import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';

const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path: "lance", component: LancelistarComponent},
  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "veterinario/incluir", component: VeterinarioincluirComponent},
  {path: "comprador", component: CompradorlistarComponent},
  {path: "comprador/incluir", component: CompradorincluirComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
