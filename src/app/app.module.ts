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
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { LancelistarComponent } from './lancelistar/lancelistar.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,
    LeilaoincluirComponent,
    VendedorlistarComponent,
    VendedorlistarComponent,
    CompradorlistarComponent,
    CompradorincluirComponent,
    VeterinarioincluirComponent,
    VeterinariolistarComponent,
    LancelistarComponent,
    VeterinariolistarComponent,
    VeterinarioincluirComponent,
    LeilaolistarComponent,
    VendedorlistarComponent,
    CompradorlistarComponent,
    CompradorincluirComponent,
    VendedorincluirComponent,
    VendedorincluirComponent,
    VeterinariolistarComponent,


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
