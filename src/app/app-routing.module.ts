import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DetalharAlunoComponent } from './detalhar-aluno/detalhar-aluno.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [

  { path: 'alunos', component: AlunosComponent},
  { path: 'novo', component: NovoAlunoComponent },
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'aluno/edit/:id', component: DetalharAlunoComponent },

  //inferno
  { path: '**', redirectTo: 'alunos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
