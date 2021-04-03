import React from 'react'
import Navbar2 from './navbar2'

const DonateMap = () => {
      return (
        <div>
            <Navbar2/>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A52e58caac510da9098461b8a5b3b97cc4dceb4462c0a730ec10a89c64e8f0d72&amp;source=constructor" width="375" height="600" frameborder="0"></iframe>
        </div>
      )
    }

export default DonateMap
