function select_location() {
    update_theme()
}

function select_weather() {
    update_theme()
}

function update_theme() {
    let location = document.getElementById("location");
    let weather = document.getElementById("weather");

    let theme = location.value + "_" + weather.value;

    document.documentElement.dataset.theme = theme;
    
    localStorage.setItem('theme', theme);
}

function init() {
    let theme = localStorage.getItem('theme');
    document.documentElement.dataset.theme = theme;
}

init();