const cities = ['Нью-Йорк','Прага','Ростов','Дубай','Рим'];
let temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите  температуру для города ${cities[i]}`, 0);
    temperatures.push(Number(temperature));

    const div = document.querySelector('#cities');
    const newDiv = document.createElement('div');
    newDiv.textContent = `Температура в ${cities[i]}: ${temperatures[i]} С`;
    div.append(newDiv);
}

console.log (temperatures);

let min = 0;
let max = 0;

for (let i = 0; i < temperatures.length; i++) {
    min = Math.min.apply(null, temperatures);
    max = Math.max.apply(null, temperatures);

    const maxT = document.querySelector('#max');
    maxT.textContent = `Максимальная температура : ${max} C`

    const minT = document.querySelector('#min');
    minT.textContent = `Минимальная температура : ${min} C`
}

