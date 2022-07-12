class ManipulationDOM{
    constructor(TrancheClass){
        this.datas = TrancheClass;
        this.conteneurTranches = document.querySelector('#conteneurTranches');
       
    }


    template(bool){
        return  `
            ${bool ?  '<button id="btn-suppr" type="button" onclick="handlerClick(event)">X</button>':  ''}
            <div class="mois">
                <div class="mois-infos"><h2>${this.datas.mois}</h2></div>
                <div class="brut-mens">BRUT <span class="montant">${this.datas.brut}€</span>
            </div>
     
            <div class="conteneur-secondaire">
                <div class="conteneur-plafu1">
                    <div class="sous-conteneur">
                        <div class="gauche-infos">
                            <div class="infos1">
                                <h2>$BRUT</h2>
                                <p class="montant">${this.datas._$brut}€</p>
                            </div>
                            <div class="infos2">
                                <h2>PLAFU1</h2>
                                <p class="montant">${this.datas.plafu1}€</p>
                            </div>
                            <div class="infos3">
                                <h2>$TU1</h2>
                                <p class="montant">${this.datas._$tu1}€</p>
                            </div>
                        </div>
                        <div class="droit-infos">
                            <h2 class="titre-conteneur">TU1</h2>
                            <h2 class="montant">${this.datas.tu1}€</h2>
                            <div class="infos2-droit">
                                <h2>$PLAFU1 = </h2>
                                <p class="montant">&nbsp;${this.datas._$plafu1}€</p>
                            </div>
                            <div class="conteneur-plaf-principal">
                                <div class="plaf-conteneur">
                                    <div class="tu1" style="height:${this.styleTu1()}">
                                        <p class="montant-tu1">${this.datas._$tu1}€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="conteneur-plafu2">
                    <div class="sous-conteneur">
                        <div class="gauche-infos">
                            <div class="infos1">
                                <h2>PLAFU2</h2>
                                <p class="montant">${this.datas.plafu2}€</p>
                            </div>
                            <div class="infos2">
                                <h2>$TU2</h2>
                                <p class="montant">${this.datas._$tu2}€</p>
                            </div>
                        </div>
                        <div class="droit-infos">
                            <h2 class="titre-conteneur">TU2</h2>
                            <h2 class="montant">${this.datas.tu2}€</h2>
                            <div class="infos2-droit">
                                <h2>$PLAFU2 = </h2>
                                <p class="montant">&nbsp;${this.datas._$plafu2}€</p>
                            </div>
                            <div class="plaf-conteneur">
                                <div class="tu2" style="${this.styleTu2()}">
                                    <p class="montant-tu2">${this.datas._$tu2}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }

    styleTu1(){
        return this.datas?.pourcentTu1 >= 100 ? "300px" : (this.datas?.pourcentTu1 * 300) / 100 + 'px' ;
    }

    styleTu2(){
        return this.datas?.pourcentTu2 >= 100 ? "height:300px" 
        : `height:${
            this.datas?.pourcentTu2 < 100 && this.datas?.pourcentTu1 >= 100 ? (this.datas?.pourcentTu2 * 300) / 100 +'px;' 
            : (this.datas?.pourcentTu2 * 300) / 100 + 'px;background-color:transparent'};`
    }

    autoScrollVersLeBas(){
        window.scrollTo(2000,2000);
    }


    render(html){
        conteneurTranchesId.innerHTML = html;
        this.autoScrollVersLeBas();
    }
}