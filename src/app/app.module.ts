import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
<<<<<<< HEAD
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
=======
<<<<<<< HEAD
=======
>>>>>>> 167b8f4a52d78aa760603651b0649645e2e63a7f
import { VendedorlistarComponent } from './vendedorlistar/vendedorlistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    LeilaolistarComponent,
LeilaoincluirComponent
=======
<<<<<<< HEAD
    VendedorlistarComponent
=======
=======
    VendedorlistarComponent,
>>>>>>> 167b8f4a52d78aa760603651b0649645e2e63a7f
    CompradorlistarComponent,
    CompradorincluirComponent,
    LeilaolistarComponent,
    VeterinarioincluirComponent,
    VeterinariolistarComponent,
    LancelistarComponent,
    VeterinariolistarComponent,
    VeterinarioincluirComponent,
    LeilaolistarComponent,
    VendedorlistarComponent,
    CompradorlistarComponent,
    CompradorincluirComponent,
    VendedorincluirComponent


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
