import React from 'react';
import './Email.css';
import Email from '@material-ui/icons/AlternateEmail';

const email = () => {
    return (
        <div className="contacts">
            
            <div className="contacts__container">
                <h3 className="contacts__title-category">Контакты</h3>
                <p className="contacts__text">Связаться со мной можно любым удобным способом:</p>
                <div className="contacts__item">
                    <Email fontSize="large"/>
                    <p className="contacts__text--left"><a className="contacts__link" href="mailto:a-sirion@yandex.ru">a-sirion@yandex.ru</a></p>
                </div>
            </div>
        </div>
    )
}

export default email;