import React from 'react'
import Container from '@material-ui/core/Container'

import './style.css'

export default function Carrinho ({route}){
    
    return(

        <Container>
           {console.log(route.params)}
        </Container>

    )
}