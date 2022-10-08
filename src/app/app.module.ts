import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { AlunosComponent } from './alunos/alunos.component';

import {AlunosService} from './alunos.service';
import { DetalharAlunoComponent } from './detalhar-aluno/detalhar-aluno.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AlunosComponent,
    DetalharAlunoComponent,
    NovoAlunoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
 // providers: [HttpClientModule, AlunosService], //se falhar
  providers: [AlunosService],
  bootstrap: [AppComponent] //Definição do component inicial da aplicação
})
export class AppModule { }
