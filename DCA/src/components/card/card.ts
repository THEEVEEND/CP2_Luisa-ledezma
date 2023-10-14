//enum, class{constructor, static get observedAttributes, attributeChangedCallback, connectedCallback, render}
export enum AttributesCard {
    "image" = "image",
    "fact" = "fact"
}

export default class Cards extends HTMLElement {
    image: string = "";
    fact: string = "";

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        const attrs: Record<AttributesCard,null>= {
            image:null,
            fact:null,
        }
        return Object(attrs);
    }

    attributeChangedCallback(propName: AttributesCard,
        oldValue: string | undefined,
        newValue: string,){
            switch (propName) {
                default:
                    this[propName] = newValue; 
                    break;
            }
            this.render();
        }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= `
            <div>
            <img src="${this.image}" alt="cat image">
            <p>${this.fact}</p>
            </div>
            `
        }
    }

}
customElements.define("card-info", Cards)

