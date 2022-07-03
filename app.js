const saisieMoisCourant = document.querySelector('#moisCourant');
const saisiePmss = document.querySelector('#plafu');
const saisieSalaireBrut = document.querySelector('#brut');
const calculer = document.querySelector('#calculer');


const moisPeriode = [];
let cumulTrancheHtml = "";

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

    constructionHtmlCode(periodeCourante);
    supprimerSaisie();
});

function supprimerSaisie(){
    saisieMoisCourant.value = "";
    saisiePmss.value = "";
    saisieSalaireBrut.value = "";
}

function constructionHtmlCode(classMoisEnCours){
    let dom = new ManipulationDOM(classMoisEnCours);
    cumulTrancheHtml += dom.template();
    dom.render(cumulTrancheHtml);
}

