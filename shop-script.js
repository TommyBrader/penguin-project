// Create Products and Basket variables
const products = [
  {
    id: '0',
    name: 'PIP Unisex T-Shirt - Big Logo',
    imagePath: './images/shop-tshirt.jpg',
    price: 11.99,
    basket: 0,
  },
  {
    id: '1',
    name: 'PIP Unisex T-Shirt - Small Logo',
    imagePath: './images/shop-tshirt2.jpg',
    price: 11.99,
    basket: 0,
  },
  {
    id: '2',
    name: 'PIP Mug',
    imagePath: './images/shop-mug.jpg',
    price: 4.99,
    basket: 0,
  },
  {
    id: '3',
    name: 'Penguin Mug',
    imagePath: './images/shop-mug2.jpg',
    price: 4.99,
    basket: 0,
  },
  {
    id: '4',
    name: 'Penguin Snowy Glass',
    imagePath: './images/shop-glass.jpg',
    price: 3.99,
    basket: 0,
  },
  {
    id: '5',
    name: 'Penguin Book',
    imagePath: './images/shop-book.jpg',
    price: 4.99,
    basket: 0,
  },
  {
    id: '6',
    name: 'Miniature Globe',
    imagePath: './images/shop-globe.jpg',
    price: 4.99,
    basket: 0,
  },
  {
    id: '7',
    name: 'Wooden Penguin Ornament',
    imagePath: './images/shop-wood.jpg',
    price: 7.99,
    basket: 0,
  },
  {
    id: '8',
    name: 'Plastic Penguin Ornament',
    imagePath: './images/shop-plastic.jpg',
    price: 6.99,
    basket: 0,
  },
  {
    id: '9',
    name: 'Penguin Toy',
    imagePath: './images/shop-toy.jpg',
    price: 3.99,
    basket: 0,
  },
  {
    id: '10',
    name: 'Penguin Blanket (150x180cm)',
    imagePath: './images/shop-blanket.jpg',
    price: 9.99,
    basket: 0,
  },
  {
    id: '11',
    name: 'Penguin Poster (73x53cm)',
    imagePath: './images/shop-poster.jpg',
    price: 14.99,
    basket: 0,
  },
]

let basketList = []

// Display Products
function showProducts() {
  const productsSection = document.querySelector('#products')

  const basketSection = document.querySelector('#basket')
  const defaultBasket = document.createElement('p')
  defaultBasket.setAttribute('id', 'empty-basket')
  defaultBasket.textContent = 'Your Basket Is Currently Empty'
  basketSection.appendChild(defaultBasket)

  products.forEach((item) => {
    const productArticle = document.createElement('article')
    const productFigure = document.createElement('figure')
    productFigure.classList.add('product')

    const productName = document.createElement('figcaption')
    productName.classList.add('product-name')
    productName.textContent = item.name

    const productImage = document.createElement('img')
    productImage.classList.add('product-image')
    productImage.src = item.imagePath
    productImage.alt = item.name

    const productPrice = document.createElement('figcaption')
    productPrice.classList.add('product-price')
    productPrice.textContent = '£' + item.price.toFixed(2)

    const addToBasket = document.createElement('figcaption')
    addToBasket.classList.add('add-to-basket')
    const addToBasketButton = document.createElement('button')
    addToBasketButton.classList.add('add-to-basket-button')
    addToBasketButton.type = 'button'
    addToBasketButton.textContent = 'Add to Basket'
    addToBasketButton.dataset.id = item.id
    const productID = item.id
    addToBasketButton.addEventListener('click', addToBasketClicked)

    productsSection.appendChild(productArticle)
    productArticle.appendChild(productFigure)
    productFigure.appendChild(productName)
    productFigure.appendChild(productImage)
    productFigure.appendChild(productPrice)
    productFigure.appendChild(addToBasket)
    addToBasket.appendChild(addToBasketButton)
  })
}

// Basket - add, remove and increase quantity
function addToBasketClicked(event) {
  event.preventDefault()
  itemID = event.target.dataset.id
  item = products[itemID]
  for (i=0; i<basketList.length; i++) {
    if (basketList[i] === item.name) {
      alert('Item Already Added To Basket')
      return
    }
  }
  console.log(item.name + ' added to basket')
  const basketSection = document.querySelector('#basket')
  const basketArticle = document.createElement('article')
  const basketFigure = document.createElement('figure')
  basketFigure.classList.add('product-in-basket')

  const basketImage = document.createElement('img')
  basketImage.classList.add('basket-image')
  basketImage.src = item.imagePath
  basketImage.alt = item.name

  const basketProductName = document.createElement('figcaption')
  basketProductName.classList.add('basket-product-name')
  basketProductName.textContent = item.name

  const basketQuantity = document.createElement('input')
  basketQuantity.classList.add('basket-quantity')
  basketQuantity.type = 'number'
  basketQuantity.name = 'quantity'
  basketQuantity.defaultValue = 1
  basketQuantity.min = 1
  let quantity = basketQuantity.value
  basketQuantity.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(item.name + ' Quantity Increased')
    quantity = basketQuantity.value
    basketPrice.textContent = '£' + quantity * item.price
  })

  const basketPrice = document.createElement('figcaption')
  basketPrice.classList.add('basket-price')
  basketPrice.textContent = '£' + quantity * item.price

  const basketRemove = document.createElement('button')
  basketRemove.classList.add('basket-remove')
  basketRemove.type = 'button'
  basketRemove.textContent = 'REMOVE'
  basketRemove.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('Remove Item Clicked')
    basketArticle.innerHTML = ''
  })

  basketSection.innerHTML = ''
  basketFigure.appendChild(basketRemove)
  basketSection.appendChild(basketArticle)
  basketArticle.appendChild(basketFigure)
  basketFigure.appendChild(basketImage)
  basketFigure.appendChild(basketProductName)
  basketFigure.appendChild(basketQuantity)
  basketFigure.appendChild(basketPrice)

  const basketTotalSection = document.querySelector('#basket-total')
  const basketTotalAmount = document.createElement('article')
  basketTotalAmount.setAttribute('id', 'basket-total-amount')

  basketList.push(item.name)
}




// Call Function
showProducts()
