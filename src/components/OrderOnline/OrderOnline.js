import React from 'react'
import Navigation from '../Navigation/Navigation'


function handleClick() {
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  const startBtn = document.querySelector('.btn')
  startBtn.classList.add('hide')
  question.innerHTML = 'What would you like to order?'
  const answers = ['Cupcakes', 'Cakes', 'Cookies']
  answers.forEach(answer => {
    const answerBtn = document.createElement('button')
    answerBtn.classList.add('btn')
    answerBtn.innerHTML = answer
    answerBtn.value = answer
    answersDiv.appendChild(answerBtn)
    answerBtn.addEventListener('click', handleChange)
  })

}

let order = {
  item: '',
  flavor: '',
  quantity: 0,
  date: "",
  solidIcingColor: '',
  icingType: ''
}

function handleChange(e) {
  if (e.target.value === 'Cupcakes') {
    const item = e.target.value
    order.item = item
    cupcakes()
  } else if (e.target.value === 'Cakes') {
    console.log('Cakew')
  } else if (e.target.value === 'Cookies') {
    console.log('Cookies')
  }
}

function handleFlavor(e) {
  if (e.target.value === 'Vanilla') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Chocolate') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Red Velvet') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Double Chocolate Chip') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Mint Chocolate Chip') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Lemon') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  } else if (e.target.value === 'Strawberry Cream') {
    const flavor = e.target.value
    order.flavor = flavor
    handleQuantity()
  }
}

function handleQuantity() {
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  question.innerHTML = "How many cupcakes do you need?"
  answersDiv.innerHTML = ""
  const quantity = ['1/2 Dozen', '1 Dozen', '2 Dozen', '3 Dozen', '4 Dozen', '5 Dozen',]
  quantity.forEach(q => {
    const quantityBtn = document.createElement('button')
    quantityBtn.classList.add('btn')
    quantityBtn.innerHTML = q
    quantityBtn.value = q
    answersDiv.appendChild(quantityBtn)
    quantityBtn.addEventListener('click', handleDate)
  })
}


function kindOfIcing() {
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  const inputValue = document.getElementById('date').value
  order.date = inputValue
  question.innerHTML = 'What design will be going on your cupcakes?'
  answersDiv.innerHTML = ''
  const design = ['Solid Color', 'Special Design']
  design.forEach(dBtn => {
    const designBtn = document.createElement('button')
    designBtn.classList.add('btn')
    designBtn.innerHTML = dBtn
    designBtn.value = dBtn
    answersDiv.appendChild(designBtn)
    designBtn.addEventListener('click', handleDesign)
  })
}

function handleDesign(e) {
  const design = e.target.value
  if (design === 'Solid Color') {
    const question = document.querySelector('.questionDiv')
    const answersDiv = document.querySelector('.answersDiv')
    question.innerHTML = 'What solid color would you like your cupcakes icing to be?'
    answersDiv.innerHTML = ''
    const icingColor = ['Red', 'Blue', 'Purple', 'Green', 'White']
    icingColor.forEach(colorBtn => {
      const button = document.createElement('button')
      button.classList.add('btn')
      button.innerHTML = colorBtn
      button.value = colorBtn
      answersDiv.appendChild(button)
      button.addEventListener('click', handleSolidColor)
    })
  } else {
    console.log('Special design')
  }
}

function handleSolidColor(e) {
  const color = e.target.value
  order.solidIcingColor = color
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  question.innerHTML = 'What type of icing would you like?'
  answersDiv.innerHTML = ''
  const icingType = ['Cream Cheese', 'Sugar', 'Espresso']
  icingType.forEach(icingTypeBtn => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = icingTypeBtn
    button.value = icingTypeBtn
    answersDiv.appendChild(button)
    button.addEventListener('click', handleIcingType)
  })
}

function handleIcingType(e) {
  const icingType = e.target.value
  order.icingType = icingType
  console.log(order)
}

function cupcakes() {
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  answersDiv.innerHTML = ""
  const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Double Chocolate Chip', 'Mint Chocolate Chip', 'Lemon', 'Strawberry Cream']

  flavors.forEach(flavor => {
    const flavorBtn = document.createElement('button')
    flavorBtn.classList.add('btn')
    flavorBtn.innerHTML = flavor
    flavorBtn.value = flavor
    answersDiv.appendChild(flavorBtn)
    flavorBtn.addEventListener('click', handleFlavor)
  })

  // console.log(e.target.value)
  question.innerHTML = 'What flavor would you like?'
}

function cakes() {

}

function cookies() {

}

function handleDate(e) {
  const quantity = e.target.value
  order.quantity = quantity
  const question = document.querySelector('.questionDiv')
  const answersDiv = document.querySelector('.answersDiv')
  question.innerHTML = "Please enter the date you would like your cupcakes:"
  const input = document.querySelector('dateInput')
  input.classList.remove('hide')
  const inputBtn = document.createElement('button')
  inputBtn.classList.add("btn")
  inputBtn.innerHTML = "Next"
  answersDiv.innerHTML = ""
  answersDiv.appendChild(inputBtn)
  inputBtn.addEventListener("click", kindOfIcing)
}

const OrderOnline = () => {



  return (
    <div>
      <Navigation />
      <div className='flex justify-center mt-10 h-64'>
        <button type="button" className="btn w-3/12 h-3/6 text-6xl" onClick={handleClick}>Place Order</button>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='questionDiv flex justify-center mb-10 text-4xl text-purple-600 ffLobsterTwo'></div>
        <div className='answersDiv flex justify-center'>
          <input id='dateInput' className='hide order-input'></input>
        </div>
      </div>
    </div>
  )
}


export default OrderOnline