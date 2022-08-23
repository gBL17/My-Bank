import { NewTransferComponent } from './new-transfer/new-transfer/new-transfer.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full'},
  { path: 'extrato', component: ExtratoComponent},
  { path: 'nova-transferencia', component: NewTransferComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
