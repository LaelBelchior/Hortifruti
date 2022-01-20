import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Routes from './Routes'

class App extends Component{

  render(){

    return(
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
