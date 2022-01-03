import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';

const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},

  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "veterinario/incluir", component: VeterinarioincluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
