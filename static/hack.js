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

    //cloudcannon live preview
    async function useNewPageProps(CloudCannon) {
        const latestValue = await CloudCannon.value();
        document.querySelectorAll('[data-cms-bind]').forEach((el) => {
            const key = el.dataset['cmsBind'].slice(1);
            let newValue = latestValue[key];
            if(el.dataset['cmsBindAttribute']) {
                if(el.dataset['cmsBindAttribute'] === 'src') {
                    newValue = `/static${newValue}`;
                }
                el.setAttribute(el.dataset['cmsBindAttribute'], newValue);
            } else {
                el.innerHTML = latestValue[key];
            }
        })
    }

    if (!window.CloudCannon) {
        document.addEventListener('cloudcannon:load', function (e) {
            onLiveEditorLoad(e.detail.CloudCannon);
        });
    } else {
        onLiveEditorLoad(window.CloudCannon);
    }
    function onLiveEditorLoad(CloudCannon) {
        CloudCannon.enableEvents();
        useNewPageProps(CloudCannon);
    }
    document.addEventListener('cloudcannon:update', async function (e) {
        useNewPageProps(e.detail.CloudCannon);
    });

})();