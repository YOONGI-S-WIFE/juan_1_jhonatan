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
          numeroTel:'51412421421',
          direccion:'Carrera 6',
          estado: '2',
          campaña:'Q-Vision'
        },
        {
          id:'3',
          nombre:'Juan',
          numeroTel:'421521412441',
          direccion:'Carrera 6',
          estado: '1',
          campaña:'Q-Vision'
        },
        {
          id:'4',
          nombre:'Laura',
          numeroTel:'421421421444',
          direccion:'Carrera 6',
          estado: '1',
          campaña:'Q-Vision'
        },
        {
          id:'5',
          nombre:'Mafe',
          numeroTel:'421421412414',
          direccion:'Carrera 6',
          estado: '2',
          campaña:'Q-Vision'
        },
        {
          id:'6',
          nombre:'Sebas',
          numeroTel:'421421122155',
          direccion:'Carrera 6',
          estado: '2',
          campaña:'Q-Vision'
        },
        {
          id:'6',
          nombre:'Sebas',
          numeroTel:'54645646464',
          direccion:'Carrera 6',
          estado: '2',
          campaña:'Q-Vision'
        }
        ]
      }

    

      this.usuariosConectados=this.calcularusuariosConectados();
      this.usuariosAusentes=this.calcularusuariosAusentes();
      this.usuariosLlamados=0
      this.campañasActivas="";
      this.hola="";
      this.resultadoBusqueda=''


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
        },
        resultadoBusqueda:{
          type:String
        }
    }
}

