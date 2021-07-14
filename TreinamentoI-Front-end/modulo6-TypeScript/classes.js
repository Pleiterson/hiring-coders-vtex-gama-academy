"use strict";
var Data = /** @class */ (function () {
    // public dia: number; // a propriedade dia poderá acessar acessada de fora da classe Date
    // private mes: number; // a propriedade mes só poderá ser acessada de dentro da classe Date
    // mes: number; // a propriedade mes só poderá ser acessada de dentro da classe Date
    // ano: number; // por default todas as propriedades nao definidas com os modificadores de acesso são public
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var data = new Data(14, 7, 2021);
console.log(data.dia); // conseguirá acessa a propriedade dia, pois dia é public
// console.log(data.mes); // não conseguirá acessa a propriedade mes, pois mes é private
var data2 = new Data(14, 7);
