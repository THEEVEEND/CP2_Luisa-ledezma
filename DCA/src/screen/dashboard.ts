import { catImage, catFact } from "../services/api";
import { AttributesCard } from "../components/card/card";
//import* as modules from "../"
import { catTypes } from "../types/types";

export default class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const imgapi = await catImage();
        const factapi = await catFact();

        this.render(imgapi, factapi);
    }

    render(imgapi: any, factapi: any) {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `Cats Facts`;
        const cardsContainer = this.ownerDocument.createElement('card-info');
        this.shadowRoot?.appendChild(cardsContainer);

        const img = this.ownerDocument.createElement('image')
        img.setAttribute(AttributesCard.image, imgapi.image)
        cardsContainer.appendChild(img)

        const fact = this.ownerDocument.createElement('p')
        fact.setAttribute(AttributesCard.image, imgapi.image)
        cardsContainer.appendChild(fact)
        
        const btn = this.ownerDocument.createElement('button')
        btn.addEventListener('click')
        cardsContainer.appendChild(btn)



    }
        }

    
}

customElements.define('app-dashboard', Dashboard)