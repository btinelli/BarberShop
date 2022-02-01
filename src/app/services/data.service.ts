import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Lancamento {
  barbeiro: string
  descricao: string
  valor: number
}
export interface Servico {
  descricao: string
  valor: number
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getLancamentos(): Observable<Lancamento[]> {
    const notesRef = collection(this.firestore, 'lancamentos');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Lancamento[]>;
  }
  getServicos(): Observable<Servico[]> {
    const notesRef = collection(this.firestore, 'servicos');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Servico[]>;
  }
}
