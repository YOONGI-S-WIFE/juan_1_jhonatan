import { css } from "lit-element";

export default css `
.background-darkgray {
    background-color: #CCCCCC;
    
}
.z-index-1{
    z-index: 1;
}
.bg-input{
    background-color:#87CEEB;
}
.bg-icon{
    background-color:#333333;
}
.bg-pink{
    background-color:#FFF9FF;
}
.placeholder-white::placeholder {
    color: white;
}
.bottom-rounded {
    border-radius: 0 0 15px 15px; 
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

.bg-grayWhite{
    background-color:#D6D7D9;
}

.text-blue{
    color:#446D99;   
}

.text-big{
    font-size:25px;
}
.num-big{
    font-size:50px;
}

.shadow-inset{
    border: 1px solid #ccc; 
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}
`
