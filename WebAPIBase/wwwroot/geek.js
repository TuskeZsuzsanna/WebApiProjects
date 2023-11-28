var viccek;

windows.onload(){
    Letöltés();
}

fetch('/jokes.json'){
    .then(response => response.json())
    .then(data => LetöltésBefejeződött(data))
}


function Letöltés() {
    
}


function LetöltésBefejeződött(d) {
    console.log("Sikeres letöltés.")
    console.log(d)
    viccek = d;

    for (var i = 0; i < viccek.length; i++) {
        let elem = document.createElement("li")
        elem.innerHTML = viccek[i].questionText
        ide.appendChild(elem)
    }
}