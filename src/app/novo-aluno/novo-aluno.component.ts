import { Component, Input, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { InterAluno } from '../models/InterAlunos';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {



  constructor(public alunosService: AlunosService) { }

  ngOnInit(): void {
  }

    AddAluno(aluno: InterAluno){



    }

}
