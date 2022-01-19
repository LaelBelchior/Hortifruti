import React from 'react'
import Container from '@material-ui/core/Container'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './style.css'

export default function Fruta(props){

    return(

        <Container maxWidth='sm' id='container'>

            <div id='informacoes'>
                <p>{props.genero}</p>
                <p>{props.nome}</p>
                <p>{props.familia}</p>
                <p>{props.ordem}</p>
            </div>
            <div id='nutrientes'>
                <p>{props.carboidratos}</p>
                <p>{props.proteinas}</p>
                <p>{props.gorduras}</p>
                <p>{props.calorias}</p>
                <p>{props.acucares}</p>
            </div>
            <div id='botoes'>
                <IconButton color="secondary">
                    <RemoveIcon />
                </IconButton>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>

        </Container>

    )

}