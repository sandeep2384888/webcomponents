const template=document.createElement('template');
template.innerHTML=`
    <style>
    h1{
        color: red;
    }
    </style>
    <div class="user-card">
        <div>
            <h1><h1>
            <h3><slot name="email" /></h3>
            <h3><slot name="mobile" /></h3>
        </div>
    </div>
`;
class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerHTML=this.getAttribute('name');       
    }
}

window.customElements.define('user-card',UserCard);