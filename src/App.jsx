import React from 'react';
import './styles/main.css';
import './styles/colorText.css';
import Header from './components/Header';
import SectionInicio from './components/SectionInicial';
import About from './components/About';
import Habilidades from './components/Habilidades';
import Projects from './components/Projects';
import Educacao from './components/Educacao';


function App() {

  return (
    <>
    <div className="app">

          
      <main>
        <div className="container">
          <Header />
          <SectionInicio />
        </div>
      </main>
      <div className="container">
        <section>
          <div className='position-class'>
            <About />
            <Habilidades />
            
            <Educacao />
 
          </div>
        </section>
      </div>
            <Projects />
    </div>
    </>
  )
}

export default App
