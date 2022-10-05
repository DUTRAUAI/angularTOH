import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { AlunosComponent } from './alunos/alunos.component';

import {AlunosService} from './alunos.service';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AlunosComponent,
    EditarAlunoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
 // providers: [HttpClientModule, AlunosService], //se falhar
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
