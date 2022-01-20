import React from 'react'
import './style.css'

export default function Fruta(props){    

    return(
        <div id='card-fruta'>
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
        </div>

    )

}