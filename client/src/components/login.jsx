import React from 'react'
import {
  Link
} from "react-router-dom";
import Navbar from './navbar'
const Login = () => {
    const handleClick = () => {
        window.location.assign('http://localhost:3000/main');
    }

  return ( 
    <div>     
        <Navbar />        
        <div className="Login">
            <h1 className="title">Вход</h1>
            <form>
                <input className="input" name="E-mail" placeholder="E-mail" /><br/>
                <input className="input" type="password" name="password" placeholder="Пароль" /><br/>
            </form>
            <button onClick={() => handleClick()} className="btn">Отправить</button>
                <div className="info">
                    <nav>
                        <ul>
                            <li>
                                <h5>Если ты еще не снами, то скорей сюда - <br/><Link to="/registr">Регистрация</Link></h5>   
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        <div className="for_users">
            <p>2020 <br/>
            все права защищены 
            </p>
        </div>
      
        </div>   
  )
}

export default Login
