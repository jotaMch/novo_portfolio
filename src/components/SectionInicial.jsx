import React from 'react';
import CvDocx from "../assets/curriculo_Janderson.docx";
import { BiChevronDown } from "react-icons/bi";
/* import { AiOutlineAlert } from "react-icons/ai"; */

function SectionInicio() {
    return (
        <div id='home' className='flex-inicio'>
            <div className='name-text'>
                <h1 style={{ fontFamily: 'Sarabun, sem serifa',fontWeight: 200,}}>
                    Desenvolvedor <span style={{ fontFamily: 'Sarabun, sem serifa'}}className='destaque-color'>Front-end</span> 
                </h1>
                    <p>
                        Desenvolvendo experiências digitais 
                        e interativas para transformar ideias 
                        em realidade.
                    </p>
                    {/* <p style={{color: 'red', fontSize: 16}}> Portfólio está sendo atualizado < AiOutlineAlert /> </p>    */}
                    <div>
                        
                        <span class="icon">
                            <BiChevronDown />
                        </span>
                        
                    </div>
            </div>

        </div>
    )
}

export default SectionInicio;