import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { VendedorlistarComponent } from './vendedorlistar/vendedorlistar.component';
=======
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
>>>>>>> e6a21bb6ed9fa86eca26e3d9c8ee630466d47fc3

@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,
<<<<<<< HEAD
    VendedorlistarComponent
=======
    CompradorlistarComponent,
    CompradorincluirComponent
>>>>>>> e6a21bb6ed9fa86eca26e3d9c8ee630466d47fc3
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
