let numbers = [];

for (i = -10; i <=10 ; i++) {
    numbers.push(i);
}

document.getElementById('array').innerHTML = 'Массив : ' + numbers;

const positiveNumbers = numbers.filter(function (number) {
    return number > 0;
});

for (let i =0 ; i<positiveNumbers.length; i++) {
    positiveNumbers[i] =  positiveNumbers[i]* positiveNumbers[i];
}

positiveNumbers.sort((a, b) => b - a);

document.getElementById('newArray').innerHTML = 'Отсортивованный массив: ' + positiveNumbers;
console.log  (positiveNumbers);