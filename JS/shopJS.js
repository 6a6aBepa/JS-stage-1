//Стыриный шоп

let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
let PRICES = [100, 120, 1000, 15, 18]
let IDS = [0, 1, 2, 3, 4]

let products = []

function createProductsDTO() {
    let length = IDS.length

    for (let i = 0; i < length; i++) {
        products.push(createProduct(i))
    }
}

function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        id_product: IDS[index]
    }
}

//Функционал корзины

/*До конца не понял задания (где брать данные для корзины), если products можно назвать корзиной
то функция подсчета суммы стоимости ниже.
Должен быть массив с корзиной, в который по клику через arr.push добавляется товар

*/

let basket = [...products]                      //Должен быть в функции пдсчета стоимости

function countBasketPrice() {                   //Работает после запуска createProductsDTO()
    let sumBasket = 0
    for (let i = 0; i < products.length; i++) { //тут должна быть длина массива корзины
        sumBasket += products[i].price          //тут подсчет стоимости товара в массиве корзины 
    }
    return console.log(sumBasket)
}