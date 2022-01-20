import React, { useState, useEffect } from 'react'
import Fruta from '../../Componentes/cardFruta'
import Container from '@material-ui/core/Container'

import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'

import './style.css'

export default function Produtos(){

    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        
        fetch('https://www.fruityvice.com/api/fruit/all')
            .then(res => res.json())
            .then(resultado => setFrutas(resultado))

    })

    return(
        <Container>
            <Header />
                <div id='listagem'>
                    {
                        frutas.map(
                            fruta => <Fruta 
                            genero={fruta.genus}
                            nome={fruta.name}
                            familia={fruta.family}
                            ordem={fruta.order}
                            carboidratos={fruta.nutritions.carbohydrates}
                            proteinas={fruta.nutritions.protein}
                            gorduras={fruta.nutritions.fat}
                            calorias={fruta.nutritions.calories}
                            acucares={fruta.nutritions.sugar}/>
                        )
                    }
                </div>
            <Footer />
        </Container>
    )
 
}