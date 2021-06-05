var host =document.getElementById('shadowhost');
var shadowRoot=host.attachShadow({mode: 'open'});

let style = document.createElement('style');

style.textContent = `
h1{
  border: 1px solid black;
  padding: 10px;
  background: yellow;
}
`

var div = document.createElement('div');
 
div.innerHTML=`<style> p {color: green;} </style>
  <h1>Shadow DOM Example</h1>   
  <p>This para is inside Shadow DOM</p>`;
 
shadowRoot.appendChild(div);
div.appendChild(style);