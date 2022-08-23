import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[]

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia){
    this.tratarTransferencia(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private tratarTransferencia(transferencia: any) {
    transferencia.data = new Date()
  }

}
