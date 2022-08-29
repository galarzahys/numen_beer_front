import React from 'react'
import './button.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
  const {type, text, onClick, className} = props;

  return (
    <Link to="/e-Shop">
      <button type={type} onClick={onClick} className={className}>{text}</button>
    </Link>
  )
}

export default Button


  