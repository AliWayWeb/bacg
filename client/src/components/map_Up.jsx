import React from 'react'
import Navbar2 from './navbar2'

const UpMap = () => {
      return (
        <div>
            <Navbar2/>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af02b063c87baedc991b6a58e646877de36a8c5a0458b3af362feeb6bbf75c0ae&amp;source=constructor" width="375" height="300" frameborder="0"></iframe>
            <div id="form_up">
                <form  id="form_up2">
                    <input className="input_3" name="мЕСТО" placeholder="Тип проблемы" /><br/>
                    <input className="input_3" name="мЕСТО" placeholder="Номер телефона" /><br/>
                    <textarea className="input_2" name="password" placeholder="Описание проблемы" /><br/>
                    <button className="btn2" type="submit">Отправить</button>
                </form>
            </div>
        </div>
      )
    }

export default UpMap
