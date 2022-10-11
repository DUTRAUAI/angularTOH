import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { InterAluno } from '../models/InterAluno';
import { Router} from '@angular/router';


@Component({
  selector: 'app-detalhar-aluno',
  templateUrl: './detalhar-aluno.component.html',
  styleUrls: ['./detalhar-aluno.component.css']
})
export class DetalharAlunoComponent implements OnInit {

  public aluno: InterAluno;
  public userId: number;

  constructor(public alunosService: AlunosService, private route: ActivatedRoute, public router: Router) {

    this.aluno = new InterAluno();
    this.route.params.subscribe(params => this.userId = params['id'])


   }

  ngOnInit(): void {
    this.buscarAluno(this.userId);
  }

  buscarAluno(id: number){

    return this.alunosService.getAlunoById(id).subscribe(aluno => {
      this.aluno = aluno
    })



  }


  editaAluno(id: number){

    this.alunosService.editaAluno(this.aluno.id, this.aluno).subscribe(aluno =>{
      alert('Aluno editado com sucesso.')
      this.aluno = new InterAluno;
      this.alunosService.listaAlunos();

    }, err => {
      console.log("Erro ao cadastrar aluno", err)
    })

  }

  DeletaAluno(id: number){

    this.alunosService.DeletaAluno(this.aluno.id).subscribe(aluno =>{
      alert('Aluno deletado com sucesso')
      this.router.navigateByUrl('/alunos')


    }, err => {
      console.log("Erro ao cadastrar aluno", err)
    })

  }

}
