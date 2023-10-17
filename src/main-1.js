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
        <div class="w-75 bg-dark m-3 d-grid">
            <div class="bg-primary h-25 d-flex justify-content-between">

            <div class="h-100 w-100 justify-content-center aling-items-center m-3 mt-3">
            <span class="w-25 bg-dark p-3">40</span>
            <span>Estudiantes</span>
            </div>
            <div class="h-100 w-100 justify-content-center aling-items-center m-3 mt-3">
            <span class="w-25 bg-dark p-3">40</span>
            <span>Estudiantes</span>
            </div>
            <div class="h-100 w-100 justify-content-center aling-items-center m-3 mt-3">
            <span class="w-25 bg-dark p-3">40</span>
            <span>Estudiantes</span>
            </div>
            </div>

            <div class="bg-grey">s
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('main-1', MainPage);
