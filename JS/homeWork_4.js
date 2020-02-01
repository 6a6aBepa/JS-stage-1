/*Написать функцию, преобразующую число в объект. Передавая на вход
число от 0 до 999, надо получить на выходе объект, в котором в
соответствующих свойствах описаны единицы, десятки и сотни. Например,
для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4,
‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.
*/

//Не пришло в голову как первое задание разбить на несколько функций 

function getNumbersToObject(value) {
    let obj = {}
    if (value < 0 || value > 999) {
        console.log("Нужно ввести число от 0 до 999")
    }
    else if (value < 10) {
        obj.Number = value
        obj.Decades = 0
        obj.Hundred = 0

    }
    else if (value < 100) {
        obj.Number = value - Math.floor(value / 10) * 10
        obj.Decades = Math.floor(value / 10)
        obj.Hundred = 0
    }
    else {
        obj.Number = value - Math.floor(value / 10) * 10
        obj.Decades = Math.floor((value / 100 - Math.floor(value / 100)) * 10)
        obj.Hundred = Math.floor(value / 100)
    }
    return obj
}

//Немного подумав пришел к такому решению

function getObj(value) {
    if (value < 0 || value > 999) {
        return console.log("Введите число от 0 до 999")
    }
    return {
        Number: value - Math.floor(value / 10) * 10,
        Decades: Math.floor((value / 100 - Math.floor(value / 100)) * 10),
        Hundred: Math.floor(value / 100)
    }
}




