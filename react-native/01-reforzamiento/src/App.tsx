import React from 'react'
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';
// import { Contador } from './components/Contador';
// import { ContadorConHook } from './components/ContadorConHook';
import { Login } from './components/Login';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <a href="https://drive.google.com/drive/folders/1DlXLxoXCUZNZa-P3TA3P8kqeIln3NiIC" target="_blank" rel="noopener noreferrer">Curso Reac Native en Drive de Mariano Menchon</a>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      <Login />
    </div>
  )
}
export default App;