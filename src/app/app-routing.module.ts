import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { AppComponent } from './app.component';
import { DetalharAlunoComponent } from './detalhar-aluno/detalhar-aluno.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [
  {path: 'alunos', component: AlunosComponent},
  { path: 'novo', component: NovoAlunoComponent },
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: '**', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'detalhar/:id', component: DetalharAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
