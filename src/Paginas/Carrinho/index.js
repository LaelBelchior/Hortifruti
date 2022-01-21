import React, { useContext } from 'react'
import Container from '@material-ui/core/Container'
import {AuthContext} from '../../Providers/auth'

import cardCarrinho from '../../Componentes/cardCarrinho'

import './style.css'

export default function Carrinho (){

    const { itens } = useContext(AuthContext)
    
    return(

        <Container>
           
        </Container>

    )
}