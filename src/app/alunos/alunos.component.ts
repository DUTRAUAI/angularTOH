import { Component, Directive, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: Array<any> = new Array();

  constructor(public alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }

  listarAlunos(){
    this.alunosService.listaAlunos().subscribe(alunos => {
      this.alunos = alunos;

    }, err => {
      console.log('Erro ao listar os Alunos', err);
    })

  }

}
