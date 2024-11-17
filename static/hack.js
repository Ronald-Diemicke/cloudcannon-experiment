(function() {
    class GB_HF_PG_Colorizer extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.addEventListener('click', (e) => {
                    this.classList.toggle('fill');
            })
        }
    }

    customElements.define("gb-hfpg-colorizer", GB_HF_PG_Colorizer);
})();