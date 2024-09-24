function stringStatistics(str) {
    let letters = 0, digits = 0, others = 0;
    for (let char of str) {
        if (/[a-zA-Zа-яА-Я]/.test(char)) letters++;
        else if (/\d/.test(char)) digits++;
        else others++;
    }
    return { letters, digits, others };
}

console.log(stringStatistics("Пример строки 123!"));

function numberToWords(num) {
    const tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    const ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    if (num < 10 || num > 99) return "Число должно быть двузначным";
    return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`.trim();
}

console.log(numberToWords(35)); 

function swapCaseAndDigits(str) {
    return str.split('').map(char => {
        if (/[a-z]/.test(char)) return char.toUpperCase();
        if (/[A-Z]/.test(char)) return char.toLowerCase();
        if (/\d/.test(char)) return '_';
        return char;
    }).join('');
}

console.log(swapCaseAndDigits("Hello123")); 

function toCamelCase(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(toCamelCase("font-size")); 


function toCamelCase(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(toCamelCase("font-size")); 


function toAbbreviation(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}

console.log(toAbbreviation("cascading style sheets"));


function joinStrings(...strings) {
    return strings.join(' ');
}

console.log(joinStrings("Hello", "world", "!")); 


function calculator(expression) {
    const [num1, operator, num2] = expression.split(' ');
    const a = parseFloat(num1), b = parseFloat(num2);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Неверный оператор";
    }
}

console.log(calculator("10 + 5")); 


function parseUrl(url) {
    const parser = new URL(url);
    return `Протокол: ${parser.protocol}, Домен: ${parser.hostname}, Путь: ${parser.pathname}`;
}

console.log(parseUrl("https://itstep.org/ua/about")); 



function splitString(str, delimiter) {
    let result = [], current = "";
    for (let char of str) {
        if (char === delimiter) {
            result.push(current);
            current = "";
        } else {
            current += char;
        }
    }
    if (current) result.push(current);
    return result;
}

console.log(splitString("10/08/2020", "/"));


function print(template, ...args) {
    return template.replace(/%(\d+)/g, (match, index) => args[index - 1]);
}

console.log(print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020)); 

