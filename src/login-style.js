import { css } from "lit-element";

export default css `

.z-index-1{
    z-index: 1;
}
.bg-input{
    background-color:#ffffff9a;
}
.bg-icon{
    background-color:#232222;
}

.bg-icon1{
    background-color:#353434d4;
}

.bg-primary1 {
    background-color: #353434d4; 
  }

.bg-color-secondary {
    background-color: #9e9898a2; 
  }

  .bg-color-secondary1 {
    background-color: none; 
  }

  .bg-secondary {
    background-color: #9e9898a2; 
  }

  .bg-secondary1 {
    background-color: #9e9898a2; 
  }

.bg-color-dark {
    background-color: #4b4a4ae7; 
}

.placeholder-white::placeholder {
    color: white;
}
.bottom-rounded {
    border-radius: 0 0 15px 15px; 
}

.border-primary{
    border-color: black;
}
.border-left {
    border-radius: 15px 5px 5px 15px; 
}
.border-right {
    border-radius: 0px 15px 15px 0px; 
}
.border-20{
    border-radius:20px;
}
.border-10{
    border-radius:10px;
}

.bg-whiteTransparent{
    background-color: rgba(255,255,255,0.6)
}

.text-big{
    font-size:25px;
}
.num-big{
    font-size:50px;
}

.num-small{
    font-size:25px;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
  }
  .color{
    width:10%;
  }
  .color:hover{
    color:tomato;
  }
  .posicion{
    position:relative;
    left:100px;
  }

`
