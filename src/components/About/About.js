import React from 'react';
import './About.css';

import Education from '../../assets/images/education.png';
import Desktop from '../../assets/images/desktop.png';
import Place from '../../assets/images/place.png';
import SertificateFirst from '../../assets/images/SertificateFirst.JPG';
import SertificateSecond from '../../assets/images/SertificateSecond.JPG';
import SertificateThird from '../../assets/images/SertificateThird.JPG';
import shown from '../../assets/images/shown.png';

import Email from '@material-ui/icons/AlternateEmail';


const about = () => {
    return (
        <div className="about">
            
            <div className="about__container">
                
                <h3 className="about__title-category">Обо мне</h3>
                <p className="about__text">Всем привет! Меня зовут Анастасия Бронникова.</p>
                <p className="about__text">Я начинающий фронтенд-разработчик из Санкт-Петербурга. Основным инструментом в работе является google :) А если серьезно, то я использую библиотеку React.js, классы именую по БЭМ-методологии. Умею верстать адаптивно и кроссбраузерно.</p>
                <p className="about__title">Высшее образование</p>
                <p className="about__text">СПбГУ, <a href="http://www.apmath.spbu.ru/ru/" className="about__text--undeline">факультет прикладной математики - процессов управления</a></p>
                <div className="about__image-container">
                    <img className="about__image" src={Education} alt="образование"/>
                    <p className="about__text about__text--company">Магистр</p>
                    <p className="about__text">2015 - 2017</p>
                </div>
                <div className="about__image-container">
                    <img className="about__image" src={Education} alt="образование"/>
                    <p className="about__text about__text--company">Бакалавр</p>
                    <p className="about__text">2011 - 2015</p>
                </div>

                <div className="about__education">
                    <div>
                        <p className="about__title">Дополнительное образование</p>
                        <p className="about__text">Грант на профессию "Фронтенд-разработчик" в <a href="https://htmlacademy.ru/" className="about__text about__text--undeline">HTML academy</a></p>
                        <div className="about__image-container">
                            <img className="about__image-desktop" src={Desktop} alt="доп. образование"/>
                            {/* <p className="about__text about__text--color">Фронтенд-разработчик</p> */}
                            <p className="about__text about__text--company">Фронтенд-разработчик</p>
                            <p className="about__text">август 2017 - январь 2018</p>
                        </div>
                    </div>
                    <div className="about__sertificate">
                        {/* <ul className="about__list">
                            <li className="about__item">                          
                                <p className="about__text">Базовый HTML и CSS</p>
                            </li>
                            <li>
                                <p className="about__text">Продвинутый HTML и CSS</p>
                            </li>
                            <li>
                                <p className="about__text">Базовый JavaScript</p>
                            </li>
                        </ul> */}
                        <ul className="about__list--horizontal">
                            <li>
                                <a className="about__sert-link" href="https://assets.htmlacademy.ru/certificates/intensive/43/419959.pdf">
                                    <img className="about__image-sert" src={SertificateFirst} alt="сертификат"/>
                                    <img className="about__image-sert--shown" src={shown} alt="значок"/>
                                    {/* <div className="about__image-sert--shown"/> */}
                                </a>
                            </li>
                            <li>
                                <a className="about__sert-link" href="https://assets.htmlacademy.ru/certificates/intensive/47/419959.pdf">
                                    <img className="about__image-sert" src={SertificateSecond} alt="сертификат"/>
                                    <img className="about__image-sert--shown" src={shown} alt="значок"/>
                                    {/* <div className="about__image-sert--shown"/> */}
                                </a>
                            </li>
                            <li>
                                <a className="about__sert-link" href="https://assets.htmlacademy.ru/certificates/intensive/55/419959.pdf">
                                    <img className="about__image-sert" src={SertificateThird} alt="сертификат"/>
                                    <img className="about__image-sert--shown" src={shown} alt="значок"/>
                                    {/* <div className="about__image-sert--shown"/> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="about__title">Место работы</p>
                <p className="about__text">ООО <a href="https://www.reksoft.com/ru/" className="about__text about__text--undeline">"Рексофт"</a></p>
                <div className="about__image-container">
                    <img className="about__image-desktop" src={Place} alt="место работы"/>
                    <p className="about__text about__text--company">Фронтенд-разработчик</p>
                    <p className="about__text">май 2018 - настоящее время</p>
                </div>

                <p className="about__text">ООО <a href="https://www.luxoft.ru/" className="about__text about__text--undeline">"Люксофт Профешнл"</a></p>
                <div className="about__image-container">
                    <img className="about__image-desktop" src={Place} alt="место работы"/>
                    <p className="about__text about__text--company">Стажер-аннотатор видеоданных</p>
                    <p className="about__text">июль - сентябрь 2017</p>
                </div>

                <div className="about__contacts">
                    <div className="about__contacts-item">
                        <Email fontSize="large"/>
                        <p className="about__text--left"><a className="about__link" href="mailto:a-sirion@yandex.ru">a-sirion@yandex.ru</a></p>
                    </div>
                </div>
            </div>

            {/* <div className="contacts__container"> */}
                
            {/* </div> */}
        </div>
    )
}

export default about;