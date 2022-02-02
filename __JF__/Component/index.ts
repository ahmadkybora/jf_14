class Component extends HTMLElement {
    bootstrap = '  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback = () => {}

    adoptedCallback = () => {}

    attributeChangedCallback = (name: any, oldVal: any, newVal: any) => {}

    observedAttributes = () => {}

    // static get observedAttributes() {}

    static create = (name: string, component: any) => {
        window.customElements.define(name, component);
    }

}

export default Component;