import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion
  titulo = 'WEB';
  usuario={
    nombre:'Kath',
  apellido:'Cajilema'
}
arregloNumeros=[5,4,3,2,1];
  mostrartitulo=true;
  imagenurl="https://tpc.googlesyndication.com/simgad/12597814016378064367?sqp=4sqPyQQlQiMqIQhaEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBacAJ4AQ&rs=AOga4qkDZSRjpp9a8XP8qU-l7Kk555Qhsg";
  imagenWidth='500'
  html = `
  <h1>HTML TS</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenurl}" alt="">
`;
  aumentarWith(evento){
    console.log('evento:',evento);
    this.imagenWidth+=10;
  }
  reducirWith(){
    this.imagenWidth-=10;
  }
}
