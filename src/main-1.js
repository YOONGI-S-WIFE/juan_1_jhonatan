import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";

export class MainPage extends LitElement {



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
      <div class="w-25 bg-secondary m-3 border-20 p-3">
          <div>
              <button class="w-100 mt-5 p-2 border-10">Usuarios</button>
              <button class="w-100 mt-5 p-2 border-10">kampañas</button>
              <button class="w-100 mt-5 p-2 border-10">Equipos</button>
          </div>
      </div>
      <div class="w-75 bg-dark d-flex flex-column m-3">
        <div class="d-flex justify-content-between m-3 h-25">
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">40</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>conectados</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">10</p></div>
            <div class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>ausentes</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">10</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Campañas <br>activas</p></div>
          </div>
        </div>
        <div class="h-75 bg-primary d-flex p-3">
          <div class="w-25 mx-3 border-20 border-1 border border-dark">
            <div class="d-flex flex-column p-3 bg-secondary border-20">
              <input class="m-2 p-2 border-10 border-0" placeholder="Número">
              <input class="m-2 p-2 border-10 border-0" placeholder="Nombre">
              <div class="d-flex justify-content-center aling-items-center">
                <button class="m-2 w-50  border-10 bg-icon text-white border-0 p-2">Buscar</button>
              </div>
            </div>
          </div>
          <div class="w-75 bg-secondary d-flex flex-column">
            <div>
            <button class="border-10 p-2 text-big">Básico</button>
            <button class="border-10 p-2 text-big">Avanzado</button>
            <button class="bg-icon text-white p-2 text-big border-10 float-end">Nuevo</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('main-1', MainPage);
