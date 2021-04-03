import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './navbar'
const Registr = () => {
  return (
    <div>
        <Navbar/>
        <div className="Login">
            <h1 className="title">Регистрация</h1>
            <form>
                <input className="input" name="Name" placeholder="Имя" /><br/>
                <input className="input" name="E-mail" placeholder="E-mail" /><br/>
                <input className="input" name="password" placeholder="Пароль" /><br/>
                <button className="btn" type="submit">Отправить</button>
            </form>
                <div className="info">
                    <nav>
                        <ul>
                            <li>
                                <h5>Если ты уже не снами, то скорей сюда - <br/><Link to="/"><span id="reg">Вход</span></Link></h5>   
                            </li>
                        </ul>
                    </nav> 
                    </div>
                </div>
            <form/>
        <div className="for_users2">
             <p>2020 <br/>
             все права защищены 
             </p>
         </div>
    </div>
      
    
  )
}

export default Registr
