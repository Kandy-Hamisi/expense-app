// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import BluePrints from './components/BluePrints'
import Categories from './components/Categories'
import Transactions from './components/Transactions'
// import { useSelector } from 'react-redux'

function App() {

  return (
    <div>
      <h1>Hello Expense Tracker</h1>
      <Categories/>
      <Transactions/>
      <BluePrints/>
    </div>
  )
}

export default App
