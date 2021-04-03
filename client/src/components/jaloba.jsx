import React from 'react'
import strelka2 from '../img/strelka2.png'    
import Navbar2 from './navbar2'

const Jaloba = () => {
    const JalobaHandler = () => {
        window.location.assign('http://localhost:3000/evidence');
    }
  return (
    <div>
        <Navbar2/>
        <div className="jaloba2">
            <div className="offer">
                <p>
                    Одно приложение, 
                    много решениии
                </p>
            </div>
            <h3>Выберите категорию</h3>
            <div className="menu_jaloba">
                <div onClick={JalobaHandler} className="menu_jaloba_1">
                    <h4>Эконарушение <img src={strelka2} alt="back"/></h4>
                </div>
                <div onClick={JalobaHandler} className="menu_jaloba_2">
                    <h4>Нарушение ПДД <img src={strelka2} alt="back"/></h4>
                </div>
                <div onClick={JalobaHandler} className="menu_jaloba_3">
                    <h4>Личная проблема <img src={strelka2} alt="back"/></h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jaloba
