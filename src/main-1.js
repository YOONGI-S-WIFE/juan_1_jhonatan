import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";
import { MainPage2 } from "./main-2";

export class MainPage extends LitElement {
  
  
  constructor(){
    super();
  this.objetoUsuarios={
    Usuarios:[
        {
        id:'1',
        nombre:'Brayan',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '1',
        campaña:'Q-Vision'
      },
      {
        id:'2',
        nombre:'Hector',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '2',
        campaña:'Q-Vision'
      },
      {
        id:'1',
        nombre:'Juan',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '1',
        campaña:'Q-Vision'
      },
      {
        id:'2',
        nombre:'Laura',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '1',
        campaña:'Q-Vision'
      },
      {
        id:'1',
        nombre:'Mafe',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '2',
        campaña:'Q-Vision'
      },
      {
        id:'2',
        nombre:'Sebas',
        numeroTel:'3214243125',
        direccion:'Carrera 6',
        estado: '2',
        campaña:'Q-Vision'
      }
      ]
    }



    let usuariosConectados = 0;
    for (let usuario of this.objetoUsuarios.Usuarios) {
      if (usuario.estado === '1') {
        usuariosConectados += 1;
      }
    }
    
    let usuariosAusentes = 0;
    for (let usuario of this.objetoUsuarios.Usuarios) {
      if (usuario.estado === '2') {
        usuariosAusentes += 1;
      }
    }
    

      this.usuariosConectados=usuariosConectados;
      this.usuariosAusentes=usuariosAusentes;
      this.campañasActivas="";
      this.hola=""

  }


  static get properties(){
    return{
        usuariosConectados:{
          type: String
        },
        usuariosAusentes:{
          type: String
        },
        campañasActivas:{
          type: String
        },
        objetoUsuarios:{
          type:Object
        },
        hola:{
          type:String
        }
    }
}



  mostrarUsuarios(y){
    if(y==1){
      this.hola= html`<table class="w-100" style="border: 1px solid black">
      <tr>
        <th class="">Id</th>
        <th class="">Nombre</th>
        <th class="">Numero de telefono</th>
        <th class="">Campaña</th>
      </tr>
      ${this.objetoUsuarios.Usuarios.map(
        (usuario)=> html`
        <tr>
          <td>${usuario.id}</td>
          <td>${usuario.nombre}</td>
          <td>${usuario.numeroTel}</td>
          <td>${usuario.campaña}</td>
        </tr>
        `
      )}
    </table>`
    }
    return this.hola
    
  }

  ingresarCampañas() {
    const mainPage2 = document.createElement('main-2');
    document.body.innerHTML = ''; 
    document.body.appendChild(mainPage2);
  }

    static get styles(){
        return[loginStyle]
    }
  render() {
    return html`
    <style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    </style>

    <div class="bg-light vw-100 vh-100 d-flex">
      <div class="w-25 bg-grayWhite shadow-inset m-3 border-20 p-3">
          <div>
            <div class="d-flex">
              
              <button class="w-100 mt-5 p-3 text-big text-start border-10 border-0" @click=${(e)=>this.mostrarUsuarios(1)}><i class="fas fa-user mx-3"></i>Usuarios</button>
            </div>

            <div class="d-flex">
              
              <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0" @click=${(e)=>this.ingresarCampañas()}><i class="fas fa-user mx-3"></i>Campañas</button>
            </div>
              
            <div class="d-flex">
              
              <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0"><i class="fas fa-user mx-3"></i>Equipos</button>
            </div>             
          </div>
      </div>
      <div class="w-75 bg-light d-flex flex-column m-3">
        <div class="d-flex justify-content-between m-3 h-25">
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosConectados}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>conectados</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosAusentes}</p></div>
            <div class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>ausentes</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.campañasActivas}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Campañas <br>activas</p></div>
          </div>
        </div>
        <div class="h-75 bg-light border border-dark border-20 d-flex p-3 ">
          <div class="w-25 mx-1 border-20 border-1 border border-dark">
            <div class="d-flex flex-column p-3 bg-secondary border-20">
              <input class="m-2 p-2 border-10 border-0" placeholder="Número">
              <input class="m-2 p-2 border-10 border-0" placeholder="Nombre">
              <div class="d-flex justify-content-center aling-items-center">
                <button class="m-2 w-50  border-10 bg-icon text-white border-0 p-2">Buscar</button>
              </div>
            </div>
          </div>
          <div class="w-75 bg-light d-flex flex-column mx-3">
            <div>
            <button class="border-10 p-2 text-big border-1">Básico</button>
            <button class="border-10 p-2 text-big border-1">Avanzado</button>
            <button class="bg-icon text-white p-2 text-big border-10 float-end">Nuevo</button>
            </div>
            <div class="bg-light mt-3 h-100 border border-dark border-20 p-3" id="div-table">
              ${this.mostrarUsuarios(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('main-1', MainPage);
