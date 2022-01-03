import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimallistarComponent,
    AnimalincluirComponent,
    VeterinariolistarComponent,
    VeterinarioincluirComponent
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
