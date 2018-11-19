import React from 'react';
import './Hobby.css';
import MultipleItems from '../../containers/MultipleItems/MultipleItems';
import instagram from '../../assets/images/instagram.png';
import smart from '../../assets/images/smart.png';

const hobby = () => {
    return (
        <div className="hobby">
            
            <div className="hobby__container">
                
                <h3 className="hobby__title-category">Хобби</h3>
                <p className="hobby__text">У меня много увлечений, но конкретно сейчас я изучаю векторную графику в онлайн-школе <a href="https://vk.com/pixel_ai" className="hobby__text--undeline">Pixel</a>.</p>
                <p className="hobby__text">Это интересно, вдохновляюще, позволяет выразить свои чувства через творчество. А еще векторные иллюстрации можно использовать на сайтах, то есть применить в профессии!</p>
                
            </div>
            <MultipleItems/>

            <div className="hobby__find-container">
                <p className="hobby__text">Работы также можно посмотреть здесь</p>
                <a className="hobby__link" href="#"><img className="hobby__image" src={instagram} alt="инстаграм"/></a>
                <a className="hobby__link" href="#"><img className="hobby__image" src={smart} alt="смартпрогресс"/></a>
            </div>
        </div>
    )
}

export default hobby;