//B1
function getTotal() {
    let vl = parseFloat(document.querySelector('.vl').value) || 0;
    let hh = parseFloat(document.querySelector('.hh').value) || 0;
    let sh = parseFloat(document.querySelector('.sh').value) || 0;

    let total = vl + hh + sh;
    let averages = total / 3;
    document.querySelector('.td').innerText = total.toFixed(2);
    document.querySelector('.dtb').innerText = averages.toFixed(2);
}

//B2

function convertC() {
    let convert = parseFloat(document.querySelector('.coverC').value);
    let convertF = (convert * 9/5) + 32;
    document.querySelector('.coverF').innerHTML = convertF + " F";
}

//B3
let pi = 3.14;

function resultS() {
    let htR = parseFloat(document.querySelector('.input-R').value);
    let htD = parseFloat(document.querySelector('.input-D').value);
    let resultText = ""
    if (!isNaN(htR) && htR > 0) {
        let areaS = pi * Math.pow(htR, 2);
        resultText += `${areaS.toFixed(2)}`;
    };

    if (!isNaN(htD) && htD > 0) {
        let areaSS = pi * Math.pow(htD / 2, 2);
        resultText += `${areaSS.toFixed(2)}`;
    };

    if (resultText === "") {
        resultText = "hãy nhập bán kính hoặc đường kính"
    }
    document.querySelector('.resultR').innerText = resultText;
};

function resultC() {
    let htR = parseFloat(document.querySelector('.input-R').value);
    let htD = parseFloat(document.querySelector('.input-D').value);
    let resultText = ""
    if (!isNaN(htR) && htR > 0) {
        let area = 2 * pi * htR;
       resultText += `${area.toFixed(2)}`;
    };

    if (!isNaN(htD) && htD > 0) {
        let areaD = pi * htD;
        resultText += `${areaD.toFixed(2)}`;
    };

    if (resultText === "") {
        resultText = "hãy nhập bán kính hoặc đường kính"
    }
    document.querySelector('.resultD').innerText = resultText;
};