import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';

const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path: "lance", component: LancelistarComponent},
  {path: "lance/incluir", component: LanceincluirComponent},
  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "veterinario/incluir", component: VeterinarioincluirComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
