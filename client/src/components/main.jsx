import React from 'react'
import jaloba from '../img/jaloba.png'
import uznat from '../img/uznat.png'
import reyting from '../img/reyting.png'
import info from '../img/info.png'
import heart from '../img/heart.png'
import upgrate from '../img/upgrate.png'

const MainMenu = () => {
    const handleClick = () => {
        window.location.assign('http://localhost:3000/prava');
    }
    const handleClick2 = () => {
        window.location.assign('http://localhost:3000/jaloba');
    }
    const handleClick3 = () => {
        window.location.assign('http://localhost:3000/map');
    }
    const handleClick4 = () => {
        window.location.assign('http://localhost:3000/upsity');
    }
    const handleClick5 = () => {
        window.location.assign('http://localhost:3000/about');
    }
    const handleClick6 = () => {
        window.location.assign('http://localhost:3000/rating');
    }
    const handleClick7 = () => {
        window.location.assign('http://localhost:3000/');
    }
  return ( 
    <div className="main_menu">  
        <div className="navbar2">   
            <div className="logo_2">
                <div className="line2"></div>
                <h1>РеWала</h1>
                <div className="line2"></div>
            </div>
        </div>
        <div className="menu_block">
            <div className="card_1">
                <div onClick={() => handleClick()} className="menu_card_1">
                    <img 
                        src={uznat}
                        alt="jaloba"
                        className="jaloba"
                    />
                    <p>Узнать свои права</p>
                </div>
                <div onClick={() => handleClick2()} className="menu_card_1">
                    <img 
                        src={jaloba}
                        alt="jaloba"
                        className="jaloba"
                    />
                    <p>Жалоба</p>
                </div>
            </div>
            <div className="card_1">
                <div onClick={() => handleClick3()} className="menu_card_1">
                    <img 
                        src={heart}
                        alt="jaloba"
                        className="heart"
                    />
                    <p>Валантеры</p>
                </div>
                <div onClick={() => handleClick4()} className="menu_card_1">
                    <img 
                        src={upgrate}
                        alt="jaloba"
                        className="jaloba"
                    />
                    <p>Улучшить свой город</p>
                </div>
            </div>
            <div className="card_1">
                <div onClick={() => handleClick5()} className="menu_card_1">
                    <img 
                        src={info}
                        alt="jaloba"
                        className="jaloba"
                    />
                    <p>О приложении</p>
                </div>
                <div onClick={() => handleClick6()} className="menu_card_1">
                    <img 
                        src={reyting}
                        alt="jaloba"
                        className="jaloba"
                    />
                    <p>Определить рейтинг города</p>
                </div>
            </div>
        </div>
        <h5 id="logOut" onClick={() => handleClick7()}>Выйти с аккаунта</h5>
    </div>
  )
}

export default MainMenu
