import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) {}

    listarAlunos() : Observable<any>{
      return this.http.get('http://192.168.1.20/alunos');
    }
  }

