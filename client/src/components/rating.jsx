import React from 'react'
import Navbar2 from './navbar2'
import family from '../img/family.png'
import kids from '../img/kids.png'
import pen from '../img/pen.png'
import yung from '../img/yung.png'

const Rating = () => {
    const handleClick = () => {
        window.location.assign('http://localhost:3000/map');
    }
    const handleClick2 = () => {
        window.location.assign('http://localhost:3000/map');
    }
    const handleClick3 = () => {
        window.location.assign('http://localhost:3000/map');
    }
    const handleClick4 = () => {
        window.location.assign('http://localhost:3000/map');
    }
    return (
        <div>
            <Navbar2/>
            <div className="wrapper_rating">
                <div className="navbar2">   
                    <div className="logo_2">
                        <div className="line2"></div>
                        <h1>РеWала</h1>
                        <div className="line2"></div>
                    </div>
                </div>
                <div className="offer2">
                    <p>
                    Узнай насколько комфортно жить тебе в том или ином месте
                    </p>
                </div>
                <div className="menu_block">
                <div className="card_1">
                    <div onClick={() => handleClick()} className="menu_card_1">
                        <img 
                            id="img"
                            src={family}
                            alt="jaloba"
                            className="jaloba"
                        />
                        <p id="title_icon">Семейный</p>
                    </div>
                    <div onClick={() => handleClick2()} className="menu_card_1">
                        <img 
                            src={yung}
                            id="img"
                            alt="jaloba"
                            className="jaloba"
                        />
                        <p id="title_icon">Развлекатель<br/>ный</p>
                    </div>
                </div>
                <div className="card_1">
                    <div onClick={() => handleClick3()} className="menu_card_1">
                        <img 
                            src={pen}
                            id="img"
                            alt="jaloba"
                            className="heart"
                        />
                        <p id="title_icon">Пенсионеры</p>
                    </div>
                    <div onClick={() => handleClick4()} className="menu_card_1">
                        <img 
                            src={kids}
                            id="img"
                            alt="jaloba"
                            className="jaloba"
                        />
                        <p id="title_icon">Общее</p>
                    </div>
                </div>
            
            </div>
            </div>
        </div>
    )
}

export default Rating