import React from 'react'
import strelka from '../img/strelka.png'    

const Navbar2 = () => {
    const handleClick = () => {
        window.location.assign('http://localhost:3000/main');
    }
  return (
    <div className="navbar_3">
      <img onClick={() => handleClick()} src={strelka} alt="back" className="back"/>
    </div>
  )
}

export default Navbar2
