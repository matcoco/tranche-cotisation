class CalculTranche{
    constructor(p_mois, p_brut, p_plafu1){
        this.brut = +p_brut.toFixed(2) ;
        this._$brut = 0;
        this.plafu1 = +p_plafu1.toFixed(2);
        this.plafu2 = 0;
        this._$plafu1 = 0;
        this._$plafu2 = 0;
        this.tu1 = 0;
        this.tu2 = 0;
        this._$tu1 = 0;
        this._$tu2 = 0;
        this.mois = p_mois;
        this.pourcentTu1 = 0;
        this.pourcentTu2 = 0;
    }

    cumulBrut(brut){
        if(brut) return this._$brut = +(brut + this.brut).toFixed(2);
       return this._$brut += +(this.brut).toFixed(2);
    }   

    cumulPlafu1(plafu1){
        if(plafu1) return this._$plafu1 = +(plafu1 + this.plafu1).toFixed(2);
       return this._$plafu1 += +(this.plafu1).toFixed(2);
    }

    cumulPlafu2(plafu2){
        if(plafu2) return this._$plafu2 = +(plafu2 + this.plafu2).toFixed(2);
        return this._$plafu2 += +(this.plafu2).toFixed(2);
    }

    calculTu1(c_tu1){
        if(c_tu1) this._$tu1 = c_tu1;
        if(this._$brut > this._$plafu1){    
            this.tu1 = +(this._$plafu1 - this._$tu1).toFixed(2);
            this._$tu1 += +this.tu1.toFixed(2);
        }else{
         this.tu1 = +(this._$brut - this._$tu1).toFixed(2);
         this._$tu1 += this.tu1;
        }
        this.pourcentTu1 = this.calculPourcentagePlafondTu1(this._$brut, this._$plafu1);
    }

    calculTu2(c_tu2){ 
        if(c_tu2) this._$tu2 = c_tu2;
        if(this._$brut > this._$plafu2) {
            this.tu2 = +(this._$plafu2 - this._$tu2 - this._$plafu1).toFixed(2);
            this._$tu2 = this.tu2;
        } else {
            this.tu2 = +(this._$brut - this._$tu2 - this._$tu1).toFixed(2);
            this._$tu2 = this.tu2;
        }
        this.pourcentTu2 = this.calculPourcentagePlafondTu2(this._$brut, this._$plafu2);
    }

    cumulTu1(){
        return this._$tu1 += this.tu1;
    }

    cumulTu2(c_tu2){
        if(c_tu2) this._$tu2 = c_tu2;
        return this._$tu2 = this.tu2 + c_tu2;
    }


    calculPlafU2(){
        return this.plafu2 = +this.plafu1.toFixed(2) * 8;
    }

    calculTranche(){
        this.cumulBrut();
        this.calculPlafU2();
        this.cumulPlafu1();
        this.calculPlafU2();
        this.cumulPlafu2();

        this.calculTu1();
        this.calculTu2();

    }

    affichage(){
        console.log(`
        ${this.mois} : ${this.brut} ${this._$brut} ${this.plafu1} ${this.plafu2} ${this._$plafu1} ${this._$plafu2} ${this.tu1} ${this.tu2} ${this._$tu1} ${this._$tu2} 
        `)
 
/*         console.log(`
        ${this.mois} : TU1 = ${this.tu1}  TU2 = ${this.tu2} 
        `) */
    }

    calculPourcentagePlafondTu1(brut, plaf){
        return (brut / plaf) * 100;
    }

    calculPourcentagePlafondTu2(brut, plaf){
        return (brut / plaf) * 100;
    }

    obtenirMoisCourant(){
        return this;
    }
}