import React, { useState, useEffect } from 'react'
import Fruta from '../../Componentes/cardFruta'
import {Button} from "@material-ui/core"
import {Link} from 'react-router-dom'

import './style.css'

export default function Produtos(){

    const [frutas, setFrutas] = useState([])
    const [carrinho, setCarrinho] = useState([])

    useEffect(async () => {
        
        const response = await fetch('https://www.fruityvice.com/api/fruit/all')
        const data = await response.json()

        setFrutas(data)

    }, [])

    function handleItems(id, quantidade) {
        
        const frutaProCarrinho = frutas.find(fruta => fruta.id == id)
        const carro = carrinho
        for(let i = 0; i < quantidade; i++){
            carro.push(frutaProCarrinho)
        }

        setCarrinho(carro)

    }

    return(
        <div id='produtos'>
            <div id='listagem'>
                {
                    frutas.map(
                        fruta =>
                            <div key={fruta.id}>
                                <Fruta
                                genero={fruta.genus}
                                nome={fruta.name}
                                familia={fruta.family}
                                ordem={fruta.order}
                                carboidratos={fruta.nutritions.carbohydrates}
                                proteinas={fruta.nutritions.protein}
                                gorduras={fruta.nutritions.fat}
                                calorias={fruta.nutritions.calories}
                                acucares={fruta.nutritions.sugar}/>
                                <div id='botoes'>
                                    
                                    <label>Quantidade:</label>
                                    <input 
                                        type='number'
                                        min='0'
                                        max='10'
                                        id={`quantidade${fruta.id}`}
                                        className='botao-quantidade'
                                    >   
                                    </input>
                                    <input 
                                        type='submit' 
                                        value='Adicionar ao carrinho' 
                                        id='botao-incluir'
                                        onClick={() => handleItems(fruta.id, document.getElementById(`quantidade${fruta.id}`).value)}
                                    >
                                    </input>
                                    
                                </div>
                            </div>   
                    )                       
                }
            </div>
            <div id='botao-finalizar-div'>
                <Link to='/carrinho'>
                <Button type='submit' 
                variant='contained' 
                color='primary' 
                id='botao-finalizar'
                >Finalizar</Button>
                </Link>
            </div>
        </div>
    )
}