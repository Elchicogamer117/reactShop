import React from 'react'
import '@styles/components/Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/"> My order</a>
        </li>
        <li>
          <a href="/"> My account</a>
        </li>
        <li>
          <a href="/"> Sign out</a>
        </li>
      </ul>
    </div>

  )
}

export default Menu
