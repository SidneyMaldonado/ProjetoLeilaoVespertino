import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancelistarComponent } from './lancelistar/lancelistar.component';

const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path: "lance", component: LancelistarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
