import React from 'react'
import ShoppingCartItem from '../components/ShoppingCartItem'
import '../styles/containers/ShoppingCart.scss'

const ShoppingCart = () => {
  return (
  <aside className="shoppingCart">
    <div className="titleContainer">
      <img src="../../public/assets/icons/arrow.svg" alt="arrow" />
      <p className="title"> Shooping cart </p>
    </div>
    <div class="myOrderContent">
      <ShoppingCartItem />
      <div className="order">
        <p>
          <span> Total </span>
        </p>
        <p> $560  </p>
      </div>
      <button className="primaryButton">
        Checkout
      </button>
    </div>
  </aside>
  )
}

export default ShoppingCart