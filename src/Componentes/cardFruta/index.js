import React from 'react'
import Container from '@material-ui/core/Container'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './style.css'

export default function Fruta(props){

    return(

        <Container id='container'>

            <h1>{props.nome}</h1>
            <div id='informacoes'>    
                <p>Gênero: {props.genero}</p>
                <p>Família: {props.familia}</p>
                <p>Ordem: {props.ordem}</p>
            </div>
            <h4>NUTRIENTES</h4>
            <div id='nutrientes'>
                <p>Carbo: {props.carboidratos}</p>
                <p>Proteinas: {props.proteinas}</p>
                <p>Gorduras: {props.gorduras}</p>
                <p>Calorias: {props.calorias}</p>
                <p>Açúcares: {props.acucares}</p>
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