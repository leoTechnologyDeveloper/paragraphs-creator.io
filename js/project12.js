
// VARIABLES *****************

const divResults = document.querySelector('.results');
const inputNumber = document.querySelector('.inputNumber');

 let numParagSearching = 0;


// EVENTOS *****************

inputNumber.addEventListener('change', getInfo)

// FUNCIONES *****************

// F1 --------------------------

function getInfo() {
    
    numParagSearching = inputNumber.value;
    if (numParagSearching == 0) {
        limpiarHtml();
        return;
    }
    consultApi(numParagSearching);
}

// F2 --------------------------

async function consultApi(numParagSearching) {
    
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${numParagSearching}&start-with-lorem=`;

    try {
    const response = await fetch(url);
    const data = await response.json();
    
    showDataInHtml(data);
        console.log(data);
    } catch (error) {
    console.log(error);
    }
}

// F3 --------------------------

function showDataInHtml(data) {
     limpiarHtml();
    data.forEach(element => {

        const p = document.createElement('p');
        p.textContent = element;
        divResults.appendChild(p);
    });
}

// F4 --------------------------

function limpiarHtml() {

    while (divResults.firstChild) {
        divResults.removeChild(divResults.firstChild)
   }
    // divResults.textContent = "";
}




