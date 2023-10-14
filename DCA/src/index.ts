import "./components/export"
import "./screen/dashboard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Dashboard = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(Dashboard);
    }
}

customElements.define('app-container', AppContainer)