import { Component, Input, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { InterAluno } from '../models/InterAluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {

 public aluno: InterAluno;


  constructor(public alunosService: AlunosService, public router: Router) {

    this.aluno = new InterAluno();

   }

  ngOnInit(): void {
  }

    addAluno(){

      this.alunosService.cadastraAluno(this.aluno).subscribe(aluno =>{
        alert('Aluno Cadastrado com sucesso')
        this.aluno = new InterAluno;
        this.router.navigateByUrl('/alunos')

      }, err => {
        console.log("Erro ao cadastrar aluno", err)
      })

    }

}
