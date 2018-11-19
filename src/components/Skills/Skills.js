import React from 'react';
import './Skills.css';

import html from '../../assets/images/html.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import router from '../../assets/images/router.png';
import gulp from '../../assets/images/gulp.png';
import less from '../../assets/images/less.png';
import git from '../../assets/images/Git.png';
import BEM from '../../assets/images/bem.svg';

import sedona from '../../assets/images/sedona.jpg';
import pink from '../../assets/images/pink.jpg';
import keksobooking from '../../assets/images/keksobooking.jpg';

const skills = () => {
    return (
        <div className="skills">
            
            <div className="skills__container">
                <h3 className="skills__title-category">Портфолио</h3>
                {/* <p className="skills__text">На данный момент основной стек технологий:</p> */}
                <p className="skills__title">Мои навыки</p>
                <ul className="skills__list">
                    <li className="skills__item">
                        <img className="skills__image" src={html} alt="Html"/>
                        <p>HTML+CSS</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={js} alt="JS"/>
                        <p>JavaScript</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={react} alt="React"/>
                        <p>React.js</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={router} alt="Router"/>
                        <p>React-router</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={gulp} alt="Gulp"/>
                        <p>Gulp</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={less} alt="Less"/>
                        <p>Less</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={git} alt="Git"/>
                        <p>Git</p>
                    </li>
                    <li className="skills__item">
                        <img className="skills__image" src={BEM} alt="БЭМ"/>
                        <p>БЭМ</p>
                    </li>
                </ul>
                <p className="skills__title">Мои работы</p>
                <ul className="skills__project-list">
                    <li className="skills__project-item">
                        <p className="skills__project-title">Седона</p>
                        <img className="skills__project-image" src={sedona} alt="Проект"/>
                        
                        <ul className="skills__point-list">
                            <li className="skills__point-item">HTML5</li>
                            <li className="skills__point-item">CSS3</li>
                        </ul>
                    </li>
                    <li className="skills__project-item">
                        <p className="skills__project-title">Пинк</p>
                        <img className="skills__project-image" src={pink} alt="Проект"/>
                        <ul className="skills__point-list">
                            <li className="skills__point-item">HTML5</li>
                            <li className="skills__point-item">CSS3</li>
                            <li className="skills__point-item">Адаптивная верстка</li>
                            
                            <li className="skills__point-item">Gulp</li>
                            <li className="skills__point-item">LESS</li>
                            <li className="skills__point-item">Retina</li>
                            
                        </ul>
                    </li>
                    <li className="skills__project-item">
                        <p className="skills__project-title">Кексобукинг</p>
                        <img className="skills__project-image" src={keksobooking} alt="Проект"/>
                        <ul className="skills__point-list">
                            <li className="skills__point-item">JavaScript</li>
                            <li className="skills__point-item">ES5</li>
                            <li className="skills__point-item">Ajax</li>
                            <li className="skills__point-item">Drag'n'Drop</li>
                            <li className="skills__point-item">IIFE</li>
                            <li className="skills__point-item">Валидация формы</li>
                        </ul>
                    </li>
                    <li className="skills__project-item">
                        <p className="skills__project-title">AnMebel</p>
                        <img className="skills__project-image" src={pink} alt="Проект"/>
                        <ul className="skills__point-list">
                            <li className="skills__point-item">HTML5</li>
                            <li className="skills__point-item">CSS3</li>
                            
                            <li className="skills__point-item">Адаптивная верстка</li>
                            
                            <li className="skills__point-item">Gulp</li>
                            <li className="skills__point-item">LESS</li>
                            <li className="skills__point-item">JavaScript</li>
                            
                        </ul>
                    </li>
                    <li className="skills__project-item">
                        <p className="skills__project-title">Star Wars Explorer</p>
                        <img className="skills__project-image" src={sedona} alt="Проект"/>
                        <ul className="skills__point-list">
                            
                            <li className="skills__point-item">ReactJS</li>
                            <li className="skills__point-item">React-router</li>
                            <li className="skills__point-item">ES6</li>
                            <li className="skills__point-item">OAuth</li>
                            <li className="skills__point-item">CRA</li>
                            <li className="skills__point-item">Анимации</li>
                            
                            <li className="skills__point-item">HATEOAS</li>
                            <li className="skills__point-item">Ajax</li>
                        </ul>
                    </li>
                    <li className="skills__project-item">
                        <p className="skills__project-title">My hobbies</p>
                        <img className="skills__project-image" src={sedona} alt="Проект"/>
                        <ul className="skills__point-list">
                            <li className="skills__point-item">ReactJS</li>
                            <li className="skills__point-item">React-router</li>
                            <li className="skills__point-item">ES6</li>
                            <li className="skills__point-item">CRA</li>
                            
                            
                            <li className="skills__point-item">Drag'n'Drop</li>
                            <li className="skills__point-item">JavaScript</li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default skills;