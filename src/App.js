import React from 'react'
import './App.css'

const App = () => {

  const date = new Date()
  let year = 2021
  let nextBirthday = new Date('7/9/' + year)

  while (nextBirthday.getTime() < date.getTime()) {
    year++
    nextBirthday = new Date('7/9/' + year)
  }

  let difference = nextBirthday.getTime() - date.getTime()
  let days = Math.ceil(difference / (1000 * 3600 * 24))
  const currentYear = date.getFullYear()
  const birthDate = 1971
  let numberOfYears

  if (date.getMonth() < 6) {
    numberOfYears = currentYear - birthDate - 1
  } else if (date.getMonth() === 6 && date.getDate() < 9) {
    numberOfYears = currentYear - birthDate - 1
  } else numberOfYears = currentYear - birthDate

  return (
    <div className="App">
      { (date.getMonth() === 6 && date.getDate() === 9)
      ? <h1>BOLDOG { numberOfYears }. SZÜLINAPOT!!!</h1>
      : <h2>Már csak { days } nap van hátra a következő születésnapodig...</h2> }
    </div>
  )
}

export default App