calcularusuariosConectados(){
  let usuariosConectados = 0;
  for (let usuario of this.objetoUsuarios.Usuarios) {
  if (usuario.estado === '1') {
    usuariosConectados += 1;
  }
}

return usuariosConectados
}
calcularusuariosAusentes(){
  let  usuariosAusentes = 0;
  for (let usuario of this.objetoUsuarios.Usuarios) {
    if (usuario.estado === '2') {
      usuariosAusentes += 1;
    }
  }

  return usuariosAusentes
}

  mostrarUsuarios(y){
    if(y==1){
      this.hola= html`
      <table class="w-100" style="border: 1px solid black">
        <tr>
          <th class="">Id</th>
          <th class="">Nombre</th>
          <th class="">Numero de telefono</th>
          <th class="">Campaña</th>
          <th class="">Otros datos</th>
        </tr>
        ${this.objetoUsuarios.Usuarios.map(
          (usuario) => html`
          <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.numeroTel}</td>
            <td>${usuario.campaña}</td>
            <td><button class="btn btn-primary" @click=${() => this.modalInfoUsuarios(usuario.id)}>Ver mas</button></td>
          </tr>
          <div class="modal" id="modalUsuario${usuario.id}">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Información del Usuario</h5>
                  <button type="button" @click=${() => this.cerrarmodalInfoUsuarios(usuario.id)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>ID: ${usuario.id}</p>
                  <p>Nombre: ${usuario.nombre}</p>
                  <p>Número de teléfono: ${usuario.numeroTel}</p>
                  <p>Dirección: ${usuario.direccion}</p>
                  <p>Estado: ${usuario.estado}</p>
                  <p>Campaña: ${usuario.campaña}</p>
                </div>
              </div>
            </div>
          </div>
          `
        )}
      </table>
      `
      
    }
    return this.hola
    
  }

  modalInfoUsuarios(id){
    let modalId=`#modalUsuario${id}`
    let modal=this.shadowRoot.querySelector(modalId)

    modal.style.display="block"
    modal.style.background="rgb(0,0,0,0.7)"
    
  }
  cerrarmodalInfoUsuarios(id){
    let modalId=`#modalUsuario${id}`
    let modal=this.shadowRoot.querySelector(modalId)

    modal.style.display="none"
    modal.style.background="none"
  }

  abrirAgregarUsuario(){
    let modal=this.shadowRoot.querySelector("#agregarUsuarioModal")
    modal.style.display="block"
    modal.style.background="rgb(0,0,0,0.7)"

  }
  cerrarAgregarUsuario(){
    let modal=this.shadowRoot.querySelector("#agregarUsuarioModal")
    modal.style.display="none"
    modal.style.background="none"
  }
  
  mostrarLlamadaConectada(usuario) {
    const llamadaConectadaDiv = this.shadowRoot.querySelector(`#div1-${usuario}`);
    const conectandoLlamadaDiv = this.shadowRoot.querySelector(`#div2-${usuario}`);
    llamadaConectadaDiv.style.display = "block";
    conectandoLlamadaDiv.style.display = "none";
  }
  
  abrirLlamarUsuario(usuario) {
    const modal = this.shadowRoot.querySelector(`#llamarUsuarioModal-${usuario}`);
    modal.style.display = "block";
    modal.style.background = "rgb(0,0,0,0.7)";
    setTimeout(() => this.mostrarLlamadaConectada(usuario), 3000);
  }
  
  agregarUsuarioLlamado(usuario) {
    this.usuariosLlamados += 1;
    this.requestUpdate();
    this.cerrarLlamarUsuario(usuario);
  }
  
  cerrarLlamarUsuario(usuario) {
    const modal = this.shadowRoot.querySelector(`#llamarUsuarioModal-${usuario}`);
    modal.style.display = "none";
    modal.style.background = "none";
  }
  


  agregarUsuario(){
    let nombreInput=this.shadowRoot.querySelector("#nombre");
    let telefonoInput=this.shadowRoot.querySelector("#tel");
    let direccionInput=this.shadowRoot.querySelector("#dire");
    let estadoInput=this.shadowRoot.querySelector("#estado");
    let campañaInput=this.shadowRoot.querySelector("#campaña");


    let nombre = nombreInput.value;
    let telefono = telefonoInput.value;
    let direccion = direccionInput.value;
    let estado = estadoInput.value;
    let campaña = campañaInput.value;

    let id=this.objetoUsuarios.Usuarios.length+1
    console.log(id)

    const nuevoUsuario={
      id:id,
      nombre:nombre,
      numeroTel:telefono,
      direccion:direccion,
      estado:estado,
      campaña:campaña
    }
    this.objetoUsuarios.Usuarios.push(nuevoUsuario);

    this.usuariosConectados = this.calcularusuariosConectados();
    this.usuariosAusentes = this.calcularusuariosAusentes();

    nombreInput.value=''
    telefonoInput.value=''
    direccionInput.value=''
    estadoInput.value=''
    campañaInput.value=''

    this.requestUpdate();
    this.cerrarAgregarUsuario();


  }

  buscarUsuario(){
    let nombreInput=this.shadowRoot.getElementById("buscarNombre")
    let numeroInput=this.shadowRoot.getElementById("buscarTel")

    let nombre=nombreInput.value;
    let numero=numeroInput.value

    const usuarioEncontrado = this.objetoUsuarios.Usuarios.find(usuario => {
      return usuario.nombre === nombre && usuario.numeroTel === numero;
    });
  
    if (usuarioEncontrado) {
      this.resultadoBusqueda = html`
      <div class="m-2 border border-10 bg-input text-white p-2">
      <h5>Usuario encontrado</h5>
      <p> <strong>Nombre:</strong> <br>${usuarioEncontrado.nombre} <br>
      <strong>N° telefono:</strong> <br>${usuarioEncontrado.numeroTel} <br>
      <strong>campaña:</strong> <br>${usuarioEncontrado.campaña}<br>
      </p>
      <div class="d-flex aling-items-center justify-content-center">
        <button class="bg-icon text-white border border-0 border-10 p-2" @click=${(e)=>this.abrirLlamarUsuario(usuarioEncontrado.id)}>Llamar</button>
      </div>
    </div>
    ${usuarioEncontrado.estado==1  ? html `
    <div class="modal" id="llamarUsuarioModal-${usuarioEncontrado.id}">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Llamando usuario</h5>
            <button type="button" @click=${(e)=>this.cerrarLlamarUsuario()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="div2-${usuarioEncontrado.id}" style="display:block;">
              <h1>conectando a la llamada...por favor espere.</h1>
            </div>
            <div id="div1-${usuarioEncontrado.id}" style="display:none;">
              <div>
                <h2>Llamada conectada con el usuario ${usuarioEncontrado.nombre}</h2>
                <i class="fa-solid fa-volume-high float-end w-25 fa-5x mb-3"></i>
              </div>
              <div class="d-flex justify-content-center align-items-center mt-3" >
                <button class="btn btn-primary" @click=${(e)=>this.agregarUsuarioLlamado(usuarioEncontrado.id)}>Finalizar llamada</buttton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`: html`
    <div class="modal" id="llamarUsuarioModal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Llamando usuario</h5>
          <button type="button" @click=${(e)=>this.cerrarLlamarUsuario()}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <h1>Usuario ausente, lo sentimos.</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}`
  nombreInput.value=''
  numeroInput.value=''
    } else {
      this.resultadoBusqueda= html`
      <div class="m-2 border border-10 bg-input text-white p-2">
        <h3>Usuario no encontrado</h3>
      </div>
    `
    }
    nombreInput.value=''
    numeroInput.value=''
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
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosLlamados}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>llamados</p></div>
          </div>
        </div>
        <div class="h-75 bg-light border border-dark border-20 d-flex p-3 ">
          <div class="w-25 mx-1 border-20 border-1 border border-dark">
            <div class="d-flex flex-column p-3 bg-secondary border-20">
              <input class="m-2 p-2 border-10 border-0" id="buscarTel" placeholder="Número">
              <input class="m-2 p-2 border-10 border-0" id="buscarNombre" placeholder="Nombre">
              <div class="d-flex justify-content-center aling-items-center">
                <button class="m-2 w-50  border-10 bg-icon text-white border-0 p-2" @click=${(e)=>this.buscarUsuario()}>Buscar</button>
              </div>
            </div>
            <div>
                ${this.resultadoBusqueda}
            </div>
          </div>
          <div class="w-75 bg-light d-flex flex-column mx-3">
            <div>
              <button class="border-10 p-2 text-big border-1">Básico</button>
              <button class="border-10 p-2 text-big border-1">Avanzado</button>
              <button class="bg-icon text-white p-2 text-big border-10 float-end" @click=${(e)=>this.abrirAgregarUsuario()}>Nuevo</button>
              <div class="modal" id="agregarUsuarioModal">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Agregar nuevo usuario</h5>
                      <button type="button" @click=${(e)=>this.cerrarAgregarUsuario()}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Por favor diligencia los siguientes datos</p>
                      <div class="d-flex flex-column">
                        <label for="nombre">Nombre:</label>
                        <input class=" p-2 border-10 border-1" id="nombre" name="nombre" placeholder="nombre">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="tel">Número de telefono:</label>
                        <input class=" p-2 border-10 border-1" id="tel" name="tel" placeholder="Telefono">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="dire">Dirección:</label>
                        <input class=" p-2 border-10 border-1" id="dire" name="dire" placeholder="Dirección">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="estado">Estado:</label>
                        <input class=" p-2 border-10 border-1" id="estado" name="estado" placeholder="Estado">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="campaña">campaña:</label>
                        <input class=" p-2 border-10 border-1" id="campaña" name="campaña" placeholder="campaña">
                      </div>
                      <div class="d-flex justify-content-center aling-items-center mt-3">
                        <button class="btn btn-primary" @click=${(e)=>this.agregarUsuario()}>Agregar</buttton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
