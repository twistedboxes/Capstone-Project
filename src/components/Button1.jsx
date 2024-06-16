import React from 'react'
import { Link } from 'react-router-dom'

const Button1 = ({text="Default button text", src}) => {
  return (
    <button className='btn-primary'><Link to={src}>{text}</Link></button>
  )
}

export default Button1
