import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-bank';

  transferencias: any[] = [];

  transferir($event){
    console.log($event)
    const transferir = {...$event, data: Date()}
    this.transferencias.push(transferir)
  }
}
