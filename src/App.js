import React, { Component } from 'react'
import Produtos from './Paginas/Produtos'

import Container from '@material-ui/core/Container'

class App extends Component{

  render(){

    return(
      <Container>
        <Produtos />
      </Container>
    )
  }
}

export default App;
