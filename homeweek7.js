
// btn 1  - afisam vremea acum
document.getElementById("afisVremea").addEventListener("click", () => {
    // step1 - cauta informatii despre vreme
 findWeatherNow()
    // step2 - afiseaza vremea actuala

});
var info;
// variabila pentru numele din search bar
function findWeatherNow() {
    var inputName = document.getElementById("oras").value; 
    var vreme = fetch('https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=' + inputName);
    vreme.then(datele => datele.json()).then((datele => {
        info = datele;
        showWeatherNow();
        return datele;
      }))
}
function showWeatherNow() {
    let grade = document.getElementById('temp');
    grade.innerHTML = 'Temperatura curenta:' + '&nbsp;' +  info.main.temp;
    let descriere = document.getElementById('descriere');
    descriere.innerHTML = 'Descriere:' + '&nbsp;' +  info.weather[0].description;
    let umiditate = document.getElementById('umiditate');
    umiditate.innerHTML = 'Umiditate:' + '&nbsp;' +  info.main.humidity;
    let presiune = document.getElementById('presiune');
    presiune.innerHTML = 'Presiune:' + '&nbsp;' +  info.main.pressure;
    let min = document.getElementById('min');
    min.innerHTML = 'Minima zilei:' + '&nbsp;' +  info.main.temp_min;
    let max = document.getElementById('max');
    max.innerHTML = 'Maxima zilei:' + '&nbsp;' +  info.main.temp_max;
    return info;
}




