import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { InterAluno } from '../models/InterAluno';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detalhar-aluno',
  templateUrl: './detalhar-aluno.component.html',
  styleUrls: ['./detalhar-aluno.component.css']
})
export class DetalharAlunoComponent implements OnInit {

  public aluno: InterAluno;
  public userId: number;
  public selectedFile: File;

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

      //console.log(Boolean(aluno?.Fotos[0]))
    })

  }


  editaAluno(id: number){

    this.alunosService.editaAluno(this.aluno.id, this.aluno).subscribe(aluno =>{
      alert('Aluno editado com sucesso.')
      this.aluno = new InterAluno;

      this.router.navigateByUrl('/alunos')


    }, err => {
      console.log("Erro ao cadastrar aluno", err)
    })

  }

  DeletaAluno(id: number){

    this.alunosService.deletaAluno(this.aluno.id).subscribe(aluno =>{
      alert('Aluno deletado com sucesso')
      this.router.navigateByUrl('/alunos')


    }, err => {
      console.log("Erro ao cadastrar aluno", err)
    })

  }

  onFileSelected(event: any) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = <any>event.target.files[0];
    //console.log(event)
  }
}
    uploadFoto() {
      const formData = new FormData();

      formData.append('foto', this.selectedFile);
      formData.append('aluno_id', this.aluno.id.toString());




       this.alunosService.addFoto(formData).subscribe(aluno =>{
        alert('Foto adiconada com sucesso.')
        this.router.navigateByUrl('/alunos')
         }, err => {
        console.log("Erro ao adicionar foto", err)
      })

    }

}
