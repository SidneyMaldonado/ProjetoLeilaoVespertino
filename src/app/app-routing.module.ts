import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "animal", component: AnimallistarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
