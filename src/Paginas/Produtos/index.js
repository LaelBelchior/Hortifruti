import React, { useState, useEffect } from 'react'
import Fruta from '../../Componentes/cardFruta'
import Container from '@material-ui/core/Container'

export default function Produtos(){

    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        
        

    })

    return(
        <Container>
            {

                frutas.map(
                    fruta => <Fruta 
                    genero={fruta.genus}
                    nome={fruta.name}
                    familia={fruta.family}
                    ordem={fruta.order}
                    carboidratos={fruta.nutritions.carbohydratesa}
                    proteinas={fruta.nutritions.protein}
                    gorduras={fruta.nutritions.fat}
                    calorias={fruta.nutritions.calories}
                    acucares={fruta.nutritions.sugar}/>
                )

            }
        </Container>
    )
 
}