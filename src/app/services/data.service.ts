import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  nome: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getItems(): Observable<Item[]> {
    const notesRef = collection(this.firestore, 'itens');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Item[]>;
  }
}
