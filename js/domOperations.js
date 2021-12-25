 function getValue(id) {
  return document.getElementById(id).value;
}

function postValue(id, value) {
  document.getElementById(id).innerHTML = value;
}

function showResultInDomKvadrat() {
  const resultInDomKvadrat = squareArea(+getValue("dlinaStoroniKvadrata"));
  postValue("ploschadKvadrata", resultInDomKvadrat);
}

function showResultInDomPriamougolnika() {
  const resultInDomPriamougolnika = areaOfSimpleGeometricShapes(+getValue("pervayaStoronaPriamougolnika"), +getValue("drugayaStoronaPriamougolnika"));
  postValue("ploschadPriamougolnika", resultInDomPriamougolnika);
}

function showResultInDomParalelograma() {
  const resultInDomParalelograma = areaOfSimpleGeometricShapes(+getValue("dlinaStoronyParalelograma"), +getValue("dlinaVisotyParalelograma"));
  postValue("ploschadParalelograma", resultInDomParalelograma);
}

function showResultInDomRomba() {
  const resultInDomRomba = areaOfSimpleGeometricShapes(+getValue("dlinaStoronyRomba"), +getValue("dlinaVisotyRomba"));
  postValue("ploschadRomba", resultInDomRomba);
}