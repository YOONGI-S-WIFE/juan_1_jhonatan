import { css } from "lit-element";

export default css `
.gradient-background {
    background: linear-gradient(to right, #007BFF, white);
}
.z-index-1{
    z-index: 1;
}
.bg-input{
    background-color:#446D99;
}
.bg-icon{
    background-color:#00264D;
}

.placeholder-white::placeholder {
    color: white;
}
.bottom-rounded {
    border-radius: 0 0 15px 15px; 
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

.text-blue{
    color:#446D99;   
}
`
