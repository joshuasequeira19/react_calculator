import React from 'react'
import { Button } from '@mui/material'
import './DigitButton.css'

function DigitButton( {children, onClick}) {
  return (
    <Button
        className='digit_button'
        onClick={onClick}
        variant='contained'>

        {children}

    </Button>
  )
}

export default DigitButton