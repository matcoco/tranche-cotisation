const saisieMoisCourant = document.querySelector('#moisCourant');
const saisiePmss = document.querySelector('#plafu');
const saisieSalaireBrut = document.querySelector('#brut');
const calculer = document.querySelector('#calculer');
const conteneurTranchesId = document.querySelector('#conteneurTranches');

let moisPeriode = [];
let cumulTrancheHtml = "";
let tableauTranche = [];
let compteur = 0;
let dom = null;

function calculerTranche(moisCourant, moisPrec){
    moisCourant.cumulBrut(moisPrec._$brut);
    moisCourant.cumulPlafu1(moisPrec._$plafu1);
    moisCourant.calculPlafU2();
    moisCourant.cumulPlafu2(moisPrec._$plafu2);
    moisCourant.calculTu1(moisPrec._$tu1);
    moisCourant.calculTu2(moisPrec._$tu2);
    moisCourant.cumulTu2(moisPrec._$tu2);
    
    moisCourant.affichage();
}

calculer.addEventListener('click', (event) => {
    event.preventDefault();
    let mois = saisieMoisCourant.value;
    let brut = +saisieSalaireBrut.value;
    let pmss = +saisiePmss.value;

    let periodeCourante = new CalculTranche(mois, brut, pmss);
    moisPeriode.push(periodeCourante)

    let moisPeriodeLongueur = moisPeriode.length;
    let dataMoisPrec = moisPeriode[moisPeriodeLongueur - 2];

    if(moisPeriodeLongueur === 1){
        moisPeriode[0].calculTranche();
        moisPeriode[0] = moisPeriode[0].obtenirMoisCourant();
        moisPeriode[0].affichage();
    }else if(moisPeriodeLongueur > 1){
        calculerTranche(periodeCourante, dataMoisPrec);
    }

    tableauTranche.push(periodeCourante);
    constructionHtmlCode(periodeCourante);
    //supprimerSaisie();
});


function supprimerSaisie(){
    saisieMoisCourant.value = "";
    saisiePmss.value = "";
    saisieSalaireBrut.value = "";
}

function handlerClick(event){
    let id = +event.path[1].id;
    tableauTranche.splice(+id, 1);
    constructionHtmlCode();
    moisPeriode.pop();
}

function constructionHtmlCode(){
    let html = "";
    let div = null;
    for(let i = 0; i < tableauTranche.length; i++){
        dom = new ManipulationDOM(tableauTranche[i]);
        div = document.createElement('div');
        div.className = `tranches`;
        div.setAttribute('id', i);
        div.innerHTML = dom.template(i === tableauTranche.length -1);
        html += div.outerHTML;
        dom.styleTu1();
    }

    dom.render(html);
}

