import { useState } from 'react'
import './App.css'
import BaseLayout from '../kayouts/base.layout'
import DigitButton from './components/DigiButton/DigitButton'

function App() {
  const [total, setTotal] = useState(0)
  const [LastOperator, setLastOperator] = useState("")

  function handleInput(e) {
    if (isNaN(e.target.value)) return;

    setTotal(e.target.value)
  }

  const handleDigitClick = (num) => (e) => {

    const newTotalValue = `${total}${num}`
    setTotal(Number(newTotalValue.length === 0 ? 0 : newTotalValue))
    setLastOperator("")

  }

  const handleDigitClear = () => {
    setTotal(0)
    setLastOperator("");
  }


  return (
    <>
      <BaseLayout>
        <div className='calculator_master_ctn'>
          <div className="calculator_ctn">


            <input
              className='calculator_ctn__display_ctn'
              value={total}
              onChange={handleInput}
            />





            <div className='calculator_ctn__buttons_ctn'>

             
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, idx) => (
                <DigitButton
                  key={idx}
                  onClick={handleDigitClick(num)}>

                  {num}

                </DigitButton>
              )
              )}
              {["+", "-"].map((num, idx) =>
                <DigitButton key={idx}>{num}</DigitButton>
              )

              }

              {
                <DigitButton onClick={handleDigitClear}>C</DigitButton>
              }




            </div>

          </div>
        </div>
      </BaseLayout>
    </>
  )
}

export default App
