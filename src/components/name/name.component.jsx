import React from 'react';
import './name.style.css';
const HeroName = ({hero,id}) => {
  return (
    <>
	<li className='name-list'> <a href={`#${id}`} className="hero-name" >{hero}</a> </li>
    </>
  )
}

export default HeroName