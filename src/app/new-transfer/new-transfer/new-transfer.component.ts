import { Transferencia } from './../../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado)=> {
        console.log(resultado);
        this.limpaCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.log(error)
    );
  }

  limpaCampos(){
    this.valor = 0;
    this.destino = 0;
  }

  ngOnInit(): void {}
}
