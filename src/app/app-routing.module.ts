import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';


const routes: Routes = [


  //{path: '/aluno/id:/edit', component: EditarAlunoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
