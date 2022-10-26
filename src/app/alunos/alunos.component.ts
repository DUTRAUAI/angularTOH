import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: Array<any> = new Array();



  constructor(public alunosService: AlunosService, public router: Router) { }



  ngOnInit(): void {
    this.listarAlunos();
  }

  detalhaAluno(alunoId: number){
    this.router.navigateByUrl('/aluno/edit/' + alunoId)
  }

  listarAlunos(){
    this.alunosService.listaAlunos().subscribe(alunos => {
      this.alunos = alunos;
    }, err => {
      console.log('Erro ao listar os Alunos', err);
    })

  }

}
