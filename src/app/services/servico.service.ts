import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Servico {
  id?: string
  descricao: string
  valor: number
  criadoEm: string
}

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private firestore: Firestore) { }

  getServicos(): Observable<Servico[]> {
    const servicoRef = collection(this.firestore, 'servicos');
    return collectionData(servicoRef, { idField: 'id' }) as Observable<Servico[]>;
  }
  getServicoById(id): Observable<Servico> {
    const noteDocRef = doc(this.firestore, `servicos/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Servico>;
  }

  addServico(servico: Servico) {
    const servicoRef = collection(this.firestore, 'servicos');
    return addDoc(servicoRef, servico);
  }

  deleteServico(servico: Servico) {
    const servicoDocRef = doc(this.firestore, `servicos/${servico.id}`);
    return deleteDoc(servicoDocRef);
  }

  updateServico(servico: Servico) {
    const servicoDocRef = doc(this.firestore, `servicos/${servico.id}`);
    return updateDoc(servicoDocRef, { descricao: servico.descricao, valor: servico.valor });
  }
}
