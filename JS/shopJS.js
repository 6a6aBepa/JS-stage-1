//Стыриный шоп

/*
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
createProductsDTO()*/

//Функционал корзины

/*До конца не понял задания (где брать данные для корзины), если products можно назвать корзиной
то функция подсчета суммы стоимости ниже.
Должен быть массив с корзиной, в который по клику через arr.push добавляется товар

*/


//Работает после запуска createProductsDTO()
/*function countBasketPrice() {
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
*/

//5 Задание ниже
/*
let myProject = document.querySelector("#container")

function header() {
    function name(params) {
        
    }
    
    
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
*/


let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'Phones', 'Router', 'USB-camera', 'Gamepad']
let PRICES = [100, 120, 1000, 15, 18, 25, 30, 18, 24]
let IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function header2() {
    let myProject = document.querySelector("#container")
    myProject.innerHTML =
        `<header class="header">
    <a class="logo" href=" ">e-shop</a>
    <button class="basketHeader">Корзина</button>
    <form class="formSearch">
    <input class="inputSearch">
    <input class="inputSubmit" type="submit" value=" ">
    </form>
    <div class="basket hiden">
    <img src="https://placehold.it/200x150">
            </div>
        
        </header>
        <main class="main-container">
        </main>`


}
header2()


function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        id_product: IDS[index],
        img: 'https://placehold.it/200x150',
        createTemplate() {
            return `
                <div class="catalog-section" data-id="${this.id_product}">
                    <img class="img-product" src="${this.img}" alt="${this.product_name}">
                        <a class="product-href">${this.product_name}</a>
                        <p class="price"> ${this.price} $ </p>
                        <button class="buy"
                            data-id="${this.id_product}"
                            data-name="${this.product_name}"
                            data-price="${this.price}">
                            Купить
                        </button>
                       
                </div>
            `
        }
    }
}
let basket = {}
let catalog = {
    items: [],
    container: ".main-container",
    cart: null,

    init() {
        this._fetchItems()
        this._render()


        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy')) {
                let product = evt.target.dataset
                basket.name = createProduct.id_product

            }
        })
    },

    _fetchItems() {
        let length = IDS.length

        for (let i = 0; i < length; i++) {
            this.items.push(createProduct(i))
        }
    },
    _render() {
        let container = document.querySelector(this.container)
        let domString = ''

        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString
    }
}

catalog.init()




/*function catalog() {
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

catalog()*/