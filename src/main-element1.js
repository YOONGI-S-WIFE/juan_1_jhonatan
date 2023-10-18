import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";

export class MainPage extends LitElement {

  ingresarMainPage2(){

            const mainPage2 = document.createElement('main-element2');
            document.body.innerHTML = ''; 
            document.body.appendChild(mainPage2);
  }

  abrirModal() {

    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "block";
  }

  cerrarModal() {
    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "none";
  }
        

  static get styles() {
    return [loginStyle];
    
  }
  static get properties() {
    return {
      usuarios: { type: Array },
      identifi: { type: String },
      nombre: { type: String },
      campana: { type: String },
      estado: { type: String },
      tel: { type: String },
    };
  }

  constructor() {
    super();
    this.usuarios = []; 
    this.identifi = '';
    this.nombre = '';
    this.campana = '';
    this.estado = '';
    this.tel = '';
  }

  registrarUsuario() {
    if (this.identifi && this.nombre && this.campana && this.estado && this.tel) {
      const nuevoUsuario = {
        identificacion: this.identifi,
        nombre: this.nombre,
        campana: this.campana,
        estado: this.estado,
        telefono: this.tel,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];

      this.identifi = '';
      this.nombre = '';
      this.campana = '';
      this.estado = '';
      this.tel = '';
    }
  }

  tablaCompañia(){
    let divTable =  this. shadowRoot.querySelector('#divTable');
    divTable.innerHTML=`
    `
  }

  

  render() {
    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      </style>

      <div class="bg-light vw-100 vh-100 d-flex">
        <div class="bg-secondary1 w-25  m-3 border-20 p-3">
          <div class="bg-color-secondary"> 
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-user"></i>Usuarios
            </button>
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-bullhorn"></i>Campañas
            </button>
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-users"></i>Equipos
            </button>
            <br><br>
          </div>
        </div>

        <div class="bg-color-dark w-75  d-flex flex-column m-3">
          <div class="d-flex justify-content-between m-3 h-25">

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">40</p>
              </div>
              <div
                class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Conectados</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">10</p>
              </div>
              <div
                class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Ausentes</p>
              </div>
            </div>

            <div
            class="container d-flex justify-content-center align-items-center h-100 w-100"
          >
            <div
              class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
            >
              <p class="text-white">10</p>
            </div>
            <div
              class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
            >
              <p class="text-white">Numero De  <br />Llamadas</p>
            </div>
          </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">10</p>
              </div>
              <div
                class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Campañas <br />Activas</p>
              </div>
            </div>
          </div>
          <div class="bg-primary1 h-75 d-flex p-3">
            <div class="w-25 mx-3 border-20 border-1 border border-dark">
              <div class="d-flex flex-column p-3 bg-color-secondary border-20">

              <div class="d-flex flex-row">
              <i class="fas fa-hashtag" style="color: #d1ccccb9;">
              <input class="m-2 p-2 border-10 border-0" type="text" placeholder="Numero"></i>
              </div>

              <div class="d-flex flex-row">
              <i class="fas fa-user" style="color: #d1ccccb9;">
                <input
                  class="m-2 p-2 border-10 border-0" 
                  placeholder="Nombre"
                /></i>
                </div>

                <div class="d-flex justify-content-center aling-items-center">
                  <button
                    class="m-2 w-50  border-10 bg-icon text-white border-0 p-2"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
            <div class="w-75 bg-secondary d-flex flex-column">
            <br>
  <div class="row">
    <div class="col">
      <button class="border-10 p-2 text-big">Básico <i class="fas fa-gear fa-spin"></i></button>
    </div>
    <div class="col">
      <button class="border-10 p-2 text-big " @click=${(e)=>this.ingresarMainPage2()}>Avanzado <i class="fas fa-gears fa-fade"></i></button> 
    </div>
    
    <div class="col">
    <button id="botonAbrirModal" class="bg-icon text-white p-2 text-big border-10 float-end" @click="${this.abrirModal}">Nuevo <i class="fas fa-plus fa-beat-fade"></i></button>

      <div id="miModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
        <button class='color  bg-transparent border-0' @click="${this.cerrarModal}">X</button>
          
        <div>
        <!-- Formulario para ingresar datos de usuario -->
        <label>Identificación de Usuario:</label>
        <input
          type="text"
          .value="${this.identifi}"
          @input="${(e) => (this.identifi = e.target.value)}"
        /><br />

        <label>Nombre de Usuario:</label>
        <input
          type="text"
          .value="${this.nombre}"
          @input="${(e) => (this.nombre = e.target.value)}"
        /><br />

        <label>Campaña de Usuario:</label>
        <input
          type="text"
          .value="${this.campana}"
          @input="${(e) => (this.campana = e.target.value)}"
        /><br />

        <label>Estado de Usuario:</label>
        <input
          type="text"
          .value="${this.estado}"
          @input="${(e) => (this.estado = e.target.value)}"
        /><br />

        <label>Teléfono de Usuario:</label>
        <input
          type="text"
          .value="${this.tel}"
          @input="${(e) => (this.tel = e.target.value)}"
        /><br />

        <button @click="${this.registrarUsuario}">Registrar</button>


        </div>
      </div>
    </div>
    </div>
  </div>
  <br>
  <div class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100">
    <div class="border-dark col   w-75 h-75">
    <table class=' posicion table table-striped table-bordered w-75'>
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Campaña</th>
              <th>Estado</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            ${this.usuarios.map(
              (usuario) => html`
                <tr>
                  <td>${usuario.identificacion}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.campana}</td>
                  <td>${usuario.estado}</td>
                  <td>${usuario.telefono}</td>
                </tr>
              `
            )}
          </tbody>
        </table>

    </div>
  </div>
  
</div>
        </div>
      </div>

    `;
  }
}


customElements.define("main-element1", MainPage);
