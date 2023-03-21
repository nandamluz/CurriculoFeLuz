import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import jobs from '@/src/mock'
import { FaAngleDoubleRight } from 'react-icons/fa'
import api from "./api/api"
import { useState,useEffect } from 'react';
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'


export default function Home() {
    const [companySelected, setCompanySelected] = useState(jobs[0])

    
  
/*   useEffect(() => {
    setCompanySelected(jobs[0])
  }, []) */
  
  return (
    <section className="section0">
    
    <section className="section">
      <MainHeader/>
      <section className="section1">
      <div className="pai"> 
      <div className="title1">
        <h7>Olá, eu sou a Fernanda Luz!</h7>
        <p>Desenvolvedora Front-end</p>
        
      </div>
      </div> 
      <div className="image">
       <a href='https://github.com/nandamluz'> <img src={"fer4.png"} width="150px"/></a>
      </div>
      </section>
      <div className="title">
        <h2>Sobre</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        
              <button
          
                className={`job-btn2`}
              >
               Resumo
              </button>
            
        </div>
        {/* job info */}
        <article className="job-info">
        <p>Atualmente estou trabalhando em projetos freelancer para adquirir experiência de como é o dia a dia de um
profissional de desenvolvimento, venho estudando e desenvolvendo projetos para portfólio utilizando
principalmente Next, TypeScript, React, React Native, JavaScript, CSS e HTML, desde 2020 e atualmente estou
cursando a minha segunda graduação no curso de Desenvolvimento Web na Universidade Pitágoras para solidificar
o que venho aprendendo sozinha. Sou bacharel em Tradução pela Universidade Federal de Uberlândia e
anteriormente já tive experiências profissionais em áreas administrativas, comerciais e de departamento pessoal,
devido a essa experiência e contato com clientes, consigo ter uma visão ampla da necessidade do usuário e buscar
sempre a melhor solução</p>
        </article>
        
      </div>
      
    
    </section>
    <section className="section">
      <div className="title">
        <h2>Experiência</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
         {jobs.map((item, index) => {

            return (
              <button
                key={item.id}
                onClick={() => setCompanySelected(item)}
                className={`job-btn ${companySelected === item.id && 'active-btn'}`}
              >
               {item.company}
              </button>
            )
          })} 
        </div>
        {/* job info */}
        <article className="job-info">
        { companySelected?.id ? 
          <>
          <div key={companySelected.id}>
            <h3>{companySelected.title}</h3>
            <h4>{companySelected.company}</h4>
           <p className="job-date">{companySelected.dates}</p>
          </div>
        {companySelected.duties.map((duty) => {
            return (
              <div key={duty} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight> <p>{duty}</p>
              </div>
            ) 
          })} 
          </> : null}
        </article>
        
      </div>
      
      
      <a href="https://www.linkedin.com/in/fernanda-morais-520448261//" type="button" className="btn"> + Projetos</a>
      
    </section>
    <section className="section">
     
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
              <button className={`job-btn2`}>
                Formação
                </button>   
        </div>
        {/* job info */}
        <article className="job-info">
        <ul>
          <li><FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>  Desenvolvimento Web – Universidade Pitágoras – Cursando</li>
          <li><FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>  Bacharelado em Tradução – Universidade Federal de Uberlândia – 2016 - 2019</li>
          <li><FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>  Bootcamp GoStack (Front-End) – Rocket Seat – Maio/2021</li>
          <li><FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>  Inglês Avançado - Academia de Línguas - 2013 - 2016</li>
        </ul>
        </article>
        
      </div>
      
    
    </section>
    <section className="section3">
      <div className="title">
        <h2>Tecnologias</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center2">
        {/* btn container */}
       
        {/* job info */}
        <article className="job-info2">
        
          <spam> CSS </spam>
          <spam> HTML </spam>
          <spam> JavaScript </spam>
          <spam> React.Js </spam>
          <spam> Next.Js </spam>
          <spam> React Native </spam>
          <spam>Wordpress </spam> 
          <spam>React Hooks</spam>
          <spam>HTML</spam>
          <spam>Context Api</spam>
          <spam>React Hooks</spam>
          <spam>linux</spam>
          <spam>Responsividade</spam>
          <spam>Redux</spam>
          <spam>Node.Js</spam>
          <spam>Styled Components</spam>
          <spam>Git Flow</spam>
          <spam>React Router</spam>
          <spam>MongoDB</spam>
          <spam>UI|UX Designer</spam>


        </article>
        
      </div>
      
    
    </section>
    <Footer/>
    </section>
  )
}

