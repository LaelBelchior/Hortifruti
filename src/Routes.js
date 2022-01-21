import react from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Produtos from './Paginas/Produtos'
import Carrinho from './Paginas/Carrinho'

export default function Routes(){

    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Produtos}/>
                <Route path='/carrinho' component={Carrinho}/>
            </Switch>
        </BrowserRouter>

    )
}