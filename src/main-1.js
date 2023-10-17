import { LitElement, html } from "lit-element";

export class MainPage extends LitElement {
  render() {
    return html`
    <style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    </style>

      <div class>
        <h1>Bienvenido a la página principal</h1>
        <!-- Contenido de la página principal aquí -->
      </div>
    `;
  }
}

customElements.define('main-1', MainPage);
