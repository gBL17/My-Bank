import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer/new-transfer.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ExtratoComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt' },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
