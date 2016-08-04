'use strict';

//Measurement Variables for Conversion
var inch = 1;
var cm = 1;

var floz = 1;
var ml = 1;

var miles = 1;
var km = 1;

var lbs = 1;
var kg = 1;

var shitTon = 1;
var metricShitTon = 1;

//Form Input Field Document Getters
var inchToCM = document.getElementById('inchToCM');
var cmToInch = document.getElementById('cmToInch');
var flozToML = document.getElementById('flozToML');
var mlToFLOZ = document.getElementById('mlToFLOZ');
var milesToKM = document.getElementById('milesToKM');
var kmToMiles = document.getElementById('kmToMiles');
var lbsToKG = document.getElementById('lbsToKG');
var kgToLBS = document.getElementById('kgToLBS');
var shitTonToMetric = document.getElementById('shitTonToMetric');
var metricToShitTon = document.getElementById('metricToShitTon');

//Functions to Convert

function inchToCMConvert(inch) {
  return inch * 2.54;
};

function cmToInchConvert(cm) {
  return cm * .39;
};

function flozToMLConvert(floz) {
  return floz * 29.574;
};

function mlToFLOZConvert(ml) {
  return ml * .034;
};

function milesToKMConvert(miles) {
  return miles * 1.609;
};

function kmToMilesConvert(km) {
  return km * .621;
};

function lbsToKGConvert(lbs) {
  return lbs * .454;
};

function kgToLBSConvert(kg) {
  return kg * 2.205;
};

function shitTonToMetricConvert(shitTon) {
  return shitTon * 5;
};

function metricToShitTonConvert(metricShitTon) {
  return metricShitTon * .2;
};

//Event HANDLERS
function inchToCMHandler(event) {
  var output = parseFloat(inchToCMConvert(event.target.inchToCM.value));
  document.getElementById('displayInchToCM').textContent = event.target.inchToCM.value + ' inch equals ' + output + 'cm.';
};

function cmToInchHandler(event) { var output = cmToInchConvert(parseFloat(event.target.cmToInch.value));
};

function flozToMLHandler(event) { var output = cmToInchConvert(parseFloat(event.target.flozToML.value));
};

function mlToFLOZHandler(event) { var output = cmToInchConvert(parseFloat(event.target.mlToFLOZ.value));
};

function milesToKMHandler(event) { var output = milesToKMConvert(parseFloat(event.target.milesToKM.value));
};

function kmToMilesHandler(event) { var output = kmToMilesConvert(parseFloat(event.target.kmToMiles.value));
};

function lbsToKGHandler(event) { var output = lbsToKGConvert(parseFloat(event.target.lbsToKG.value));
};

function kgToLBSHandler(event) { var output = kgToLBSConvert(parseFloat(event.target.kgToLBS.value));
};

function shitTontoMetricHandler(event) { var output = shitTonToMetricConvert(parseFloat(event.target.shitTonToMetric.value));
};

function metricToShitTonHandler(event) { var output = metricToShitTonConvert(parseFloat(event.target.metricToShitTon.value));
};

//Event LISTENERS
inchToCM.addEventListener('submit', inchToCMHandler);
cmToInch.addEventListener('submit',cmToInchHandler);
flozToML.addEventListener('submit',flozToMLHandler);
mlToFLOZ.addEventListener('submit', mlToFLOZHandler);
milesToKM.addEventListener('submit', milesToKMHandler);
kmToMiles.addEventListener('submit', kmToMilesHandler);
lbsToKG.addEventListener('submit', lbsToKGHandler);
kgToLBS.addEventListener('submit', kgToLBSHandler);
shitTonToMetric.addEventListener('submit', shitTontoMetricHandler);
metricToShitTon.addEventListener('submit', metricToShitTonHandler);

x.addEventListener('', )
