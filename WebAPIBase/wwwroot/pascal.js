//windows.onload = function () {
//    //ha betöltött az oldal
//    drawpascal(5);
//    console.log(szam);
//}

//var drawpascal = function (sorszam) {
//    //itt hozzuk létre a pascal háromszög dom elemeinek létrehozása és elhelyezése
//    var szam = 5;
//    var szoveg = "szu";

//    let szam = 5;

//}

////uj DOM elem létrehozása
//var ujElem = document.createElement('div');
//ujElem.classList.add('újosztály');
//ujElem.id = 'újId';
//ujElem.innerText = '0';
//ujElem.innerHTML = '<div>Hello!</div>';

//var szuloElem = document.getElementById('szulo');
//szuloElem.appendChild(ujElem);

windows.onload = function () {
    drawPascal(5);

    var pascaldiv = document.getElementById('pascal');
    for (var sor = 0; sor < sorszam; i++) {
        var ujSorDiv = document.createElement('div');
        ujSorDiv.classList.add('sor');
        pascaldiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText = faktorialis(sor) / faktorialis(oszlop) * faktorialis(sor - oszlop);
            ujSorDiv.appendchild(ujElemDiv);
        }

        var ujElem = document.createElement('div');
        ujElem.class = 'gyerek';
        ujElem.innerHTML = '<div>Hello!</div>';

    }

}

var drawPascal = function (sorszam) {
    
}

