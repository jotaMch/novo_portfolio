import React from 'react';
import Skills from '../assets/skills/index';
import '../styles/Habilidades.css';
import { BiBadgeCheck } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";

function Habilidades() {
    return (
        <div className='experiencia'>
            <h3>Minhas habilidades criativas e experiências </h3>
            <ul className='experiencia__skills'>
                
                <li><img  src={Skills.html} alt="" /><p>HTML</p></li>
                <li><img  src={Skills.css} alt="" /><p>CSS</p></li>
                <li><img  src={Skills.javascript} alt="" /><p>JavaScrip</p></li>
                <li><img  src={Skills.bootstrap} alt="" /><p>Bootstrap</p></li>
                <li><img  src={Skills.jquery} alt="" /><p>Jquery</p></li>
                <li><img  src={Skills.sass} alt="" /><p>SASS</p></li>
                <li><img  src={Skills.less} alt=""/><p>LESS</p></li>
                <li><img  src={Skills.gulp} alt=""/><p>Gulp</p></li>
                <li><img  src={Skills.grunt} alt="" /><p>Grunt</p></li>
                <li><img  src={Skills.react} alt="" /><p>React</p></li>
                
            </ul>
                <div className="border-text">
                    <div className="experiencia__text">
                        <BiChevronsRight/>
                        <p className='experiencia__text--habilidades'>
                        Tenho me dedicado a aprimorar minhas habilidades, 
                        desde os fundamentos sólidos do HTML, CSS e JavaScript, 
                        até frameworks populares como Bootstrap e bibliotecas como jQuery.
                        Faço o uso do pré-processador de CSS, como (SASS / LESS) 
                        organizando e dividindo arquivos, automatização e minificação 
                        de tarefas com Grunt e Gulp, ganhando produtividade e eficiência.
                        Uma metodologia que adotei é o BEM (Block, Element, Modifier), 
                        que me ajuda a organizar e analisar meu código.
                        </p>
                    </div>
                </div>
            <article>
                <h3 className='title-soft'>Soft Skills</h3>
                <div className="flex">
                    <div className="card">
                        <h4 className="card__title">
                            competencia
                        </h4>
                        <BiBadgeCheck  />
                        <p>
                            esse é um exemplo de texto para competencia
                            nos cards inseridos pelo vc code e navegador
                        </p>
                    </div>
                    <div className="card">
                        <h4 className="card__title">
                            competencia
                        </h4>
                        <BiBadgeCheck  />
                        <p>
                            esse é um exemplo de texto para competencia
                            nos cards inseridos pelo vc code e navegador
                        </p>
                    </div>
                    <div className="card">
                        <h4 className="card__title">
                            competencia
                        </h4>
                        <BiBadgeCheck  />
                        <p>
                            esse é um exemplo de texto para competencia
                            nos cards inseridos pelo vc code e navegador
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Habilidades;