const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
               <li>
                   <img src=${product.src}>
                   <p>${product.name}</p>
                   <p class="item-price">R$ ${product.price}</p>
               </li>
           `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    // Corrigi a referência da variável aqui
    showAll(newPrices)
}

function sumAllItems() {
    // Aqui estamos assumindo que `menuOptions` é um array de objetos que contém uma propriedade `price`.
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)

    console.log(totalValue)
    // Mostrar total em algum lugar, se necessário
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)



