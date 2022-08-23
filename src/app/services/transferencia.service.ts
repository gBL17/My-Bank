import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[]
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpCliente.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.tratarTransferencia(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private tratarTransferencia(transferencia: any) {
    transferencia.data = new Date()
  }

}
