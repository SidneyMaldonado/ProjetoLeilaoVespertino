import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
import { VendedorlistarComponent } from './vendedorlistar/vendedorlistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,

    LeilaolistarComponent,

    VendedorlistarComponent,
    CompradorlistarComponent,
    CompradorincluirComponent,
    VeterinarioincluirComponent,
    LeilaoincluirComponent,
    VendedorincluirComponent,
    VeterinariolistarComponent

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
