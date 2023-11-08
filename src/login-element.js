import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";
import { MainPage } from "./main-element1";


export class MyElement extends LitElement{

    constructor(){
        super();
        this.saludo="Inicio de sesión";
        this.mensaje="";
<<<<<<< HEAD:src/login-element.js
        this.usuario = ""

    const storedUsername = localStorage.getItem("Usuario");
    const storedPassword = localStorage.getItem("Contraseña");

    if (storedUsername && storedPassword) {
        this.usuario = storedUsername;
        this.contraseña = storedPassword; // Inicializa también la propiedad contraseña si es necesario
    }

       
=======
        this.recarga()
>>>>>>> 5d35e71f06cc786ea8a756b617ed977d79c2ae89:src/login-template.js
    }


    static get properties(){
        return{
            saludo:{
               type: String
            },
            mensaje:{
                type: String
             } 
        }
    }

<<<<<<< HEAD:src/login-element.js
    ingresarLogin(){
        let username = this.shadowRoot.querySelector('#username').value;
        let password = this.shadowRoot.querySelector('#password').value;
        let check = this.shadowRoot.querySelector('#remember').checked;





        if (username == null || username == undefined || username == '') {
            this.mensaje='El campo de Nombre esta vacio';
            this.mostrarError()
            return false;
        } 
        else if (password == null || password == undefined || password == '') {
            this.mensaje='El campo de Contraseña esta vacio';
            this.mostrarError()
            return false;
        } 
        else if (check) {
            const mainPage = document.createElement('main-element1');
=======
    recarga(){
        const credencialesGuardadas = JSON.parse(localStorage.getItem('credenciales'));
        if(credencialesGuardadas!==null){
            const mainPage = document.createElement('main-1');
>>>>>>> 5d35e71f06cc786ea8a756b617ed977d79c2ae89:src/login-template.js
            document.body.innerHTML = ''; 
            document.body.appendChild(mainPage);
             localStorage.setItem("Usuario", username)
             localStorage.setItem("Contraseña", password)

           
        }else{
            const mainPage = document.createElement('main-element1');
            document.body.innerHTML = ''; 
            document.body.appendChild(mainPage);
            
        }
    }

    ingresarLogin(){
        let username = this.shadowRoot.querySelector('#username').value;
        let password = this.shadowRoot.querySelector('#password').value;
        let remeber = this.shadowRoot.querySelector('#remember').checked;  

        if (username == null || username == undefined || username == '') {
            this.mensaje='Atención...campo nombre vacio';
            this.mostrarError()
            return false;
        } 
        else if (password == null || password == undefined || password == '') {
            this.mensaje='Atención...campo contraseña vacio';
            this.mostrarError()
            return false;
        }else{

            if(remeber){
                let credenciales={
                    nombre:username, 
                    contraseña:password}

                localStorage.setItem('credenciales',JSON.stringify(credenciales)); 
                const credencialesGuardadas = JSON.parse(localStorage.getItem('credenciales'));

                let nombreLocal = credencialesGuardadas.nombre;
                let passwordLocal = credencialesGuardadas.contraseña;

                console.log(nombreLocal, passwordLocal); 
  
                console.log(credencialesGuardadas)          
            
                const mainPage = document.createElement('main-1');
                document.body.innerHTML = ''; 
                document.body.appendChild(mainPage);
            }else{
                const mainPage = document.createElement('main-1');
                document.body.innerHTML = ''; 
                document.body.appendChild(mainPage);
            }

        }
        
    }

<<<<<<< HEAD:src/login-element.js
    mostrarUsuario(){
        if (Usuario1 && Contraseña1) {
            this.usuario = Usuario1;
            this.contraseña = Contraseña1;
        }
    }
=======
>>>>>>> 5d35e71f06cc786ea8a756b617ed977d79c2ae89:src/login-template.js

    
    mostrarError(){
        return html `<div class="position-absolute bottom-0 start-50 translate-middle z-index-1">${this.mensaje}</div>`
    }

    static get styles(){
        return[loginStyle]
    }

    render(){
        return html `
        <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        .bg-custom-color {
    background-color: #2F9291;
  }
        </style>
        <div class="container position-relative">
            <div class="position-absolute bottom-50 start-50 translate-middle z-index-1" ><i class="fa-solid fa-user fa-bounce fa-5x bg-icon p-5 rounded-circle" style="color: #ffffff;"></i></div>
            <div class="container border border-0 border-20 px-5 py-5 bg-whiteTransparent position-relative w-50">

                <div class="mb-3 mt-5 d-flex" >
                    <span class="input-group-text bg-icon"><i class="fas fa-user" style="color: #d1ccccb9;"></i></span>
                    <input type="text" id="username" class="w-100 rounded form-control bg-inputregistro placeholder-#3e3c3c" placeholder="Usuario" .value=${this.usuario}></input>  
                </div>
                <div class="mb-3 d-flex">
                    <span class="input-group-text bg-icon"><i class="fas fa-user-lock" style="color: #d1ccccb9;"></i></span>
                    <input type="password" id="password" class="w-100 rounded form-control bg-inputregistro placeholder-#3e3c3c" placeholder="Password" .value=${this.contraseña}></input>
                </div>  
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" name="remember" id="remember" class="form-check-input">
                        <label for="remember" class="form-check-label">Recuerdame</label>
                    </div>
                    <div class="ml-auto">
                        <span>Recuperar contraseña</span>
                    </div>
                    
                </div>    
                <div class="   p-3 text-gray">
                ${this.mostrarError()}    
                </div>                 
            </div> 
                <button class="btn bg-whiteTransparent position-absolute start-50 translate-middle-x mt-1 w-15 bottom-rounded p-3 text-gray" @click=${(e)=>this.ingresarLogin()}><strong>LOGIN<strong></button>
                
        </div>
        `
    }
}

customElements.define('login-element',MyElement)