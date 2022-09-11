// https://www.omnicalculator.com/finance/gdp-growth

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GDPgrowthRadio = document.getElementById('GDPgrowthRadio');
const GDPinthecurrentperiodRadio = document.getElementById('GDPinthecurrentperiodRadio');
const GDPinthepreviousperiodRadio = document.getElementById('GDPinthepreviousperiodRadio');

let GDPgrowth;
let GDPinthecurrentperiod = v1;
let GDPinthepreviousperiod = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GDPgrowthRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP in the current period';
  variable2.textContent = 'GDP in the previous period';
  GDPinthecurrentperiod = v1;
  GDPinthepreviousperiod = v2;
  result.textContent = '';
});

GDPinthecurrentperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP growth';
  variable2.textContent = 'GDP in the previous period';
  GDPgrowth = v1;
  GDPinthepreviousperiod = v2;
  result.textContent = '';
});

GDPinthepreviousperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP growth';
  variable2.textContent = 'GDP in the current period';
  GDPgrowth = v1;
  GDPinthecurrentperiod = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GDPgrowthRadio.checked)
    result.textContent = `GDP growth = ${computeGDPgrowth().toFixed(2)}`;

  else if(GDPinthecurrentperiodRadio.checked)
    result.textContent = `GDP in the current period = ${computeGDPinthecurrentperiod().toFixed(2)}`;

  else if(GDPinthepreviousperiodRadio.checked)
    result.textContent = `GDP in the previous period = ${computeGDPinthepreviousperiod().toFixed(2)}`;
})

// calculation

function computeGDPgrowth() {
  return ((Number(GDPinthecurrentperiod.value) - Number(GDPinthepreviousperiod.value)) / Number(GDPinthepreviousperiod.value)) * 100;
}

function computeGDPinthecurrentperiod() {
  return ((Number(GDPgrowth.value) / 100) * Number(GDPinthepreviousperiod.value)) + Number(GDPinthepreviousperiod.value);
}

function computeGDPinthepreviousperiod() {
  return Number(GDPgrowth.value) / Number(GDPinthecurrentperiod.value);
}