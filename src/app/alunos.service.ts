import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable, pipe } from 'rxjs';
import { apiURL } from 'src/environments/environment';
import { InterAluno } from './models/InterAlunos';



@Injectable({
  providedIn: 'root'
})

export class AlunosService {

  public alunos: Array<any> = new Array();





  constructor(private http: HttpClient) {}

    listaAlunos() : Observable<InterAluno[]>{
      return this.http.get<InterAluno[]>(`${apiURL}`+ '/alunos');
    }

    cadastraAluno(aluno: InterAluno){
      return this.http.post<InterAluno>(`${apiURL}` + '/alunos', aluno)
    }

    editaAluno(id: number, data: any){
      return this.http.put(`${apiURL}/${id}`, data);
    }

    DeletaAluno(id: number){
      return this.http.delete(`${apiURL}/${id}`);
    }

    //

  }

