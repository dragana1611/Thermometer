let formCtoF = document.querySelector('#formCtoF');
console.log(formCtoF);
let inpCelsius = document.querySelector('#inpCelsius');
let pCtoF = document.querySelector('#pCtoF');
let pCtoK = document.querySelector('#pCtoK');

let formFtoC = document.querySelector('#formFtoC');
let inpFahrenheit = document.querySelector('#inpFahrenheit');
let pFtoC = document.querySelector('#pFtoC');
let pFtoK = document.querySelector('#pFtoK');

let formKtoC = document.querySelector('#formKtoC');
let inpKelvin = document.querySelector('#inpKelvin');
let pKtoC = document.querySelector('#pKtoC');
let pKtoF = document.querySelector('#pKtoF');

formCtoF.addEventListener('submit', elem => {
    elem.preventDefault();
    let celsius = parseFloat (inpCelsius.value);
    let fahrenheit = 9 / 5 * (parseFloat (celsius)) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    let kelvin = parseFloat(celsius) + 273.15;
    kelvin = kelvin.toFixed(2);
    
    pCtoF.innerHTML = `${fahrenheit} [&deg;F] `;
    pCtoK.innerHTML = `${kelvin} [K]`;

    //formCtoF.reset();
});

formFtoC.addEventListener('submit', elem => {
    elem.preventDefault();
    let fahrenheit = parseFloat (inpFahrenheit.value);
    let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
    celsius = celsius.toFixed(2);
    let kelvin = ((parseFloat(fahrenheit) - 32) * 5 / 9) + 273.15;
    kelvin = kelvin.toFixed(2);
    
    pFtoC.innerHTML = `${celsius} [&deg;C] `;
    pFtoK.innerHTML = `${kelvin} [K]`;

    //formFtoC.reset();
});

formKtoC.addEventListener('submit', elem => {
    elem.preventDefault();
    let kelvin = parseFloat (inpKelvin.value);
    let celsius = parseFloat(kelvin) - 273.15;
    celsius = celsius.toFixed(2);
    let fahrenheit = 9/5 * (parseFloat(kelvin)-273.15) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    
    pKtoC.innerHTML = `${celsius} [&deg;C] `;
    pKtoF.innerHTML = `${fahrenheit} [&deg;F]`;

    //formKtoC.reset();
});
