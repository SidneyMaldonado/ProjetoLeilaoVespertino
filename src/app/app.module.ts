import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { VendedorlistarComponent } from './vendedorlistar/vendedorlistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { AnimalexcluirComponent } from './animalexcluir/animalexcluir.component';
import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
import { LancealterarComponent } from './lancealterar/lancealterar.component';
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { VeterinarioalterarComponent } from './veterinarioalterar/veterinarioalterar.component';
import { CompradorexcluirComponent } from './compradorexcluir/compradorexcluir.component';
import { LanceexcluirComponent } from './lanceexcluir/lanceexcluir.component';
import { LeilaoexcluirComponent } from './leilaoexcluir/leilaoexcluir.component';
import { VendedorexcluirComponent } from './vendedorexcluir/vendedorexcluir.component';
import { VeterinarioexcluirComponent } from './veterinarioexcluir/veterinarioexcluir.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,
    LeilaoincluirComponent,
    VendedorlistarComponent,
    CompradorlistarComponent,
    CompradorincluirComponent,
    VeterinarioincluirComponent,
    VeterinariolistarComponent,
    LancelistarComponent,
    LeilaolistarComponent,
    LanceincluirComponent,
    VendedorincluirComponent,
    AnimalalterarComponent,
    AnimalexcluirComponent,
    CompradoralterarComponent,
    LancealterarComponent,
    LeilaoalterarComponent,
    VendedoralterarComponent,
    VeterinarioalterarComponent,
    CompradorexcluirComponent,
    LanceexcluirComponent,
    LeilaoexcluirComponent,
    VendedorexcluirComponent,
    VeterinarioexcluirComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
