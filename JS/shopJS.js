//Стыриный шоп

let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'Phones', 'Router', 'USB-camera', 'Gamepad']
let PRICES = [100, 120, 1000, 15, 18, 25, 30, 18, 24]
let IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

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
createProductsDTO()

//Функционал корзины

/*До конца не понял задания (где брать данные для корзины), если products можно назвать корзиной
то функция подсчета суммы стоимости ниже.
Должен быть массив с корзиной, в который по клику через arr.push добавляется товар

*/


//Работает после запуска createProductsDTO()
function countBasketPrice() {
    let basket = [...products] //Должен быть в функции пдсчета стоимости
    let sumBasket = 0
    for (let i = 0; i < products.length; i++) { //тут должна быть длина массива корзины
        sumBasket += products[i].price //тут подсчет стоимости товара в массиве корзины 
    }
    return console.log(sumBasket)
}
createProductsDTO()

function basket() {
    let myBasket = []


}

let myProject = document.querySelector("#container")

function header() {
    let header = document.createElement("header")
    let logo = document.createElement("a")
    let formSearch = document.createElement("form")
    let inputSearch = document.createElement("input")
    let inputSubmit = document.createElement("input")
    let basketHeade = document.createElement("button")

    logo.classList.add("logo")
    formSearch.classList.add("formSearch")
    inputSearch.classList.add("inputSearch")
    inputSubmit.classList.add("inputSubmit")
    basketHeade.classList.add("basketHeader")

    logo.setAttribute("href", " ")
    inputSubmit.setAttribute("type", "submit")
    inputSubmit.setAttribute("value", " ")
    logo.innerText = "e-shop"
    basketHeade.innerText = "Корзина"

    header.appendChild(logo)
    header.appendChild(basketHeade)
    header.appendChild(formSearch)
    formSearch.appendChild(inputSearch)
    formSearch.appendChild(inputSubmit)
    myProject.appendChild(header)
}
header()

function catalog() {
    let catalogAmount = PRODUCTS_NAMES.length
    for (let i = 0; i < catalogAmount; i++) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        let p = document.createElement("p")
        let a = document.createElement("a")
        let buyButton = document.createElement("a")

        div.classList.add("catalog-section")
        p.classList.add("price")
        img.classList.add("img-product")
        a.classList.add("product-href")
        buyButton.classList.add("buy")

        a.innerText = PRODUCTS_NAMES[i]
        a.setAttribute("href", " ")
        buyButton.setAttribute("onclick", "basket()")
        buyButton.setAttribute("href", " ")
        p.innerHTML = PRICES[i] + " $"
        img.setAttribute("src", "http://placehold.it/200x150")
        buyButton.innerText = "Купить"

        div.appendChild(img)
        div.appendChild(a)
        div.appendChild(p)
        div.appendChild(buyButton)
        myProject.appendChild(div)


    }
}

catalog()